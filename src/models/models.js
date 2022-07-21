import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMotorcycles } from '../redux/motorcylce/motorcylceSlice';

const ModelsHome = () => {
  const motorcycles = useSelector((state) => state.motorcycle);
  const dispatch = useDispatch();
  console.log(motorcycles);
  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, []);

  return (
    <h1>Models Home Page</h1>
  );
};

export default ModelsHome;
