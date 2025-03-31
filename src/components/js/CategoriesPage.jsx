import { useState } from "react"
import "../css/CategoriesPage.css"
import eletronicos from "../../images/categories/eletronicos.jpg"
import moda from "../../images/categories/moda.jpeg"
import casa from "../../images/categories/casa.jpg"
import esporte from "../../images/categories/esporte.jpg"
import acessorios from "../../images/categories/acessorios.jpg"
import beleza from "../../images/categories/beleza.jpg"
// import entretenimento from "../../images/categories/entretenimento.jpg"
// import infantil from "../../images/categories/infantil.jpg"
// import automotivo from "../../images/categories/automotivo.jpg"


const categories = [
  {
    id: 1,
    name: "Eletrônicos",
    image: eletronicos,
    description: "Smartphones, laptops, fones de ouvido e muito mais para manter você conectado.",
    subcategories: ["Smartphones", "Laptops", "Áudio", "Acessórios", "Smartwatches"],
  },
  {
    id: 2,
    name: "Moda",
    image: moda,
    description: "Roupas, calçados e acessórios para todos os estilos e ocasiões.",
    subcategories: ["Camisetas", "Calças", "Vestidos", "Calçados", "Acessórios"],
  },
  {
    id: 3,
    name: "Casa & Decoração",
    image: casa,
    description: "Tudo para deixar sua casa mais bonita, confortável e funcional.",
    subcategories: ["Móveis", "Decoração", "Cozinha", "Jardim", "Iluminação"],
  },
  {
    id: 4,
    name: "Esportes",
    image: esporte,
    description: "Equipamentos e roupas para praticar seu esporte favorito com conforto e qualidade.",
    subcategories: ["Fitness", "Corrida", "Futebol", "Natação", "Ciclismo"],
  },
  {
    id: 5,
    name: "Acessórios",
    image: acessorios,
    description: "Produtos em geral, para complementar ainda mais sua vida.",
    subcategories: ["Maquiagem", "Cuidados com a Pele", "Cabelo", "Perfumes", "Saúde"],
  },
  {
    id: 6,
    name: "Beleza & Saúde",
    image: beleza,
    description: "Produtos para cuidados pessoais, beleza e bem-estar.",
    subcategories: ["Maquiagem", "Cuidados com a Pele", "Cabelo", "Perfumes", "Saúde"],
  },
  // {
  //   id: 6,
  //   name: "Livros & Entretenimento",
  //   image: entretenimento,
  //   description: "Livros, jogos, filmes e música para sua diversão e conhecimento.",
  //   subcategories: ["Livros", "Jogos", "Filmes", "Música", "Instrumentos Musicais"],
  // },
  // {
  //   id: 7,
  //   name: "Infantil",
  //   image: infantil,
  //   description: "Brinquedos, roupas e acessórios para crianças de todas as idades.",
  //   subcategories: ["Brinquedos", "Roupas", "Calçados", "Bebês", "Escola"],
  // },
  // {
  //   id: 8,
  //   name: "Automotivo",
  //   image: automotivo,
  //   description: "Acessórios, peças e produtos para cuidar do seu veículo.",
  //   subcategories: ["Acessórios", "Peças", "Ferramentas", "Áudio Automotivo", "Limpeza"],
  // },
]

function CategoriesPage() {
  const [expandedCategory, setExpandedCategory] = useState(null)

  const toggleCategory = (id) => {
    if (expandedCategory === id) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(id)
    }
  }

  return (
    <div className="categories-page">
      <div className="container">
        <div className="categories-header">
          <h1 className="page-title">Categorias</h1>
          <p className="page-description">Explore nossas categorias e encontre exatamente o que você procura</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-card ${expandedCategory === category.id ? "expanded" : ""}`}
              onClick={() => toggleCategory(category.id)}
            >
              <div className="category-image-container">
                <img src={category.image || "/placeholder.svg"} alt={category.name} className="category-image" />
                <div className="category-overlay"></div>
              </div>

              <div className="category-content">
                <h2 className="category-name">{category.name}</h2>
                <p className="category-description">{category.description}</p>

                <div className="subcategories">
                  <h3 className="subcategories-title">Subcategorias</h3>
                  <ul className="subcategories-list">
                    {category.subcategories.map((subcategory, index) => (
                      <li key={index}>
                        <a
                          href={`/produtos?categoria=${category.name}&subcategoria=${subcategory}`}
                          className="subcategory-link"
                        >
                          {subcategory}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a href={`/produtos?categoria=${category.name}`} className="view-all-button">
                    Ver todos os produtos
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage

