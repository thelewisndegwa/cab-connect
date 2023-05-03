import React from "react";

function Loginform() {
  return (
    <div>
      <form className="form">
        <h2>Login</h2>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Loginform;
