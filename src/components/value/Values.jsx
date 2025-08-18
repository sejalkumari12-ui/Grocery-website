import Heading from "../heading/Heading"
import { FaHeart } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {
  const LeftValues =value.slice(0,2).map(item =>{
    return(
        <div key={item.id} className="flex md:flex-row-reverse items-center gap-5">
            <div>
                <span className="flex justify-center items-center text-xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-10 h-10 rounded-full">{item.icons}</span>
            </div>

            <div className="md:text-right">
                <h3 className="text-zinc-800 text-2xl font-bold">{item.title}</h3>
                <p className="text-zinc-600 mt-2">{item.para}</p>
            </div>
        </div>


    )
  }) 

    const RightValues =value.slice(2).map(item =>{
    return(
        <div key={item.id} className="flex  items-center gap-5">
            <div>
                <span className="flex justify-center items-center text-xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-10 h-10 rounded-full">{item.icons}</span>
            </div>

            <div className="">
                <h3 className="text-zinc-800 text-2xl font-bold">{item.title}</h3>
                <p className="text-zinc-600 mt-2">{item.para}</p>
            </div>
        </div>



    )
  }) 


  return (
   <section>
    <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Values"/>
        <div className="flex md:flex-row flex-col md:gap-5 mt-15 gap-15 ">
            {/* left values */}
            <div className="md:min-h-100  gap-15 flex flex-col justify-between ">
             {LeftValues}

            </div>

            {/* image */}
               <div className="md:flex w-1/2 hidden ">
                <img src={Basket} />
               </div>


               {/* right value */}
               <div className="md:min-h-100 gap-15 flex flex-col justify-between">
                {RightValues }
               </div>
        </div>
    </div>
   </section>
  )
}

export default Values

const value =[
    {
        id:1,
        title:"Trust",
        para:"It is a long established fact that a reader will be distracted by the readable.",
        icons:<FaHeart />,
        
    },
    {
        id:2,
        title:"Always Fresh",
        para:"It is a long established fact that a reader will be distracted by the readable.",
        icons:<FaLeaf />,

    },
    {
        id:3,
        title:"Food Safety",
        para:"It is a long established fact that a reader will be distracted by the readable.",
        icons:<FaShieldAlt />,

    },
    {
        id:4,
        title:"100% Organic",
        para:"It is a long established fact that a reader will be distracted by the readable.",
        icons:<FaSeedling />,

    }

]
