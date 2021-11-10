import axios from 'axios';

const baseUrl = 'http://localhost:8080/';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    studentAPI(url = baseUrl + 'student/'){

        return{
            newStudent: data => axios.post(url+'new', data),
            authenticate: data => axios.post(url+'authenticate', data),
            getStudentDataById: id => axios.get(url+'id/' + id),
            getAllStudents: () => axios.get(url+'all'),
            updateStudentDataById: (id, data) => axios.put(url+'id/' + id, data),
            deleteStudentDataById: id => axios.delete(url+'id/' + id)
        }
    }
}