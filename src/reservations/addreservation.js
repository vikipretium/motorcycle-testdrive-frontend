import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import NavBar from '../side_navbar/Navbar';
import { addReservation } from '../redux/reservation/reservationSlice';
import { fetchMotorcycles } from '../redux/motorcylce/motorcylceSlice';
import AuthContext from '../context/AuthProvider';

function addreserve() {
  const { auth } = useContext(AuthContext);
  const { token } = auth;
  const decoded = jwtDecode(token);
  const userId = decoded.user_id;

  const [city, setCity] = useState('');
  const [bike, setBike] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

  const motorcycles = useSelector((state) => state.motorcycle.motorcycles);

  useEffect(() => {
    if (!motorcycles.length) {
      dispatch(fetchMotorcycles());
    }
  }, [motorcycles]);

  const reservationBody = {
    userId,
    city,
    bike,
    date,
  };

  const addReserve = (e) => {
    e.preventDefault();
    dispatch(addReservation(reservationBody));
    // console.log({ userId, city, bike, date });

    // the bike id is string - to Alick

    // console.log(reservationBody);
  };

  return (
    <>
      <div className="h-screen lg:flex lg:overflow-hidden bg-lime-300">
        <div className="lg:flex lg:flex-shrink-0">
          <NavBar />
        </div>

        <div className="flex flex-col w-screen flex-1 justify-center text-center w-full">
          <h2>Add Reservation</h2>
          <hr className="w-60 border-4 mx-auto" />
          <p>
            There are 10 different models of super bikes. If you wish to find
            out if a test-ride is available in your area, please use the
            selector below.
          </p>

          <form onSubmit={addReserve} className="flex justify-evenly ">
            <select
              name="Location"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
              className="px-5 py-2 rounded-full bg-lime-300 border border-4 border-white"
            >
              <option value="city1">city1</option>
              <option value="city1">city2</option>
              <option value="city1">city3</option>
              <option value="city1">city4</option>
            </select>
            <select
              name="Bike models"
              onChange={(e) => setBike(e.target.value)}
              value={bike}
              required
              className="px-5 py-2 rounded-full bg-lime-300 border border-4 border-white"
            >
              {motorcycles.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="px-5 py-2 rounded-full bg-lime-300 border border-4 border-white"
            />
            <button
              type="submit"
              className="mt-4 text-lime-500 px-5 py-2 rounded-full border border-4 border-white"
            >
              Reserve
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default addreserve;
