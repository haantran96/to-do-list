import React, {Component} from 'react';

class TaskItem extends Component {

  render() {
    var {tasks, index} = this.props;

    return (
        <tr>
            <td>{index+1}</td>
            <td>{tasks.name}</td>
            <td className="text-center">
                <span className={ tasks.status === true ? 'label label-success':
                'label label-danger'}>{tasks.status === true ? 'Finished' : 'Unfinished'}
                </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5"></span>Edit
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5"></span>Remove
                </button>
            </td>
        </tr>
                      
    );
  }
}

export default TaskItem;
