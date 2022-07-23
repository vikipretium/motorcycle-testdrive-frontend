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
import AddReservations from './reservations/addreservation';
import UserReservations from './reservations/userReservations';
import ModelsHome from './models/models';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen md:flex main">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/" element={<ModelsHome />} />
          <Route path="sign-in" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="addreservation" element={<AddReservations />} />
          <Route path="myreservations" element={<UserReservations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
