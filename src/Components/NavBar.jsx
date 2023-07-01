import { BsHandbag } from "react-icons/bs";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";

const NavBar = () => {
  const { totalQuntites, toggle, usetoggle } = useStateContext();
  const location = useLocation();

  const isNavLinkActive = (url) => {
    if (location.pathname === url) {
      return "active";
    }
  };

  return (
    <header className="text-gray-600 body-font md:px-4 w-full">
      <div className="container flex flex-wrap p-2 flex-row justify-between items-center">
        <div className="flex ">
          <button
            className="flex justify-center items-center md:hidden z-10 focus:outline-none h-8 w-8 hover:bg-gray-300 rounded-full text-xl"
            onClick={usetoggle}
          >
            {toggle ? <HiX /> : <HiMenuAlt2 />}
          </button>
          <Link
            to="/"
            className="flex title-font font-medium items-center z-20 text-black "
            onClick={toggle&&usetoggle}
          >
            <span className="ml-3 text-xl logo">Lumination</span>
          </Link>
        </div>
        <div className="flex justify-between">
          <nav
            className={`absolute md:static top-12 z-20 ${
              toggle ? "left-0" : "-left-full"
            } h-full w-9/12 md:w-full bg-gray-200 bg-opacity-90 md:bg-inherit flex flex-wrap items-start md:items-center p-5 md:p-0 text-base justify-start md:justify-center flex-col md:flex-row transition-all duration-500`}
          >
            <Link
              to="/"
              className={`mr-5 text-black my-2 ${isNavLinkActive("/")}`}
              onClick={usetoggle}
            >
              Home
            </Link>
            <Link
              to="/Product"
              className={`mr-5 text-black my-2 ${isNavLinkActive("/Product")}`}
              onClick={usetoggle}
            >
              Product
            </Link>
            <Link
              to="/Blogs"
              className={`mr-5 text-black my-2 ${isNavLinkActive("/Blogs")}`}
              onClick={usetoggle}
            >
              Blogs
            </Link>
            <Link
              to="/About"
              className={`mr-5 text-black my-2 ${isNavLinkActive("/About")}`}
              onClick={usetoggle}
            >
              About
            </Link>
          </nav>
          <Link
            to="/Bag"
            className="flex justify-center items-center z-10 border-0 p-1 focus:outline-none hover:bg-gray-300 text-black h-9 w-10 rounded-full text-xl relative"
            onClick={toggle&&usetoggle}
          >
            <BsHandbag />
            <div className="bg-red-500 h-4 w-4 rounded-full absolute bottom-2  transform translate-x-1/2 translate-y-1/2 text-xs text-center text-white">
              {totalQuntites}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
