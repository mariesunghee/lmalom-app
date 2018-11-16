import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Sidebar from "./components/Sidebar";
import Expense from "./components/Expense";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <div className="container-fluid">
                    <div className="row mt-5 pt-5">
                        <Sidebar/>
                        <Main/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
