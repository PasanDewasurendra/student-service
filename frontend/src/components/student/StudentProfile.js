/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import api from '../../api/students_api';
import { toast } from 'react-toastify';

toast.configure()
export default class StudentProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: null,
            image: null,
            profilePic: '/user.png'
        }
    }

    componentDidMount(){
        api.studentAPI().getStudentDataById(JSON.parse(localStorage.getItem('user')).studentId)
        .then(res => {
            this.setState({ user: res.data })
        }).catch((err) => {
            toast.error(err?.response || err, {autoClose:2000});
        })
    }

    onChangeFirstName = (e) => {
        this.setState({ user: {
            ...this.state.user, firstName: e.target.value 
        }
        });
    }
    onChangeLastName = (e) => { 
        this.setState({ user: {
            ...this.state.user, lastName: e.target.value
        }
        });
    }
     onChangeEmail = (e) => { 
            this.setState({ user: {
                ...this.state.user, email: e.target.value 
            }
        });
    }
     onChangeStudentId = (e) => {
            this.setState({ user: {
                ...this.state.user, studentId: e.target.value 
            }
        });
    }
     onChangePassword = (e) => {
            this.setState({ user: {
                ...this.state.user, password: e.target.value 
            }
        });
    }
 
     onSubmit(e) {
         e.preventDefault();

         if(window.confirm("Are you sure to change this details?")) {

            const studentObj = {
                firstName:  e.target.firstName.value,
                lastName:  e.target.lastName.value,
                studentId:  e.target.studentId.value,
                email:  e.target.email.value,
                password:  e.target.password.value
            }
 
             api.studentAPI().updateStudentDataById(e.target.studentId.value, studentObj)
                 .then((res) => {
                     toast.success("Your Data is Updated.", {autoClose:2000});
                 }).catch((err) => {
                    toast.error(err?.response || err, {autoClose:2000});
                })
 
                setTimeout(() => {
                    window.location.href = '/student/profile';
                }, 2000)
         }
     }

    onDeleteMe(){
        if (window.confirm("Are you sure to delete your account?")) {
            api.studentAPI().deleteStudentDataById(JSON.parse(localStorage.getItem('user')).studentId)
                .then((res) => {
                    toast.success("Your Account Successfully Deleted.", {autoClose:2000});
                    localStorage.clear();
                    // window.location.href = '/student/new';

                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err?.response || err, {autoClose:2000});
                })
        }
    }

    imageSelectHandler = event => {
        this.setState({
            image : event.target.files[0],
            profilePic :  URL.createObjectURL(event.target.files[0])
        })
        console.log(this.state.image);
        console.log(event.target.files[0].name);
        console.log("image :"+ this.state.profilePic);
    }

    render() {

        if(this.state.user){

            console.log("user: ", this.state.user)

            return (

                <div className="container">
                    <br></br><br></br>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="card shadow">
                                <div className="card-header lead form-card-header bg-primary text-white"><i className="fa fa-user p-2" /> My Profile </div>

                                <div className="card-body">

                                    {/* Profile Picture and Main Details  */}
                                    <div className="row p-1 ml-5">
                                        <div className="col-3 p-3 float-left bg-light mr-2">
                                            <img src={this.state.profilePic} alt="" className=" border border-primary fas fa-cat rounded-circle" width="100px" height="100px" />
                                            <input type="file" onChange={this.imageSelectHandler} className="p-2 form-control bg-light border-0 font-weight-lighter"/>
                                            {/*<input type="button" onClick={this.imageUploadHandler} value="upload"/>*/}
                                        </div>

                                        <div className="col float-right bg-light">
                                            <div className="display-6 font-weight-bold mt-3 pl-2 text-left ">{this.state.user?.firstName} {this.state.user?.lastName} <span className="font-weight-normal">({this.state.user?.studentId})</span></div>
                                            <div
                                                className=" mt-2 pl-2 text-left font-weight-light text-primary">{this.state.user?.email}
                                            </div>
                                        </div>

                                    </div>

                                    {/* User Detail Form */}
                                    <form autoComplete="off" className="mt-3 shadow-sm  pt-3" onSubmit={this.onSubmit}>


                                        <div className="form-row justify-content-center ml-5 pl-3">
                                            <div className="form-group col-md-3">
                                                <label for="firstName">First Name</label>
                                                <input type="text" id="firstName" name="firstName" value={this.state.user?.firstName} onChange={this.onChangeFirstName} className="form-control" placeholder="First name" />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="lastName">Last Name</label>
                                                <input type="text" id="lastName" name="lastName" value={this.state.user?.lastName} onChange={this.onChangeLastName} className="form-control" placeholder="Last name" />
                                            </div>
                                        </div>

                                        <div className="form-row justify-content-center ml-5 pl-3">
                                            <div className="form-group col-md-6">
                                                <label for="studentId">Student ID</label>
                                                <input type="text" className="form-control" id="studentId" name="studentId" value={this.state.user?.studentId} onChange={this.onChangeStudentId}  aria-describedby="studentIdHelp" placeholder="Enter Student ID" required />
                                                {/* <small id="emailHelp" className="form-text text-muted">Enter SLIIT registration number.</small> */}
                                            </div>
                                        </div>

                                        <div className="form-row justify-content-center ml-5 pl-3">
                                            <div className="form-group col-md-6">
                                                <label for="email">Email address</label>
                                                <input type="email" className="form-control" id="email" name="email" value={this.state.user?.email} onChange={this.onChangeEmail}  aria-describedby="emailHelp" placeholder="Enter SLIIT email address" required />
                                                {/* <small id="emailHelp" className="form-text text-muted">Enter sLIIT email address.</small> */}
                                            </div>
                                        </div>

                                        <div className="form-row justify-content-center ml-5 pl-3">
                                            <div className="form-group col-md-6">
                                                <label for="password">Password</label>
                                                <input type="password" className="form-control" id="password" name="password" value={this.state.user?.password} onChange={this.onChangePassword}  placeholder="Enter Password" required />
                                            </div>
                                        </div> 

     
                                        <div className=" float-right mt-2">
                                            <button type="submit" className="btn btn-secondary border-light float-right"> 
                                                Update Information
                                            </button>
                                        </div>

                                    </form>

                                    <div className="float-right mr-2 mt-2">

                                        <button onClick={this.onDeleteMe} className="btn btn-danger border-light"> Delete
                                            My Account
                                        </button>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            )

        }else {
            return (
                <div>{this.state.user}</div>
            )
        }
    }
}