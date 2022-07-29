import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import NavBar from '../side_navbar/Navbar';
import { addReservation } from '../redux/reservation/reservationSlice';
import { fetchMotorcycles } from '../redux/motorcylce/motorcylceSlice';
import AuthContext from '../context/AuthProvider';

function addreserve() {
  const { auth } = useContext(AuthContext);
  let userId;
  if (!sessionStorage.getItem('userID')) {
    const { accessToken } = auth;
    const decoded = jwtDecode(accessToken);
    userId = decoded.user_id;
    sessionStorage.setItem('userID', userId);
  } else {
    userId = sessionStorage.getItem('userID');
  }

  const [city, setCity] = useState('');
  const [bike, setBike] = useState('');
  const [date, setDate] = useState('');
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();

  const motorcycles = useSelector((state) => state.motorcycle.motorcycles);
  const reservations = useSelector((state) => state.reservation);

  useEffect(() => {
    if (!motorcycles.length) {
      dispatch(fetchMotorcycles());
    }
  }, [motorcycles]);

  useEffect(() => {
    // when the reservation is made, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);

  const addReserve = (e) => {
    e.preventDefault();
    const reservationBody = {
      user_id: userId,
      city,
      motorcycle_id: bike,
      date,
    };
    dispatch(addReservation({ reservationBody, userId }));
    setAlert(true);
  };

  return (
    <NavBar>
      <div>
        <div className="flex flex-col justify-center text-center w-full mx-auto">
          <h2>Add Reservation</h2>
          <hr className="w-60 border-4 mx-auto" />
          <p className="text-center w-4/5">
            There are 10 different models of super bikes. If you wish to find
            out if a test-ride is available in your area, please use the
            selector below.
          </p>

          <form
            onSubmit={addReserve}
            className="flex flex-col justify-evenly w-3/5 gap-3 mx-auto "
          >
            <textarea
              name="Location"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
              className="px-5 py-2 rounded-full bg-lime-300 border border-4 border-white"
            />
            <select
              name="Bike models"
              onChange={(e) => setBike(e.target.value)}
              value={bike}
              required
              className="px-5 py-2 rounded-full bg-lime-300 border border-4 border-white"
            >
              <option value="" default>
                Choose Model
              </option>

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
          {alert && !reservations.error && (
            <div
              className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800 w-1/2 justify-center"
              role="alert"
            >
              <span className="font-medium">Success alert!</span>
            </div>
          )}
        </div>
      </div>
    </NavBar>
  );
}

export default addreserve;
