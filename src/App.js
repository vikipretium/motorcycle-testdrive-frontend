import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
// import { Outlet } from 'react-router-dom';
// import NavBar from './side_navbar/Navbar';
import Login from './components/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="relative min-h-screen md:flex">
      {/* <NavBar /> Add conditional to show display navbar when user is logged in */}
      <div>
        {/* Put all other content in this div  */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/sign-in">
              MotorHub
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-in">
                    login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-up">
                    sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-in" element={<SignUp />} />
            </Routes>
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default App;
