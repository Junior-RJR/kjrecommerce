import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()

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

  const handleBannerClick = (link) => {
    navigate(link)
  }

  return (
    <div className="banner">
      <div className="banner-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {banners.map((banner) => (
          <div key={banner.id} className="banner-slide">
            <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="banner-image" />
            <div className="banner-content">
              <div className="banner-text-container">
                <h2 className="banner-title">{banner.title}</h2>
                <p className="banner-description">{banner.description}</p>
                <button className="banner-button" onClick={() => handleBannerClick(banner.link)}>
                  Ver Mais
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="banner-nav-button prev-button" onClick={prevSlide}>
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
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button className="banner-nav-button next-button" onClick={nextSlide}>
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
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
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

