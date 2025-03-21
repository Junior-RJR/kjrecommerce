"use client"

import { CartProvider } from "@/components/cart-context"
import { CartSidebar } from "@/components/cart-sidebar" // Importar o componente CartSidebar
import Header from "@/src/JS/Header"
import Footer from "@/src/JS/Footer"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartSidebar /> {/* Adicionar o componente CartSidebar */}
        </CartProvider>
      </body>
    </html>
  )
}