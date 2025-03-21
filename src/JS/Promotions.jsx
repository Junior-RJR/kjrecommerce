import "../CSS/Promotions.css"

function Promotions() {
  return (
    <section className="promotions">
      <div className="container">
        <div className="promotions-grid">
          <div className="promo-card primary">
            <div className="promo-overlay"></div>
            <img src="/placeholder.svg?height=200&width=600&text=Promoção" alt="Promoção" className="promo-image" />
            <div className="promo-content">
              <h3 className="promo-title">Ofertas Relâmpago</h3>
              <p className="promo-description">Até 50% de desconto em produtos selecionados</p>
              <button className="promo-button">Comprar Agora</button>
            </div>
          </div>
          <div className="promo-card blue">
            <div className="promo-overlay blue"></div>
            <img src="/placeholder.svg?height=200&width=600&text=Novidades" alt="Novidades" className="promo-image" />
            <div className="promo-content">
              <h3 className="promo-title">Novos Lançamentos</h3>
              <p className="promo-description">Confira os produtos recém-chegados</p>
              <button className="promo-button">Ver Novidades</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promotions

