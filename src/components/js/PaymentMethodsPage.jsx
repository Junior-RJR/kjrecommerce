import "../css/InfoPages.css"

function PaymentMethodsPage() {
  return (
    <div className="payment-methods-page">
      <div className="info-page-container">
        <div className="info-page-header">
          <h1 className="info-page-title">Formas de Pagamento</h1>
          <div className="info-page-divider"></div>
        </div>

        <div className="info-page-content">
          <section className="info-section">
            <h2 className="section-title">Opções de Pagamento Disponíveis</h2>
            <p className="payment-intro">
              Na RJR Ecommerce, oferecemos diversas opções de pagamento para tornar sua experiência de compra mais
              conveniente. Confira abaixo todas as formas de pagamento aceitas em nossa loja:
            </p>

            <div className="payment-methods-grid">
              <div className="payment-method-card">
                <div className="payment-icon credit-card-icon">💳</div>
                <h3>Cartões de Crédito</h3>
                <p>Aceitamos as principais bandeiras de cartões de crédito:</p>
                <div className="card-brands">
                  <span className="card-brand">Visa</span>
                  <span className="card-brand">Mastercard</span>
                  <span className="card-brand">American Express</span>
                  <span className="card-brand">Elo</span>
                  <span className="card-brand">Hipercard</span>
                </div>
                <p className="payment-details">Parcelamento em até 12x sem juros para compras acima de R$ 100,00.</p>
              </div>

              <div className="payment-method-card">
                <div className="payment-icon debit-card-icon">💲</div>
                <h3>Cartões de Débito</h3>
                <p>Pagamento à vista com débito online:</p>
                <div className="card-brands">
                  <span className="card-brand">Visa Electron</span>
                  <span className="card-brand">Maestro</span>
                  <span className="card-brand">Elo Débito</span>
                </div>
                <p className="payment-details">Transação segura e confirmação imediata do pedido.</p>
              </div>

              <div className="payment-method-card">
                <div className="payment-icon boleto-icon">📃</div>
                <h3>Boleto Bancário</h3>
                <p>Gere um boleto para pagamento em qualquer agência bancária, casas lotéricas ou internet banking.</p>
                <p className="payment-details">
                  O prazo para compensação do boleto é de até 3 dias úteis. Seu pedido será processado após a
                  confirmação do pagamento.
                </p>
                <p className="payment-note">Boletos têm vencimento em 3 dias úteis após a geração.</p>
              </div>

              <div className="payment-method-card">
                <div className="payment-icon pix-icon">⚡</div>
                <h3>PIX</h3>
                <p>Pagamento instantâneo através do PIX, disponível 24 horas por dia, 7 dias por semana.</p>
                <p className="payment-details">Confirmação em segundos e processamento imediato do seu pedido.</p>
                <p className="payment-note">O código PIX gerado tem validade de 30 minutos.</p>
              </div>

              <div className="payment-method-card">
                <div className="payment-icon wallet-icon">👝</div>
                <h3>Carteiras Digitais</h3>
                <p>Pagamento rápido e seguro com:</p>
                <div className="wallet-brands">
                  <span className="wallet-brand">PayPal</span>
                  <span className="wallet-brand">PicPay</span>
                  <span className="wallet-brand">Mercado Pago</span>
                  <span className="wallet-brand">Google Pay</span>
                </div>
                <p className="payment-details">
                  Praticidade e segurança sem precisar digitar dados do cartão a cada compra.
                </p>
              </div>

              <div className="payment-method-card">
                <div className="payment-icon transfer-icon">🏦</div>
                <h3>Transferência Bancária</h3>
                <p>Transferência direta para nossa conta bancária.</p>
                <p className="payment-details">
                  Disponível para os principais bancos brasileiros. Seu pedido será processado após a confirmação da
                  transferência.
                </p>
                <p className="payment-note">Envie o comprovante para agilizar a confirmação.</p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Parcelamento</h2>
            <div className="installment-table-container">
              <table className="installment-table">
                <thead>
                  <tr>
                    <th>Valor da Compra</th>
                    <th>Parcelas sem Juros</th>
                    <th>Parcelas com Juros</th>
                    <th>Taxa de Juros</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Até R$ 99,99</td>
                    <td>1x</td>
                    <td>2x a 12x</td>
                    <td>1,99% a.m.</td>
                  </tr>
                  <tr>
                    <td>R$ 100,00 a R$ 299,99</td>
                    <td>Até 3x</td>
                    <td>4x a 12x</td>
                    <td>1,99% a.m.</td>
                  </tr>
                  <tr>
                    <td>R$ 300,00 a R$ 599,99</td>
                    <td>Até 6x</td>
                    <td>7x a 12x</td>
                    <td>1,99% a.m.</td>
                  </tr>
                  <tr>
                    <td>R$ 600,00 a R$ 999,99</td>
                    <td>Até 10x</td>
                    <td>11x a 12x</td>
                    <td>1,99% a.m.</td>
                  </tr>
                  <tr>
                    <td>Acima de R$ 1.000,00</td>
                    <td>Até 12x</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="installment-note">
              * O parcelamento pode variar de acordo com a análise de crédito e bandeira do cartão.
            </p>
          </section>

          <section className="info-section">
            <h2 className="section-title">Segurança nas Transações</h2>
            <div className="security-container">
              <div className="security-item">
                <div className="security-icon">🔒</div>
                <h3>Criptografia SSL</h3>
                <p>
                  Todas as transações em nosso site são protegidas por criptografia SSL de 256 bits, garantindo que seus
                  dados pessoais e financeiros estejam sempre seguros.
                </p>
              </div>

              <div className="security-item">
                <div className="security-icon">🛡️</div>
                <h3>Autenticação 3D Secure</h3>
                <p>
                  Utilizamos o protocolo 3D Secure para transações com cartão de crédito, adicionando uma camada extra
                  de segurança através da autenticação do titular do cartão.
                </p>
              </div>

              <div className="security-item">
                <div className="security-icon">✅</div>
                <h3>Certificações de Segurança</h3>
                <p>
                  Nossa plataforma de pagamento é certificada pelas principais entidades de segurança digital, como PCI
                  DSS, garantindo conformidade com os mais rigorosos padrões internacionais.
                </p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Perguntas Frequentes</h2>
            <div className="faq-container">
              <div className="faq-item">
                <h3>Quando meu cartão será cobrado?</h3>
                <p>
                  A cobrança no seu cartão de crédito é feita imediatamente após a confirmação do pedido. Para boletos e
                  transferências, o pedido será processado após a confirmação do pagamento.
                </p>
              </div>

              <div className="faq-item">
                <h3>Posso alterar a forma de pagamento após finalizar o pedido?</h3>
                <p>
                  Não é possível alterar a forma de pagamento após a finalização do pedido. Caso deseje utilizar outro
                  método, será necessário cancelar o pedido atual e realizar uma nova compra.
                </p>
              </div>

              <div className="faq-item">
                <h3>O que acontece se meu pagamento não for aprovado?</h3>
                <p>
                  Em caso de não aprovação, você receberá uma notificação por e-mail e poderá tentar novamente com outro
                  método de pagamento ou entrar em contato com nosso suporte ao cliente para assistência.
                </p>
              </div>

              <div className="faq-item">
                <h3>Como funciona o pagamento com cupom de desconto?</h3>
                <p>
                  Os cupons de desconto devem ser aplicados antes da finalização da compra, no carrinho ou na página de
                  checkout. O valor do desconto será automaticamente deduzido do valor total.
                </p>
              </div>

              <div className="faq-item">
                <h3>Emitem nota fiscal?</h3>
                <p>
                  Sim, emitimos nota fiscal para todas as compras. A nota fiscal eletrônica (NF-e) é enviada para o
                  e-mail cadastrado após o processamento do pedido.
                </p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Contato</h2>
            <p>
              Em caso de dúvidas sobre pagamentos ou problemas com transações, entre em contato com nossa equipe de
              atendimento:
            </p>
            <div className="contact-info">
              <p>
                <strong>E-mail:</strong> <a href="mailto:financeiro@rjrecommerce.com">financeiro@rjrecommerce.com</a>
              </p>
              <p>
                <strong>Telefone:</strong> (21) 9999-9999
              </p>
              <p>
                <strong>Horário de atendimento:</strong> Segunda a sexta, das 8h às 18h
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodsPage

