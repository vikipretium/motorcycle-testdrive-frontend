import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../imgs/logo_plain.svg';

const AuthPageNav = () => (
  <nav data-testid="navigation" className="navbar navbar-expand-lg navbar-light fixed-top collapse.navbar-collapse">
    <div className="container">
      <NavLink className="navbar-brand" to="/sign-in">
        <img src={Logo} alt="Logo" className="Logo" />
        <span className="logo-name">BikeHub</span>
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
