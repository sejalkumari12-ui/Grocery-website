import { GoHeartFill } from "react-icons/go";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-white fixed top-0 right-0 left-0 z-50 shadow-md">
      <nav className="max-w-[1400px] mx-auto md:h-[14vh] h-[9vh] flex justify-between items-center px-10 relative">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>

        {/* Desktop menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-orange-500"
            >
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

        {/* Mobile menu */}
        {showMenu && (
          <ul className="flex flex-col gap-y-6 p-6 items-center md:hidden absolute top-full left-1/2 transform -translate-x-1/2 bg-orange-500/50 backdrop-blur-xl rounded-xl mt-2 w-[90%] transition-all duration-300 z-50">
            <li>
              <a
                href="#"
                className="font-semibold tracking-wide text-orange-500"
              >
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
            <li className="flex p-1 border-2 border-orange-500 rounded-full w-full">
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
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
