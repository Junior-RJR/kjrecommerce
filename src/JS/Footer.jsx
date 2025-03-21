import "../CSS/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-title">LojaBrasil</h3>
              <p className="footer-description">Sua loja online com os melhores produtos e ofertas imperdíveis.</p>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Links Rápidos</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Categorias</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Eletrônicos
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Moda
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Casa & Decoração
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Esportes
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Contato</h3>
              <address className="footer-address">
                <p>Av. Paulista, 1000</p>
                <p>São Paulo, SP</p>
                <p className="mt-2">contato@lojabrasil.com</p>
                <p>(11) 9999-9999</p>
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">© 2025 LojaBrasil. Todos os direitos reservados.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

