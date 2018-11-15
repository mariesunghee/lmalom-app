import React, { Component } from 'react';
import './MainStyle.css';


export default class Main extends Component{
    render(){
        return(
            <main className="col-lg-10">
                <div id="input" className="border border-light d-flex flex-column flex-sm-row justify-content-around">
                    <button className="btn btn-lg btn-outline-primary" type="button">Expense</button>
                    <button className="btn btn-lg btn-outline-danger" type="button">Income</button>
                    <span class="d-flex align-self-center"><h3>Balance</h3></span>
                </div>
                <div  class="row">
                    <div id="dailyView" className="col-sm-6 border border-dark">
                        <div class="card">
                            <div className="card-header">
                               <span>Today</span>
                            </div>
                            <div className="card-body">Costco $45</div>
                        </div>
                    </div>
                    <div id="calendar" className="col-sm-6 border border-primary">

                    </div>
                </div>
            </main>

        )
    }
}