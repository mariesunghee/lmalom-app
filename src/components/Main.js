import React, { Component } from 'react';
import './MainStyle.css';


export default class Main extends Component{
    render(){
        return(
            <main className="app-main">
                <div id="input" className="border border-light d-flex flex-column flex-sm-row justify-content-around">
                    <button className="btn btn-lg btn-outline-primary" data-toggle="modal" data-target="#modalExpense" type="button">Expense</button>
                    <div id="modalExpense" className="modal fade modal-expense" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title"><i className="fas fa-long-arrow-alt-left"></i>    New expense</h4>
                                    <div className="modal-body">
                                        <form>
                                            <div className="input-group input-group-lg">
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <i className="fab fa-cc-mastercard"></i>
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control"/>
                                            </div>

                                            <div className="input-group input-group-lg">
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                       <i className="fas fa-pen"></i>
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Add Comment"/>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-outline-danger" type="button">Income</button>
                    <span className="d-flex align-self-center"><h3>Balance</h3></span>
                </div>
                <div  className="row recent-activity">
                    <div id="dailyView" className="col-sm-6 border border-dark">
                        <div className="card">
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