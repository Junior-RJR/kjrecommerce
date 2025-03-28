import { useState, useEffect } from "react"
import { useCart } from "./CartContext"
import cafeteira from "../../images/produtos/casa/cafeteira.jpg"
import kitferramenta from "../../images/produtos/casa/kitferramenta.jpg"
import luminaria from "../../images/produtos/casa/luminaria.jpg"
import panelas from "../../images/produtos/casa/panelas.jpg"
import cadeira from "../../images/produtos/eletronicos/cadeira.jpg"
import fone from "../../images/produtos/eletronicos/fone.jpg"
import relogio from "../../images/produtos/eletronicos/relogio.jpg"
import smartphone from "../../images/produtos/eletronicos/smartphone.jpg"
import bola from "../../images/produtos/esportes/bola.jpg"
import tenisrunner from "../../images/produtos/esportes/tenisrunner.jpg"
import camisetabasica from "../../images/produtos/moda/camisetabasica.jpg"
import mochila from "../../images/produtos/moda/mochila.jpg"
import tenis from "../../images/produtos/moda/tenis.jpg"
import "../css/ProductsPage.css"

const allProducts = [
  {
    id: 1,
    name: "Smartphone XYZ Pro",
    price: 1299.99,
    image: smartphone,
    category: "Eletrônicos",
    isNew: true,
    discount: 0,
    description: "O mais recente smartphone com câmera de alta resolução e processador potente.",
  },
  {
    id: 2,
    name: "Tênis Esportivo Runner",
    price: 199.9,
    image: tenisrunner,
    category: "Esportes",
    isNew: false,
    discount: 15,
    description: "Tênis leve e confortável, ideal para corridas e atividades físicas.",
  },
  {
    id: 3,
    name: "Fone de Ouvido Bluetooth",
    price: 149.9,
    image: fone,
    category: "Eletrônicos",
    isNew: true,
    discount: 0,
    description: "Fone sem fio com cancelamento de ruído e bateria de longa duração.",
  },
  {
    id: 4,
    name: "Camiseta Básica Premium",
    price: 79.9,
    image: camisetabasica,
    category: "Moda",
    isNew: false,
    discount: 10,
    description: "Camiseta de algodão de alta qualidade, confortável para o dia a dia.",
  },
  {
    id: 5,
    name: "Luminária de Mesa LED",
    price: 129.9,
    image: luminaria,
    category: "Casa e Decoração",
    isNew: false,
    discount: 0,
    description: "Luminária moderna com ajuste de intensidade e temperatura de cor.",
  },
  {
    id: 6,
    name: "Mochila Impermeável",
    price: 159.9,
    image: mochila,
    category: "Moda",
    isNew: false,
    discount: 20,
    description: "Mochila resistente à água com compartimentos para notebook e acessórios.",
  },
  {
    id: 7,
    name: "Relógio Inteligente Sport",
    price: 349.9,
    image: relogio,
    category: "Eletrônicos",
    isNew: true,
    discount: 0,
    description: "Smartwatch com monitoramento de atividades físicas e notificações.",
  },
  {
    id: 8,
    name: "Conjunto de Panelas Antiaderente",
    price: 299.9,
    image: panelas,
    category: "Casa e Decoração",
    isNew: false,
    discount: 17,
    description: "Kit de panelas de alta qualidade com revestimento antiaderente.",
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
  {
    id: 10,
    name: "Cafeteira Programável",
    price: 249.9,
    image: cafeteira,
    category: "Casa e Decoração",
    isNew: true,
    discount: 0,
    description: "Cafeteira automática com timer e controle de temperatura.",
  },
  {
    id: 11,
    name: "Tênis Casual Urban",
    price: 179.9,
    image: tenis,
    category: "Moda",
    isNew: false,
    discount: 0,
    description: "Tênis estiloso para uso diário, combina com diversos looks.",
  },
  {
    id: 12,
    name: "Kit de Ferramentas 100 peças",
    price: 199.9,
    image: kitferramenta,
    category: "Casa e Decoração",
    isNew: false,
    discount: 10,
    description: "Conjunto completo de ferramentas para pequenos reparos domésticos.",
  },
  {
    id: 13,
    name: "Bola Futebol de Campo Penalty",
    price: 199.9,
    image: bola,
    category: "Esportes",
    isNew: false,
    discount: 0,
    description: "Bola de Futebol de Campo, Marca Penalty modelo Bola 8.",
  },
]

const categories = ["Todos", "Eletrônicos", "Moda", "Casa e Decoração", "Esportes", "Acessórios", "Beleza"]

function ProductsPage() {
  const [products, setProducts] = useState(allProducts)
  const [favorites, setFavorites] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [searchTerm, setSearchTerm] = useState("")
  const { addToCart } = useCart()

  useEffect(() => {
    let filteredProducts = [...allProducts]

    if (selectedCategory !== "Todos") {
      filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory)
    }

    filteredProducts = filteredProducts.filter((product) => {
      const discountedPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price
      return discountedPrice >= priceRange[0] && discountedPrice <= priceRange[1]
    })

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term),
      )
    }

    switch (sortBy) {
      case "price-low":
        filteredProducts.sort((a, b) => {
          const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price
          const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price
          return priceA - priceB
        })
        break
      case "price-high":
        filteredProducts.sort((a, b) => {
          const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price
          const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price
          return priceB - priceA
        })
        break
      case "newest":
        filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case "discount":
        filteredProducts.sort((a, b) => b.discount - a.discount)
        break
      default: // featured
        // Manter a ordem original
        break
    }

    setProducts(filteredProducts)
  }, [selectedCategory, sortBy, priceRange, searchTerm])

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

  const handlePriceRangeChange = (e, index) => {
    const newRange = [...priceRange]
    newRange[index] = Number(e.target.value)
    setPriceRange(newRange)
  }

  return (
    <div className="products-page">
      <div className="container">
        <div className="products-header">
          <h1 className="page-title">Todos os Produtos</h1>
          <p className="page-description">Explore nossa coleção completa de produtos de alta qualidade</p>
        </div>

        <div className="products-layout">
          <aside className="filters-sidebar">
            <div className="filter-section">
              <h3 className="filter-title">Categorias</h3>
              <ul className="category-list">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      className={`category-button ${selectedCategory === category ? "active" : ""}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-section">
              <h3 className="filter-title">Preço</h3>
              <div className="price-range">
                <div className="price-inputs">
                  <div className="price-input-group">
                    <label>Min:</label>
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceRangeChange(e, 0)}
                      min="0"
                      max={priceRange[1]}
                    />
                  </div>
                  <div className="price-input-group">
                    <label>Max:</label>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceRangeChange(e, 1)}
                      min={priceRange[0]}
                    />
                  </div>
                </div>
                <div className="range-slider">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceRangeChange(e, 0)}
                    className="slider"
                  />
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(e, 1)}
                    className="slider"
                  />
                </div>
              </div>
            </div>

            <div className="filter-section">
              <h3 className="filter-title">Status</h3>
              <label className="filter-checkbox">
                <input type="checkbox" /> Em promoção
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" /> Novos produtos
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" /> Em estoque
              </label>
            </div>
          </aside>

          <div className="products-content">
            <div className="products-toolbar">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button">🔍</button>
              </div>

              <div className="sort-options">
                <label>Ordenar por:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Destaque</option>
                  <option value="price-low">Menor preço</option>
                  <option value="price-high">Maior preço</option>
                  <option value="newest">Mais recentes</option>
                  <option value="discount">Maiores descontos</option>
                </select>
              </div>
            </div>

            {products.length === 0 ? (
              <div className="no-products">
                <p>Nenhum produto encontrado com os filtros selecionados.</p>
                <button
                  className="reset-filters-button"
                  onClick={() => {
                    setSelectedCategory("Todos")
                    setPriceRange([0, 2000])
                    setSearchTerm("")
                    setSortBy("featured")
                  }}
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {products.map((product) => {
                  const discountedPrice =
                    product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price

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

                        {product.discount > 0 && (
                          <span className="product-badge discount-badge">-{product.discount}%</span>
                        )}
                      </div>

                      <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-category">{product.category}</p>
                        <p className="product-description">{product.description}</p>

                        <div className="product-price">
                          <span className="current-price">R$ {discountedPrice.toFixed(2)}</span>
                          {product.discount > 0 && (
                            <span className="original-price">R$ {product.price.toFixed(2)}</span>
                          )}
                        </div>

                        <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                          🛒 Adicionar ao Carrinho
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage

