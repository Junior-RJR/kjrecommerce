"use client"

import { useState, useEffect, useRef } from "react"
import "../CSS/Banner.css"
import banner1 from "../images/banner/01.jpg"
import banner2 from "../images/banner/02.jpg"
import banner3 from "../images/banner/03.jpg"

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3
  const intervalRef = useRef(null)

  const slides = [
    {
      title: "Coleção Verão 2025",
      description: "Descubra as últimas tendências com até 40% de desconto em produtos selecionados.",
      cta: "Comprar Agora",
      secondaryCta: "Ver Coleção",
      color: "primary",
      image: banner1,
    },
    {
      title: "Novos Eletrônicos",
      description: "As últimas novidades em tecnologia com preços imperdíveis.",
      cta: "Ver Ofertas",
      secondaryCta: "Saiba Mais",
      color: "blue",
      image: banner2,
    },
    {
      title: "Moda Esportiva",
      description: "Equipamentos e roupas para todas as suas atividades físicas.",
      cta: "Explorar",
      secondaryCta: "Ver Categorias",
      color: "green",
      image: banner3,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    // Start autoplay
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 5000)

    // Clean up interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <section className="banner">
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-slide ${slide.color}`}>
              <div className="slide-gradient"></div>
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="slide-image" />
              <div className="slide-content">
                <div className="container">
                  <div className="slide-text">
                    <span className="slide-badge">Destaque</span>
                    <h1 className="slide-title">{slide.title}</h1>
                    <p className="slide-description">{slide.description}</p>
                    <div className="slide-buttons">
                      <button className="primary-button">{slide.cta}</button>
                      <button className="outline-button">{slide.secondaryCta}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button onClick={prevSlide} className="carousel-prev" aria-label="Slide anterior">
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
      <button onClick={nextSlide} className="carousel-next" aria-label="Próximo slide">
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

      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-indicator ${index === currentSlide ? "active" : ""}`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Banner

