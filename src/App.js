import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
// import { Outlet } from 'react-router-dom';
// import NavBar from './side_navbar/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen md:flex">
        {/* <NavBar /> Add conditional to show display navbar when user is logged in */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="sign-in" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
