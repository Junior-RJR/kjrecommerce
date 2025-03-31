import "../css/InfoPages.css"

function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-page">
      <div className="info-page-container">
        <div className="info-page-header">
          <h1 className="info-page-title">Política de Privacidade</h1>
          <div className="info-page-divider"></div>
          <p className="info-page-subtitle">Última atualização: 31 de março de 2025</p>
        </div>

        <div className="info-page-content">
          <section className="info-section">
            <h2 className="section-title">Introdução</h2>
            <p>
              A RJR Ecommerce valoriza a privacidade dos seus usuários e está comprometida em proteger suas informações
              pessoais. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas
              informações quando você utiliza nosso site e serviços.
            </p>
            <p>
              Ao utilizar nosso site, você concorda com as práticas descritas nesta política. Recomendamos que você leia
              este documento na íntegra para entender nossos procedimentos em relação aos seus dados.
            </p>
          </section>

          <section className="info-section">
            <h2 className="section-title">Informações que Coletamos</h2>
            <div className="privacy-card">
              <h3>Informações Fornecidas por Você</h3>
              <ul>
                <li>Informações de cadastro (nome, e-mail, telefone, endereço)</li>
                <li>Informações de pagamento (número do cartão, validade, código de segurança)</li>
                <li>Histórico de compras e preferências</li>
                <li>Comunicações com nosso serviço de atendimento ao cliente</li>
                <li>Avaliações e comentários sobre produtos</li>
              </ul>
            </div>

            <div className="privacy-card">
              <h3>Informações Coletadas Automaticamente</h3>
              <ul>
                <li>Endereço IP e informações do dispositivo</li>
                <li>Dados de navegação e interação com o site</li>
                <li>Cookies e tecnologias similares</li>
                <li>Localização geográfica aproximada</li>
                <li>Informações de referência (como o site que o direcionou para nós)</li>
              </ul>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Como Utilizamos Suas Informações</h2>
            <p>Utilizamos suas informações para os seguintes propósitos:</p>
            <ul className="usage-list">
              <li>
                <strong>Processar transações:</strong> Utilizamos seus dados para processar pedidos, pagamentos e
                entregas.
              </li>
              <li>
                <strong>Melhorar nossos serviços:</strong> Analisamos como você utiliza nosso site para aprimorar a
                experiência do usuário.
              </li>
              <li>
                <strong>Comunicação:</strong> Enviamos confirmações de pedidos, atualizações e informações sobre
                produtos e serviços.
              </li>
              <li>
                <strong>Marketing:</strong> Podemos enviar ofertas e promoções personalizadas com base em suas
                preferências.
              </li>
              <li>
                <strong>Segurança:</strong> Protegemos nosso site e detectamos atividades fraudulentas.
              </li>
              <li>
                <strong>Obrigações legais:</strong> Cumprimos com obrigações fiscais e outras exigências legais.
              </li>
            </ul>
          </section>

          <section className="info-section">
            <h2 className="section-title">Compartilhamento de Informações</h2>
            <p>Podemos compartilhar suas informações com:</p>
            <div className="sharing-container">
              <div className="sharing-item">
                <h3>Parceiros de Serviço</h3>
                <p>
                  Empresas que nos ajudam a operar nosso site e fornecer serviços, como processadores de pagamento,
                  empresas de logística e serviços de atendimento ao cliente.
                </p>
              </div>

              <div className="sharing-item">
                <h3>Parceiros Comerciais</h3>
                <p>Empresas com as quais temos parcerias para oferecer produtos, serviços ou promoções conjuntas.</p>
              </div>

              <div className="sharing-item">
                <h3>Autoridades Legais</h3>
                <p>Quando exigido por lei, ordem judicial ou para proteger nossos direitos legais.</p>
              </div>

              <div className="sharing-item">
                <h3>Empresas Afiliadas</h3>
                <p>Outras empresas do nosso grupo empresarial que seguem práticas de privacidade semelhantes.</p>
              </div>
            </div>
            <p className="sharing-note">
              Não vendemos suas informações pessoais a terceiros para fins de marketing sem seu consentimento explícito.
            </p>
          </section>

          <section className="info-section">
            <h2 className="section-title">Cookies e Tecnologias Similares</h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, entender como você utiliza nosso
              site e personalizar nosso conteúdo e publicidade.
            </p>
            <div className="cookies-types">
              <div className="cookie-type">
                <h3>Cookies Essenciais</h3>
                <p>Necessários para o funcionamento básico do site, como autenticação e segurança.</p>
              </div>

              <div className="cookie-type">
                <h3>Cookies de Preferências</h3>
                <p>Armazenam suas preferências e configurações para melhorar sua experiência.</p>
              </div>

              <div className="cookie-type">
                <h3>Cookies Analíticos</h3>
                <p>Nos ajudam a entender como os usuários interagem com nosso site.</p>
              </div>

              <div className="cookie-type">
                <h3>Cookies de Marketing</h3>
                <p>Utilizados para exibir anúncios relevantes e medir a eficácia das campanhas.</p>
              </div>
            </div>
            <p>
              Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. No entanto,
              desabilitar certos cookies pode afetar a funcionalidade do site.
            </p>
          </section>

          <section className="info-section">
            <h2 className="section-title">Seus Direitos</h2>
            <p>De acordo com as leis de proteção de dados aplicáveis, você tem os seguintes direitos:</p>
            <div className="rights-grid">
              <div className="right-item">
                <div className="right-icon">🔍</div>
                <h3>Acesso</h3>
                <p>Solicitar acesso às suas informações pessoais que processamos.</p>
              </div>

              <div className="right-item">
                <div className="right-icon">✏️</div>
                <h3>Retificação</h3>
                <p>Corrigir informações imprecisas ou incompletas.</p>
              </div>

              <div className="right-item">
                <div className="right-icon">🗑️</div>
                <h3>Exclusão</h3>
                <p>Solicitar a exclusão de suas informações pessoais.</p>
              </div>

              <div className="right-item">
                <div className="right-icon">⛔</div>
                <h3>Restrição</h3>
                <p>Limitar o processamento de suas informações pessoais.</p>
              </div>

              <div className="right-item">
                <div className="right-icon">📤</div>
                <h3>Portabilidade</h3>
                <p>Receber suas informações em formato estruturado e transferível.</p>
              </div>

              <div className="right-item">
                <div className="right-icon">❌</div>
                <h3>Objeção</h3>
                <p>Opor-se ao processamento de suas informações pessoais.</p>
              </div>
            </div>
            <p className="rights-note">
              Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail:{" "}
              <a href="mailto:privacidade@rjrecommerce.com">privacidade@rjrecommerce.com</a>
            </p>
          </section>

          <section className="info-section">
            <h2 className="section-title">Segurança de Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais
              contra acesso não autorizado, perda acidental, divulgação ou destruição. Algumas das medidas que adotamos
              incluem:
            </p>
            <ul className="security-list">
              <li>Criptografia de dados sensíveis</li>
              <li>Firewalls e sistemas de detecção de intrusão</li>
              <li>Acesso restrito a informações pessoais</li>
              <li>Monitoramento regular de sistemas</li>
              <li>Treinamento de segurança para funcionários</li>
            </ul>
            <p>
              Embora nos esforcemos para proteger suas informações, nenhum método de transmissão pela internet ou
              armazenamento eletrônico é 100% seguro. Portanto, não podemos garantir segurança absoluta.
            </p>
          </section>

          <section className="info-section">
            <h2 className="section-title">Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou
              por outros motivos operacionais, legais ou regulatórios. Recomendamos que você revise esta política
              regularmente para se manter informado sobre como protegemos suas informações.
            </p>
            <p>
              Notificaremos você sobre quaisquer alterações significativas através de um aviso em nosso site ou por
              e-mail, quando apropriado.
            </p>
          </section>

          <section className="info-section">
            <h2 className="section-title">Contato</h2>
            <p>
              Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao
              processamento de suas informações pessoais, entre em contato conosco:
            </p>
            <div className="contact-info">
              <p>
                <strong>E-mail:</strong> <a href="mailto:privacidade@rjrecommerce.com">privacidade@rjrecommerce.com</a>
              </p>
              <p>
                <strong>Telefone:</strong> (21) 9999-9999
              </p>
              <p>
                <strong>Endereço:</strong> Rua Exemplo, 123, Rio de Janeiro, RJ, CEP: 12345-678
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage

