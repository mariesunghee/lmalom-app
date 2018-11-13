import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-expand-md navbar-light fixed-top py-4" id="main-nav">
          <div className="container">
              <a href="index.html" className="navbar-brand">Lmalom</a>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                          <a href="index.html" className="nav-link">Home</a>
                      </li>
                      <li className="nav-item">
                          <a href="about.html" className="nav-link">About</a>
                      </li>
                      <li className="nav-item">
                          <a href="services.html" className="nav-link">Contact</a>
                      </li>
                      <span className="mt-2 ml-3"><i className="far fa-bell"></i></span>
                  </ul>
              </div>
          </div>
        </nav>
        <div className="container-fluid py-5">
            <div className="row mt-5 pt-5">
                <div className="col-lg-4 text-center">
                    <ul>
                        <li>dashboard</li>
                        <li>Category</li>
                        <li>Account</li>
                        <li>setting</li>
                    </ul>
                </div>
                <div className="col-lg-8 text-center">
                    <button class="btn btn-lg btn-outline-primary" type="button">Expense</button>
                    <button class="btn btn-lg btn-outline-danger" type="button">Income</button>
                </div>
            </div>
        </div>



      </div>
    );
  }
}

export default App;
