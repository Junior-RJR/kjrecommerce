"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"

export function Header() {
  const { toggleCart, itemCount } = useCart()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl">LojaBR</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Início
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Produtos
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Categorias
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Ofertas
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative" onClick={toggleCart} aria-label="Abrir carrinho">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              {itemCount}
            </span>
          </button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Entrar
          </Button>
          <Button size="sm" className="hidden md:flex">
            Cadastrar
          </Button>
        </div>
      </div>
    </header>
  )
}

