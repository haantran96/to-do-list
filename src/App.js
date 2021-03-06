import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks : [], //id, task_name,status
            isDisPlayForm: true,
            taskEditing : null,
            filter : {
                name : '',
                status : -1
            },
            keyword : '',
            sortBy : 'name',
            sortValue : 1
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            })
        }
    }
    
    s4() {
        return Math.floor((1*Math.random())* 0x10000).toString(16).substring(1);
    }

    generateID(){
        return this.s4() + this.s4() + '-'+ this.s4() + '-'
        + this.s4() + '-'+ this.s4() + '-'
        + this.s4() + '-'+ this.s4() + '-'
        + this.s4() + '-'+ this.s4() + '-';
    }
    onToggleForm = () => {

        if (this.state.isDisPlayForm && this.state.taskEditing !== null) {
            this.setState({
                isDisPlayForm : true,
                taskEditing : null
            });

        } else {
            this.setState({
                isDisPlayForm : !this.state.isDisPlayForm,
                taskEditing : null
            });
        }
    }

    onCloseForm = () => {
        this.setState({
            isDisPlayForm : false

        });
    }

    onShowForm = () => {
        this.setState({
            isDisPlayForm : true
        });

    }

    onSubmit = (data) => {
        var {tasks} = this.state;
        if (data.id === '') {
            data.id = this.generateID();
            tasks.push(data);
        } else {
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }
        
        this.setState({
            tasks : tasks,
            taskEditing : null
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks',JSON.stringify(tasks));
        } 
    }

    findIndex = (id) => {
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task,index) => {
            if (task.id === id) {
                result = index;
            }
        }); 
        return result;
    }

    findName = (name) => {
        var {tasks} = this.state;
        var result = -1;
    }

    onDelete = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks.splice(index,1);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks',JSON.stringify(tasks));
        } 
        this.onCloseForm();

    }

    onUpdate = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing
        });
        this.onShowForm();

    }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus,10);
        this.setState( {
            filter: {
                name: filterName.toLowerCase(),
                status : filterStatus
            }
        });
    }

    onSearch = (keyword) => {
        this.setState ({
            keyword: keyword.toLowerCase()
        });
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
           sortBy: sortBy,
           sortValue: sortValue,
        });
    }

    render() {
        var { tasks, isDisPlayForm, 
            taskEditing, filter, 
            keyword, sortBy, sortValue } = this.state; // var tasks = this.state.tasks
        if (filter) {
            if (filter.name) {
                tasks =  tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                });
            }
            tasks = tasks.filter((task) => {
                if (filter.status === -1) {
                    return task;
                } else {
                    return task.status === (filter.status === 1 ? true:false);
                }
            });
            
        }

        if (keyword) {
            tasks =  tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            });

        }
        if (sortBy === 'name') {
            tasks.sort((a,b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return sortValue;
                else if (a.name.toLowerCase() < b.name.toLowerCase()) return -sortValue;
                else return 0;
            });
        } else {
            tasks = tasks.filter((task) => {
                return task.status === (sortValue === 1 ? true:false);
            });
        }
        var elmTaskForm = isDisPlayForm 
            ? <TaskForm onSubmit={this.onSubmit} 
                        onCloseForm={this.onCloseForm}
                        task={taskEditing}
                        /> : '';
        return (
        <div className="container">
            <div className="text-center">
                <h1>To Do List</h1>
                <hr/>
            </div>
            <div className="row">
                <div className= {isDisPlayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4": ""}>
                    {/* TaskForm*/}
                    {elmTaskForm}
                </div>
                <div className={isDisPlayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" :
                                    "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={this.onToggleForm}>
                        <span className="fa fa-plus mr-5"></span>Add Task
                    </button>
                    
                    {/* Search and Sort*/}

                    <Control onSearch={this.onSearch}
                            onSort = {this.onSort}
                            sortBy= {sortBy}
                            sortValue= {sortValue}/>
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <TaskList tasks = {tasks}
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDelete = {this.onDelete}
                                    onUpdate = {this.onUpdate}
                                    onFilter = {this.onFilter} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
  }
}

export default App;
