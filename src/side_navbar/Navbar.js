import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavBar({ children }) {
  const [isActive, setActive] = useState(true);

  const toggleClassSidebarNavClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="relative min-h-screen md:flex w-full">
        {/* Mobile Menu */}
        <div className="py-3 bg-gradient-to-r from-cyan-600 to-sky-400 text-gray-100 flex justify-between md:hidden">
          <span className="px-2"> Logo </span>
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
          className={`bg-gradient-to-r from-cyan-600 to-sky-200 text-stone-800 w-48 space-y-4 align-middle
    justify-center absolute md:relative inset-y-0 left-0 transform md:translate-x-0 transition duration-300 ease-in-out"
     ${isActive ? '-translate-x-full' : null}`}
        >
          <p className="py-6"> Logo </p>
          <nav>
            <Link to="/homepage">
              <p className="block py-5 px-5 rounded transition duration 300 hover:bg-blue-500 hover:text-white">
                MODELS
              </p>
            </Link>
            <Link to="/addreservation">
              <p className="block py-5 px-5 rounded transition duration 300 hover:bg-blue-500 hover:text-white">
                RESERVE
              </p>
            </Link>
            <Link to="/myreservations">
              <p className="block py-5 px-5 rounded transition duration 300 hover:bg-blue-500 hover:text-white">
                RESERVATIONS
              </p>
            </Link>
            <Link to="/auth">
              <p className="block py-5 px-5 rounded transition duration 300 hover:bg-blue-500 hover:text-white">
                SIGN OUT
              </p>
            </Link>
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
