"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

type CartContextType = {
  cartItems: CartItem[]
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  subtotal: number
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

// Itens iniciais do carrinho para demonstração
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: 1999.99,
    image: "/placeholder.svg?height=200&width=200",
    quantity: 1,
  },
  {
    id: 5,
    name: "Fone de Ouvido Bluetooth",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
    quantity: 2,
  },
]

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [subtotal, setSubtotal] = useState(0)
  const [itemCount, setItemCount] = useState(0)

  // Calcular subtotal e contagem de itens quando o carrinho mudar
  useEffect(() => {
    const newSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    const newItemCount = cartItems.reduce((count, item) => count + item.quantity, 0)

    setSubtotal(newSubtotal)
    setItemCount(newItemCount)
  }, [cartItems])

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen(!isCartOpen)

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)

      if (existingItem) {
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i))
      } else {
        return [...prevItems, item]
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return

    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart deve ser usado dentro de um CartProvider")
  }
  return context
}

