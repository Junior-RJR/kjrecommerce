import { useState } from "react"
import { useCart } from "./CartContext"
import "../css/ExclusiveCollectionPage.css"

const exclusiveProducts = [
  {
    id: 201,
    name: "Relógio Premium Edição Limitada",
    price: 599.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Relógio de luxo com design exclusivo e acabamento premium.",
    category: "Acessórios",
    discount: 0,
    rating: 4.9,
    stock: 5,
  },
  {
    id: 202,
    name: "Bolsa Designer Signature",
    price: 899.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Bolsa de designer com acabamento artesanal e materiais de primeira linha.",
    category: "Acessórios",
    discount: 10,
    rating: 4.8,
    stock: 3,
  },
  {
    id: 203,
    name: "Perfume Exclusivo",
    price: 349.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Fragrância exclusiva com notas sofisticadas e duração prolongada.",
    category: "Beleza & Saúde",
    discount: 0,
    rating: 4.7,
    stock: 10,
  },
  {
    id: 204,
    name: "Tênis Edição Especial",
    price: 799.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Tênis de edição limitada com design único e materiais premium.",
    category: "Calçados",
    discount: 5,
    rating: 4.9,
    stock: 2,
  },
  {
    id: 205,
    name: "Jaqueta de Couro Premium",
    price: 1299.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Jaqueta de couro genuíno com acabamento artesanal.",
    category: "Moda",
    discount: 15,
    rating: 4.8,
    stock: 4,
  },
  {
    id: 206,
    name: "Fone de Ouvido Audiófilo",
    price: 1499.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Fone de ouvido de alta fidelidade para os verdadeiros amantes de música.",
    category: "Eletrônicos",
    discount: 0,
    rating: 5.0,
    stock: 3,
  },
]

function ExclusiveCollectionPage() {
  const [products, setProducts] = useState(exclusiveProducts)
  const { addToCart } = useCart()

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

  const calculateDiscountedPrice = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2)
  }

  return (
    <div className="exclusive-collection-page">
      <div className="exclusive-hero">
        <div className="exclusive-hero-content">
          <h1>Coleção Exclusiva</h1>
          <p>Produtos únicos e sofisticados para quem busca exclusividade</p>
        </div>
      </div>

      <div className="container">
        <div className="exclusive-intro">
          <h2>Produtos Exclusivos e Limitados</h2>
          <p>
            Nossa coleção exclusiva traz peças únicas, cuidadosamente selecionadas para clientes que buscam produtos
            diferenciados e de alta qualidade. Com quantidades limitadas, cada item representa o que há de melhor em
            design, materiais e acabamento.
          </p>
        </div>

        <div className="exclusive-products">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="exclusive-product-card">
                {product.discount > 0 && <div className="discount-exclusive-badge">-{product.discount}%</div>}
                <div className="stock-exclusive-badge">Apenas {product.stock} unidades</div>
                <div className="product-exclusive-image">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
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
        </div>

        <div className="exclusive-benefits">
          <div className="benefit">
            <div className="benefit-icon">🎁</div>
            <div className="benefit-content">
              <h3>Embalagem Premium</h3>
              <p>Todos os produtos da coleção exclusiva são entregues em embalagens especiais.</p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-icon">📜</div>
            <div className="benefit-content">
              <h3>Certificado de Autenticidade</h3>
              <p>Cada produto vem com um certificado que garante sua autenticidade e exclusividade.</p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🚚</div>
            <div className="benefit-content">
              <h3>Entrega Prioritária</h3>
              <p>Produtos da coleção exclusiva têm prioridade no envio e entrega.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExclusiveCollectionPage

