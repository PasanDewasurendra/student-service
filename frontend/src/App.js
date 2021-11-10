import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import NavBar from './components/navbar';
import StudentRegisterForm from './components/student/StudentRegisterForm';
import StudentLoginForm from './components/student/studentLoginForm';
import StudentProfile from './components/student/StudentProfile';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentDashboard from './components/staff/studentDashboard';

toast.configure()
function App() {

  if(localStorage.getItem('user')){

    const user = JSON.parse(localStorage.getItem('user'));
    // console.log("admin user appjs : ", user)

    if(user.email === "admin@studentservice.lk" && user.password === "admin"){
      return (
        <Router>
          <NavBar />
        
          <Routes>
    
            <Route path="/" exact element={<Home />} />
            <Route path="/staff/student-dashboard" element={<StudentDashboard />} />
    
          </Routes>
  
        </Router>
      )
    }else{
      return (
        <Router>
          <NavBar />
          
          <Routes>
  
            <Route path="/" exact element={<Home />} />
            <Route path="/student/profile" element={<StudentProfile />} />
  
          </Routes>
    
        </Router>
      )
    }

  } else{

    return ( 
      <Router>
        <NavBar />
        
        <Routes>
        
          <Route path="/" exact element={<Home />} />
          <Route path="/student/new" element={<StudentRegisterForm />} />
          <Route path="/student/login" element={<StudentLoginForm />} />

        </Routes>
  
      </Router>
  
    )

  }

}

export default App;
