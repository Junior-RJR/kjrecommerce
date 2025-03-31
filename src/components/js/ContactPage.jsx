import { useState } from "react"
import "../css/ContactPage.css"

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Assunto é obrigatório"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória"
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Mensagem deve ter pelo menos 20 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })

        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 1500)
    }
  }

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="page-title">Entre em Contato</h1>
          <p className="page-description">
            Estamos aqui para ajudar. Envie sua mensagem e responderemos o mais breve possível.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3 className="info-title">Endereço</h3>
              <p className="info-text">Av Capuava</p>
              <p className="info-text">Santo André, SP</p>
              <p className="info-text">CEP: 09111-000</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3 className="info-title">Telefone</h3>
              <p className="info-text">(11) 94625-2220</p>
              {/* <p className="info-text">(21) 8888-8888</p> */}
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3 className="info-title">Email</h3>
              <p className="info-text">suporte@kjrdev.com.br</p>
              <p className="info-text">rogeriojunior@kjrdev.com.br</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3 className="info-title">Horário de Atendimento</h3>
              <p className="info-text">Segunda a Sexta: 9h às 18h</p>
              <p className="info-text">Sábado: 9h às 13h</p>
            </div>
          </div>

          <div className="contact-form-container">
            {submitSuccess ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3 className="success-title">Mensagem Enviada!</h3>
                <p className="success-text">Agradecemos seu contato. Responderemos em breve.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
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

                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assunto *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "error" : ""}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="map-container">
          <h2 className="map-title">Nossa Localização</h2>
          <div className="map-placeholder">
            <p>Mapa será carregado aqui</p>
            {/* <p className="map-note">Utilize uma API de mapas como Google Maps para integrar um mapa real</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

