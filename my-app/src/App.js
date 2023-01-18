import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './Component/NavbarComponet/Navbar';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
