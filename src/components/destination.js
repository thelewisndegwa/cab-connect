import React from 'react';

function Destination() {
  return (
    <div>
      <form className="loca">
        <label>Pick up</label>
        <input type="location" />
        <label>Drop off Point</label>
        <input type="location" />
      </form>
    </div>
  );
}

export default Destination;
