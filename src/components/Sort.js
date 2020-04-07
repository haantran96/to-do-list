import React, {Component} from 'react';
class Sort extends Component {

  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Filter <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a role="button">
                                    <span className="fa fa-sort-alpha-asc pr-5">
                                        
                                        <nav className="navbar navbar-default navbar-fixed-bottom" role="navigation">
                                        <a className="navbar-brand" href="#">Title</a>
                                        <ul className="nav navbar-nav">
                                            <li className="active">
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
                                    <span className="fa fa-sort-alpha-desc pr-5">
                                        Name Z-A
                                    </span>
                                </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li><a role="button">Finished</a></li>
                    <li><a role="button">Unfinished</a></li>
                </ul>
            </div>
        </div>
    );
    }
}

export default Sort;
