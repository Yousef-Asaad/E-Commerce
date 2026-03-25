<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 6ff25c739ae5fec161a55c178b63853d5c931cf9
// src/components/Breadcrumbs.jsx
import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${index === items.length - 1 ? "active" : ""}`}
            aria-current={index === items.length - 1 ? "page" : undefined}
          >
            {index === items.length - 1 ? (
              item.label
            ) : (
              <Link to={item.path} className="text-decoration-none">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

<<<<<<< HEAD
=======
=======
// src/components/Breadcrumbs.jsx
import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${index === items.length - 1 ? "active" : ""}`}
            aria-current={index === items.length - 1 ? "page" : undefined}
          >
            {index === items.length - 1 ? (
              item.label
            ) : (
              <Link to={item.path} className="text-decoration-none">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

>>>>>>> 7a4ce8dd6a5e407e2d69b6276e2ce5ef1a4a4c7e
>>>>>>> 6ff25c739ae5fec161a55c178b63853d5c931cf9
export default Breadcrumbs;