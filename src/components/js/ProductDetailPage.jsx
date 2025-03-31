import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useCart } from "./CartContext"
import "../css/ProductDetailPage.css"

import cafeteira from "../../images/produtos/casa/cafeteira.jpg"
import kitferramenta from "../../images/produtos/casa/kitferramenta.jpg"
import luminaria from "../../images/produtos/casa/luminaria.jpg"
import panelas from "../../images/produtos/casa/panelas.jpg"
import cadeira from "../../images/produtos/eletronicos/cadeira.jpg"
import fone from "../../images/produtos/eletronicos/fone.jpg"
import relogio from "../../images/produtos/eletronicos/relogio.jpg"
import smartphone from "../../images/produtos/eletronicos/smartphone.jpg"
import bola from "../../images/produtos/esportes/bola.jpg"
import tenisrunner from "../../images/produtos/esportes/tenisrunner.jpg"
import camisetabasica from "../../images/produtos/moda/camisetabasica.jpg"
import mochila from "../../images/produtos/moda/mochila.jpg"
import tenis from "../../images/produtos/moda/tenis.jpg"

const allProducts = [
  {
    id: 1,
    name: "Smartphone XYZ Pro",
    price: 1299.99,
    image: smartphone,
    category: "Eletrônicos",
    isNew: true,
    discount: 0,
    description: "O mais recente smartphone com câmera de alta resolução e processador potente.",
    longDescription:
      "O Smartphone XYZ Pro representa o que há de mais avançado em tecnologia móvel. Com seu processador octa-core de última geração, 8GB de RAM e 256GB de armazenamento, ele oferece desempenho excepcional para todas as suas necessidades. A câmera principal de 108MP captura imagens com detalhes impressionantes, enquanto a bateria de 5000mAh garante autonomia para o dia todo.",
    specs: [
      'Tela: 6.7" AMOLED 120Hz',
      "Processador: Octa-core 2.8GHz",
      "RAM: 8GB",
      "Armazenamento: 256GB",
      "Câmera principal: 108MP + 12MP + 8MP",
      "Câmera frontal: 32MP",
      "Bateria: 5000mAh",
      "Sistema: Android 13",
    ],
    additionalImages: [smartphone, smartphone, smartphone],
    colors: ["Preto", "Azul", "Prata"],
    stock: 15,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Tênis Esportivo Runner",
    price: 199.9,
    image: tenisrunner,
    category: "Esportes",
    isNew: false,
    discount: 15,
    description: "Tênis leve e confortável, ideal para corridas e atividades físicas.",
    longDescription:
      "O Tênis Esportivo Runner foi desenvolvido para proporcionar máximo conforto e desempenho durante suas atividades físicas. Com tecnologia de amortecimento avançada, ele reduz o impacto nas articulações durante a corrida. O cabedal em mesh respirável mantém seus pés frescos, enquanto o solado de borracha oferece aderência excepcional em diferentes superfícies.",
    specs: [
      "Material: Mesh respirável e sintético",
      "Solado: Borracha antiderrapante",
      "Tecnologia de amortecimento",
      "Palmilha removível",
      "Peso: 280g (tamanho 40)",
      "Drop: 8mm",
    ],
    additionalImages: [tenisrunner, tenisrunner, tenisrunner],
    colors: ["Preto/Verde", "Cinza/Azul", "Branco/Vermelho"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    stock: 23,
    rating: 4.5,
    reviews: 87,
  },
  {
    id: 3,
    name: "Fone de Ouvido Bluetooth",
    price: 149.9,
    image: fone,
    category: "Eletrônicos",
    isNew: true,
    discount: 0,
    description: "Fone sem fio com cancelamento de ruído e bateria de longa duração.",
    longDescription:
      "Experimente liberdade total com os Fones de Ouvido Bluetooth. Com tecnologia de cancelamento ativo de ruído, você pode se imergir completamente em suas músicas favoritas sem distrações externas. A bateria de longa duração oferece até 30 horas de reprodução, enquanto o design ergonômico garante conforto mesmo durante longos períodos de uso.",
    specs: [
      "Bluetooth 5.2",
      "Cancelamento ativo de ruído",
      "Bateria: 30h de reprodução",
      "Drivers de 40mm",
      "Microfone integrado",
      "Controles touch",
      "Resistente a respingos IPX4",
    ],
    additionalImages: [fone, fone, fone],
    colors: ["Preto", "Branco", "Azul Marinho"],
    stock: 42,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Camiseta Básica Premium",
    price: 79.9,
    image: camisetabasica,
    category: "Moda",
    isNew: false,
    discount: 10,
    description: "Camiseta de algodão de alta qualidade, confortável para o dia a dia.",
    longDescription:
      "Nossa Camiseta Básica Premium é feita com algodão 100% orgânico, proporcionando conforto excepcional e durabilidade. O corte moderno se adapta perfeitamente ao corpo, enquanto o acabamento de alta qualidade garante que ela mantenha sua forma mesmo após várias lavagens. Versátil e estilosa, é uma peça essencial para qualquer guarda-roupa.",
    specs: [
      "Material: 100% algodão orgânico",
      "Gramatura: 180g/m²",
      "Gola careca reforçada",
      "Costura dupla nas extremidades",
      "Lavável à máquina",
      "Produção sustentável",
    ],
    additionalImages: [camisetabasica, camisetabasica, camisetabasica],
    colors: ["Branco", "Preto", "Cinza", "Azul Marinho"],
    sizes: ["P", "M", "G", "GG"],
    stock: 50,
    rating: 4.6,
    reviews: 92,
  },
  {
    id: 5,
    name: "Luminária de Mesa LED",
    price: 129.9,
    image: luminaria,
    category: "Casa e Decoração",
    isNew: false,
    discount: 0,
    description: "Luminária moderna com ajuste de intensidade e temperatura de cor.",
    longDescription:
      "A Luminária de Mesa LED combina design moderno com funcionalidade avançada. Com controle de toque intuitivo, você pode ajustar a intensidade da luz e a temperatura de cor de acordo com suas necessidades. Perfeita para estudos, leitura ou para criar o ambiente ideal em qualquer espaço. Seu braço flexível permite direcionar a luz exatamente onde você precisa.",
    specs: [
      "Potência: 10W",
      "Temperatura de cor: 3000K-6500K (ajustável)",
      "5 níveis de brilho",
      "Braço flexível de 30cm",
      "Controle de toque",
      "Timer de desligamento automático",
      "Porta USB para carregamento",
    ],
    additionalImages: [luminaria, luminaria, luminaria],
    colors: ["Branco", "Preto", "Prata"],
    stock: 35,
    rating: 4.8,
    reviews: 73,
  },
  {
    id: 6,
    name: "Mochila Impermeável",
    price: 159.9,
    image: mochila,
    category: "Moda",
    isNew: false,
    discount: 20,
    description: "Mochila resistente à água com compartimentos para notebook e acessórios.",
    longDescription:
      'Nossa Mochila Impermeável é ideal para quem precisa de proteção e organização. Fabricada com material de alta qualidade resistente à água, ela mantém seus pertences seguros mesmo em dias chuvosos. Possui compartimento acolchoado para notebook de até 15.6", múltiplos bolsos para organização e alças ergonômicas para maior conforto durante o uso prolongado.',
    specs: [
      "Material: Poliéster 900D impermeável",
      "Capacidade: 25L",
      'Compartimento para notebook até 15.6"',
      "Bolso anti-roubo nas costas",
      "Porta USB externa com cabo interno",
      "Alças acolchoadas e ajustáveis",
      "Dimensões: 45 x 30 x 15 cm",
    ],
    additionalImages: [mochila, mochila, mochila],
    colors: ["Preto", "Azul", "Cinza"],
    stock: 28,
    rating: 4.7,
    reviews: 112,
  },
  {
    id: 7,
    name: "Relógio Inteligente Sport",
    price: 349.9,
    image: relogio,
    category: "Eletrônicos",
    isNew: true,
    discount: 0,
    description: "Smartwatch com monitoramento de atividades físicas e notificações.",
    longDescription:
      "O Relógio Inteligente Sport é seu companheiro ideal para uma vida ativa e conectada. Monitore mais de 20 modalidades esportivas, acompanhe seus batimentos cardíacos, níveis de oxigênio no sangue e qualidade do sono. Receba notificações do seu smartphone diretamente no pulso e gerencie sua agenda com facilidade. Com bateria de longa duração, você pode usá-lo por até 14 dias com uma única carga.",
    specs: [
      'Tela: 1.3" AMOLED',
      "Resistência à água: 5ATM",
      "GPS integrado",
      "Monitoramento cardíaco 24h",
      "Sensor de SpO2",
      "Bateria: até 14 dias",
      "Compatível com Android e iOS",
      "Mais de 20 modos esportivos",
    ],
    additionalImages: [relogio, relogio, relogio],
    colors: ["Preto", "Azul", "Verde"],
    stock: 18,
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 8,
    name: "Conjunto de Panelas Antiaderente",
    price: 299.9,
    image: panelas,
    category: "Casa e Decoração",
    isNew: false,
    discount: 17,
    description: "Kit de panelas de alta qualidade com revestimento antiaderente.",
    longDescription:
      "O Conjunto de Panelas Antiaderente é perfeito para quem busca qualidade e durabilidade na cozinha. Com revestimento antiaderente de última geração, livre de PFOA, permite cozinhar com menos óleo e facilita a limpeza. As alças ergonômicas de silicone oferecem conforto e segurança, enquanto a base de indução garante distribuição uniforme de calor e compatibilidade com todos os tipos de fogão.",
    specs: [
      "Conjunto com 5 peças",
      "Material: Alumínio com revestimento antiaderente",
      "Livre de PFOA",
      "Alças de silicone resistentes ao calor",
      "Base compatível com indução",
      "Tampas de vidro temperado",
      "Aptas para lava-louças",
    ],
    additionalImages: [panelas, panelas, panelas],
    colors: ["Preto", "Vermelho", "Cobre"],
    stock: 12,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 9,
    name: "Cadeira Gamer Ergonômica",
    price: 899.9,
    image: cadeira,
    category: "Eletrônicos",
    isNew: false,
    discount: 5,
    description: "Cadeira confortável com ajustes de altura e inclinação para longas sessões.",
    longDescription:
      "A Cadeira Gamer Ergonômica foi projetada para proporcionar máximo conforto durante longas sessões de jogo ou trabalho. Com múltiplos pontos de ajuste, incluindo altura, inclinação do encosto e apoios de braço 4D, você pode personalizá-la de acordo com suas necessidades. O estofamento premium em couro sintético e as almofadas de apoio lombar e cervical garantem conforto excepcional mesmo após horas de uso.",
    specs: [
      "Estrutura de aço reforçada",
      "Estofamento em couro sintético premium",
      "Reclinável até 180°",
      "Apoios de braço 4D ajustáveis",
      "Almofadas lombar e cervical removíveis",
      "Rodízios de 60mm silenciosos",
      "Suporta até 150kg",
      "Pistão a gás classe 4",
    ],
    additionalImages: [cadeira, cadeira, cadeira],
    colors: ["Preto/Vermelho", "Preto/Azul", "Preto/Verde"],
    stock: 8,
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 10,
    name: "Cafeteira Programável",
    price: 249.9,
    image: cafeteira,
    category: "Casa e Decoração",
    isNew: true,
    discount: 0,
    description: "Cafeteira automática com timer e controle de temperatura.",
    longDescription:
      "A Cafeteira Programável traz praticidade e tecnologia para sua rotina matinal. Programe-a para preparar seu café automaticamente no horário desejado e acorde com o aroma irresistível de café fresco. O controle preciso de temperatura garante extração ideal dos grãos, enquanto o sistema anti-gotejamento permite que você sirva uma xícara mesmo durante o preparo. Com capacidade para 12 xícaras, é perfeita para famílias ou escritórios.",
    specs: [
      "Capacidade: 12 xícaras",
      "Potência: 1000W",
      "Display digital com timer programável",
      "Controle de temperatura",
      "Sistema anti-gotejamento",
      "Desligamento automático",
      "Filtro permanente lavável",
      "Jarra de vidro resistente ao calor",
    ],
    additionalImages: [cafeteira, cafeteira, cafeteira],
    colors: ["Inox", "Preto", "Vermelho"],
    stock: 20,
    rating: 4.7,
    reviews: 68,
  },
  {
    id: 11,
    name: "Tênis Casual Urban",
    price: 179.9,
    image: tenis,
    category: "Moda",
    isNew: false,
    discount: 0,
    description: "Tênis estiloso para uso diário, combina com diversos looks.",
    longDescription:
      "O Tênis Casual Urban combina estilo contemporâneo com conforto excepcional para seu dia a dia. Seu design versátil permite combinações com diversos looks, do casual ao smart casual. A entressola com tecnologia de amortecimento proporciona conforto durante todo o dia, enquanto o cabedal em material premium garante durabilidade e respirabilidade. Um calçado essencial para o guarda-roupa moderno.",
    specs: [
      "Cabedal em couro sintético e tecido",
      "Forro acolchoado respirável",
      "Entressola com tecnologia de amortecimento",
      "Solado de borracha antiderrapante",
      "Palmilha removível",
      "Cadarço plano",
      "Peso: 320g (tamanho 40)",
    ],
    additionalImages: [tenis, tenis, tenis],
    colors: ["Preto", "Branco", "Cinza"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    stock: 25,
    rating: 4.5,
    reviews: 97,
  },
  {
    id: 12,
    name: "Kit de Ferramentas 100 peças",
    price: 199.9,
    image: kitferramenta,
    category: "Casa e Decoração",
    isNew: false,
    discount: 10,
    description: "Conjunto completo de ferramentas para pequenos reparos domésticos.",
    longDescription:
      "O Kit de Ferramentas 100 peças é a solução completa para todos os seus projetos de bricolage e reparos domésticos. Inclui uma ampla variedade de ferramentas de alta qualidade, desde chaves de fenda e alicates até chaves combinadas e soquetes, todas organizadas em uma maleta resistente e compacta. Fabricadas em aço cromo-vanádio, as ferramentas oferecem durabilidade excepcional e resistência à corrosão.",
    specs: [
      "100 peças incluindo:",
      "Conjunto de chaves de fenda",
      "Alicates diversos",
      "Chaves combinadas",
      "Jogo de soquetes",
      "Martelo",
      "Trena",
      "Nível",
      "Maleta organizadora resistente",
    ],
    additionalImages: [kitferramenta, kitferramenta, kitferramenta],
    stock: 15,
    rating: 4.6,
    reviews: 82,
  },
  {
    id: 13,
    name: "Bola Futebol de Campo Penalty",
    price: 199.9,
    image: bola,
    category: "Esportes",
    isNew: false,
    discount: 0,
    description: "Bola de Futebol de Campo, Marca Penalty modelo Bola 8.",
    longDescription:
      "A Bola de Futebol de Campo Penalty Bola 8 é desenvolvida com tecnologia de ponta para proporcionar desempenho excepcional em campo. Sua construção com 11 gomos oferece trajetória precisa e estável, enquanto o revestimento em PU de alta qualidade garante toque macio e maior durabilidade. Ideal para jogos oficiais e treinos intensos, atende aos padrões de qualidade exigidos por jogadores profissionais.",
    specs: [
      "Material: PU de alta qualidade",
      "Construção: 11 gomos",
      "Câmara de ar com válvula removível",
      "Circunferência: 68-70 cm",
      "Peso: 410-450g",
      "Aprovada para competições oficiais",
      "Resistente à abrasão",
    ],
    additionalImages: [bola, bola, bola],
    stock: 30,
    rating: 4.7,
    reviews: 65,
  },
]

function ProductDetailPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [mainImage, setMainImage] = useState("")
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [showZoom, setShowZoom] = useState(false)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [activeTab, setActiveTab] = useState("description")

  useEffect(() => {
    setLoading(true)

    const foundProduct = allProducts.find((p) => p.id === Number.parseInt(productId))

    if (foundProduct) {
      setProduct(foundProduct)
      setMainImage(foundProduct.image)

      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0])
      }

      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0])
      }

      const related = allProducts
        .filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4)

      setRelatedProducts(related)
    }

    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [productId])

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value
    if (newQuantity >= 1 && newQuantity <= (product?.stock || 10)) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      const discountedPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price

      addToCart({
        id: product.id,
        name: product.name,
        price: discountedPrice,
        image: product.image,
        quantity: quantity,
        color: selectedColor,
        size: selectedSize,
      })

      alert(`${product.name} adicionado ao carrinho!`)
    }
  }

  const handleImageChange = (image) => {
    setMainImage(image)
  }

  const handleMouseMove = (e) => {
    if (!showZoom) return

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setZoomPosition({ x, y })
  }

  const handleImageClick = () => {
    setShowZoom(!showZoom)
  }

  if (loading) {
    return (
      <div className="product-detail-loading">
        <div className="loading-spinner"></div>
        <p>Carregando produto...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Produto não encontrado</h2>
        <p>Desculpe, não conseguimos encontrar o produto que você está procurando.</p>
        <button onClick={() => navigate("/produtos")} className="back-button">
          Voltar para produtos
        </button>
      </div>
    )
  }

  const discountedPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="breadcrumbs">
          <a href="/">Home</a> &gt;
          <a href="/produtos">Produtos</a> &gt;
          <a href={`/produtos?categoria=${product.category}`}>{product.category}</a> &gt;
          <span>{product.name}</span>
        </div>

        <div className="product-detail-grid">
          <div className="product-images">
            <div
              className={`main-image-container ${showZoom ? "zoomed" : ""}`}
              onMouseMove={handleMouseMove}
              onClick={handleImageClick}
            >
              <img src={mainImage || product.image} alt={product.name} className="main-image" />

              {showZoom && (
                <div
                  className="zoomed-image"
                  style={{
                    backgroundImage: `url(${mainImage || product.image})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                ></div>
              )}

              {product.isNew && <span className="product-detail-badge new-detail-badge">Novo</span>}
              {product.discount > 0 && <span className="product-detail-badge discount-detail-badge">-{product.discount}%</span>}
            </div>

            <div className="thumbnail-gallery">
              <button
                className={`thumbnail-item ${mainImage === product.image ? "active" : ""}`}
                onClick={() => handleImageChange(product.image)}
              >
                <img src={product.image || "/placeholder.svg"} alt={`${product.name} - Principal`} />
              </button>

              {product.additionalImages &&
                product.additionalImages.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail-item ${mainImage === img ? "active" : ""}`}
                    onClick={() => handleImageChange(img)}
                  >
                    <img src={img || "/placeholder.svg"} alt={`${product.name} - Imagem ${index + 1}`} />
                  </button>
                ))}
            </div>
          </div>

          <div className="product-info-container">
            <h1 className="product-title">{product.name}</h1>

            <div className="product-meta">
              <div className="product-rating">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={star <= Math.round(product.rating || 0) ? "filled" : ""}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="rating-count">({product.reviews || 0} avaliações)</span>
              </div>

              <div className="product-category-tag">
                <span>{product.category}</span>
              </div>

              <div className="product-stock">
                {product.stock > 0 ? (
                  <span className="in-stock">Em estoque ({product.stock} unidades)</span>
                ) : (
                  <span className="out-of-stock">Fora de estoque</span>
                )}
              </div>
            </div>

            <div className="product-price-container">
              {product.discount > 0 && <span className="original-price">R$ {product.price.toFixed(2)}</span>}
              <span className="current-price">R$ {discountedPrice.toFixed(2)}</span>

              <div className="payment-info">
                <p>Em até 12x de R$ {(discountedPrice / 12).toFixed(2)} sem juros</p>
                <p>Ou R$ {(discountedPrice * 0.9).toFixed(2)} à vista (10% de desconto)</p>
              </div>
            </div>

            {product.colors && product.colors.length > 0 && (
              <div className="product-options">
                <h3>Cor:</h3>
                <div className="color-options">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`color-option ${selectedColor === color ? "selected" : ""}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div className="product-options">
                <h3>Tamanho:</h3>
                <div className="size-options">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      className={`size-option ${selectedSize === size ? "selected" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="add-to-cart-container">
              <div className="quantity-selector">
                <button className="quantity-button" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                  -
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= (product.stock || 10)}
                >
                  +
                </button>
              </div>

              <button className="add-to-cart-button" onClick={handleAddToCart} disabled={product.stock <= 0}>
                🛒 Adicionar ao Carrinho
              </button>
            </div>

            <div className="share-product">
              <h3>Compartilhar:</h3>
              <div className="share-buttons">
                <button className="share-button facebook">Facebook</button>
                <button className="share-button twitter">Twitter</button>
                <button className="share-button whatsapp">WhatsApp</button>
                <button className="share-button copy-link">Copiar Link</button>
              </div>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tabs-header">
            <button
              className={`tab-button ${activeTab === "description" ? "active" : ""}`}
              onClick={() => setActiveTab("description")}
            >
              Descrição
            </button>
            <button
              className={`tab-button ${activeTab === "specs" ? "active" : ""}`}
              onClick={() => setActiveTab("specs")}
            >
              Especificações
            </button>
            <button
              className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Avaliações ({product.reviews || 0})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "description" && (
              <div className="description-tab">
                <p>{product.longDescription || product.description}</p>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="specs-tab">
                <ul className="specs-list">
                  {product.specs ? (
                    product.specs.map((spec, index) => <li key={index}>{spec}</li>)
                  ) : (
                    <li>Informações técnicas não disponíveis para este produto.</li>
                  )}
                </ul>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="reviews-tab">
                <div className="reviews-summary">
                  <div className="average-rating">
                    <span className="big-rating">{product.rating || 0}</span>
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className={star <= Math.round(product.rating || 0) ? "filled" : ""}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span>Baseado em {product.reviews || 0} avaliações</span>
                  </div>
                </div>

                <div className="reviews-list">
                  <p>Avaliações de clientes serão exibidas aqui.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2 className="section-title">Produtos Relacionados</h2>
            <div className="related-products-grid">
              {relatedProducts.map((relatedProduct) => {
                const relatedDiscountedPrice =
                  relatedProduct.discount > 0
                    ? relatedProduct.price * (1 - relatedProduct.discount / 100)
                    : relatedProduct.price

                return (
                  <div
                    key={relatedProduct.id}
                    className="related-product-card"
                    onClick={() => navigate(`/produto/${relatedProduct.id}`)}
                  >
                    <div className="related-product-image">
                      <img src={relatedProduct.image || "/placeholder.svg"} alt={relatedProduct.name} />

                      {relatedProduct.discount > 0 && (
                        <span className="related-discount-detail-badge">-{relatedProduct.discount}%</span>
                      )}
                    </div>

                    <div className="related-product-info">
                      <h3>{relatedProduct.name}</h3>
                      <div className="related-product-price">
                        {relatedProduct.discount > 0 && (
                          <span className="related-original-price">R$ {relatedProduct.price.toFixed(2)}</span>
                        )}
                        <span className="related-current-price">R$ {relatedDiscountedPrice.toFixed(2)}</span>
                      </div>

                      <button
                        className="view-product-button"
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate(`/produto/${relatedProduct.id}`)
                        }}
                      >
                        Ver Produto
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetailPage

