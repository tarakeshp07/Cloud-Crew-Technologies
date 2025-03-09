import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import sign from "../assets/signin.jpg";
import "./login.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) {
        tempErrors.name = "Name is required";
      } 
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
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  return (
    <div className="container">
      <div className="login-card">
        <h1 className="title">SIGN UP</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="name"
              name="name"
              className="input-field"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="error-message">{errors.name}</div>
            )}
          </div>
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
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            SIGN UP
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
        </form>
      </div>
    </div>
  );
}

export default Signup;
