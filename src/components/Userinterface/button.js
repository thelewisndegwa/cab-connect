import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Button.css";

// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function Buttonn() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Link to="signup">
        <button className="btn" variant="outlined" onClick={handleClickOpen} >
          <Icons.FaUserPlus />
          <span>Log In</span>
        </button>

        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log In</DialogTitle>
       
        <DialogContent>
          <DialogContentText>
         Fill in the following details
          </DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />


          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />

<TextField
            required
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Log In</Button>
        </DialogActions>
      </Dialog>
      </Link>
    </>
  );
}

export default Buttonn;
