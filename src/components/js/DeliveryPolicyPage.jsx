import "../css/InfoPages.css"

function DeliveryPolicyPage() {
  return (
    <div className="delivery-policy-page">
      <div className="info-page-container">
        <div className="info-page-header">
          <h1 className="info-page-title">Política de Entrega</h1>
          <div className="info-page-divider"></div>
        </div>

        <div className="info-page-content">
          <section className="info-section">
            <h2 className="section-title">Prazos de Entrega</h2>
            <p className="delivery-intro">
              A KJR Ecommerce trabalha com os melhores parceiros logísticos para garantir que seu pedido chegue no menor
              tempo possível e em perfeitas condições. Os prazos de entrega variam de acordo com a região de destino e a
              modalidade de envio escolhida.
            </p>

            <div className="delivery-table-container">
              <table className="delivery-table">
                <thead>
                  <tr>
                    <th>Região</th>
                    <th>Entrega Expressa</th>
                    <th>Entrega Padrão</th>
                    <th>Entrega Econômica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Capitais do Sudeste</td>
                    <td>1-2 dias úteis</td>
                    <td>3-4 dias úteis</td>
                    <td>5-7 dias úteis</td>
                  </tr>
                  <tr>
                    <td>Interior do Sudeste</td>
                    <td>2-3 dias úteis</td>
                    <td>4-6 dias úteis</td>
                    <td>7-10 dias úteis</td>
                  </tr>
                  <tr>
                    <td>Capitais do Sul e Nordeste</td>
                    <td>2-3 dias úteis</td>
                    <td>4-6 dias úteis</td>
                    <td>7-10 dias úteis</td>
                  </tr>
                  <tr>
                    <td>Interior do Sul e Nordeste</td>
                    <td>3-4 dias úteis</td>
                    <td>5-8 dias úteis</td>
                    <td>9-12 dias úteis</td>
                  </tr>
                  <tr>
                    <td>Centro-Oeste</td>
                    <td>2-4 dias úteis</td>
                    <td>5-7 dias úteis</td>
                    <td>8-12 dias úteis</td>
                  </tr>
                  <tr>
                    <td>Norte</td>
                    <td>3-5 dias úteis</td>
                    <td>6-10 dias úteis</td>
                    <td>11-15 dias úteis</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="delivery-note">
              * Os prazos são contados a partir da confirmação do pagamento e aprovação do pedido.
            </p>
            <p className="delivery-note">
              * Em períodos promocionais como Black Friday e Natal, os prazos podem sofrer alterações.
            </p>
          </section>

          <section className="info-section">
            <h2 className="section-title">Modalidades de Entrega</h2>
            <div className="delivery-methods-grid">
              <div className="delivery-method-card">
                <div className="delivery-icon express-icon">🚀</div>
                <h3>Entrega Expressa</h3>
                <p>
                  Nossa opção mais rápida, ideal para quem precisa receber o produto com urgência. Disponível para todas
                  as capitais e principais cidades do Brasil.
                </p>
                <p className="delivery-details">
                  Rastreamento em tempo real e entrega garantida no prazo estipulado ou devolvemos o valor do frete.
                </p>
              </div>

              <div className="delivery-method-card">
                <div className="delivery-icon standard-icon">🚚</div>
                <h3>Entrega Padrão</h3>
                <p>
                  Nossa opção mais popular, com boa relação custo-benefício. Disponível para todo o território nacional.
                </p>
                <p className="delivery-details">Rastreamento completo do pedido e seguro contra extravios.</p>
              </div>

              <div className="delivery-method-card">
                <div className="delivery-icon economic-icon">💰</div>
                <h3>Entrega Econômica</h3>
                <p>
                  Opção com melhor custo para quem não tem pressa em receber o produto. Disponível para todo o
                  território nacional.
                </p>
                <p className="delivery-details">Rastreamento básico e seguro contra extravios.</p>
              </div>

              <div className="delivery-method-card">
                <div className="delivery-icon pickup-icon">🏪</div>
                <h3>Retirada na Loja</h3>
                <p>
                  Disponível apenas para clientes da cidade de São Paulo. Retire seu pedido em uma de nossas lojas
                  físicas sem custo de frete.
                </p>
                <p className="delivery-details">
                  O pedido fica disponível para retirada por até 7 dias após a confirmação de disponibilidade.
                </p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Custos de Envio</h2>
            <p>
              O valor do frete é calculado com base no CEP de destino, dimensões e peso do produto, além da modalidade
              de entrega escolhida. Você pode consultar o valor exato do frete na página do produto ou no carrinho de
              compras, antes de finalizar o pedido.
            </p>

            <div className="shipping-info">
              <div className="shipping-card">
                <h3>Frete Grátis</h3>
                <p>
                  Oferecemos frete grátis para compras acima de R$ 299,00 na modalidade de Entrega Padrão para todo o
                  Brasil.
                </p>
                <p>
                  Promoções especiais de frete grátis podem ser oferecidas periodicamente, fique atento às nossas
                  comunicações.
                </p>
              </div>

              <div className="shipping-card">
                <h3>Frete com Desconto</h3>
                <p>
                  Clientes cadastrados em nosso programa de fidelidade têm direito a descontos progressivos no frete, de
                  acordo com o nível de fidelidade.
                </p>
                <ul>
                  <li>Nível Bronze: 5% de desconto no frete</li>
                  <li>Nível Prata: 10% de desconto no frete</li>
                  <li>Nível Ouro: 15% de desconto no frete</li>
                  <li>Nível Diamante: 20% de desconto no frete</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Rastreamento</h2>
            <p>
              Todos os pedidos enviados pela KJR Ecommerce possuem código de rastreamento, que é enviado por e-mail
              assim que o produto é despachado. Você também pode acompanhar o status do seu pedido através da sua conta
              em nosso site, na seção "Meus Pedidos".
            </p>
            <div className="tracking-steps">
              <div className="tracking-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Pedido Confirmado</h3>
                  <p>Seu pagamento foi aprovado e o pedido está sendo processado.</p>
                </div>
              </div>

              <div className="tracking-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Em Separação</h3>
                  <p>Estamos separando os produtos do seu pedido em nosso estoque.</p>
                </div>
              </div>

              <div className="tracking-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Em Transporte</h3>
                  <p>Seu pedido foi despachado e está a caminho do endereço de entrega.</p>
                </div>
              </div>

              <div className="tracking-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Entregue</h3>
                  <p>Seu pedido foi entregue com sucesso no endereço informado.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Política de Entregas Não Realizadas</h2>
            <p>
              Em caso de ausência no endereço de entrega, nossa transportadora realizará até 3 tentativas de entrega em
              dias úteis consecutivos. Após a terceira tentativa sem sucesso, o pacote será devolvido ao nosso centro de
              distribuição.
            </p>
            <p>
              Nesse caso, entraremos em contato para agendar uma nova entrega, que poderá ter custos adicionais de
              frete, ou para providenciar o reembolso do valor do pedido, descontando-se o valor do frete inicial.
            </p>
            <div className="delivery-alert">
              <h3>Importante:</h3>
              <ul>
                <li>Certifique-se de que o endereço de entrega está completo e correto.</li>
                <li>
                  Informe um telefone de contato atualizado para que a transportadora possa entrar em contato, se
                  necessário.
                </li>
                <li>
                  Caso saiba que não haverá ninguém no endereço para receber o pedido, informe um vizinho ou porteiro
                  que possa recebê-lo.
                </li>
              </ul>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Áreas de Entrega Restritas</h2>
            <p>
              Por questões de segurança, algumas áreas podem ter restrições de entrega ou prazos diferenciados. Caso seu
              endereço esteja em uma área com restrição, entraremos em contato para informar as opções disponíveis.
            </p>
            <p>Em alguns casos, podemos oferecer a opção de retirada em um ponto de coleta próximo ao seu endereço.</p>
          </section>

          <section className="info-section">
            <h2 className="section-title">Recebimento e Conferência</h2>
            <div className="receipt-tips">
              <h3>Ao receber seu pedido:</h3>
              <ol>
                <li>Verifique se a embalagem está íntegra, sem sinais de violação ou danos.</li>
                <li>Confira se o produto corresponde ao que foi pedido.</li>
                <li>Teste o funcionamento do produto, quando aplicável.</li>
                <li>Em caso de qualquer problema, registre a ocorrência imediatamente.</li>
              </ol>
              <p>
                Caso identifique alguma irregularidade no momento da entrega, você pode recusar o recebimento e entrar
                em contato com nosso Serviço de Atendimento ao Cliente.
              </p>
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Contato</h2>
            <p>
              Em caso de dúvidas sobre entregas, prazos ou problemas com recebimento, entre em contato com nossa equipe
              de logística:
            </p>
            <div className="contact-info">
              <p>
                <strong>E-mail:</strong> <a href="mailto:entregas@kjrdev.com.br">entregas@kjrdev.com.br</a>
              </p>
              <p>
                <strong>Telefone:</strong> (11) 94625-2220
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

export default DeliveryPolicyPage

