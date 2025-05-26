import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../Context/ContextAuth";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { session, signUpNewUser } = userAuth();
  const navigate = useNavigate();

  console.log(session);

  const hndlesignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError("Error signing up. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSignup} action="">
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
