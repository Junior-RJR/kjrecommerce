import Banner from "./Banner"
import PopularCategories from "./PopularCategories"
import PopularProducts from "./PopularProducts"
import Newsletter from "./Newsletter"

function Home() {
  return (
    <main>
      <Banner />
      <div className="container">
        <PopularCategories />
        <PopularProducts />
        <Newsletter />
      </div>
    </main>
  )
}

export default Home

