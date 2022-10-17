import { AiOutlineShoppingCart, AiOutlineMessage, AiOutlineSearch } from "react-icons/ai";

export default function navbar() {
  return (
    <header>
      <nav className="bg-navColor p-3 text-white flex justify-between items-center">
        <h1 className="text-3xl sm:block hidden">AsZShop</h1>
        <form action="">
          <div className="relative w-full flex justify-between items-center">
            <input type="search" id="search-dropdown" className="block p-1 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l " placeholder />
            <button type="submit" className="bg-gray-500 p-1 text-xl rounded-r">
              <AiOutlineSearch />
            </button>
          </div>
        </form>
        <ul className="flex justify-center items-center gap-5 text-lg cursor-pointer">
          <li>
            <AiOutlineShoppingCart />
          </li>
          <li>
            <AiOutlineMessage />
          </li>
          <li>
            <button type="submit" className="bg-secondary p-2 rounded">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
