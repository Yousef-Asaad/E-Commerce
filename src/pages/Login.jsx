import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid bg-light min-vh-100 py-5 d-flex flex-column align-items-center">
      {/* Card الفورم */}
      <div className="card shadow p-4" style={{ maxWidth: "420px", width: "100%" }}>
        <header className="text-center mb-4">
          <h3 className="fw-bold">Sign in to your account</h3>
          <p className="text-muted">Enter your email & password to access your account</p>
        </header>

        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="text-decoration-none">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-save fw-bold px-4 text-white"
                  style={{ background: '#f07b2d', border: '2px solid #f07b2d' }}>
            SIGN IN
          </button>
        </form>

        <div className="text-center mt-4">
          <span className="text-muted">Don't have an account?</span>{" "}
          <Link to="/signup" className="text-warning fw-bold">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;