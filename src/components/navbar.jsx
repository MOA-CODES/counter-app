import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (

            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="">Navbar 
                <span className="badge badge-pill badge-secondary"> {this.props.totalcounters} </span>
                </a>
            </div>
            </nav>

        );
    }
}
 
export default NavBar;