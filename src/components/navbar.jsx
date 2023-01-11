import React, { Component } from 'react';

const NavBar = ({totalcounters}) =>{
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="">Navbar 
            <span className="badge badge-pill badge-secondary"> {totalcounters} </span>
            </a>
        </div>
        </nav>

    );
};

// class NavBar extends Component {
//     render() { 
        
//     }
// }
 
export default NavBar;