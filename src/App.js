import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddReservations from './reservations/addreservation';
import UserReservations from './reservations/userReservations';
import ModelsHome from './models/models';
import Mainpage from './mainpage/mainpage';
import MotorcycleDetail from './pages/MotorcycleDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/" element={<ModelsHome />} />
        <Route path="sign-in" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="homepage" element={<Mainpage />} />
        <Route path="addreservation" element={<AddReservations />} />
        <Route path="myreservations" element={<UserReservations />} />
        <Route path="motorcycle/:motorcycleId" element={<MotorcycleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
