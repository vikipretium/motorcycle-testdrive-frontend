import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../imgs/logo_plain.svg';

function NavBar({ children }) {
  const [isActive, setActive] = useState(true);

  const toggleClassSidebarNavClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="relative min-h-screen md:flex w-full">
        {/* Mobile Menu */}
        <div className="py-3 text-black flex justify-between md:hidden">
          <NavLink
            className="navbar-brand flex flex-col justify-center"
            to="/homepage"
          >
            <img src={Logo} alt="Logo" className="Logo" />
          </NavLink>
          {isActive ? (
            <button
              type="button"
              className="px-3"
              onClick={toggleClassSidebarNavClass}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              className="px-3"
              onClick={toggleClassSidebarNavClass}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* SideBar Menu */}
        <div
          className={`bg-white border-r-2 w-48 space-y-4 align-middle
    justify-center absolute md:relative inset-y-0 left-0 transform lg:translate-x-0 transition duration-300 ease-in-out z-1"
     ${isActive ? '-translate-x-full' : null}`}
        >
          <NavLink
            className="navbar-brand flex flex-col justify-center"
            to="/homepage"
          >
            <img src={Logo} alt="Logo" className="Logo" />
            <span className="logo-name">BikeHub</span>
          </NavLink>
          <nav className="pt-24">
            <NavLink to="/homepage" className="no-underline">
              <p className="block py-3 px-5 rounded transition duration 300 hover:bg-lime-400 hover:text-white">
                MODELS
              </p>
            </NavLink>
            <NavLink to="/addreservation" className="no-underline">
              <p className="block py-3 px-5 rounded transition duration 300 hover:bg-lime-400 hover:text-white">
                RESERVE
              </p>
            </NavLink>
            <NavLink to="/myreservations" className="no-underline">
              <p className="block py-3 px-5 rounded transition duration 300 hover:bg-lime-400 hover:text-white">
                RESERVATIONS
              </p>
            </NavLink>
            <NavLink to="/sign-in" className="no-underline">
              <p className="block py-3 px-5 rounded transition duration 300 hover:bg-lime-400 hover:text-white">
                SIGN OUT
              </p>
            </NavLink>
          </nav>
        </div>
        {children}
      </div>
    </>
  );
}

NavBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export default NavBar;
