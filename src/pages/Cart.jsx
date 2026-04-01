
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { Button } from "react-bootstrap";

function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();//ده بيجيب ال cart من ال context عشان نقدر نعرضه و نعدل عليه
// حساب السعر الإجمالي
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
// لو الكارت فاضي
  if (cart.length === 0) return <div className="container py-5"><h3>Your cart is empty</h3></div>

  return (
    <div className="container py-5">
      <h2>Shopping Cart</h2>
      <div className="row">
        <div className="col-md-8">
          {cart.map(item => (
            <div key={item._id} className="d-flex align-items-center mb-3 border p-2">
              <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.name} width="80" className="me-3"/>
              <div className="flex-grow-1">
                <h6>{item.name}</h6>
                <p>${item.price}</p>
              </div>
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => updateQty(item._id, Number(e.target.value))}
                className="form-control w-auto me-2"
              />
              <Button variant="danger" size="sm" onClick={() => removeFromCart(item._id)}>Remove</Button>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="border p-3">
            <h5>Total: ${totalPrice}</h5>
            <Link to="/checkout">
           <Button variant="warning" className="w-100">
                Checkout
            </Button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;