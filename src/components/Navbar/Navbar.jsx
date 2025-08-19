import { GoHeartFill } from "react-icons/go";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.3)]" : ""
      }`}
    >
      <nav className="max-w-[1400px] mx-auto md:h-[14vh] h-[9vh] flex justify-between items-center px-10">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>

        {/* Desktop menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a href="#" className="font-semibold tracking-wide text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
            >
              Contact us
            </a>
          </li>
        </ul>

        {/* Desktop search */}
        <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
          <input
            type="text"
            name="text"
            placeholder="search...."
            autoComplete="off"
            className="flex-1 h-[4vh] px-3 focus:outline-none"
          />
          <button className="bg-gradient-to-b from-red-600 to-orange-300 text-white w-10 flex justify-center items-center rounded-full text-xl">
            <IoMdSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-x-3">
          <a href="#" className="text-zinc-800 text-xl">
            <GoHeartFill />
          </a>
          <a href="#" className="text-zinc-800 text-xl">
            <RiShoppingBag4Fill />
          </a>
          <button
            className="text-zinc-800 text-xl md:hidden"
            onClick={toggleMenu}
          >
            <IoMenu />
          </button>
        </div>
      </nav>

      {/* Mobile menu (fixed so it won't disappear) */}
      {showMenu && (
        <ul
          className="flex flex-col gap-y-6 p-6 items-center md:hidden fixed top-[9vh] left-1/2 transform -translate-x-1/2 
            bg-gradient-to-b from-orange-100/95 to-orange-300/80 
            backdrop-blur-lg shadow-lg rounded-2xl mt-2 w-[90%] 
            transition-all duration-300 z-40"
        >
          <li>
            <a href="#" className="font-semibold text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-medium text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-medium text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-medium text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>

          {/* Search bar */}
          <li className="flex items-center border border-orange-400 rounded-full w-full px-3 py-1 bg-white/70 backdrop-blur-sm shadow-inner">
            <input
              type="text"
              name="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 px-2 py-1 bg-transparent focus:outline-none text-sm"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 hover:to-orange-600 text-white w-8 h-8 flex justify-center items-center rounded-full text-lg">
              <IoMdSearch />
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
