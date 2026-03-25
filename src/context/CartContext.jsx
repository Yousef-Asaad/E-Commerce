<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 6ff25c739ae5fec161a55c178b63853d5c931cf9
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wish, setWish] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id)
      if (exists) return prev.map(p => p.id === product.id ? {...p, qty: p.qty + 1} : p)
      return [...prev, {...product, qty: 1}]
    })
  }

  const addToWish = (product) => {
    setWish(prev => {
      const exists = prev.find(p => p.id === product.id)
      if (exists) return prev.filter(p => p.id !== product.id)
      return [...prev, product]
    })
  }

  return (
    <CartContext.Provider value={{ cart, wish, addToCart, addToWish }}>
      {children}
    </CartContext.Provider>
  )
}

<<<<<<< HEAD
=======
=======
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wish, setWish] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id)
      if (exists) return prev.map(p => p.id === product.id ? {...p, qty: p.qty + 1} : p)
      return [...prev, {...product, qty: 1}]
    })
  }

  const addToWish = (product) => {
    setWish(prev => {
      const exists = prev.find(p => p.id === product.id)
      if (exists) return prev.filter(p => p.id !== product.id)
      return [...prev, product]
    })
  }

  return (
    <CartContext.Provider value={{ cart, wish, addToCart, addToWish }}>
      {children}
    </CartContext.Provider>
  )
}

>>>>>>> 7a4ce8dd6a5e407e2d69b6276e2ce5ef1a4a4c7e
>>>>>>> 6ff25c739ae5fec161a55c178b63853d5c931cf9
export const useCart = () => useContext(CartContext)