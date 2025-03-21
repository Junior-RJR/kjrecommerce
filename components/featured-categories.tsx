import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Eletrônicos",
    image: "/placeholder.svg?height=300&width=300",
    count: 120,
  },
  {
    id: 2,
    name: "Roupas",
    image: "/placeholder.svg?height=300&width=300",
    count: 250,
  },
  {
    id: 3,
    name: "Calçados",
    image: "/placeholder.svg?height=300&width=300",
    count: 80,
  },
  {
    id: 4,
    name: "Acessórios",
    image: "/placeholder.svg?height=300&width=300",
    count: 150,
  },
]

export function FeaturedCategories() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {categories.map((category) => (
        <Link key={category.id} href="#" className="group relative overflow-hidden rounded-lg">
          <div className="relative aspect-square overflow-hidden rounded-md">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="text-sm">{category.count} produtos</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

