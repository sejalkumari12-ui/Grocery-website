import { GoHeartFill } from "react-icons/go";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
   <header>
    <nav className='max-w-[1400px] mx-auto h-[14vh]  flex justify-between items-center px-10'>
        <a href="#" className='text-3xl font-bold'>Gr<span className='text-orange-500 uppercase '>o</span>cify</a>
        {/* Desktop menu */}
        <ul className='flex items-center gap-x-15'>
            <li>
                <a href="#" className='font-semibold tracking-wide text-orange-500'>Home</a>
            </li>
              <li>
                <a href="#" className='font-semibold tracking-wide text-zinc-800 hover:text-orange-500'>About us</a>
            </li>
              <li>
                <a href="#" className='font-semibold tracking-wide text-zinc-800 hover:text-orange-500'>Process</a>
            </li>
              <li>
                <a href="#" className='font-semibold tracking-wide text-zinc-800 hover:text-orange-500'>Contact us</a>
            </li>
        </ul>
        {/* Input fields */}
        <div className='flex p-1 border-2 border-orange-500 rounded-full'>
            <input type="text" name='text' placeholder='search....' autoComplete='off' className='flex-1 h-[4vh] px-3 focus:outline-none'/>
            <button className='bg-gradient-to-b from-red-600 bg-orange-300 text-white w-10 flex justify-center items-center rounded-full text-xl '>
              <IoMdSearch />
            </button>
        </div>
        {/* search bar */}
        <div className='flex items-center gap-x-3'>
            <a href="#" className='text-zinc-800 text-xl'>
               <GoHeartFill />
            </a>
            <a href="#" className='text-zinc-800 text-xl'>
                <RiShoppingBag4Fill />
            </a>
        </div>

    </nav>
   </header>
  )
}

export default Navbar
