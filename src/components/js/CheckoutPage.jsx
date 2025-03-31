import { useState, useEffect } from "react"
import { useCart } from "./CartContext"
import "../css/CheckoutPage.css"

function CheckoutPage() {
  const { cartItems, subtotal, clearCart } = useCart()
  const [shippingCost, setShippingCost] = useState(0)
  const [cep, setCep] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("credit")
  const [installments, setInstallments] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cpf: "",
    phone: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCVV: "",
    pixEmail: "",
    boletoEmail: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")
  const [activeStep, setActiveStep] = useState(1)
  const [couponCode, setCouponCode] = useState("")
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)
  const [discount, setDiscount] = useState(0)
  const [couponError, setCouponError] = useState("")

  useEffect(() => {
    const savedCep = localStorage.getItem("shipping_cep")
    const savedCost = localStorage.getItem("shipping_cost")
    const savedCoupon = localStorage.getItem("coupon_code")
    const savedDiscount = localStorage.getItem("discount_amount")

    if (savedCep) {
      setCep(savedCep)
    }

    if (savedCost) {
      setShippingCost(Number.parseFloat(savedCost))
    } else {
      const defaultShipping = subtotal >= 200 ? 0 : 20
      setShippingCost(defaultShipping)
    }

    if (savedCoupon) {
      setCouponCode(savedCoupon)
    }

    if (savedDiscount) {
      setDiscount(Number.parseFloat(savedDiscount))
    }
  }, [subtotal])

  useEffect(() => {
    if (cartItems.length === 0 && !orderComplete) {
      window.location.href = "/produtos"
    }
  }, [cartItems, orderComplete])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const formatCPF = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1")
  }

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1")
  }

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})\d+?$/, "$1")
  }

  const formatCardExpiry = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2}\/\d{2})\d+?$/, "$1")
  }

  const handleCPFChange = (e) => {
    const formattedValue = formatCPF(e.target.value)
    setFormData({
      ...formData,
      cpf: formattedValue,
    })
  }

  const handlePhoneChange = (e) => {
    const formattedValue = formatPhone(e.target.value)
    setFormData({
      ...formData,
      phone: formattedValue,
    })
  }

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value)
    setFormData({
      ...formData,
      cardNumber: formattedValue,
    })
  }

  const handleCardExpiryChange = (e) => {
    const formattedValue = formatCardExpiry(e.target.value)
    setFormData({
      ...formData,
      cardExpiry: formattedValue,
    })
  }

  const handleCepChange = (e) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length > 8) {
      value = value.slice(0, 8)
    }

    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5)
    }

    setCep(value)
  }

  const searchCep = () => {
    if (cep.length < 8) return

    setFormData({
      ...formData,
      address: "Av Capuava",
      neighborhood: "Vila Homero Thon",
      city: "Santo André",
      state: "SP",
    })
  }

  const validateStep = (step) => {
    const newErrors = {}

    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = "Nome completo é obrigatório"
      if (!formData.email) newErrors.email = "Email é obrigatório"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido"
      if (!formData.cpf || formData.cpf.length < 14) newErrors.cpf = "CPF inválido"
      if (!formData.phone || formData.phone.length < 14) newErrors.phone = "Telefone inválido"
    } else if (step === 2) {
      if (!cep || cep.length < 9) newErrors.cep = "CEP inválido"
      if (!formData.address) newErrors.address = "Endereço é obrigatório"
      if (!formData.number) newErrors.number = "Número é obrigatório"
      if (!formData.neighborhood) newErrors.neighborhood = "Bairro é obrigatório"
      if (!formData.city) newErrors.city = "Cidade é obrigatória"
      if (!formData.state) newErrors.state = "Estado é obrigatório"
    } else if (step === 3) {
      if (paymentMethod === "credit") {
        if (!formData.cardNumber || formData.cardNumber.length < 19) newErrors.cardNumber = "Número do cartão inválido"
        if (!formData.cardName) newErrors.cardName = "Nome no cartão é obrigatório"
        if (!formData.cardExpiry || formData.cardExpiry.length < 5) newErrors.cardExpiry = "Data de validade inválida"
        if (!formData.cardCVV || formData.cardCVV.length < 3) newErrors.cardCVV = "CVV inválido"
      } else if (paymentMethod === "pix") {
        if (!formData.pixEmail) newErrors.pixEmail = "Email para PIX é obrigatório"
        else if (!/\S+@\S+\.\S+/.test(formData.pixEmail)) newErrors.pixEmail = "Email inválido"
      } else if (paymentMethod === "boleto") {
        if (!formData.boletoEmail) newErrors.boletoEmail = "Email para boleto é obrigatório"
        else if (!/\S+@\S+\.\S+/.test(formData.boletoEmail)) newErrors.boletoEmail = "Email inválido"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(activeStep)) {
      setActiveStep(activeStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    setActiveStep(activeStep - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateStep(activeStep)) {
      setIsSubmitting(true)

      setTimeout(() => {
        setIsSubmitting(false)
        setOrderComplete(true)
        setOrderNumber(
          Math.floor(Math.random() * 1000000)
            .toString()
            .padStart(6, "0"),
        )

        clearCart()
      }, 2000)
    }
  }


  const applyCoupon = () => {
    if (!couponCode) return

    setIsApplyingCoupon(true)
    setCouponError("")

    setTimeout(() => {
      // Cupons válidos para teste
      if (couponCode === "DESCONTO10") {
        const discountAmount = subtotal * 0.1 // 10% de desconto
        setDiscount(discountAmount)
      } else if (couponCode === "FRETE") {
        setShippingCost(0)
      } else {
        setCouponError("Cupom inválido ou expirado")
      }

      setIsApplyingCoupon(false)
    }, 1000)
  }


  const calculateTotal = () => {
    return subtotal + shippingCost - discount
  }

  const calculateInstallmentValue = () => {
    const total = calculateTotal()
    return (total / installments).toFixed(2)
  }

  if (orderComplete) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="order-success">
            <div className="success-icon">✅</div>
            <h1 className="success-title">Pedido Realizado com Sucesso!</h1>
            <p className="success-message">Seu pedido #{orderNumber} foi confirmado e está sendo processado.</p>
            <div className="order-details">
              <h3>Detalhes do Pedido</h3>
              <p>
                <strong>Data:</strong> {new Date().toLocaleDateString()}
              </p>
              <p>
                <strong>Valor Total:</strong> R$ {calculateTotal().toFixed(2)}
              </p>
              <p>
                <strong>Forma de Pagamento:</strong>{" "}
                {paymentMethod === "credit" ? "Cartão de Crédito" : paymentMethod === "pix" ? "PIX" : "Boleto Bancário"}
              </p>
              {paymentMethod === "pix" && (
                <div className="pix-qrcode">
                  <p>Escaneie o QR Code para pagar:</p>
                  <div className="qrcode-placeholder">QR Code do PIX</div>
                  <p className="pix-expiry">Válido por 30 minutos</p>
                </div>
              )}
              {paymentMethod === "boleto" && (
                <div className="boleto-info">
                  <p>Seu boleto foi enviado para o email cadastrado.</p>
                  <button className="boleto-button">Imprimir Boleto</button>
                  <p className="boleto-expiry">Vencimento em 3 dias úteis</p>
                </div>
              )}
            </div>
            <p className="email-confirmation">
              Enviamos um email de confirmação para <strong>{formData.email}</strong> com todos os detalhes.
            </p>
            <div className="success-actions">
              <a href="/" className="back-home-button">
                Voltar para a Página Inicial
              </a>
              <a href="/produtos" className="continue-shopping-button">
                Continuar Comprando
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <h1 className="page-title">Finalizar Compra</h1>
          <div className="checkout-steps">
            <div className={`step ${activeStep >= 1 ? "active" : ""} ${activeStep > 1 ? "completed" : ""}`}>
              <div className="step-number">1</div>
              <span className="step-name">Dados Pessoais</span>
            </div>
            <div className={`step-connector ${activeStep > 1 ? "active" : ""}`}></div>
            <div className={`step ${activeStep >= 2 ? "active" : ""} ${activeStep > 2 ? "completed" : ""}`}>
              <div className="step-number">2</div>
              <span className="step-name">Endereço</span>
            </div>
            <div className={`step-connector ${activeStep > 2 ? "active" : ""}`}></div>
            <div className={`step ${activeStep >= 3 ? "active" : ""} ${activeStep > 3 ? "completed" : ""}`}>
              <div className="step-number">3</div>
              <span className="step-name">Pagamento</span>
            </div>
            <div className={`step-connector ${activeStep > 3 ? "active" : ""}`}></div>
            <div className={`step ${activeStep >= 4 ? "active" : ""}`}>
              <div className="step-number">4</div>
              <span className="step-name">Confirmação</span>
            </div>
          </div>
        </div>

        <div className="checkout-content">
          <div className="checkout-form-container">
            <form className="checkout-form" onSubmit={handleSubmit}>
              {activeStep === 1 && (
                <div className="checkout-step-content">
                  <h2 className="step-title">Dados Pessoais</h2>
                  <div className="form-group">
                    <label htmlFor="fullName">Nome Completo *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={errors.fullName ? "error" : ""}
                    />
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="cpf">CPF *</label>
                      <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleCPFChange}
                        maxLength={14}
                        placeholder="000.000.000-00"
                        className={errors.cpf ? "error" : ""}
                      />
                      {errors.cpf && <span className="error-message">{errors.cpf}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Telefone *</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        maxLength={15}
                        placeholder="(00) 00000-0000"
                        className={errors.phone ? "error" : ""}
                      />
                      {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="next-button" onClick={nextStep}>
                      Continuar para Endereço
                    </button>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="checkout-step-content">
                  <h2 className="step-title">Endereço de Entrega</h2>
                  <div className="form-row">
                    <div className="form-group cep-group">
                      <label htmlFor="cep">CEP *</label>
                      <div className="cep-input-group">
                        <input
                          type="text"
                          id="cep"
                          value={cep}
                          onChange={handleCepChange}
                          maxLength={9}
                          placeholder="00000-000"
                          className={errors.cep ? "error" : ""}
                        />
                        <button type="button" className="search-cep-button" onClick={searchCep}>
                          Buscar
                        </button>
                      </div>
                      {errors.cep && <span className="error-message">{errors.cep}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Endereço *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={errors.address ? "error" : ""}
                    />
                    {errors.address && <span className="error-message">{errors.address}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="number">Número *</label>
                      <input
                        type="text"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className={errors.number ? "error" : ""}
                      />
                      {errors.number && <span className="error-message">{errors.number}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="complement">Complemento</label>
                      <input
                        type="text"
                        id="complement"
                        name="complement"
                        value={formData.complement}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="neighborhood">Bairro *</label>
                    <input
                      type="text"
                      id="neighborhood"
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleChange}
                      className={errors.neighborhood ? "error" : ""}
                    />
                    {errors.neighborhood && <span className="error-message">{errors.neighborhood}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="city">Cidade *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={errors.city ? "error" : ""}
                      />
                      {errors.city && <span className="error-message">{errors.city}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="state">Estado *</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        maxLength={2}
                        className={errors.state ? "error" : ""}
                      />
                      {errors.state && <span className="error-message">{errors.state}</span>}
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="back-button" onClick={prevStep}>
                      Voltar
                    </button>
                    <button type="button" className="next-button" onClick={nextStep}>
                      Continuar para Pagamento
                    </button>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="checkout-step-content">
                  <h2 className="step-title">Forma de Pagamento</h2>
                  <div className="payment-methods">
                    <div
                      className={`payment-method ${paymentMethod === "credit" ? "active" : ""}`}
                      onClick={() => setPaymentMethod("credit")}
                    >
                      <div className="payment-icon credit-icon">💳</div>
                      <div className="payment-info">
                        <h3>Cartão de Crédito</h3>
                        <p>Pague em até 12x</p>
                      </div>
                    </div>

                    <div
                      className={`payment-method ${paymentMethod === "pix" ? "active" : ""}`}
                      onClick={() => setPaymentMethod("pix")}
                    >
                      <div className="payment-icon pix-icon">📱</div>
                      <div className="payment-info">
                        <h3>PIX</h3>
                        <p>Pagamento instantâneo</p>
                      </div>
                    </div>

                    <div
                      className={`payment-method ${paymentMethod === "boleto" ? "active" : ""}`}
                      onClick={() => setPaymentMethod("boleto")}
                    >
                      <div className="payment-icon boleto-icon">🧾</div>
                      <div className="payment-info">
                        <h3>Boleto Bancário</h3>
                        <p>Vencimento em 3 dias</p>
                      </div>
                    </div>
                  </div>

                  {paymentMethod === "credit" && (
                    <div className="credit-card-form">
                      <div className="form-group">
                        <label htmlFor="cardNumber">Número do Cartão *</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleCardNumberChange}
                          maxLength={19}
                          placeholder="0000 0000 0000 0000"
                          className={errors.cardNumber ? "error" : ""}
                        />
                        {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="cardName">Nome no Cartão *</label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          placeholder="NOME COMO ESTÁ NO CARTÃO"
                          className={errors.cardName ? "error" : ""}
                        />
                        {errors.cardName && <span className="error-message">{errors.cardName}</span>}
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="cardExpiry">Validade *</label>
                          <input
                            type="text"
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleCardExpiryChange}
                            maxLength={5}
                            placeholder="MM/AA"
                            className={errors.cardExpiry ? "error" : ""}
                          />
                          {errors.cardExpiry && <span className="error-message">{errors.cardExpiry}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="cardCVV">CVV *</label>
                          <input
                            type="text"
                            id="cardCVV"
                            name="cardCVV"
                            value={formData.cardCVV}
                            onChange={handleChange}
                            maxLength={4}
                            placeholder="123"
                            className={errors.cardCVV ? "error" : ""}
                          />
                          {errors.cardCVV && <span className="error-message">{errors.cardCVV}</span>}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="installments">Parcelas</label>
                        <select
                          id="installments"
                          name="installments"
                          value={installments}
                          onChange={(e) => setInstallments(Number(e.target.value))}
                        >
                          <option value={1}>1x de R$ {calculateTotal().toFixed(2)} sem juros</option>
                          <option value={2}>2x de R$ {(calculateTotal() / 2).toFixed(2)} sem juros</option>
                          <option value={3}>3x de R$ {(calculateTotal() / 3).toFixed(2)} sem juros</option>
                          <option value={4}>4x de R$ {(calculateTotal() / 4).toFixed(2)} sem juros</option>
                          <option value={5}>5x de R$ {(calculateTotal() / 5).toFixed(2)} sem juros</option>
                          <option value={6}>6x de R$ {(calculateTotal() / 6).toFixed(2)} sem juros</option>
                          <option value={7}>7x de R$ {(calculateTotal() / 7).toFixed(2)} sem juros</option>
                          <option value={8}>8x de R$ {(calculateTotal() / 8).toFixed(2)} sem juros</option>
                          <option value={9}>9x de R$ {(calculateTotal() / 9).toFixed(2)} sem juros</option>
                          <option value={10}>10x de R$ {(calculateTotal() / 10).toFixed(2)} sem juros</option>
                          <option value={11}>11x de R$ {(calculateTotal() / 11).toFixed(2)} sem juros</option>
                          <option value={12}>12x de R$ {(calculateTotal() / 12).toFixed(2)} sem juros</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "pix" && (
                    <div className="pix-form">
                      <div className="form-group">
                        <label htmlFor="pixEmail">Email para receber o QR Code *</label>
                        <input
                          type="email"
                          id="pixEmail"
                          name="pixEmail"
                          value={formData.pixEmail}
                          onChange={handleChange}
                          className={errors.pixEmail ? "error" : ""}
                        />
                        {errors.pixEmail && <span className="error-message">{errors.pixEmail}</span>}
                      </div>
                      <div className="pix-info">
                        <p>Ao finalizar a compra, você receberá um QR Code para pagamento.</p>
                        <p>O pagamento via PIX é processado instantaneamente.</p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "boleto" && (
                    <div className="boleto-form">
                      <div className="form-group">
                        <label htmlFor="boletoEmail">Email para receber o boleto *</label>
                        <input
                          type="email"
                          id="boletoEmail"
                          name="boletoEmail"
                          value={formData.boletoEmail}
                          onChange={handleChange}
                          className={errors.boletoEmail ? "error" : ""}
                        />
                        {errors.boletoEmail && <span className="error-message">{errors.boletoEmail}</span>}
                      </div>
                      <div className="boleto-info">
                        <p>O boleto será enviado para o email informado.</p>
                        <p>O prazo de vencimento é de 3 dias úteis.</p>
                        <p>Após o pagamento, o pedido será processado em até 3 dias úteis.</p>
                      </div>
                    </div>
                  )}

                  <div className="coupon-section checkout-coupon">
                    <h3>Cupom de Desconto</h3>
                    <div className="coupon-input-group">
                      <input
                        type="text"
                        placeholder="Digite seu cupom"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      />
                      <button type="button" onClick={applyCoupon} disabled={isApplyingCoupon}>
                        {isApplyingCoupon ? "Aplicando..." : "Aplicar"}
                      </button>
                    </div>
                    {discount > 0 && (
                      <div className="coupon-success">Cupom aplicado! Desconto de R$ {discount.toFixed(2)}</div>
                    )}
                    {couponError && <div className="coupon-error">{couponError}</div>}
                  </div>

                  <div className="form-actions">
                    <button type="button" className="back-button" onClick={prevStep}>
                      Voltar
                    </button>
                    <button type="button" className="next-button" onClick={nextStep}>
                      Revisar Pedido
                    </button>
                  </div>
                </div>
              )}

              {/* Etapa 4: Confirmação */}
              {activeStep === 4 && (
                <div className="checkout-step-content">
                  <h2 className="step-title">Revisar e Confirmar</h2>

                  <div className="order-summary">
                    <h3>Resumo do Pedido</h3>
                    <div className="order-items">
                      {cartItems.map((item) => (
                        <div key={item.id} className="order-item">
                          <div className="item-image">
                            <img src={item.image || "/placeholder.svg"} alt={item.name} />
                          </div>
                          <div className="item-details">
                            <h4>{item.name}</h4>
                            <p className="item-price">R$ {item.price.toFixed(2)}</p>
                            <p className="item-quantity">Quantidade: {item.quantity}</p>
                          </div>
                          <div className="item-total">R$ {(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      ))}
                    </div>

                    <div className="order-totals">
                      <div className="total-row">
                        <span>Subtotal:</span>
                        <span>R$ {subtotal.toFixed(2)}</span>
                      </div>
                      <div className="total-row">
                        <span>Frete:</span>
                        <span>{shippingCost === 0 ? "Grátis" : `R$ ${shippingCost.toFixed(2)}`}</span>
                      </div>
                      {discount > 0 && (
                        <div className="total-row discount">
                          <span>Desconto:</span>
                          <span>-R$ {discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="total-row grand-total">
                        <span>Total:</span>
                        <span>R$ {calculateTotal().toFixed(2)}</span>
                      </div>
                      {paymentMethod === "credit" && installments > 1 && (
                        <div className="installment-info">
                          Em {installments}x de R$ {calculateInstallmentValue()} sem juros
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="confirmation-details">
                    <div className="confirmation-section">
                      <h3>Dados Pessoais</h3>
                      <p>
                        <strong>Nome:</strong> {formData.fullName}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>CPF:</strong> {formData.cpf}
                      </p>
                      <p>
                        <strong>Telefone:</strong> {formData.phone}
                      </p>
                    </div>

                    <div className="confirmation-section">
                      <h3>Endereço de Entrega</h3>
                      <p>
                        {formData.address}, {formData.number} {formData.complement && ` - ${formData.complement}`}
                      </p>
                      <p>{formData.neighborhood}</p>
                      <p>
                        {formData.city} - {formData.state}
                      </p>
                      <p>CEP: {cep}</p>
                    </div>

                    <div className="confirmation-section">
                      <h3>Forma de Pagamento</h3>
                      {paymentMethod === "credit" && (
                        <>
                          <p>
                            <strong>Cartão de Crédito</strong>
                          </p>
                          <p>Número: **** **** **** {formData.cardNumber.slice(-4)}</p>
                          <p>Nome: {formData.cardName}</p>
                          <p>Validade: {formData.cardExpiry}</p>
                          <p>
                            Parcelas: {installments}x de R$ {calculateInstallmentValue()}
                          </p>
                        </>
                      )}
                      {paymentMethod === "pix" && (
                        <>
                          <p>
                            <strong>PIX</strong>
                          </p>
                          <p>Email: {formData.pixEmail}</p>
                          <p>Pagamento instantâneo</p>
                        </>
                      )}
                      {paymentMethod === "boleto" && (
                        <>
                          <p>
                            <strong>Boleto Bancário</strong>
                          </p>
                          <p>Email: {formData.boletoEmail}</p>
                          <p>Vencimento em 3 dias úteis</p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="terms-agreement">
                    <label className="checkbox-label">
                      <input type="checkbox" required /> Concordo com os <a href="#">Termos e Condições</a> e{" "}
                      <a href="#">Política de Privacidade</a>
                    </label>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="back-button" onClick={prevStep}>
                      Voltar
                    </button>
                    <button type="submit" className="confirm-button" disabled={isSubmitting}>
                      {isSubmitting ? "Processando..." : "Finalizar Compra"}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="checkout-sidebar">
            <div className="order-summary-card">
              <h3 className="summary-title">Resumo do Pedido</h3>
              <div className="summary-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <span className="item-name">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="item-price">R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="summary-totals">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Frete:</span>
                  <span>{shippingCost === 0 ? "Grátis" : `R$ ${shippingCost.toFixed(2)}`}</span>
                </div>
                {discount > 0 && (
                  <div className="summary-row discount">
                    <span>Desconto:</span>
                    <span>-R$ {discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>R$ {calculateTotal().toFixed(2)}</span>
                </div>
              </div>
              <div className="summary-footer">
                <p className="secure-checkout">
                  <span className="secure-icon">🔒</span> Pagamento 100% seguro
                </p>
                <div className="payment-icons">
                  <span className="payment-icon">💳</span>
                  <span className="payment-icon">📱</span>
                  <span className="payment-icon">🧾</span>
                </div>
              </div>
            </div>

            <div className="help-card">
              <h3>Precisa de ajuda?</h3>
              <p>Entre em contato com nosso suporte:</p>
              <p>
                <strong>Email:</strong> suporte@kjrdev.com.br
              </p>
              <p>
                <strong>Telefone:</strong> (11) 94625-2220
              </p>
              <p>
                <strong>Horário:</strong> Seg-Sex, 9h às 18h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage

