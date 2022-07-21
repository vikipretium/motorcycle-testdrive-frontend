import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, NavLink,
} from 'react-router-dom';
import './App.css';
// import { Outlet } from 'react-router-dom';
// import NavBar from './side_navbar/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen md:flex">
        {/* <NavBar /> Add conditional to show display navbar when user is logged in */}
        <div className="wrapper">
          {/* Put all other content in this div  */}
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <NavLink className="navbar-brand" to="/sign-in">
                MotorHub
              </NavLink>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sign-in">
                      login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sign-up">
                      sign up
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="sign-in" element={<Login />} />
                <Route path="sign-up" element={<SignUp />} />
              </Routes>
            </div>
          </div>
          {/* <Outlet /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
