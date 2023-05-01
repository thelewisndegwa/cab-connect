import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Support from './Components/Support';
import About from './Components/About';
import Ridehistory from './Components/Ridehistory';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/support" element={<Support/>}></Route>
              <Route exact path="/about" element={<About/>}></Route>
              <Route exact path='/ridehistory' element={<Ridehistory/>} ></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


