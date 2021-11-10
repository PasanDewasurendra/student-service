import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import api from '../../api/students_api';
import { toast } from 'react-toastify';

toast.configure()
export default class StudentLoginForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username: "",
            password: ""
        }
    }

    onHandleUsername = e => {
        this.setState({
            username: e.target.value
        })
    }

    onHandlePassword = e => {
        this.setState({
            password: e.target.value
        })
    }

    
    handleSubmit = e =>{
        e.preventDefault();

        const credentials = {
            username : this.state.username,
            password : this.state.password,
        }

        api.studentAPI().authenticate(credentials)
        .then(res => {
            const user = res.data;
            console.log(user);
            
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('userId', user.id)

            toast.success("Login Success", {autoClose:2000})
            
            setTimeout(() => {
                window.location.href = '/student/profile';
            }, 2000)

        }).catch((err) => {
            toast.error(err?.response?.data || err, {autoClose:2000})
            console.log("error: ", err.response);
        })

    }


    render() {
        return (
            <div className="container col-sm-10 col-md-10 col-lg-6 p-5" align="center">

                <div className="card shadow">
                    <div className="card-header lead bg-primary text-light text-center">
                        Login
                    </div>
                    <div className="card-body mr-5">

                        <form onSubmit={this.handleSubmit}>

                            <div className="input-group mb-3 row">
                                <label htmlFor="username" className="col-3 text-right col-form-label font-weight-light">Username</label>
                                <div className="col row ">
                                    <input type="text" className="col form-control" placeholder="Enter student Id or SLIIT email" name="username" value={this.state.username} onChange={this.onHandleUsername} required />
                                </div>
                            </div>

                            <div className="input-group mb-3 row">
                                <label htmlFor="password" className="col-3 text-right col-form-label font-weight-light">Password</label>
                                <div className="col row">
                                    <input type="password" className="col form-control" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onHandlePassword} required />
                                </div>

                            </div>

                            <button type="submit" className="btn btn-primary float-right"> Login </button>

                        </form>

                        <br/><br/>

                    </div>

                    <div className="p-2 mb-3 small">Don't have an Account ? <Link to={"/student/new"} className=" btn-link p-1 pl-2 pr-2 bg-light ">Create an Account</Link></div>

                </div>

            </div>
        )
    }
}
