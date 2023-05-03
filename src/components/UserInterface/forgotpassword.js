import React from "react";

function ForgotPasswordForm() {
  return (
    <div>
      <form className="form">
        <h2>Forgot Password</h2>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
