import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wish, setWish] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p._id === product._id)
      if (exists) return prev.map(p => p._id === product._id ? {...p, qty: p.qty + 1} : p)
      return [...prev, {...product, qty: 1}]
    })
  }

  const addToWish = (product) => {
    setWish(prev => {
      const exists = prev.find(p => p._id === product._id)
      if (exists) return prev.filter(p => p._id !== product._id)
      return [...prev, product]
    })
  }

  // ✅ أضفنا دالة clearCart
  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, wish, addToCart, addToWish, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)