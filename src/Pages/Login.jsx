import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login.css";
import api from "../api/api";

function Login() {
    const navigate = useNavigate()
    const[formData , setFormData]=useState({
        email:"",
        password:""
    })
    // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      alert(response.data.message);

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      // Navigate to Home
      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-8 col-lg-6 col-xl-5">

            <div className="register-card shadow-lg">

              <div className="text-center mb-4">
                <h2 className="fw-bold">Welcome Back</h2>
                <p className="text-muted">
                  Sign in to continue to your account.
                </p>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control custom-input"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn register-btn w-100">
                  Login
                </button>

                <p className="text-center mt-3">
                  <a href="/" className="forgot-link">
                    Forgot Password?
                  </a>
                </p>

                <p className="text-center mt-3 text-muted">
                  Don't have an account?
                  <Link to="/register" className="login-link text-decoration-none">
                    {" "}Register
                  </Link>
                </p>

              </form>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;