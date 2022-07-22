import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMotorcycles } from '../redux/motorcylce/motorcylceSlice';

const ModelsHome = () => {
  const motorcycles = useSelector((state) => state.motorcycle);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, []);

  return (
    <div>
      <h1>Models Home Page</h1>
      <p>
        {motorcycles}
      </p>
    </div>
  );
};

export default ModelsHome;
