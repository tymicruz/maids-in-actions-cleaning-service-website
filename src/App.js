import './App.css';
import Header from "./components/Header"
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useRef } from 'react';
import AboutUs from './components/AboutUs';
import Services from './components/Services';

function App() {

  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()

  return (


    <>
      <Header></Header>
      <Navbar handleClick={executeScroll}></Navbar>

      <div className="App">
        <Home></Home>

        <Services></Services>
        <AboutUs></AboutUs>
      </div>
    </>
  );
}

export default App;
