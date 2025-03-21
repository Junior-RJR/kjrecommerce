"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

const products = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: 1999.99,
    oldPrice: 2499.99,
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "Eletrônicos",
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Notebook Ultra",
    price: 4599.99,
    oldPrice: null,
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=400",
    category: "Eletrônicos",
    isNew: true,
    isSale: false,
  },
  {
    id: 3,
    name: "Tênis Esportivo",
    price: 299.99,
    oldPrice: 399.99,
    rating: 4.2,
    image: "/placeholder.svg?height=400&width=400",
    category: "Calçados",
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: "Camiseta Casual",
    price: 89.99,
    oldPrice: null,
    rating: 4.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Roupas",
    isNew: false,
    isSale: false,
  },
  {
    id: 5,
    name: "Fone de Ouvido Bluetooth",
    price: 199.99,
    oldPrice: 249.99,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=400",
    category: "Eletrônicos",
    isNew: false,
    isSale: true,
  },
  {
    id: 6,
    name: "Relógio Inteligente",
    price: 899.99,
    oldPrice: 1099.99,
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=400",
    category: "Eletrônicos",
    isNew: true,
    isSale: true,
  },
  {
    id: 7,
    name: "Mochila Resistente",
    price: 149.99,
    oldPrice: null,
    rating: 4.3,
    image: "/placeholder.svg?height=400&width=400",
    category: "Acessórios",
    isNew: false,
    isSale: false,
  },
  {
    id: 8,
    name: "Câmera Digital",
    price: 1299.99,
    oldPrice: 1599.99,
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Eletrônicos",
    isNew: true,
    isSale: true,
  },
]

export function ProductGrid() {
  const { toast } = useToast()
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const addToCart = (product: any) => {
    toast({
      title: "Produto adicionado",
      description: `${product.name} foi adicionado ao carrinho`,
    })
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md"
        >
          <div className="relative aspect-square overflow-hidden rounded-md">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute right-2 top-2 z-10 flex flex-col gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full bg-white"
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                <span className="sr-only">Adicionar aos favoritos</span>
              </Button>
            </div>
            {product.isNew && <Badge className="absolute left-2 top-2 z-10">Novo</Badge>}
            {product.isSale && (
              <Badge variant="destructive" className="absolute left-2 top-10 z-10">
                Oferta
              </Badge>
            )}
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
              <div className="ml-auto flex items-center gap-0.5">
                <Star className="h-3 w-3 fill-primary text-primary" />
                <span className="text-xs font-medium">{product.rating}</span>
              </div>
            </div>
            <h3 className="font-semibold">
              <Link href="#" className="line-clamp-1">
                {product.name}
              </Link>
            </h3>
            <div className="flex items-center gap-2">
              <div className="font-semibold">R$ {product.price.toFixed(2)}</div>
              {product.oldPrice && (
                <div className="text-sm text-muted-foreground line-through">R$ {product.oldPrice.toFixed(2)}</div>
              )}
            </div>
            <Button className="w-full" onClick={() => addToCart(product)}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Adicionar
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

