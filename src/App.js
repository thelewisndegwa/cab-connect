import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Userinterface/Navbar";
import Home from "./components/Userinterface/home";
import Payment from "./components/Payment";
import Destination from "./components/Userinterface/destination";
import Support from "./components/support";
import Ridehistory from "./components/Ridehistory";
import Signup from "./components/Userinterface/Signup";
import About from "./components/about";
import Testmapform from "./components/Testmapform";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home}></Route>
           <Route path="/payment" component={Payment}></Route>
          <Route path="/destination" component={Destination}></Route>
          <Route path="/support" component={Support}></Route>
          <Route path="/Ridehistory" component={Ridehistory}></Route>
          {/* <Route path="/signup" component={Signup}></Route> */}
          <Route path="/about" component={About}></Route>
          <Route path="/Testmapform" component={Testmapform}></Route>
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
