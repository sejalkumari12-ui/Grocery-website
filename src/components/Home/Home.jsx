import Navbar from '../Navbar/Navbar'
import Hero from '../hero/hero'
import Category from '../category/Category'
import Values from '../value/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
