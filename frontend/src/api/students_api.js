import axios from 'axios';

const baseUrl = 'http://localhost:8080/';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    studentAPI(url = baseUrl + 'student/'){

        return{
            newStudent: data => axios.post(url+'new', data),
            getStudentDataById: id => axios.get(url+'id/' + id),
            updateStudentDataById: (id, data) => axios.put(url + id, data),
            deleteStudentDataById: id => axios.delete(url + id)

        }
    }
    
}