import { AiOutlineShoppingCart, AiOutlineMessage, AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

export default function navbar() {
  return (
    <header>
      <nav className="bg-navColor p-3 text-white flex justify-between items-center gap-3">
        <h1 className="text-3xl cursor-pointer sm:block hidden">AsZShop</h1>
        <div className="w-full p-3">
          <form action="">
            <div className="flex">
              <button className="flex-shrink-0 z-10 items-center text-center w-10 p-2 text-xs bg-gray-500 rounded-l hover:bg-gray-400 hover:text-gray-900 hidden sm:inline">
                <IoMdArrowDropdown />
              </button>
              <div className="relative w-full flex justify-between items-center">
                <input type="search" id="search-dropdown" className="block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l outline-none sm:rounded-none" />
                <button type="submit" className="bg-gray-500 p-2 text-xl rounded-r hover:bg-gray-400 hover:text-gray-900">
                  <AiOutlineSearch />
                </button>
              </div>
            </div>
          </form>
        </div>
        <ul className="flex justify-center items-center sm:gap-5 gap-2 cursor-pointer">
          <li className="sm:text-2xl text-xl p-2 rounded hover:bg-gray-500">
            <AiOutlineShoppingCart />
          </li>
          <li className="sm:text-2xl text-xl p-2 rounded hover:bg-gray-500">
            <AiOutlineMessage />
          </li>
          <li>
            <button type="submit" className="bg-secondary p-2 rounded-2xl hover:bg-secondary2 hover:rounded transition-all">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
