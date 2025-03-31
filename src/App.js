import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "./components/js/CartContext"
import "./components/css/App.css"
import Header from "./components/js/Header"
import Banner from "./components/js/Banner"
import PopularCategories from "./components/js/PopularCategories"
import PopularProducts from "./components/js/PopularProducts"
import Newsletter from "./components/js/Newsletter"
import Footer from "./components/js/Footer"
import Login from "./components/js/Login"
import ProductsPage from "./components/js/ProductsPage"
import CategoriesPage from "./components/js/CategoriesPage"
import OffersPage from "./components/js/OffersPage"
import ContactPage from "./components/js/ContactPage"
import CheckoutPage from "./components/js/CheckoutPage"
import AboutPage from "./components/js/AboutPage"
import PrivacyPolicyPage from "./components/js/PrivacyPolicyPage"
import TermsPage from "./components/js/TermsPage"
import PaymentMethodsPage from "./components/js/PaymentMethodsPage"
import DeliveryPolicyPage from "./components/js/DeliveryPolicyPage"
import SummerCollectionPage from "./components/js/SummerCollectionPage"
import ExclusiveCollectionPage from "./components/js/ExclusiveCollectionPage"

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Banner />
                  <div className="container">
                    <PopularCategories />
                    <PopularProducts />
                    <Newsletter />
                  </div>
                </main>
              }
            />

             {/* Páginas principais */}
              <Route path="/produtos" element={<ProductsPage />} />
              <Route path="/categorias" element={<CategoriesPage />} />
              <Route path="/ofertas" element={<OffersPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<CheckoutPage />} />

              {/* Páginas informativas */}
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/privacidade" element={<PrivacyPolicyPage />} />
              <Route path="/termos" element={<TermsPage />} />
              <Route path="/pagamentos" element={<PaymentMethodsPage />} />
              <Route path="/entregas" element={<DeliveryPolicyPage />} />

              {/* Páginas de coleções */}
              <Route path="/colecao/verao" element={<SummerCollectionPage />} />
              <Route path="/colecao/exclusiva" element={<ExclusiveCollectionPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App

