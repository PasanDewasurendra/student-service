import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand">
                <Link to="/" className="navbar-brand">Student Service</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                    <li><Link to="/student/new"  className="nav-link">Register Student</Link></li>
                    <li><Link to="student/profile" className="nav-link">Profile</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
