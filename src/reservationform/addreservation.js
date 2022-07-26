import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { fetchMotorcycles } from '../redux/motorcylce/motorcylceSlice';
import { fetchReservations } from '../redux/reservation/reservationSlice';
import NavBar from '../side_navbar/Navbar';

const addreservation = () => {
  const location = useLocation();
  const { state } = location;
};
