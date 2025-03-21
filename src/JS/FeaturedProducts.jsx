import "../CSS/FeaturedProducts.css"

function FeaturedProducts() {
  const products = [
    { name: "Smartphone XYZ", price: "R$ 1.999,00", discount: "R$ 2.499,00" },
    { name: "Notebook Ultra", price: "R$ 3.499,00" },
    { name: "Fones de Ouvido Wireless", price: "R$ 299,00", discount: "R$ 399,00" },
    { name: "Smartwatch Pro", price: "R$ 899,00" },
  ]

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Produtos em Destaque</h2>
          <button className="view-all-button">
            Ver Todos
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
        <div className="products-grid">
          {products.map((product, i) => (
            <div key={i} className="product-card">
              <div className="product-image-container">
                <img
                  src={`/placeholder.svg?height=300&width=300&text=Produto ${i + 1}`}
                  alt={product.name}
                  className="product-image"
                />
                {product.discount && <span className="product-badge">Oferta</span>}
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
                <h3 className="product-title">{product.name}</h3>
                <div className="product-price">
                  <span className="current-price">{product.price}</span>
                  {product.discount && <span className="original-price">{product.discount}</span>}
                </div>
              </div>
              <div className="product-actions">
                <button className="add-to-cart-button">Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts

