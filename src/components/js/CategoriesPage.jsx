"use client"

import { useState, useEffect } from "react"
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
  const [formSteps, setFormSteps] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formSteps < 5) {
        setFormSteps(formSteps + 1)
      }
    }, 200)
    return () => clearTimeout(timer)
  }, [formSteps])

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

  const renderFormGroup = (name, label, type = "text", required = false) => {
    const isVisible = formSteps >= getStepForField(name)
    const className = `form-group ${isVisible ? "animated fadeIn" : "hidden"}`

    return (
      <div className={className}>
        <label htmlFor={name}>
          {label} {required && <span className="required">*</span>}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={errors[name] ? "error" : ""}
          required={required}
        />
        {errors[name] && <span className="error-message">{errors[name]}</span>}
      </div>
    )
  }

  const getStepForField = (name) => {
    const steps = {
      name: 0,
      email: 1,
      phone: 2,
      subject: 3,
      message: 4,
    }
    return steps[name] || 0
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
              <p className="info-text">Rua Exemplo, 123</p>
              <p className="info-text">Rio de Janeiro, RJ</p>
              <p className="info-text">CEP: 12345-678</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3 className="info-title">Telefone</h3>
              <p className="info-text">(21) 9999-9999</p>
              <p className="info-text">(21) 8888-8888</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3 className="info-title">Email</h3>
              <p className="info-text">contato@rjrecommerce.com</p>
              <p className="info-text">suporte@rjrecommerce.com</p>
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
                {renderFormGroup("name", "Nome Completo", "text", true)}
                {renderFormGroup("email", "Email", "email", true)}
                {renderFormGroup("phone", "Telefone", "tel", false)}
                {renderFormGroup("subject", "Assunto", "text", true)}

                <div className={`form-group ${formSteps >= 4 ? "animated fadeIn" : "hidden"}`}>
                  <label htmlFor="message">
                    Mensagem <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                    required
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span>
                      Enviando... <i className="loading-spinner"></i>
                    </span>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="map-container">
          <h2 className="map-title">Nossa Localização</h2>
          <div className="map-content">
            <div className="map-placeholder">
              <p>Mapa será carregado aqui</p>
              <p className="map-note">Utilize uma API de mapas como Google Maps para integrar um mapa real</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

