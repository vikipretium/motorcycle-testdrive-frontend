import './App.css';
// import { Outlet } from 'react-router-dom';
// import NavBar from './side_navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="relative min-h-screen md:flex">
      {/* <NavBar /> Add conditional to show display navbar when user is logged in */}
      <div>
        {/* Put all other content in this div  */}
        <h1>Motocycle Book</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
