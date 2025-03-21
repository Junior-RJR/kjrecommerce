"use client"

import { useRef } from "react"
import "../CSS/BestSellers.css"

function BestSellers() {
  const carouselRef = useRef(null)

  const products = [1, 2, 3, 4, 5, 6]

  const scrollPrev = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth
      carouselRef.current.scrollBy({ left: -width / 2, behavior: "smooth" })
    }
  }

  const scrollNext = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth
      carouselRef.current.scrollBy({ left: width / 2, behavior: "smooth" })
    }
  }

  return (
    <section className="bestsellers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mais Vendidos</h2>
        </div>
        <div className="bestsellers-carousel-container">
          <div ref={carouselRef} className="bestsellers-carousel">
            {products.map((item) => (
              <div key={item} className="bestseller-card">
                <div className="product-image-container">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=Produto ${item}`}
                    alt={`Produto ${item}`}
                    className="product-image"
                  />
                  <button className="favorite-button" aria-label="Adicionar aos favoritos">
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
                </div>
                <div className="product-info">
                  <h3 className="product-title">Produto Bestseller {item}</h3>
                  <div className="product-price">
                    <span className="current-price">R$ {(199 + item * 100).toFixed(2).replace(".", ",")}</span>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="add-to-cart-button">Adicionar ao Carrinho</button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={scrollPrev} className="carousel-control prev" aria-label="Anterior">
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
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button onClick={scrollNext} className="carousel-control next" aria-label="Próximo">
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default BestSellers

