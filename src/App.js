import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Payment from "./components/Payment";
import Destination from "./components/destination";
import Support from "./components/support";
import Ridehistory from "./components/Ridehistory";
//import Signup from "./components/Signup";
import About from "./components/about";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
