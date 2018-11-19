import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Sidebar from "./components/Sidebar";
import Expense from "./components/Expense";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowSize: 'sm'
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar/>
                <div className="main-content">
                    <Sidebar/>
                    <Main/>
                </div>
            </div>
        );
    }
}

export default App;
