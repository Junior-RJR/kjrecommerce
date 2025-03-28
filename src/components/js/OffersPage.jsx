import { useCart } from "./CartContext"
import kitferramenta from "../../images/produtos/casa/kitferramenta.jpg"
import panelas from "../../images/produtos/casa/panelas.jpg"
import cadeira from "../../images/produtos/eletronicos/cadeira.jpg"
import tenisrunner from "../../images/produtos/esportes/tenisrunner.jpg"
import camisetabasica from "../../images/produtos/moda/camisetabasica.jpg"
import mochila from "../../images/produtos/moda/mochila.jpg"
import "../css/OffersPage.css"

const offers = [
  {
    id: 1,
    name: "Tênis Esportivo Runner",
    price: 199.9,
    image: tenisrunner,
    category: "Esportes",
    discount: 15,
    description: "Tênis leve e confortável, ideal para corridas e atividades físicas.",
    validUntil: "2023-12-31",
  },
  {
    id: 2,
    name: "Camiseta Básica Premium",
    price: 79.9,
    image: camisetabasica,
    category: "Moda",
    discount: 10,
    description: "Camiseta de algodão de alta qualidade, confortável para o dia a dia.",
    validUntil: "2023-12-25",
  },
  {
    id: 3,
    name: "Mochila Impermeável",
    price: 159.9,
    image: mochila,
    category: "Moda",
    discount: 20,
    description: "Mochila resistente à água com compartimentos para notebook e acessórios.",
    validUntil: "2023-12-20",
  },
  {
    id: 4,
    name: "Cadeira Gamer Ergonômica",
    price: 899.9,
    image: cadeira,
    category: "Eletrônicos",
    discount: 5,
    description: "Cadeira confortável com ajustes de altura e inclinação para longas sessões.",
    validUntil: "2023-12-15",
  },
  {
    id: 5,
    name: "Kit de Ferramentas 100 peças",
    price: 199.9,
    image: kitferramenta,
    category: "Casa e Decoração",
    discount: 10,
    description: "Conjunto completo de ferramentas para pequenos reparos domésticos.",
    validUntil: "2023-12-31",
  },
  {
  id: 6,
    name: "Conjunto de Panelas Antiaderente",
    price: 299.9,
    image: panelas,
    category: "Casa e Decoração",
    discount: 17,
    description: "Kit de panelas de alta qualidade com revestimento antiaderente.",
    validUntil: "2023-12-31",
  },
]

const coupons = [
  {
    code: "BEMVINDO10",
    discount: "10% de desconto na primeira compra",
    minValue: 100,
    validUntil: "2023-12-31",
  },
  {
    code: "FRETEGRATIS",
    discount: "Frete grátis para compras acima de R$ 150",
    minValue: 150,
    validUntil: "2023-12-25",
  },
  {
    code: "NATAL20",
    discount: "20% de desconto em produtos de Natal",
    minValue: 0,
    validUntil: "2023-12-24",
  },
]

function OffersPage() {
  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price * (1 - product.discount / 100),
      image: product.image,
      quantity: 1,
    })
  }

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" }
    return new Date(dateString).toLocaleDateString("pt-BR", options)
  }

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code)
    alert(`Cupom ${code} copiado para a área de transferência!`)
  }

  return (
    <div className="offers-page">
      <div className="container">
        <div className="offers-header">
          <h1 className="page-title">Ofertas Especiais</h1>
          <p className="page-description">Aproveite nossas promoções por tempo limitado</p>
        </div>

        <div className="offers-banner">
          <div className="banner-content">
            <h2 className="banner-title">Mega Promoção</h2>
            <p className="banner-description">Até 50% de desconto em produtos selecionados</p>
            <a href="/produtos" className="banner-button">
              Ver Todos os Produtos
            </a>
          </div>
        </div>

        <section className="offers-section">
          <h2 className="section-title">Produtos em Promoção</h2>

          <div className="offers-grid">
            {offers.map((offer) => {
              const discountedPrice = offer.price * (1 - offer.discount / 100)

              return (
                <div key={offer.id} className="offer-card">
                  <div className="offer-badge">-{offer.discount}%</div>

                  <div className="offer-image-container">
                    <img src={offer.image || "/placeholder.svg"} alt={offer.name} className="offer-image" />
                  </div>

                  <div className="offer-content">
                    <h3 className="offer-name">{offer.name}</h3>
                    <p className="offer-category">{offer.category}</p>
                    <p className="offer-description">{offer.description}</p>

                    <div className="offer-price">
                      <span className="discounted-price">R$ {discountedPrice.toFixed(2)}</span>
                      <span className="original-price">R$ {offer.price.toFixed(2)}</span>
                    </div>

                    <p className="offer-validity">Válido até: {formatDate(offer.validUntil)}</p>

                    <button className="add-to-cart-button" onClick={() => handleAddToCart(offer)}>
                      🛒 Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="coupons-section">
          <h2 className="section-title">Cupons de Desconto</h2>

          <div className="coupons-grid">
            {coupons.map((coupon, index) => (
              <div key={index} className="coupon-card">
                <div className="coupon-content">
                  <h3 className="coupon-discount">{coupon.discount}</h3>

                  <div className="coupon-details">
                    {coupon.minValue > 0 && (
                      <p className="coupon-min-value">Valor mínimo: R$ {coupon.minValue.toFixed(2)}</p>
                    )}
                    <p className="coupon-validity">Válido até: {formatDate(coupon.validUntil)}</p>
                  </div>
                </div>

                <div className="coupon-code-container">
                  <div className="coupon-code">{coupon.code}</div>
                  <button className="copy-coupon-button" onClick={() => copyToClipboard(coupon.code)}>
                    Copiar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default OffersPage

