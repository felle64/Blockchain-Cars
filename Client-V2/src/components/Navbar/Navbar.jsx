import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      <Link
        to={`/Blockchain-Cars/${title}`}
        className="text-white my-2 text-lg"
      >
        {title}
      </Link>
    </li>
  );
};
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex[0.5] flex-initial justify-center items-center">
        <Link to="/Blockchain-Cars/">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home", `Services `, "Transactions"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
      </ul>
      <div className="flex relative">
        {showMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden text-2xl cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        )}{" "}
        {!showMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden text-2xl cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        )}
        {showMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glass text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setShowMenu(false)} />
            </li>
            {["Home", "Services", "Transactions"].map((item, index) => (
              <NavbarItem
                key={item + index}
                title={item}
                classProps="text-white my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
