/* eslint-disable no-nested-ternary */
import { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import AuthContext from '../context/AuthProvider';
import NavBar from '../side_navbar/Navbar';
import { fetchReservations, deleteReservation } from '../redux/reservation/reservationSlice';
import { fetchMotorcycles } from '../redux/motorcylce/motorcylceSlice';

const UserReservations = () => {
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

  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation);
  const motorcycleNames = useSelector((state) => state.motorcycle);

  const deleteReservationAction = (event, reservationId) => {
    event.preventDefault();
    dispatch(deleteReservation({ reservationId, userId }));
  };

  const motorcycleCollection = new Map();
  if (motorcycleNames?.motorcycles.length) {
    motorcycleNames?.motorcycles.map(
      (element) => motorcycleCollection.set(element.id, element.name),
    );
  }

  useEffect(() => {
    dispatch(fetchReservations(userId));
    dispatch(fetchMotorcycles());
  }, []);

  return (
    <NavBar>
      <div className="container border-black w-full">
        <h1 className="text-center my-4 p-2 text-lg"> MY RESERVATIONS </h1>
        <div className="bg-neutral-400 rounded-lg grid grid-cols-4 gap-4 mx-auto text-center">
          <div> BIKE </div>
          <div> CITY </div>
          <div> DATE </div>
          <div>{}</div>
        </div>

        {reservations.reservations.length ? (reservations.reservations.map((element) => (
          <div key={element.id} className="grid grid-cols-4 gap-4 mx-auto text-center py-3">
            <div>{ motorcycleCollection.get(element.motorcycle_id)}</div>
            <div>{element.city}</div>
            <div>{element.date}</div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-20"
              type="button"
              onClick={(event) => deleteReservationAction(event, element.id)}
            >
              DELETE
            </button>
          </div>
        ))) : (
          reservations.isLoading
            ? (
              <div className="grid grid-cols-1 gap-4 mx-auto text-center py-3">
                <div>
                  FETCHING RESERVATIONS FROM SERVER
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 mx-auto text-center py-3">
                <div>
                  No Reservations Available
                </div>
              </div>
            )
        )}

      </div>
    </NavBar>
  );
};

export default UserReservations;
