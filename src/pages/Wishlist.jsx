import React from "react";
import { useCart } from "../context/CartContext.jsx";
import { Button } from "react-bootstrap";

function Wishlist() {

  const { wish, addToCart, addToWish } = useCart();

  if (wish.length === 0) {
    return (
      <div className="container py-5">
        <h3>Your wishlist is empty ❤️</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <h2 className="mb-4">My Wishlist</h2>

      <div className="row g-4">

        {wish.map(item => (

          <div key={item._id} className="col-md-3">

            <div className="card h-100 shadow-sm">

              <img
                src={`http://localhost:5000/uploads/${item.image}`}
                className="card-img-top"
                alt={item.name}
              />

              <div className="card-body d-flex flex-column">

                <h6>{item.name}</h6>

                <p className="text-warning fw-bold">
                  ${item.price}
                </p>

                <div className="mt-auto">

                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => addToWish(item)}
                  >
                    Remove
                  </Button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Wishlist;