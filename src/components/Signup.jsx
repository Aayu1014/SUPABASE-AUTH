import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div>
      <form action="">
        <h2>Sign Up Today</h2>
        <p>
          Already have an account? <Link to="/signin"> Sign in!</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
