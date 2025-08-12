import React from 'react'
import Grocery from "../../assets/grocery.png"
import Button from '../button/Button'

const Hero = () => {
  return (
   <section>
    <div className='max-w-[1400px] min-h-screen mx-auto px-10 flex items-center md:pt-25 pt-35 md:flex-row flex-col'>
        {/* hero context */}
        <div className='flex-1'>
            <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>
                Export Best Quality
            </span>
            <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-4'>
                Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br /> In Your City 
            </h1>
            <p className='text-zinc-600 md:text-lg text:md max-w-[530px] mt-5 mb-10'>
                Bred for a high content of benefical substances. Our product are all fresh and healthy. 
            </p>
           <Button content="Shop Now"/>
        </div>
        {/* hero image */}
        <div className='flex-1'>
            <img src={Grocery} alt="hero image" />
        </div>


    </div>
   </section>
  )
}

export default Hero

