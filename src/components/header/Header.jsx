import { CiUser } from "react-icons/ci";
import { FaBarsStaggered, FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <div>
      <header className=" poppins w-full h-[100px] flex item-center justify-around  p-[30px] ">
        <h1 className="text-4xl moda text-[rgba(30, 30, 30, 1)] ">GREENMIND</h1>
        <nav className="flex items-center gap-[100px]">
          <ul className="flex item-center gap-[40px]">
            <li className=' text-black font-normal text-base cursor-pointer '>Home</li>
            <li className=' text-gray-500 cursor-pointer'>Products</li>
            <li className=' text-gray-500 cursor-pointer ' >Contacts </li>
          </ul>
          <div className="flex items-center gap-[30px]">
            <FaCartShopping />
            <CiUser />
            <FaBarsStaggered />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
