import { useState } from "react"
import "../css/Newsletter.css"

function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) return

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")

      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-icon">✉️</div>
          <h2 className="newsletter-title">Inscreva-se em nossa newsletter</h2>
          <p className="newsletter-description">
            Receba ofertas exclusivas, novidades e dicas diretamente no seu email
          </p>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Inscrever-se"}
            </button>
          </form>

          {isSuccess && <p className="success-message">Inscrição realizada com sucesso!</p>}
        </div>
      </div>
    </section>
  )
}

export default Newsletter

