/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations, deleteReservation } from '../redux/reservation/reservationSlice';
import { fetchMotorcycles } from '../redux/motorcylce/motorcylceSlice';

const UserReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation);
  const motorcycleNames = useSelector((state) => state.motorcycle);

  const deleteReservationAction = (event, reservationId) => {
    event.preventDefault();
    console.log('on delete onclick running', reservationId);
    dispatch(deleteReservation(reservationId));
  };

  const motorcycleCollection = new Map();
  if (motorcycleNames?.motorcycles.length) {
    console.log('map population running');
    motorcycleNames?.motorcycles.map(
      (element) => motorcycleCollection.set(element.id, element.name),
    );
  }

  console.log(reservations, motorcycleNames, motorcycleCollection);
  useEffect(() => {
    dispatch(fetchReservations());
    dispatch(fetchMotorcycles());
  }, []);

  return (
    <div className="container w-full">
      <h1 className="text-center my-4 p-2 text-lg"> MY RESERVATIONS </h1>
      <div className="grid grid-cols-4 gap-4 mx-auto text-center">
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
  );
};

export default UserReservations;
