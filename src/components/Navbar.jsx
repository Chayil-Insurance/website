import { Link } from "react-router-dom";
import logo from "../assets/Images/logochayil.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="relative px-8 py-4 flex justify-between items-center bg-[#00165A]">
        <Link className="text-3xl font-bold leading-none" to="/">
          <img src={logo} className="w-10" alt="logo" />
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-[#BFCFFF] p-3"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-12">
          <li>
            <Link className="text-sm text-[#BFCFFF] hover:text-gray-500" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="text-sm text-[#BFCFFF] font-bold" to="/about-us">
              About Us
            </Link>
          </li>

          <li>
            <Link
              className="text-sm text-[#BFCFFF] hover:text-gray-500"
              to="/products"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              className="text-sm text-[#BFCFFF] hover:text-gray-500"
              to="/contact-us"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          to="#"
        >
          Sign In
        </Link>
        <Link
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          to="#"
        >
          Sign up
        </Link>
      </nav>
      {/* small screen */}
      <div className={`navbar-menu relative z-50 ${open ? "block" : "hidden"}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#00165A] border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" to="/">
              <img src={logo} className="w-16" alt="logo" />
            </Link>
            <button className="navbar-close" onClick={() => setOpen(false)}>
              <svg
                className="h-6 w-6 text-[#BFCFFF] cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-lg font-semibold text-[#BFCFFF] hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-lg font-semibold text-[#BFCFFF] hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-lg font-semibold text-[#BFCFFF] hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/products"
                >
                  Products
                </Link>
              </li>

              <li className="mb-1">
                <Link
                  className="block p-4 text-lg font-semibold text-[#BFCFFF] hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="block px-4 py-2 mb-4 leading-loose text-lg text-center font-semibold text-[#00165A]  bg-gray-50 hover:bg-gray-100 rounded-xl"
                to="#"
              >
                Sign in
              </Link>
              <Link
                className="block px-4 py-2 mb-2 leading-loose text-lg text-center text-[#00165A] font-semibold bg-[#BFCFFF]  rounded-xl"
                to="#"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
