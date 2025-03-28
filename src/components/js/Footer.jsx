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
              <img src={logo} alt="RJR Ecommerce" className="footer-logo-image" />
            </a>
            <p className="footer-description">Sua loja online com os melhores produtos e preços do mercado.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <span className="social-icon">📘</span>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">📷</span>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">🐦</span>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">▶️</span>
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Categorias</h3>
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
                <li>
                <a href="#" className="footer-link">
                  Acessórios
                </a>
                </li>
                <li>
                <a href="#" className="footer-link">
                  Beleza
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Informações</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Termos e Condições
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Formas de Pagamento
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Política de Entrega
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contato</h3>
            <address className="footer-address">
              <p>Av Capuava, 123</p>
              <p>Santo André, SP</p>
              <p>CEP: 09111-000</p>
              <p className="contact-info">rogeriojunior@kjrdev.com</p>
              <p className="contact-info">(11) 94625-2220</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} KJR Desenvolvimento. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

