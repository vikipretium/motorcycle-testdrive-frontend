import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MotorcycleDetail = () => {
  const [bike, setbike] = useState({});
  const { motorcycleId } = useParams();
  const fetchMotorcycle = async () => {
    const Url = await fetch(`http://localhost:3000/api/v1/motorcycles/${motorcycleId}/`);
    const data = await Url.json();
    setbike(data.data);
  };

  useEffect(() => {
    fetchMotorcycle();
  }, []);

  return (
    <div className="w-full flex items-center p-4">
      <div className="w-3/5 p-4">
        <img src={bike?.image} alt="motorcycleImage" className="image pl-16" />
      </div>
      <div className="w-96">
        <h2 className="font-bold text-3xl">{bike?.name}</h2>
        <div className="my-3">
          <p className="bg-slate-300 my-2 p-2">
            <span className="font-medium">
              Total amount: $
              {bike?.price}
            </span>
          </p>
          <p className="font-medium my-2 p-2">Fuel: Petrol</p>
          <p className="font-medium bg-slate-300 my-2 p-2">Location: Jhapa,Nepal</p>
          <p className="font-medium p-2">Contact: +9779824955067</p>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2">Reservation</button>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleDetail;
