import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "./CartContext"
import "../css/SummerCollectionPage.css"

const summerProducts = [
  {
    id: 101,
    name: "Camiseta Verão Tropical",
    price: 49.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Camiseta leve e confortável com estampa tropical para o verão.",
    category: "Moda",
    discount: 10,
    rating: 4.5,
    isNew: true,
  },
  {
    id: 102,
    name: "Shorts Praia Azul",
    price: 79.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Shorts de praia com secagem rápida, perfeito para dias quentes.",
    category: "Moda",
    discount: 15,
    rating: 4.2,
    isNew: true,
  },
  {
    id: 103,
    name: "Chapéu de Palha",
    price: 39.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Chapéu de palha estiloso para proteção contra o sol.",
    category: "Acessórios",
    discount: 0,
    rating: 4.7,
    isNew: true,
  },
  {
    id: 104,
    name: "Óculos de Sol Premium",
    price: 129.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Óculos de sol com proteção UV e design moderno.",
    category: "Acessórios",
    discount: 20,
    rating: 4.8,
    isNew: false,
  },
  {
    id: 105,
    name: "Sandália Conforto",
    price: 89.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Sandália super confortável para o dia a dia no verão.",
    category: "Calçados",
    discount: 5,
    rating: 4.3,
    isNew: true,
  },
  {
    id: 106,
    name: "Protetor Solar FPS 50",
    price: 59.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Protetor solar de alta proteção, resistente à água.",
    category: "Beleza & Saúde",
    discount: 0,
    rating: 4.9,
    isNew: false,
  },
  {
    id: 107,
    name: "Bolsa de Praia",
    price: 69.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Bolsa espaçosa e estilosa para levar tudo para a praia.",
    category: "Acessórios",
    discount: 10,
    rating: 4.4,
    isNew: true,
  },
  {
    id: 108,
    name: "Vestido Leve Floral",
    price: 99.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Vestido leve com estampa floral, perfeito para dias quentes.",
    category: "Moda",
    discount: 15,
    rating: 4.6,
    isNew: true,
  },
]

function SummerCollectionPage() {
  const [products, setProducts] = useState(summerProducts)
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 200],
    onlyDiscount: false,
    onlyNew: false,
  })
  const [sortBy, setSortBy] = useState("featured")
  const { addToCart } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    let filteredProducts = [...summerProducts]

    if (filters.category !== "all") {
      filteredProducts = filteredProducts.filter((product) => product.category === filters.category)
    }

    filteredProducts = filteredProducts.filter(
      (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1],
    )

    if (filters.onlyDiscount) {
      filteredProducts = filteredProducts.filter((product) => product.discount > 0)
    }

    if (filters.onlyNew) {
      filteredProducts = filteredProducts.filter((product) => product.isNew)
    }

    switch (sortBy) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "name":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "discount":
        filteredProducts.sort((a, b) => b.discount - a.discount)
        break
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    setProducts(filteredProducts)
  }, [filters, sortBy])

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      discount: product.discount,
    })
  }

  const handleCategoryChange = (category) => {
    setFilters({ ...filters, category })
  }

  const handlePriceChange = (priceRange) => {
    setFilters({ ...filters, priceRange })
  }

  const handleCheckboxChange = (name) => {
    setFilters({ ...filters, [name]: !filters[name] })
  }

  const calculateDiscountedPrice = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2)
  }

  const uniqueCategories = ["all", ...new Set(summerProducts.map((product) => product.category))]

  return (
    <div className="summer-collection-page">
      <div className="summer-hero">
        <div className="summer-hero-content">
          <h1>Coleção Verão</h1>
          <p>Descubra as últimas tendências para aproveitar o calor com estilo e conforto</p>
        </div>
      </div>

      <div className="container">
        <div className="summer-collection-grid">
          <aside className="summer-filters">
            <div className="filter-section">
              <h3>Categorias</h3>
              <div className="category-filters">
                {uniqueCategories.map((category) => (
                  <button
                    key={category}
                    className={`category-button ${filters.category === category ? "active" : ""}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category === "all" ? "Todas" : category}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Preço</h3>
              <div className="price-range">
                <span>R$ {filters.priceRange[0]}</span>
                <span>R$ {filters.priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="10"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange([filters.priceRange[0], Number.parseInt(e.target.value)])}
                className="price-summer-slider"
              />
            </div>

            <div className="filter-section">
              <h3>Filtros</h3>
              <div className="checkbox-filters">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={filters.onlyDiscount}
                    onChange={() => handleCheckboxChange("onlyDiscount")}
                  />
                  Apenas com desconto
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" checked={filters.onlyNew} onChange={() => handleCheckboxChange("onlyNew")} />
                  Novidades
                </label>
              </div>
            </div>
          </aside>

          <div className="summer-products">
            <div className="products-header">
              <h2>Produtos da Coleção Verão</h2>
              <div className="sort-options">
                <label htmlFor="sort">Ordenar por:</label>
                <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Destaque</option>
                  <option value="price-asc">Menor Preço</option>
                  <option value="price-desc">Maior Preço</option>
                  <option value="name">Nome</option>
                  <option value="discount">Maior Desconto</option>
                  <option value="rating">Melhor Avaliação</option>
                </select>
              </div>
            </div>

            {products.length === 0 ? (
              <div className="no-products">
                <p>Nenhum produto encontrado com os filtros selecionados.</p>
              </div>
            ) : (
              <div className="products-grid">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    {product.discount > 0 && <div className="discount-summer-badge">-{product.discount}%</div>}
                    {product.isNew && <div className="new-summer-badge">Novo</div>}
                    <div className="product-summer-image">
                      <img src={product.image || "/placeholder.svg"} alt={product.name} />
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-price">
                        {product.discount > 0 ? (
                          <>
                            <span className="original-price">R$ {product.price.toFixed(2)}</span>
                            <span className="discounted-price">
                              R$ {calculateDiscountedPrice(product.price, product.discount)}
                            </span>
                          </>
                        ) : (
                          <span className="regular-price">R$ {product.price.toFixed(2)}</span>
                        )}
                      </div>
                      <div className="product-rating">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span key={index} className={`star ${index < Math.floor(product.rating) ? "filled" : ""}`}>
                            ★
                          </span>
                        ))}
                        <span className="rating-value">({product.rating})</span>
                      </div>
                      <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                        Adicionar ao Carrinho
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="summer-collection-features">
          <div className="feature">
            <div className="feature-icon">🚚</div>
            <h3>Frete Grátis</h3>
            <p>Para compras acima de R$ 150,00</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💰</div>
            <h3>Descontos Exclusivos</h3>
            <p>Até 30% OFF em produtos selecionados</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔄</div>
            <h3>Troca Garantida</h3>
            <p>30 dias para troca ou devolução</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummerCollectionPage

