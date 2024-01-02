import { Link } from 'react-router-dom'
import logo from '../assets/Images/logochayil.png'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative z-10">
      <nav className="flex justify-between bg-[#00165A] fixed md:px-32 px-4  py-2 w-screen items-center">
        <Link className="text-3xl text-[#FFCC00] font-bold font-heading" to="/">
          <div className="flex flex-row">
            <img className="w-12 h-12" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="md:hidden">
          <button
            className="navbar-burger flex items-center text-[#BFCFFF] p-3"
            onClick={() => setOpen(!open)}>
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex px-4  space-x-8">
          <li>
            <Link className="text-white" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/about-us">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/contact-us">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* small screen */}
      <div className={`navbar-menu relative z-50 ${open ? 'block' : 'hidden'}`}>
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
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-lg font-semibold text-[#BFCFFF] hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/">
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-lg font-semibold text-[#BFCFFF] hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-lg font-semibold text-[#BFCFFF] hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/services">
                  Services
                </Link>
              </li>

              <li className="mb-1">
                <Link
                  className="block p-4 text-lg font-semibold text-[#BFCFFF] hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="mt-auto">
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
          </div> */}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
