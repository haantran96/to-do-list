import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div class="container">
          <div class="text-center">
              <h1>To Do List</h1>
              <hr/>
          </div>
          <div class="row">
              <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <div class="panel panel-warning">
                      <div class="panel-heading">
                          <h3 class="panel-title">Add Task</h3>
                      </div>
                      <div class="panel-body">
                          <form>
                              <div class="form-group">
                                  <label>Task Name :</label>
                                  <input type="text" class="form-control" />
                              </div>
                              <label>Status :</label>
                              <select class="form-control" required="required">
                                  <option value="1">Finished</option>
                                  <option value="0">Unfinished</option>
                              </select>
                              <br/>
                              <div class="text-center">
                                  <button type="submit" class="btn btn-warning">Add</button>&nbsp;
                                  <button type="submit" class="btn btn-danger">Cancel</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <button type="button" class="btn btn-primary">
                      <span class="fa fa-plus mr-5"></span>Add Task
                  </button>

                  <div class="row mt-15">
                      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                          <div class="input-group">
                              <input type="text" class="form-control" placeholder="Enter task..." />
                              <span class="input-group-btn">
                                          <button class="btn btn-primary" type="button">
                                              <span class="fa fa-search mr-5"></span>Search
                              </button>
                              </span>
                          </div>
                      </div>
                      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                          <div class="dropdown">
                              <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                  Filter <span class="fa fa-caret-square-o-down ml-5"></span>
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                  <li>
                                      <a role="button">
                                                  <span class="fa fa-sort-alpha-asc pr-5">
                                                      
                                                      <nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">
                                                        <a class="navbar-brand" href="#">Title</a>
                                                        <ul class="nav navbar-nav">
                                                          <li class="active">
                                                            <a href="#">Home</a>
                                                          </li>
                                                          <li>
                                                            <a href="#">Link</a>
                                                          </li>
                                                        </ul>
                                                      </nav>
                                                      A-Z
                                                  </span>
                                              </a>
                                  </li>
                                  <li>
                                      <a role="button">
                                                  <span class="fa fa-sort-alpha-desc pr-5">
                                                      Tên Z-A
                                                  </span>
                                              </a>
                                  </li>
                                  <li role="separator" class="divider"></li>
                                  <li><a role="button">Finished</a></li>
                                  <li><a role="button">Unfinished</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="row mt-15">
                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <table class="table table-bordered table-hover">
                              <thead>
                                  <tr>
                                      <th class="text-center">Index</th>
                                      <th class="text-center">Task Name</th>
                                      <th class="text-center">Status</th>
                                      <th class="text-center">Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td></td>
                                      <td>
                                          <input type="text" class="form-control" />
                                      </td>
                                      <td>
                                          <select class="form-control">
                                              <option value="-1">All</option>
                                              <option value="0">Unfinished</option>
                                              <option value="1">Finished</option>
                                          </select>
                                      </td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>1</td>
                                      <td>Learn ReactJS</td>
                                      <td class="text-center">
                                          <span class="label label-success">
                                                      Finished
                                                  </span>
                                      </td>
                                      <td class="text-center">
                                          <button type="button" class="btn btn-warning">
                                              <span class="fa fa-pencil mr-5"></span>Edit
                                          </button>
                                          &nbsp;
                                          <button type="button" class="btn btn-danger">
                                              <span class="fa fa-trash mr-5"></span>Remove
                                          </button>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
