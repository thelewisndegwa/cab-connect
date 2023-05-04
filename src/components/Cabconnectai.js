import React, { useState } from 'react';
import "./Cabconnectai.css";

function Cabconnect() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.toLowerCase() === 'hello') {
      setMessage('Hello!');
    } else if (input.toLowerCase() === 'report driver') {
      // Display a popup form here for the user to input report messages
      // and submit them to the server.
      setMessage('Report driver form will be displayed here.');
    } else {
      setMessage('Sorry, I did not understand your input.');
    }
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="text" value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Cabconnect;
