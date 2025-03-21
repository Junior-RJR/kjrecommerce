"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-context"
import { cn } from "@/lib/utils"

export function CartSidebar() {
  const { cartItems, isCartOpen, closeCart, updateQuantity, removeFromCart, subtotal } = useCart()

  const sidebarRef = useRef(null)
  const FREE_SHIPPING_THRESHOLD = 399.99

  // Fechar o carrinho quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isCartOpen) {
        closeCart()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isCartOpen, closeCart])

  // Impedir rolagem do body quando o carrinho estiver aberto
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isCartOpen])

  // Calcular quanto falta para frete grátis
  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal
  const progressPercentage = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)
  const hasFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div
        ref={sidebarRef}
        className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background shadow-lg transition-transform duration-300 ease-in-out"
        style={{ transform: isCartOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex h-full flex-col">
          {/* Cabeçalho do carrinho */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold">Meu Carrinho</h2>
            <Button variant="ghost" size="icon" onClick={closeCart}>
              <X className="h-5 w-5" />
              <span className="sr-only">Fechar</span>
            </Button>
          </div>

          {/* Conteúdo do carrinho */}
          <div className="flex-1 overflow-auto p-4">
            {cartItems.length > 0 ? (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-md">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">R$ {item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Diminuir quantidade</span>
                          </Button>
                          <span className="w-6 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Aumentar quantidade</span>
                          </Button>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remover item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <ShoppingBag className="mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 text-lg font-semibold">Seu carrinho está vazio</h3>
                <p className="mb-6 text-sm text-muted-foreground">Adicione produtos ao seu carrinho para continuar</p>
                <Button asChild onClick={closeCart}>
                  <Link href="/">Começar a Comprar</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Rodapé do carrinho com resumo */}
          {cartItems.length > 0 && (
            <div className="border-t p-4">
              {/* Barra de progresso para frete grátis */}
              <div className="mb-4 space-y-2">
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-full transition-all duration-500 ease-in-out",
                      hasFreeShipping ? "bg-green-500" : "bg-primary",
                    )}
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="text-sm text-center">
                  {hasFreeShipping ? (
                    <span className="font-medium text-green-600">Parabéns, você conseguiu frete grátis!</span>
                  ) : (
                    <span>
                      Falta <strong>R$ {remainingForFreeShipping.toFixed(2)}</strong> para frete grátis
                    </span>
                  )}
                </p>
              </div>

              <Separator className="my-4" />

              {/* Resumo do pedido */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span>{hasFreeShipping ? "Grátis" : "Calcular na finalização"}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="grid gap-2">
                  <Button asChild className="w-full">
                    <Link href="/carrinho">Finalizar Compra</Link>
                  </Button>
                  <Button variant="outline" onClick={closeCart}>
                    Continuar Comprando
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}