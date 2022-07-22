import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthPageNav = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top collapse.navbar-collapse">
    <div className="container">
      <NavLink className="navbar-brand" to="/sign-in">
        MotorHub
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/sign-in">
              login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sign-up">
              sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default AuthPageNav;
