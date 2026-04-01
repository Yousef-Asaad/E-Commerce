import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {

      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setMessage("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-5 d-flex flex-column align-items-center">

      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>

        <header className="text-center mb-4">
          <h3 className="fw-bold">Create your account</h3>
          <p className="text-muted">Fill in your details to sign up</p>
        </header>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-save w-100 fw-bold px-4 text-white"
            style={{ background: '#f07b2d', border: '2px solid #f07b2d' }}
          >
            SIGN UP
          </button>

        </form>

        {message && (
          <div className="alert alert-info mt-3 text-center">
            {message}
          </div>
        )}

        <div className="text-center mt-4">
          <span className="text-muted">Already have an account?</span>{" "}
          <Link to="/login" className="text-warning fw-bold">Sign in</Link>
        </div>

      </div>

    </div>
  );
}

export default SignUp;