import "../css/Footer.css"
import logo from "../../images/logo.svg";

  function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <a href="/" className="footer-logo">
              <img src={logo} alt="RJR Ecommerce" className="logo-image" />
            </a>
            <p className="footer-description">Sua loja online com os melhores produtos e preços do mercado.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Categorias</h3>
            <ul className="footer-links">
              <li>
                <a href="/produtos?categoria=Eletrônicos" className="footer-link">
                  Eletrônicos
                </a>
              </li>
              <li>
                <a href="/produtos?categoria=Moda" className="footer-link">
                  Moda
                </a>
              </li>
              <li>
                <a href="/produtos?categoria=Casa & Decoração" className="footer-link">
                  Casa & Decoração
                </a>
              </li>
              <li>
                <a href="/produtos?categoria=Esportes" className="footer-link">
                  Esportes
                </a>
              </li>
              <li>
                <a href="/produtos?categoria=Beleza & Saúde" className="footer-link">
                  Beleza & Saúde
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Informações</h3>
            <ul className="footer-links">
              <li>
                <a href="/sobre" className="footer-link">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/privacidade" className="footer-link">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos" className="footer-link">
                  Termos e Condições
                </a>
              </li>
              <li>
                <a href="/pagamentos" className="footer-link">
                  Formas de Pagamento
                </a>
              </li>
              <li>
                <a href="/entregas" className="footer-link">
                  Política de Entrega
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contato</h3>
            <address className="footer-address">
              <p>Avenida Capuava</p>
              <p>Santo André, SP</p>
              <p>CEP: 09111-000</p>
              <p className="contact-info">rogeriojunior@kjrdev.com.br</p>
              <p className="contact-info">(11) 94625-2220</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} KJR Ecommerce. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
  }

  export default Footer

