import "../css/InfoPages.css"
import junior from "../../images/people/junior.png";
import kaue from "../../images/people/kaue.png";
import sara from "../../images/people/sara.png";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="info-page-container">
        <div className="info-page-header">
          <h1 className="info-page-title">Sobre Nós</h1>
          <div className="info-page-divider"></div>
        </div>

        <div className="info-page-content">
          <section className="info-section">
            <h2 className="section-title">Nossa História</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Fundada em 2015, a KJR Ecommerce nasceu da paixão por oferecer produtos de qualidade com preços
                  acessíveis. O que começou como uma pequena loja online em São Paulo, rapidamente se expandiu para
                  se tornar uma referência nacional em e-commerce.
                </p>
                <p>
                  Nossa jornada começou com apenas 5 funcionários e um pequeno depósito. Hoje, contamos com mais de 100
                  colaboradores e um centro de distribuição moderno que nos permite atender todo o território nacional
                  com eficiência e rapidez.
                </p>
              </div>
              <div className="about-image">
                <img src="/src/assets/images/about/store.jpg" alt="Nossa loja" className="rounded-image" />
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Missão, Visão e Valores</h2>
            <div className="values-container">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Missão</h3>
                <p>
                  Proporcionar a melhor experiência de compra online, oferecendo produtos de qualidade, preços justos e
                  atendimento excepcional.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">👁️</div>
                <h3>Visão</h3>
                <p>
                  Ser reconhecida como a empresa de e-commerce mais confiável e inovadora do Brasil, expandindo nossa
                  presença para toda a América Latina até 2030.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">💎</div>
                <h3>Valores</h3>
                <ul className="values-list">
                  <li>Integridade em todas as relações</li>
                  <li>Excelência no atendimento</li>
                  <li>Inovação constante</li>
                  <li>Responsabilidade socioambiental</li>
                  <li>Valorização das pessoas</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Nossa Equipe</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo">
                  <img src={junior} alt="CEO" />
                </div>
                <h3>Rogério Junior</h3>
                <p className="member-role">CEO & Fundador</p>
              </div>

              <div className="team-member">
                <div className="member-photo">
                  <img src={kaue} alt="CEO" />
                </div>
                <h3>Kaue Alves</h3>
                <p className="member-role">CEO & Fundador</p>
              </div>

              <div className="team-member">
                <div className="member-photo">
                  <img src={sara} alt="UX/UI" />
                </div>
                <h3>Sara Vieira</h3>
                <p className="member-role">Diretora de Marketing</p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Nossos Números</h2>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Colaboradores</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">50.000+</div>
                <div className="stat-label">Clientes Satisfeitos</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">10.000+</div>
                <div className="stat-label">Produtos</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">27</div>
                <div className="stat-label">Estados Atendidos</div>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Responsabilidade Social</h2>
            <p>
              Na KJR Ecommerce, acreditamos que o sucesso empresarial deve andar lado a lado com a responsabilidade
              social. Por isso, desenvolvemos diversas iniciativas:
            </p>
            <ul className="responsibility-list">
              <li>Programa de reciclagem de embalagens</li>
              <li>Doação de 1% do lucro para projetos sociais</li>
              <li>Contratação inclusiva e diversa</li>
              <li>Uso de energia renovável em nossas instalações</li>
              <li>Programa de voluntariado corporativo</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

