import './App.css';
import NavBar from './side_navbar/Navbar';

function App() {
  return (
    <div className="App relative min-h-screen flex">
      <NavBar />
      <div>
        {' '}
        {/* Put all other content in this div  */}
        <h1>Motocycle Book</h1>
        Other Content Goes Here
      </div>
    </div>
  );
}

export default App;
