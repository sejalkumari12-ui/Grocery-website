import { useState } from "react"
import { FaHeart, FaPlus } from "react-icons/fa"
import Button from "../button/Button"

const Cards = ({ image, name, price }) => {
  const [liked, setLiked] = useState(false) // heart toggle state

  return (
    <div className="bg-zinc-100 p-5 rounded-xl">
      {/* card icons */}
      <div className="flex justify-between">
        <span
          className={`text-lg cursor-pointer transition-colors duration-300 ${
            liked ? "text-pink-500" : "text-zinc-300"
          }`}
          onClick={() => setLiked(!liked)} // toggle on click
        >
          <FaHeart />
        </span>

        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white text-sm px-2 py-1 rounded-lg">
          <FaPlus />
        </button>
      </div>

      {/* card img */}
      <div className="w-full h-50">
        <img src={image} className="w-full h-full mx-auto object-contain" />
      </div>

      {/* Card content */}
      <div className="text-center">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-xl font-bold mt-4 mb-3">${price.toFixed(2)}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  )
}

export default Cards
