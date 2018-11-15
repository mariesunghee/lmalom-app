
import React, { Component } from 'react';

export default class Sidebar extends Component{
    render(){
        return(
            <nav className="col-md-2 d-md-block">
                <ul className="nav flex-column justify-content-start">
                    <li className="nav-item"><a className="nav-link active" href="#"><i
                        className="fas fa-home"/> Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><i
                        className="fas fa-columns"/> Category</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><i
                        className="fas fa-credit-card"/> Account</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><i
                        className="fas fa-cog"/> Setting</a></li>
                </ul>
            </nav>
        )
    }
}