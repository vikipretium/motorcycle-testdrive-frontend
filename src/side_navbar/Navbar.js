function NavBar() {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-sky-200 text-stone-800 w-1/5 space-y-4 align-middle justify-center">
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
  );
}

export default NavBar;
