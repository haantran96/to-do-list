import React, {Component} from 'react';
import TaskItem from './TaskItem'
class TaskList extends Component {

  render() {
    return (
        <table className="table table-bordered table-hover">
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
                <TaskItem />
                <TaskItem />
            </tbody>
        </table>
                      
    );
  }
}

export default TaskList;
