import React from 'react';
import api from "../../api/students_api";
import { toast } from 'react-toastify';

toast.configure()
export default class StudentDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            students: [],
            search: ""
        }
    }

    updateSearch(event){
        this.setState({search: event.target.value.substr(0,20)})
    }

    componentDidMount() {
        api.studentAPI().getAllStudents()
        .then(res => {
            console.log("students: ", res.data)
            this.setState({ students: res.data })
        }).catch((err) => {
            toast.error(err?.response || err, {autoClose:2000});
        })
    }


    onDelete(id){
        console.log("delete id :"+id);

        if (window.confirm("Are you sure to delete this student ?")) {
            api.studentAPI().deleteStudentDataById(id)
            .then(res =>{
                toast.success("Student Successfully Deleted", {autoClose:2000})
                this.componentDidMount()
            });
        }
    }


    render (){
        if(localStorage.getItem('user')){
            const {students} = this.state;

            let filteredStudents = students.filter(
                (std) =>{
                    return (std.email && std.email.indexOf(this.state.search) !== -1);
                }
            );

            return (
                <div className="container">
                <br></br><br></br>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="card shadow-sm">
                                <div className="card-header lead form-card-header bg-primary text-white"><i className="fa fa-user p-2"></i>Student Management</div>
                                <div className="card-body">

                                    <div className="input-group mb-3">
                                        <label  className="mr-2">Search Student: </label>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
                                        </div>

                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Find student from email" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                                    </div>

                                    <table className="table table-hover table-responsive-lg shadow-sm">
                                        <thead className="bg-light text-dark">
                                            <tr>
                                                <th className="tableTh">FirstName</th>
                                                <th className="tableTh">LastName</th>
                                                <th className="tableTh">Student ID</th>
                                                <th className="tableTh">Email</th>
                                                <th className="tableTh">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            filteredStudents.map((student) =>

                                            <tr>
                                                <td className="tableTh">{ student.firstName }</td>
                                                <td className="tableTh">{ student.lastName }</td>
                                                <td className="tableTh">{ student.studentId }</td>
                                                <td className="tableTh">{ student.email }</td>
                                                <td className="tableTh">
                                                    <button type='button' onClick={() => this.onDelete(student.studentId)} className='btn btn-danger ml-1 btn-sm'>Delete</button>
                                                </td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
