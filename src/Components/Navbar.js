import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
      <>
   
      <nav >
        
      <ul>
        <li><h3>Logo</h3></li>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/support" className="nav-link">Support</Link></li>
        <li><Link to="/ridehistory" className="nav-link">Ride History</Link></li>
      </ul>
    </nav>
      </>
         
    )
}

export default Navbar;