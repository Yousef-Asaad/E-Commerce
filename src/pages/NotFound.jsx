import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h1 style={{ fontSize: "60px" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>

      <Link to="/" style={{ marginTop: "20px", display: "inline-block" }}>
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;