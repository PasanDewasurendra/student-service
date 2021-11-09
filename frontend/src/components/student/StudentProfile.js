/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import api from '../../api/students_api';
import { toast } from 'react-toastify';

export default class StudentProfile extends Component {

    render() {
        return (
            <div>
                <div class="card my-3" style="max-width: 800px;">
                    <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="./images/user.png" class="card-img p-2" alt="user" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title" >{}</h5>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted">Last updated </small><span></span></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}