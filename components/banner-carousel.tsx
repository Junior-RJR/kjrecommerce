"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const banners = [
  {
    id: 1,
    title: "Ofertas Imperdíveis",
    description: "Até 50% de desconto em produtos selecionados",
    image: "/placeholder.svg?height=600&width=1200",
    link: "#",
    buttonText: "Comprar Agora",
  },
  {
    id: 2,
    title: "Nova Coleção",
    description: "Descubra as últimas tendências para esta temporada",
    image: "/placeholder.svg?height=600&width=1200",
    link: "#",
    buttonText: "Ver Coleção",
  },
  {
    id: 3,
    title: "Frete Grátis",
    description: "Em compras acima de R$ 200 para todo o Brasil",
    image: "/placeholder.svg?height=600&width=1200",
    link: "#",
    buttonText: "Saiba Mais",
  },
]

export function BannerCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current) => (current === banners.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? banners.length - 1 : current - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="relative w-full flex-none">
            <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
              <Image
                src={banner.image || "/placeholder.svg"}
                alt={banner.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">{banner.title}</h2>
                <p className="mt-4 max-w-md text-lg text-white md:text-xl">{banner.description}</p>
                <Button asChild className="mt-6">
                  <Link href={banner.link}>{banner.buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-white/80"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Anterior</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-white/80"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Próximo</span>
      </Button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === current ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Banner {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

