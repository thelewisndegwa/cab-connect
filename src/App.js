import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Userinterface/Navbar";
import Home from "./components/Userinterface/home";
import Payment from "./components/Payment";
import Ridehistory from "./components/Ridehistory";
import About from "./components/about";
import Testmapform from "./components/Testmapform";
import Destination from "./components/Userinterface/destination";
import SignupForm from "./components/Userinterface/Signup";
import Footer from "./components/Footer";
import Chatbox from "./components/Chatbox";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/Ridehistory" element={<Ridehistory />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/Testmapform" element={<Testmapform />} />
        </Routes>
      </BrowserRouter>
      <Chatbox />
      <Footer />
    </div>
  );
}

export default App;
