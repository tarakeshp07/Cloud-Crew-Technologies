import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import Backvid from "../assets/2.mp4";
import vid from "../assets/cloud1.mp4";
import sign from "../assets/signin.jpg";
import PasswordReveal from "./password";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid", formData);
      navigate("/home");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  return (
    <div className="container">
      <video autoPlay muted loop className="video">
        <source src={vid} type="video/mp4" class="v"></source>
      </video>

      <div className="login-card">
        <h1 className="title">LOG IN</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Username or Email Id"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <PasswordReveal
              className="input-field"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>

          <div className="forgot-password">
            <a href="#" className="link">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary">
            Log In
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <button type="button" className="btn social-btn">
            <FaGoogle className="icon" /> Continue with Google
          </button>

          <button type="button" className="btn social-btn">
            <AiFillApple className="icon" /> Continue with Apple
          </button>

          <div className="signup-link">
            Don't have an account?{" "}
            <a href="/signup" className="link" style={{ color: "black" }}>
              Create new
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
