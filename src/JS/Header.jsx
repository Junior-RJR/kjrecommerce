"use client"

import { useState } from "react"
import "../CSS/Header.css"
import logo from "../images/logo.svg"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button
            className="menu-button mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <a href="/" className="logo">
            <img src={logo || "/placeholder.svg"} alt="LojaBrasil Logo" className="logo-image" />
          </a>
        </div>

        <nav className={`main-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <a href="#" className="nav-link">
            Início
          </a>
          <a href="#" className="nav-link">
            Produtos
          </a>
          <a href="#" className="nav-link">
            Categorias
          </a>
          <a href="#" className="nav-link">
            Ofertas
          </a>
          <a href="#" className="nav-link">
            Contato
          </a>
        </nav>

        <div className="header-right">
          <div className="search-container desktop-only">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="search" placeholder="Buscar produtos..." className="search-input" />
          </div>
          <button className="icon-button desktop-only" aria-label="Favoritos">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button className="icon-button cart-button" aria-label="Carrinho">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-badge">3</span>
          </button>
          <button className="login-button desktop-only">Entrar</button>
          <button className="icon-button mobile-only" aria-label="Buscar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-container">
            <div className="mobile-menu-header">
              <img src={logo || "/placeholder.svg"} alt="LojaBrasil Logo" className="mobile-logo" />
              <button className="close-menu-button" onClick={() => setMobileMenuOpen(false)} aria-label="Fechar menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="mobile-search">
              <input type="search" placeholder="Buscar produtos..." className="mobile-search-input" />
            </div>
            <nav className="mobile-nav">
              <a href="#" className="mobile-nav-link">
                Início
              </a>
              <a href="#" className="mobile-nav-link">
                Produtos
              </a>
              <a href="#" className="mobile-nav-link">
                Categorias
              </a>
              <a href="#" className="mobile-nav-link">
                Ofertas
              </a>
              <a href="#" className="mobile-nav-link">
                Contato
              </a>
              <a href="#" className="mobile-nav-link">
                Minha Conta
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

