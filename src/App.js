import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './side_navbar/Navbar';

function App() {
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      <div className="container w-full">
        {/* Put all other content in this div  */}
        <Outlet />
      </div>

    </div>
  );
}

export default App;
