import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // يمنع refresh للصفحة

    try {

      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message); // الخطأ هيتسجل في الكونسول
      }

      // حفظ التوكن و بيانات المستخدم في localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // الانتقال لصفحة البروفايل بعد تسجيل الدخول
      navigate("/profile");

    } catch (error) {
      console.log(error.message); // بدل عرض alert، بس هيتسجل في الكونسول
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-5 d-flex flex-column align-items-center">

      <div className="card shadow p-4" style={{ maxWidth: "420px", width: "100%" }}>

        <header className="text-center mb-4">
          <h3 className="fw-bold">Sign in to your account</h3>
          <p className="text-muted">Enter your email & password to access your account</p>
        </header>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-save fw-bold px-4 text-white w-100"
            style={{ background: '#f07b2d', border: '2px solid #f07b2d' }}
          >
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