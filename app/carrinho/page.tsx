"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/components/cart-context"

export default function CartPage() {
  const { toast } = useToast()
  const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart()
  const [couponCode, setCouponCode] = useState("")

  const applyCoupon = () => {
    if (!couponCode) return
    toast({
      title: "Cupom aplicado",
      description: `O cupom ${couponCode} foi aplicado com sucesso!`,
    })
    setCouponCode("")
  }

  const FREE_SHIPPING_THRESHOLD = 399.99
  const hasFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD
  const shipping = hasFreeShipping ? 0 : 25.99
  const discount = 0
  const total = subtotal + shipping - discount

  // Calcular quanto falta para frete grátis
  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal
  const progressPercentage = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)

  return (
    <div className="container py-8 md:py-12">
      <div className="flex items-center mb-8">
        <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continuar comprando
        </Link>
        <h1 className="ml-auto text-2xl font-bold md:text-3xl">Meu Carrinho</h1>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-semibold">Itens do Carrinho</h2>
                <Separator className="my-4" />
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative h-24 w-24 overflow-hidden rounded-md">
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
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Diminuir quantidade</span>
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
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
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-semibold">Resumo do Pedido</h2>
                <Separator className="my-4" />

                {/* Barra de progresso para frete grátis */}
                <div className="mb-4 space-y-2">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full transition-all duration-500 ease-in-out ${hasFreeShipping ? "bg-green-500" : "bg-primary"}`}
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

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span>{hasFreeShipping ? "Grátis" : `R$ ${shipping.toFixed(2)}`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto</span>
                      <span>-R$ {discount.toFixed(2)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Código do cupom"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={applyCoupon}>
                      Aplicar
                    </Button>
                  </div>
                  <Button className="w-full">Finalizar Compra</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 text-6xl">🛒</div>
          <h2 className="mb-2 text-xl font-semibold">Seu carrinho está vazio</h2>
          <p className="mb-6 text-muted-foreground">Parece que você ainda não adicionou nenhum produto ao carrinho</p>
          <Button asChild>
            <Link href="/">Começar a Comprar</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

