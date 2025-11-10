import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import tplogo from "../assets/tplogo_white_png.png";

function Signup() {
  const [name, setName] = useState("");
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
        name,
        emailOrMobile,
        password,
      });

      alert(res.data.message || "Account created successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="wrap">
      <div className="glass">
        <div className="logo_login">
          <img src={tplogo} height="auto" width="150px" alt="" />
        </div>

        

        <h4>Create Account</h4>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="inputbox"
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Email or Mobile"
            value={emailOrMobile}
            onChange={(e) => setEmailOrMobile(e.target.value)}
            required
            className="inputbox"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="inputbox"
          />
          <br />
          <br />
          <button type="submit" className="animated-button">Sign Up</button>
        </form>

        <br />
        <br />
        <p>
          Already have an account?
          <br />
          <br />
          <Link to="/login" className="animated-button">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
