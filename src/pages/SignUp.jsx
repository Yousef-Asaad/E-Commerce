<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs"; // استدعاء كومبوننت البريدمكر

function SignUp() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Account", path: "/signup" },
    { label: "Sign Up" }
  ];

  return (
    <div className="container-fluid bg-light min-vh-100 py-5 d-flex flex-column align-items-center">

      {/* Breadcrumb فوق الكارد */}
      <div className="w-100 mb-3" style={{ maxWidth: "400px" }}>
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Card الفورم */}
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <header className="text-center mb-4">
          <h3 className="fw-bold">Create your account</h3>
          <p className="text-muted">Fill in your details to sign up</p>
        </header>

        {/* Sign Up Form */}
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your full name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm your password" />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="termsCheck" />
            <label className="form-check-label" htmlFor="termsCheck">
              I agree to the <a href="#" className="text-decoration-none">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="btn btn-warning w-100 fw-bold mb-3">
            SIGN UP
          </button>

          {/* Social Sign Up Buttons */}
          <div className="d-flex flex-column gap-2">
            <button type="button" className="btn btn-outline-secondary w-100">
              Sign up with Google
            </button>
            <button type="button" className="btn btn-outline-secondary w-100">
              Sign up with Apple
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <span className="text-muted">Already have an account?</span>{" "}
          <Link to="/login" className="text-warning fw-bold">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

=======
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs"; // استدعاء كومبوننت البريدمكر

function SignUp() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Account", path: "/signup" },
    { label: "Sign Up" }
  ];

  return (
    <div className="container-fluid bg-light min-vh-100 py-5 d-flex flex-column align-items-center">

      {/* Breadcrumb فوق الكارد */}
      <div className="w-100 mb-3" style={{ maxWidth: "400px" }}>
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Card الفورم */}
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <header className="text-center mb-4">
          <h3 className="fw-bold">Create your account</h3>
          <p className="text-muted">Fill in your details to sign up</p>
        </header>

        {/* Sign Up Form */}
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your full name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm your password" />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="termsCheck" />
            <label className="form-check-label" htmlFor="termsCheck">
              I agree to the <a href="#" className="text-decoration-none">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="btn btn-warning w-100 fw-bold mb-3">
            SIGN UP
          </button>

          {/* Social Sign Up Buttons */}
          <div className="d-flex flex-column gap-2">
            <button type="button" className="btn btn-outline-secondary w-100">
              Sign up with Google
            </button>
            <button type="button" className="btn btn-outline-secondary w-100">
              Sign up with Apple
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <span className="text-muted">Already have an account?</span>{" "}
          <Link to="/login" className="text-warning fw-bold">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

>>>>>>> 7a4ce8dd6a5e407e2d69b6276e2ce5ef1a4a4c7e
export default SignUp;