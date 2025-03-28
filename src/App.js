import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
import { CartProvider } from "./components/js/CartContext"
import "./components/css/App.css"

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

            <Route path="/login" element={<Login />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/categorias" element={<CategoriesPage />} />
            <Route path="/ofertas" element={<OffersPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App

