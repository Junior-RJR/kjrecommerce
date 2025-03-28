import { useState, useEffect, useCallback } from "react"
import banner1 from "../../images/banner/01.jpg"
import banner2 from "../../images/banner/02.jpg"
import banner3 from "../../images/banner/03.jpg"
import "../css/Banner.css"


const banners = [
  {
    id: 1,
    image: banner1,
    title: "Novos produtos para o verão",
    description: "Confira nossa nova coleção de verão com até 30% de desconto",
    link: "/colecao/verao",
  },
  {
    id: 2,
    image: banner2,
    title: "Ofertas especiais",
    description: "Produtos selecionados com até 50% de desconto",
    link: "/ofertas",
  },
  {
    id: 3,
    image: banner3,
    title: "Coleção exclusiva",
    description: "Peças únicas para você se destacar",
    link: "/colecao/exclusiva",
  },
]

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="banner">
      <div className="banner-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {banners.map((banner) => (
          <div key={banner.id} className="banner-slide">
            <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="banner-image" />
            <div className="banner-content">
              <h2 className="banner-title">{banner.title}</h2>
              <p className="banner-description">{banner.description}</p>
              <button className="banner-button">Ver Mais</button>
            </div>
          </div>
        ))}
      </div>

      <button className="banner-nav-button prev-button" onClick={prevSlide}>
        &#10094;
      </button>

      <button className="banner-nav-button next-button" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="banner-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`banner-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Banner

