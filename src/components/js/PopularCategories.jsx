import "../css/PopularCategories.css"
import categoria1 from "../../images/categories/eletronicos.jpg"
import categoria2 from "../../images/categories/moda.jpeg"
import categoria3 from "../../images/categories/casa.jpg"
import categoria4 from "../../images/categories/esporte.jpg"
import categoria5 from "../../images/categories/acessorios.jpg"
import categoria6 from "../../images/categories/beleza.jpg"

const categories = [
  {
    id: 1,
    name: "Eletrônicos",
    image: categoria1 ,
    slug: "eletronicos",
  },
  {
    id: 2,
    name: "Moda",
    image: categoria2,
    slug: "moda",
  },
  {
    id: 3,
    name: "Casa e Decoração",
    image: categoria3,
    slug: "casa-decoracao",
  },
  {
    id: 4,
    name: "Esportes",
    image: categoria4,
    slug: "esportes",
  },
  {
    id: 5,
    name: "Acessórios",
    image: categoria5,
    slug: "acessorios",
  },
{
  id: 6,
  name: "Beleza",
  image: categoria6,
  slug: "beleza",
},

]

function PopularCategories() {
  return (
    <section className="popular-categories">
      <div className="section-header">
        <h2 className="section-title">Categorias Populares</h2>
        <p className="section-description">Explore nossas categorias mais procuradas</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <a key={category.id} href={`/categoria/${category.slug}`} className="category-card">
            <div className="category-image-container">
              <img src={category.image || "/placeholder.svg"} alt={category.name} className="category-image" />
              <div className="category-overlay"></div>
            </div>
            <div className="category-info">
              <h3 className="category-name">{category.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default PopularCategories

