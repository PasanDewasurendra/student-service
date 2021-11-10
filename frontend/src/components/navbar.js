import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';

toast.configure()
export default class Navbar extends Component {

    logout = () => {
        toast.success('logout Success.', {autoClose: 2000})
        localStorage.clear();
        window.location.href = '/student/login';
    }

    render() {

        if(localStorage.getItem('user')){

            return (
                <nav className="navbar navbar-dark bg-dark navbar-expand">
                    <Link to="/" className="navbar-brand">Student Service</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        <li><Link to="student/profile" className="nav-link">Profile</Link></li>
                        <li><Link to="" onClick={() => this.logout()} className="nav-link ">Logout</Link></li>
                        </ul>
                    </div>
                </nav>
            )
            
        }else{

            return(
                <nav className="navbar navbar-dark bg-dark navbar-expand">
                    <Link to="/" className="navbar-brand">Student Service</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        <li><Link to="/student/new"  className="nav-link">Register Student</Link></li>
                        <li><Link to="/student/login"  className="nav-link">Login</Link></li>
                        </ul>
                    </div>
                </nav>
            )
        }

    }
}
