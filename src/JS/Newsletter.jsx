"use client"

import { useState } from "react"
import "../CSS/Newsletter.css"

function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Email ${email} inscrito com sucesso!`)
      setEmail("")
    }
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Inscreva-se em nossa Newsletter</h2>
          <p className="newsletter-description">
            Receba ofertas exclusivas, novidades e dicas diretamente no seu e-mail.
          </p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">
              Inscrever-se
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

