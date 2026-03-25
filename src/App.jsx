import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout breadcrumbItems={[{ label: "Home", path: "/" }]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<Layout breadcrumbItems={[{ label: "Home", path: "/" }, { label: "Shop" }]} />}>
          <Route path="/shop" element={<Shop />} />
        </Route>

        <Route element={<Layout breadcrumbItems={[{ label: "Home", path: "/" }, { label: "Shop", path: "/shop" }, { label: "Product" }]} />}>
          <Route path="/product/:id" element={<SingleProduct />} />
        </Route>

        <Route element={<Layout breadcrumbItems={[{ label: "Home", path: "/" }, { label: "Cart" }]} />}>
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route element={<Layout breadcrumbItems={[{ label: "Home", path: "/" }, { label: "Checkout" }]} />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        <Route element={<Layout breadcrumbItems={[{ label: "Home", path: "/" }, { label: "Wishlist" }]} />}>
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>

        <Route element={<Layout breadcrumbItems={[{ label: "Home", path: "/" }, { label: "Login" }]} />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<Layout breadcrumbItems={[{ label: "Home", path: "/" }, { label: "Sign Up" }]} />}>
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<Layout breadcrumbItems={[{ label: "Home", path: "/" }, { label: "Profile" }]} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

      </Routes>
    </CartProvider>
  );
}

export default App;