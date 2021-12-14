import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    username: "",
    password: "",
    mobile: "",
  });

  const onFormSubmit = () => {
    axios.post("http://localhost:4000/register", values).then((res) => {
      window.location.href = "/login";
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <p className="form-title">Create Your Account</p>

        <div className="input-container">
          <p className="input-label">Name</p>
          <input
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            placeholder="Enter Your Name"
            className="form-input"
          />
        </div>

        <div className="input-container">
          <p className="input-label">Username</p>
          <input
            type="text"
            value={values.username}
            onChange={(e) => setValues({ ...values, username: e.target.value })}
            placeholder="Enter Your Username"
            className="form-input"
          />
        </div>

        <div className="input-container">
          <p className="input-label">Password</p>
          <input
            type="password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            placeholder="Enter Your Password"
            className="form-input"
          />
        </div>

        <div className="input-container">
          <p className="input-label">Mobile Number</p>
          <input
            type="text"
            value={values.mobile}
            onChange={(e) => setValues({ ...values, mobile: e.target.value })}
            placeholder="Enter Your Mobile Number"
            className="form-input"
          />
        </div>

        <div>
          <button type="button" onClick={onFormSubmit} className="button">
            {" "}
            Create Account
          </button>
          <p>
            Already have account ? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
