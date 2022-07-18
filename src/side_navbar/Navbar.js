function NavBar() {
  return (
    <>
      {/* Mobile Menu */}
      <div className="py-3 bg-gradient-to-r from-cyan-600 to-sky-400 text-gray-100 flex justify-between md:hidden">
        <span className="px-2"> Logo </span>
        <button type="button" className="px-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* SideBar Menu */}
      <div className="bg-gradient-to-r from-cyan-600 to-sky-200 text-stone-800 w-1/5 space-y-4 align-middle
    justify-center absolute md:relative inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-300 ease-in-out"
      >
        <p className="py-6"> Logo </p>
        <nav>
          <a href="#home" className="block py-5 px-5 rounded transition duration 300 hover:bg-blue-500 hover:text-white">
            <p> MODELS </p>
          </a>
          <a href="#home" className="block py-5 px-5 rounded transition duration 300 hover:bg-blue-500 hover:text-white">
            <p>RESERVE </p>
          </a>
          <a href="#home" className="block py-5 px-5 rounded transition duration 300 hover:bg-blue-500 hover:text-white">
            <p> MY RESERVATIONS </p>
          </a>
          <a href="#home" className="block py-5 px-5 rounded transition duration 300 hover:bg-blue-500 hover:text-white">
            <p> SIGN OUT </p>
          </a>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
