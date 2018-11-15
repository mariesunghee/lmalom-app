import React, { Component } from 'react';
import './NavbarStyle.css';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-light fixed-top py-2" id="main-nav">
                <div className="container-fluid">
                    <a href="index.html" className="navbar-brand"><h3>Lmalom</h3></a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav navbar-top-links ml-auto">
                            <li className="nav-item active">
                                <a href="index.html" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="about.html" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="services.html" className="nav-link">Contact</a>
                            </li>
                            <span className="ml-3 mt-2" width="50px" height="50px"><i className="far fa-bell"></i></span>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}