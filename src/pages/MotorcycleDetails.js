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