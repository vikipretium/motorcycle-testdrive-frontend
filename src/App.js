import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './side_navbar/Navbar';
import MotorcycleDetails from './pages/MotorcycleDetails';

function App() {
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      <div>
        {/* Put all other content in this div  */}
        <MotorcycleDetails />
        <Outlet />
      </div>

    </div>
  );
}

export default App;
