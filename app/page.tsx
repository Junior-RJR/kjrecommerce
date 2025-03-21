import Link from "next/link"
import { Header } from "@/components/header"
import { BannerCarousel } from "@/components/banner-carousel"
import { ProductGrid } from "@/components/product-grid"
import { FeaturedCategories } from "@/components/featured-categories"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-6">
          <BannerCarousel />
        </section>
        <section className="container py-8 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Categorias em Destaque</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Explore nossa seleção de produtos de alta qualidade em diversas categorias
            </p>
          </div>
          <FeaturedCategories />
        </section>
        <section className="container py-8 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Produtos em Destaque</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Confira nossos produtos mais vendidos e novidades
            </p>
          </div>
          <ProductGrid />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <NewsletterSignup />
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 LojaBR. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Termos
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Privacidade
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Sobre
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

