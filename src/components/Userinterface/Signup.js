import React from "react";

function SignupForm() {
  return (
    <div>
      <form className="form">
        <h2>Sign Up</h2>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div> 
  );
}

export default SignupForm;
