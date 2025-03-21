import "../CSS/Categories.css"
import eletronicosImg from "../images/categories/eletronicos.jpg"
import modaImg from "../images/categories/moda.jpeg"
import casaImg from "../images/categories/casa.jpg"
import esporteImg from "../images/categories/esporte.jpg"
import belezaImg from "../images/categories/beleza.jpg"
import acessoriosImg from "../images/categories/acessorios.jpg"

function Categories() {
  const categories = [
    { name: "Eletrônicos", image: eletronicosImg, count: 120 },
    { name: "Moda", image: modaImg, count: 250 },
    { name: "Casa", image: casaImg, count: 80 },
    { name: "Esportes", image: esporteImg, count: 150 },
    { name: "Beleza", image: belezaImg, count: 95 },
    { name: "Acessórios", image: acessoriosImg, count: 110 },
  ]

  return (
    <section className="categories">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Categorias Populares</h2>
          <button className="view-all-button">
            Ver Todas
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
              className="chevron-icon"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        <div className="categories-grid">
          {categories.map((category) => (
            <a href="#" key={category.name} className="category-card">
              <div className="category-image-container">
                <div className="category-overlay"></div>
                <img src={category.image || "/placeholder.svg"} alt={category.name} className="category-image" />
                <div className="category-content">
                  <h3 className="category-title">{category.name}</h3>
                  <p className="category-count">{category.count} produtos</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories

