import React from 'react'
import Button from '../button/Button'
import FreshFruits from "../../assets/fresh-fruits.png"

const Discount = () => {
  return (
    <section 
      className='bg-zinc-100 bg-right bg-contain bg-no-repeat mt-16' 
      style={{backgroundImage:`url(${FreshFruits})`}}
    >
      <div className='py-10 max-w-[1400px] mx-auto px-10 md:flex-row flex flex-col md:bg-transparent bg-zinc-100'>
        <span className='md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>
          20%
        </span>
        <div className='max-w-[700px]'>
          <h3 className='md:text-7xl text-4xl text-zinc-800 font-black'>
            First Order Discount
          </h3>
          <p className='text-zinc-600 my-6'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo repellat cupiditate, neque repellendus repudiandae reprehenderit incidunt laudantium dignissimos nostrum quia!
          </p>
          <Button content="Get a Discount"/>
        </div>
      </div>
    </section>
  )
}

export default Discount
