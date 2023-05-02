import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Destination from "./pages/Destination";
import Support from "./pages/Support";
import Ridehistory from "./pages/Ridehistory";
import Signup from "./pages/Signup";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
           <Route path="/payment" component={Payment}></Route>
          <Route path="/destination" component={Destination}></Route>
          <Route path="/support" component={Support}></Route>
          <Route path="/Ridehistory" component={Ridehistory}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
