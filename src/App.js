import './App.css';
import Header from "./components/Header"
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>

      <div className="App">
        <Home></Home>
      </div>
    </>
  );
}

export default App;
