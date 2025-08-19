import { useState } from "react"
import Heading from "../heading/Heading"
import productsList from "../productsList/ProductsList"
import Cards from "../Cards/Cards"
import Button from "../button/Button"

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Seafood"]
  const [activeTab, setActiveTab] = useState("All")
  const [showAll, setShowAll] = useState(false)

  let filtereditems = activeTab === "All"
    ? productsList
    : productsList.filter(item => item.category === activeTab)

  const renderCards = (showAll ? filtereditems : filtereditems.slice(0, 8)).map(product => (
    <Cards 
      key={product.id}   // make sure IDs in productsList are unique
      image={product.image} 
      name={product.name} 
      price={product.price} 
      category={product.category}  
    />
  ))

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category)
                setShowAll(false)
              }}
              className={`px-3 py-2 text-lg rounded-lg cursor-pointer ${
                activeTab === category
                  ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                  : "bg-zinc-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-20">
          {renderCards}
        </div>

        {/* Toggle Button */}
        <div className="mt-16 mx-auto w-fit">
          {filtereditems.length > 8 && (
            <Button
              content={showAll ? "View Less" : "View All"}
              onClick={() => setShowAll(!showAll)}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Products
