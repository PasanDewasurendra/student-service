import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';

toast.configure()
export default class Home extends Component {

    render() {
        return(
            <>
                <div className="container mt-5 pt-5">

                    <div className="mt-3 jumbotron text-center align-self-center">

                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-4">

                                <img src="/sliit-logo.png" alt="sliit-logo" />
                                <p className="display-4 text-secondary font-weight-bold">SLIIT</p>

                            </div>
                            <div class="col-md-8 align-content-center">

                                <h1><span className="fa fa-lock"></span>Cloud Computing Assignment 1</h1>
                                <h4>3-Tier Web Application deploy with</h4><span className="lead font-weight-bold">Docker</span>
                                <br />
                                <hr />

                                <Link to="/student/new" className="btn btn-danger mt-3 px-5 navbar-brand"><i className="bi bi-arrow-90deg-right"></i> Start</Link>

                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
