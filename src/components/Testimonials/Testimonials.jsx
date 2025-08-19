import { Swiper, SwiperSlide } from 'swiper/react'; import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Heading from "../heading/Heading"
import Customer1 from "../../assets/customer1.jpg"
import Customer2 from "../../assets/customer2.jpg"
import Customer3 from "../../assets/customer3.jpg"
import Customer4 from "../../assets/customer4.jpg"
import Customer5 from "../../assets/customer5.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from 'react-icons/fa';



const Testimonials = () => {



    return (
        <section>
            <div className="max-w-[1400px] px-10 mx-auto py-20">
                <Heading highlight="Customers" heading="Saying" />
                <div className="flex justify-end py-5 gap-x-3">
                    <button className="custom-prev text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
                        <IoIosArrowBack />
                    </button>
                    <button className="custom-next text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
                        <IoIosArrowForward />
                    </button>

                </div>

                <Swiper navigation={{
                    nextEl:".custom-next",
                    prevEl: ".custom-prev"
                }}
                loop = {true}
                breakpoints={{
                    640:{slidesPerView:1, spaceBetween: 20},
                    768:{slidesPerView:2, spaceBetween: 20},
                    1024:{slidesPerView:3, spaceBetween: 20},
                }}
                modules={[Navigation]} className="mySwiper">
                    {
                        review.map(item => {
                            return (
                                <SwiperSlide 
                                key={item.id}
                                className="bg-zinc-100 rounded-xl p-8">
                                    <div className="flex gap-5 items-center">
                                        <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                                            <img src={item.image} className='w-full h-full'/>
                                        </div>

                                        <div>
                                            <h5 className="text-xl font-black">{item.name}</h5>
                                            <p className="text-zinc-600">{item.role}</p>
                                            <span className='flex text-yellow-400 mt-3 text-xl gap-1'>
                                                {Array.from({length: item.rating},(_, index)=>(
                                                    <FaStar />
                                                ))}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-10 min-h-[15vh]">
                                        <p className="text-zinc-600">{item.para}</p>
                                    </div>
                                </SwiperSlide>

                            )
                        })
                    }

                </Swiper>


            </div>
        </section>
    )
}

export default Testimonials

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Food Blogger",
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    rating: 5,
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    role: "Chef",
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    rating: 4,
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    role: "Model",
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family’s weekly groceries—always fresh, affordable, and reliable.",
    rating: 3,
    image: Customer3,
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "Food Blogger",
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    rating: 5,
    image: Customer4,
  },
  {
    id: 5,
    name: "David Smith",
    role: "Chef",
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    rating: 4,
    image: Customer5,
  },
];
