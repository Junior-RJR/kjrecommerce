import { useState } from "react"
import { useCart } from "./CartContext"
import CartSidebar from "./CartSidebar"
import logo from "../../images/logo.svg";
import "../css/Header.css"

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartItems } = useCart()

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          <img src={logo} alt="RJR Ecommerce" className="logo-image" />

        </a>

        <nav className="main-nav">
          <a href="/" className="nav-link">
            Início
          </a>
          <a href="/produtos" className="nav-link">
            Produtos
          </a>
          <a href="/categorias" className="nav-link">
            Categorias
          </a>
          <a href="/ofertas" className="nav-link">
            Ofertas
          </a>
          <a href="/contato" className="nav-link">
            Contato
          </a>
        </nav>

        <div className="header-actions">
          <div className="search-container">
            <i className="search-icon">🔍</i>
            <input type="search" placeholder="Buscar produtos..." className="search-input" />
          </div>

          <button className="icon-button cart-button" onClick={() => setIsCartOpen(true)}>
            <i className="cart-icon">🛒</i>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>

          <a href="/login" className="icon-button">
            <i className="user-icon">👤</i>
          </a>
        </div>
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}

export default Header

