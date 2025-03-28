import { useState } from "react"
import { useCart } from "./CartContext"
import luminaria from "../../images/produtos/casa/luminaria.jpg"
import panelas from "../../images/produtos/casa/panelas.jpg"
import cadeira from "../../images/produtos/eletronicos/cadeira.jpg"
import fone from "../../images/produtos/eletronicos/fone.jpg"
import relogio from "../../images/produtos/eletronicos/relogio.jpg"
import smartphone from "../../images/produtos/eletronicos/smartphone.jpg"
import tenisrunner from "../../images/produtos/esportes/tenisrunner.jpg"
import camisetabasica from "../../images/produtos/moda/camisetabasica.jpg"
import mochila from "../../images/produtos/moda/mochila.jpg"
import "../css/PopularProducts.css"

const products = [
  {
    id: 1,
    name: "Smartphone XYZ Pro",
    price: 1299.99,
    image: smartphone,
    category: "Eletrônicos",
    isNew: true,
    discount: 0,
  },
  {
    id: 2,
    name: "Tênis Esportivo Runner",
    price: 199.9,
    image: tenisrunner,
    category: "Esportes",
    isNew: false,
    discount: 15,
  },
  {
    id: 3,
    name: "Fone de Ouvido Bluetooth",
    price: 149.9,
    image: fone,
    category: "Eletrônicos",
    isNew: true,
    discount: 0,
  },
  {
    id: 4,
    name: "Camiseta Básica Premium",
    price: 79.9,
    image: camisetabasica,
    category: "Moda",
    isNew: false,
    discount: 10,
  },
  {
    id: 5,
    name: "Luminária de Mesa LED",
    price: 129.9,
    image: luminaria,
    category: "Casa e Decoração",
    isNew: false,
    discount: 0,
  },
  {
    id: 6,
    name: "Mochila Impermeável",
    price: 159.9,
    image: mochila,
    category: "Moda",
    isNew: false,
    discount: 20,
  },
  {
    id: 7,
    name: "Relógio Inteligente Sport",
    price: 349.9,
    image: relogio,
    category: "Eletrônicos",
    isNew: true,
    discount: 0,
  },
  {
    id: 8,
    name: "Conjunto de Panelas Antiaderente",
    price: 299.9,
    image: panelas,
    category: "Casa e Decoração",
    isNew: false,
    discount: 0,
  },
  {
    id: 9,
    name: "Cadeira Gamer Ergonômica",
    price: 899.9,
    image: cadeira,
    category: "Eletrônicos",
    isNew: false,
    discount: 5,
    description: "Cadeira confortável com ajustes de altura e inclinação para longas sessões.",
  },
]

function PopularProducts() {
  const { addToCart } = useCart()
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price,
      image: product.image,
      quantity: 1,
    })
  }

  return (
    <section className="popular-products">
      <div className="section-header">
        <h2 className="section-title">Produtos Populares</h2>
        <p className="section-description">Os produtos mais vendidos da nossa loja</p>
      </div>

      <div className="products-grid">
        {products.map((product) => {
          const discountedPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price

          return (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
                <button
                  className={`favorite-button ${favorites.includes(product.id) ? "active" : ""}`}
                  onClick={() => toggleFavorite(product.id)}
                >
                  {favorites.includes(product.id) ? "❤️" : "🤍"}
                </button>

                {product.isNew && <span className="product-badge new-badge">Novo</span>}

                {product.discount > 0 && <span className="product-badge discount-badge">-{product.discount}%</span>}
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>

                <div className="product-price">
                  <span className="current-price">R$ {discountedPrice.toFixed(2)}</span>
                  {product.discount > 0 && <span className="original-price">R$ {product.price.toFixed(2)}</span>}
                </div>

                <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                  🛒 Adicionar
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PopularProducts

