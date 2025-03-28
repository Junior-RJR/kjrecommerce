import { useState, useEffect } from "react"
import { useCart } from "./CartContext"
import "../css/CartSidebar.css"
import { useNavigate } from "react-router-dom"

function CartSidebar({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart()
  const [cep, setCep] = useState("")
  const [isCalculatingShipping, setIsCalculatingShipping] = useState(false)
  const [shippingCost, setShippingCost] = useState(null)
  const [showAnimation, setShowAnimation] = useState(false)
  const navigate = useNavigate()
  const [couponCode, setCouponCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [couponError, setCouponError] = useState(null)
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)

  const freeShippingThreshold = 200
  const freeShippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100)
  const remainingForFreeShipping = freeShippingThreshold - subtotal

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setShowAnimation(true)
      }, 100)
    } else {
      setShowAnimation(false)
    }

    const savedCep = localStorage.getItem("shipping_cep")
    if (savedCep) {
      setCep(savedCep)
    }

    const savedCost = localStorage.getItem("shipping_cost")
    if (savedCost) {
      setShippingCost(Number.parseFloat(savedCost))
    }

    const savedCoupon = localStorage.getItem("coupon_code")
    const savedDiscount = localStorage.getItem("discount_amount")
    if (savedCoupon) {
      setCouponCode(savedCoupon)
    }
    if (savedDiscount) {
      setDiscount(Number.parseFloat(savedDiscount))
    }
  }, [isOpen])

  const handleCepChange = (e) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length > 8) {
      value = value.slice(0, 8)
    }

    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5)
    }

    setCep(value)
  }

  const calculateShipping = () => {
    if (cep.length < 8) return

    setIsCalculatingShipping(true)

    setTimeout(() => {
      const cost = subtotal >= freeShippingThreshold ? 0 : Math.floor(Math.random() * 15) + 15
      setShippingCost(cost)
      setIsCalculatingShipping(false)

      localStorage.setItem("shipping_cep", cep)
      localStorage.setItem("shipping_cost", cost.toString())
    }, 1000)
  }

  const applyCoupon = () => {
    if (!couponCode) return

    setIsApplyingCoupon(true)
    setCouponError("")

    setTimeout(() => {
      if (couponCode.toUpperCase() === "DESCONTO10") {
        const discountAmount = subtotal * 0.1 // 10% de desconto
        setDiscount(discountAmount)
        localStorage.setItem("coupon_code", couponCode)
        localStorage.setItem("discount_amount", discountAmount.toString())
      } else if (couponCode.toUpperCase() === "FRETE") {
        setShippingCost(0)
        localStorage.setItem("shipping_cost", "0")
        localStorage.setItem("coupon_code", couponCode)
        localStorage.setItem("discount_amount", "0")
      } else {
        setCouponError("Cupom inválido ou expirado")
      }

      setIsApplyingCoupon(false)
    }, 1000)
  }

  const handleCheckout = () => {
    onClose()
    navigate("/checkout")
  }

  if (!isOpen) return null

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className={`cart-sidebar ${showAnimation ? "show" : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2 className="cart-title">Seu Carrinho</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <p className="empty-cart-message">Seu carrinho está vazio</p>
            <button className="primary-button" onClick={onClose}>
              Continuar Comprando
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={item.id} className="cart-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="cart-item-image">
                    <img src={item.image || "/placeholder.jpg"} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">R$ {item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button className="quantity-button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button className="quantity-button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                      ✕
                    </button>
                    <p className="cart-item-total">R$ {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="shipping-calculator">
                <h3 className="shipping-title">Calcular Frete</h3>
                <div className="shipping-form">
                  <input
                    type="text"
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={handleCepChange}
                    maxLength={9}
                    className="cep-input"
                  />
                  <button
                    className="calculate-button"
                    onClick={calculateShipping}
                    disabled={cep.length < 8 || isCalculatingShipping}
                  >
                    {isCalculatingShipping ? "Calculando..." : "Calcular"}
                  </button>
                </div>

                {shippingCost !== null && (
                  <p className="shipping-result">
                    Frete: {shippingCost === 0 ? "Grátis! 🎉" : `R$ ${shippingCost.toFixed(2)}`}
                  </p>
                )}
              </div>

              <div className="free-shipping-progress">
                <div className="progress-info">
                  <span>Progresso para frete grátis:</span>
                  <span className="remaining-value">
                    {subtotal >= freeShippingThreshold
                      ? "Frete grátis aplicado!"
                      : `Faltam R$ ${remainingForFreeShipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${freeShippingProgress}%` }}></div>
                </div>
                {subtotal >= freeShippingThreshold && (
                  <p className="free-shipping-message">Eba! Você conseguiu frete grátis!</p>
                )}
              </div>

              <div className="coupon-section">
                <h3 className="coupon-title">Cupom de Desconto</h3>
                <div className="coupon-form">
                  <input
                    type="text"
                    placeholder="Digite seu cupom"
                    className="coupon-input"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button
                    className="apply-coupon-button"
                    onClick={applyCoupon}
                    disabled={!couponCode || isApplyingCoupon}
                  >
                    {isApplyingCoupon ? "Aplicando..." : "Aplicar"}
                  </button>
                </div>
                {discount > 0 && <p className="coupon-success">Cupom aplicado! Desconto de R$ {discount.toFixed(2)}</p>}
                {couponError && <p className="coupon-error">{couponError}</p>}
              </div>

              <div className="cart-summary">
                <div className="subtotal-row">
                  <span>Subtotal:</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>

                {shippingCost !== null && (
                  <>
                    {discount > 0 && (
                      <div className="discount-row">
                        <span>Desconto:</span>
                        <span>-R$ {discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="shipping-row">
                      <span>Frete:</span>
                      <span>{shippingCost === 0 ? "Grátis" : `R$ ${shippingCost.toFixed(2)}`}</span>
                    </div>
                    <div className="total-row">
                      <span>Total:</span>
                      <span>R$ {(subtotal + shippingCost - discount).toFixed(2)}</span>
                    </div>
                  </>
                )}

                <button className="checkout-button" onClick={handleCheckout}>
                  Finalizar Compra
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartSidebar

