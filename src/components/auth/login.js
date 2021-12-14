import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onFormSubmit = () => {
    axios.post("http://localhost:4000/login", values).then((res) => {
      if (res.data.status === true) {
        localStorage.setItem("user", JSON.stringify(values));
        window.location.href = "/home";
      } else {
        alert("Wrong username or password");
      }
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <p className="form-title">Login Your Account</p>

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

        <div>
          <button type="button" onClick={onFormSubmit} className="button">
            {" "}
            Login
          </button>
          <p>
            Dont have account ? <Link to="/">Rigister</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
