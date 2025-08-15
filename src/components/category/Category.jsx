import React from 'react'
import Heading from '../heading/Heading'
import  FruitsCat from "../../assets/fruits-and-veggies.png"
import SeaFoodCat from "../../assets/meat-and-seafood.png"
import DairyCat from "../../assets/dairy-and-eggs.png"
import Button from '../button/Button'


const Category = () => {


  const renderCards = category.map(card=>{
    return(
    <div className='flex-1 basis-[300px] '>
      <div className=' w-full min-h-[30vh] relative -mb-10'>
        <img src={card.image} className='absolute bottom-0' />
      </div>
      
       {/* card content */} 

      <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
        <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
        <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
        <Button content="See All" />
      </div>
    </div>
    )
  })



  return (
   <section>
    <div className='max-w-[1400px] mx-auto px-10 py-15'>
         <Heading highlight="Shop" heading="by Category"/>
         {/* category card */}
         <div className='flex flex-wrap gap-10 md:mt-10 mt-2 '>
             {renderCards}
         </div>
    </div>
   </section>
  )
}


export default Category

const category = [
  {
    id:1,
    title: "Frutis & veggies",
    description: "Fresh, oranic produce sourced daily from local farms. explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
  },
  {
    id:1,
    title: "Dairy & Eggs",
    description: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
  },
  {
    id:3,
    title: "Meat & Seafood",
    description: "High-quality responsibly sourced meat and seafood. Choose from fresh cuts, marinated option, and more.",
    image: SeaFoodCat,
  }
]