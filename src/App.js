import Header from "./JS/Header"
import Banner from "./JS/Banner"
import Categories from "./JS/Categories"
import FeaturedProducts from "./JS/FeaturedProducts"
import Promotions from "./JS/Promotions"
import BestSellers from "./JS/BestSellers"
import Newsletter from "./JS/Newsletter"
import Footer from "./JS/Footer"
import "./CSS/App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Banner />
        <Categories />
        <FeaturedProducts />
        <Promotions />
        <BestSellers />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App

