import { createContext, useContext, useState, useEffect } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [couponCode, setCouponCode] = useState("")
  const [discountAmount, setDiscountAmount] = useState(0)
  const [isCartLoaded, setIsCartLoaded] = useState(false)

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart")
      const savedCoupon = localStorage.getItem("coupon_code")
      const savedDiscount = localStorage.getItem("discount_amount")

      if (savedCart) {
        setCartItems(JSON.parse(savedCart))
      }

      if (savedCoupon) {
        setCouponCode(savedCoupon)
      }

      if (savedDiscount) {
        setDiscountAmount(Number.parseFloat(savedDiscount))
      }

      setIsCartLoaded(true)
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
      setIsCartLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (!isCartLoaded) return

    try {
      localStorage.setItem("cart", JSON.stringify(cartItems))

      const newSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
      setSubtotal(newSubtotal)

      if (couponCode) {
        localStorage.setItem("coupon_code", couponCode)
      }

      if (discountAmount) {
        localStorage.setItem("discount_amount", discountAmount.toString())
      }
    } catch (error) {
      console.error("Error saving cart to localStorage:", error)
    }
  }, [cartItems, couponCode, discountAmount, isCartLoaded])

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)

      if (existingItem) {
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i))
      } else {
        return [...prevItems, item]
      }
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }

    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const applyCoupon = (code) => {
    setCouponCode(code)

    // Simples lógica de cupom para demonstração
    if (code === "DESCONTO10") {
      setDiscountAmount(subtotal * 0.1) // 10% de desconto
    } else if (code === "FRETE") {
      setDiscountAmount(15) // Frete grátis (R$ 15)
    } else {
      setDiscountAmount(0)
    }
  }

  const removeCoupon = () => {
    setCouponCode("")
    setDiscountAmount(0)
    localStorage.removeItem("coupon_code")
    localStorage.removeItem("discount_amount")
  }

  const clearCart = () => {
    setCartItems([])
    setCouponCode("")
    setDiscountAmount(0)
    localStorage.removeItem("cart")
    localStorage.removeItem("shipping_cep")
    localStorage.removeItem("shipping_cost")
    localStorage.removeItem("coupon_code")
    localStorage.removeItem("discount_amount")
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        couponCode,
        discountAmount,
        applyCoupon,
        removeCoupon,
        isCartLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

