import { AiOutlineShoppingCart, AiOutlineMessage, AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from 'next/link';

export default function navbar() {
  const catText = ["CPU", "Keyboard & Mouse", "Motherboard", "Power Supply", "DLL"];
  const showCat = () => {
    const catItem = document.getElementById("catItem");
    if (catItem.style.display == "block") {
      catItem.style.display = "none";
      return;
    }
    catItem.style.display = "block";
  };
  return (
    <header className="">
      <nav className="top-0 sticky w-full z-50 bg-primary p-3 text-white flex justify-between items-center gap-3">
        <h1 className="text-3xl cursor-pointer sm:block hidden">AsZShop</h1>
        <div className="w-full p-3">
          <div className="flex">
            <div className="flex text-center">
              <button id="dropdown" className="z-10 w-10 p-2 mx-auto text-xs bg-gray-500 rounded-l hover:bg-gray-400 hover:text-gray-900 hidden sm:inline" onClick={showCat}>
                <IoMdArrowDropdown />
              </button>
              <div id="catItem" className="hidden z-10 absolute text-xs rounded top-14 ml-0 w-auto p-2 m-2 min-w-max bg-gray-500 ">
                <ul>
                  {catText.map((cat) => (
                    <li className="hover:bg-gray-400 hover:text-gray-900 p-1 rounded">
                      <button key={cat}>{cat}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative w-full flex justify-between items-center">
              <input type="search" id="search-dropdown" className="block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l outline-none sm:rounded-none" />
              <button type="submit" className="bg-gray-500 p-2 text-xl rounded-r hover:bg-gray-400 hover:text-gray-900">
                <AiOutlineSearch />
              </button>
            </div>
          </div>
        </div>
        <ul className="flex justify-center items-center sm:gap-5 gap-2 cursor-pointer">
          <li className="sm:text-2xl text-xl p-2 rounded hover:bg-gray-500">
            <a href="">
              <AiOutlineShoppingCart />
            </a>
          </li>
          <li className="sm:text-2xl text-xl p-2 rounded hover:bg-gray-500">
            <Link href="contact">
              <AiOutlineMessage />
            </Link>
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
