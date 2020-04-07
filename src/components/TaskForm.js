import React, {Component} from 'react';

class TaskForm extends Component {

    constructor(props){
        super (props);
        this.state = {
            name : '',
            status : false
        }
    }

   onCloseForm = () => {
       this.props.onCloseForm();
   }

   onChange = (event) => {
       var target = event.target;
       var name = target.name;
       var value = target.value;
       if (name === "status") {
           value = target.value === 'true' ? true : false;
       }
       this.setState({
           [name] : value
       });
   }

   onSubmit = (event) => {
       event.preventDefault();
       this.props.onSubmit(this.state);
   }
  render() {
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Add Task
                    <span 
                        className= "fa fa-times-circle text-right"
                        onClick={this.onCloseForm}>

                    </span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Task Name :</label>
                        <input type="text" className="form-control" name = "name" value = {this.state.name} onChange={this.onChange}/>
                    </div>
                    <label>Status :</label>
                    <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.onChange}>
                        <option value={true}>Finished</option>
                        <option value={false}>Unfinished</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Add</button>&nbsp;
                        <button type="submit" className="btn btn-danger">Cancel</button>
                    </div>
                </form>
            </div>
    </div>

    );
  }
}

export default TaskForm;
