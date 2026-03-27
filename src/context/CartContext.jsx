import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wish, setWish] = useState(() => {
    const savedWish = localStorage.getItem("wish");
    return savedWish ? JSON.parse(savedWish) : [];
  });

  // حفظ الكارت في LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // حفظ الـ wishlist
  useEffect(() => {
    localStorage.setItem("wish", JSON.stringify(wish));
  }, [wish]);


  // إضافة منتج للكارت
  const addToCart = (product) => {
    setCart(prev => {

      const exists = prev.find(p => p._id === product._id);

      if (exists) {
        return prev.map(p =>
          p._id === product._id
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };


  // حذف منتج
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p._id !== id));
  };


  // تعديل الكمية
  const updateQty = (id, qty) => {
    setCart(prev =>
      prev.map(p =>
        p._id === id ? { ...p, qty } : p
      )
    );
  };


  // إضافة للـ wishlist
  const addToWish = (product) => {

    setWish(prev => {

      const exists = prev.find(p => p._id === product._id);

      if (exists) {
        return prev.filter(p => p._id !== product._id);
      }

      return [...prev, product];

    });

  };


  return (
    <CartContext.Provider
      value={{
        cart,
        wish,
        addToCart,
        removeFromCart,
        updateQty,
        addToWish
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);