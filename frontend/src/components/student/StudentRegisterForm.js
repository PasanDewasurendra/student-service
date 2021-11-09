import React, { Component } from 'react'
import api from '../../api/students_api';
import { toast } from 'react-toastify';

export default class StudentRegisterForm extends Component {

    onSubmit = e => {
        e.preventDefault();

        const studentObj = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            studentId: e.target.studentId.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        api.studentAPI().newStudent(studentObj)
        .then(res => {
            toast.success('Student Details Successfully Submited.', {autoClose: 2000})
        })
        .catch(err => toast.error("ERROR : "+err ))
    }
    

    render() {
        return (
            <div className='container col-sm-10 col-md-10 col-lg-6 p-5'>

                <div className="card shadow">
                    <div className="card-header lead bg-primary text-light text-center">
                        New Student
                    </div>

                    <div className="card-body bg-light p-3">

                <form onSubmit={this.onSubmit}>
                    
                    <div class="form-row">
                        <div class="form-group col">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" class="form-control" placeholder="First name" />
                        </div>
                        <div class="form-group col">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" class="form-control" placeholder="Last name" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="studentId">Student ID</label>
                        <input type="text" class="form-control" id="studentId" name="studentId" aria-describedby="studentIdHelp" placeholder="Enter Student ID" />
                        <small id="emailHelp" class="form-text text-muted">Enter SLIIT registration number.</small>
                    </div>

                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">Enter sLIIT email address.</small>
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" name="password" placeholder="Enter Password" />
                    </div>

                    <button type="submit" class="btn btn-primary float-right">SUBMIT</button>
                    
                </form>

                </div>

            </div> 
                
        </div>
        )
    }
}
