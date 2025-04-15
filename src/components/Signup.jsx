import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../Context/ContextAuth";

function Signup() {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { session } = userAuth();
  console.log(session);
  return (
    <div>
      <form action="">
        <h2>Sign Up Today</h2>
        <p>
          Already have an account? <Link to="/signin"> Sign in!</Link>
        </p>
        <div className="flex flex-col py-4">
          <input
            className="p-3 mt-4 bg-amber-200"
            placeholder="Email Id"
            type="email"
            name=""
            id=""
          />
          <input
            className="p-3 mt-4 bg-amber-300"
            placeholder="password"
            type="password"
            name=""
            id=""
          />
          <button className="mt-4 bg-blue-400 w-full" disabled={loading}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
