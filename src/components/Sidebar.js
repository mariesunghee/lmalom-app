
import React, { Component } from 'react';
import './SidebarStyle.css';

export default class Sidebar extends Component{
    render(){
        return(
            <nav className="sidebar">
                <ul className="nav flex-column justify-content-start">
                    <li className="nav-item"><a className="nav-link sidebar-menu active" href="#"><i
                        className="fas fa-home"/> <div>Dashboard</div></a></li>
                    <li className="nav-item"><a className="nav-link sidebar-menu" href="#"><i
                        className="fas fa-columns"/> <div>Category</div></a></li>
                    <li className="nav-item"><a className="nav-link sidebar-menu" href="#"><i
                        className="fas fa-credit-card"/><div>Account</div></a></li>
                    <li className="nav-item"><a className="nav-link sidebar-menu" href="#"><i
                        className="fas fa-cog"/> <div>Setting</div></a></li>
                </ul>
            </nav>
        )
    }
}