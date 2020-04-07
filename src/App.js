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
            isDisPlayForm: true
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

    onGenerateData = () => {
        var tasks = [
            {   id :this.generateID(),
                name : 'Learn React',
                status: true
            },        
            {   id :this.generateID(),
                name : 'Learn Redux',
                status: false
            },        
            {   id :this.generateID(),
                name : 'Learn API',
                status: false
            },        
        ];
        this.setState({
            tasks:tasks
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
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
        this.setState({
            isDisPlayForm : !this.state.isDisPlayForm
        })
    }

    
    render() {
        var { tasks, isDisPlayForm } = this.state; // var tasks = this.state.tasks
        var elmTaskForm = isDisPlayForm ? <TaskForm /> : '';
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

                    
                    <button type="button" 
                            className="btn btn-danger ml-15"
                            onClick= {this.onGenerateData}>
                        Generate Data
                    </button>
                    
                    {/* Search and Sort*/}

                    <Control/>
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <TaskList tasks = {tasks}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
  }
}

export default App;
