import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";





function Login() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, guestLogin } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        emailOrMobile,
        password
      });

      login(res.data.token, res.data.name);
      alert(res.data.message); // "Login successful"
      navigate("/"); // redirect to home
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const handleGuest = () => {
    guestLogin();
    alert("Logged in as Guest!");
    navigate("/"); // direct to home
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Email or Mobile"
          value={emailOrMobile}
          onChange={(e) => setEmailOrMobile(e.target.value)}
          required
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <button onClick={handleGuest}>Login as Guest</button>

      <p>
        Don't have an account?{" "}
        <Link to="/Signup" >
        Sign up
        </Link>
      </p>

    </div>
  );
}

export default Login;
