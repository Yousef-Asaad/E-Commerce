import React, { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { Button, Form } from "react-bootstrap";
import API from "../services/api"; // تأكد إن API معرف صح

function Checkout() {
  const { cart, clearCart } = useCart();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [message, setMessage] = useState("");

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!name || !address || !email) {
      setMessage("Please fill all fields");
      return;
    }

    if (paymentMethod === "Card") {
      if (!cardNumber || !expiry || !cvv) {
        setMessage("Please fill card information");
        return;
      }
    }

    const orderData = {
      customer: { name, email, address },
      items: cart.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        qty: item.qty,
        image: item.image
      })),
      totalPrice
    };

    try {
      await API.post("/api/orders", orderData); // المسار مضبوط
      setMessage("Order placed successfully!");
      clearCart(); // مسح الكارت بعد الطلب
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong, please try again.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>

      <div className="row">
        {/* Customer Form */}
        <div className="col-md-6">
          <Form onSubmit={handlePlaceOrder}>
            <h5 className="mb-3">Customer Information</h5>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </Form.Group>

            {/* Payment Method */}
            <h5 className="mt-4 mb-3">Payment Method</h5>
            <Form.Check
              type="radio"
              label="Cash on Delivery"
              name="payment"
              checked={paymentMethod === "Cash"}
              onChange={() => setPaymentMethod("Cash")}
            />
            <Form.Check
              type="radio"
              label="Credit Card"
              name="payment"
              checked={paymentMethod === "Card"}
              onChange={() => setPaymentMethod("Card")}
            />

            {paymentMethod === "Card" && (
              <div className="mt-3 border rounded p-3">
                <Form.Group className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="text" placeholder="1234 5678 9012 3456" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                </Form.Group>

                <div className="row">
                  <div className="col">
                    <Form.Group>
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control type="text" placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
                    </Form.Group>
                  </div>

                  <div className="col">
                    <Form.Group>
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="password" placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} />
                    </Form.Group>
                  </div>
                </div>
              </div>
            )}

            <Button type="submit" variant="warning" className="mt-4 w-100">
              Place Order
            </Button>

            {/* رسالة النجاح أو الفشل */}
            {message && (
              <p className={`mt-3 fw-bold ${message.includes("successfully") ? "text-success" : "text-danger"}`}>
                {message}
              </p>
            )}
          </Form>
        </div>

        {/* Order Summary */}
        <div className="col-md-6">
          <div className="border rounded p-4 shadow-sm">
            <h5 className="mb-3">Order Summary</h5>
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name} x {item.qty}
                  <span>${item.price * item.qty}</span>
                </li>
              ))}
            </ul>
            <h5 className="fw-bold">Total: ${totalPrice}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;