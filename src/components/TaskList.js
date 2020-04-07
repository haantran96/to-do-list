import React, {Component} from 'react';
import TaskItem from './TaskItem'
class TaskList extends Component {

  render() {
    var { tasks } = this.props;
    var elmTasks = tasks.map((task, index) => {
        return <TaskItem 
                        key={task.id} 
                        index={index} 
                        tasks = {task}
                        onUpdateStatus ={this.props.onUpdateStatus}
                        onDelete = {this.props.onDelete}
                        onUpdate = {this.props.onUpdate}/>
    })
    return (
        <table className="table table-bordered table-hover mt-15">
            <thead>
                <tr>
                    <th className="text-center">Index</th>
                    <th className="text-center">Task Name</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" className="form-control" />
                    </td>
                    <td>
                        <select className="form-control">
                            <option value="-1">All</option>
                            <option value="0">Unfinished</option>
                            <option value="1">Finished</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {elmTasks}
            </tbody>
        </table>
                      
    );
  }
}

export default TaskList;
