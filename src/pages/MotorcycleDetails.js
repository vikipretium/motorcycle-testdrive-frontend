import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../side_navbar/Navbar';

const MotorcycleDetail = () => {
  const { motorcycleId } = useParams();
  const motocycles = useSelector((state) => state.motorcycle.motorcycles);
  const bike = motocycles?.find(
    (item) => item.id === parseInt(motorcycleId, 10),
  );

  return (
    <>
      <NavBar>
        <div data-testid="motorcycledetailstest" className="main-container">
          <img src={bike?.image} alt="motorcycleImage" className="bike-image" />
          <div className="details-card">
            <h2 className="font-bold text-3xl title">{bike?.name}</h2>
            <div className="my-3">
              <p className="bg-slate-300 my-2 p-2">
                <span className="font-medium">
                  Total amount: $
                  {bike?.price}
                </span>
              </p>
              <p className="font-medium my-2 p-2">Fuel: Petrol</p>
              <p className="font-medium bg-slate-300 my-2 p-2">
                Location: Jhapa,Nepal
              </p>
              <p className="font-medium p-2">Contact: +9779824955067</p>
              <Link
                className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2"
                to="/addreservation"
              >
                Reservation
              </Link>
            </div>
          </div>
        </div>
      </NavBar>
    </>
  );
};

export default MotorcycleDetail;
