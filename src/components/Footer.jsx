import { Link } from 'react-router-dom'
import Input from './Input'
import logo from '../assets/Images/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#00165A]">
      <div className="w-full  md:px-32 px-4 bg-blueGray-200">
        {/* Top area: Blocks */}
        <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-1  gap-8 py-8 md:py-12 border-t border-[#BFCFFF]">
          {/* 1st block */}
          <div className="lg:col-span-3 md:col-span-3 col-auto">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
                <img src={logo} className="rounded-full w-20" alt="" />
              </Link>
            </div>
            <div className="text-sm text-[#BFCFFF]">
              <Link
                to="#"
                className="text-[#BFCFFF] hover:underline transition duration-150 ease-in-out">
                Terms
              </Link>{' '}
              ·{' '}
              <Link
                to="#"
                className="text-[#BFCFFF] hover:underline transition duration-150 ease-in-out">
                Privacy Policy
              </Link>
            </div>
            <div className="flex justify-start items-start gap-x-3">
              <Link
                to=""
                className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80">
                <img
                  src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg"
                  alt="App Store"
                  className="w-36 lg:w-44"
                  width="200"
                  height="60"
                />
              </Link>

              <Link
                to=""
                className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80">
                <img
                  src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
                  alt="App Store"
                  className="w-36 lg:w-44"
                  width="200"
                  height="60"
                />
              </Link>
            </div>
          </div>

          {/* 3rd block */}
          <div className="">
            <h6 className="text-[#BFCFFF] font-medium text-lg mb-6">
              Resources
            </h6>
            <ul className="text-sm space-y-4">
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-[#BFCFFF] transition duration-150 ease-in-out">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-[#BFCFFF] transition duration-150 ease-in-out">
                  Support Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-[#BFCFFF] transition duration-150 ease-in-out">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="">
            <h6 className="text-[#BFCFFF] font-medium text-lg mb-6">Company</h6>
            <ul className="text-sm space-y-4">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-[#BFCFFF] transition duration-150 ease-in-out">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about-us"
                  className="text-[#BFCFFF] transition duration-150 ease-in-out">
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact-us"
                  className="text-[#BFCFFF] transition duration-150 ease-in-out">
                  Contact us
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="#"
                  className="text-[#BFCFFF] transition duration-150 ease-in-out">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="md:col-span-3">
            <h6 className="text-[#BFCFFF] font-medium text-lg mb-2">
              Subscribe
            </h6>
            <p className="text-sm text-[#BFCFFF] mb-4">
              Get the latest news and articles to your inbox every month.
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <Input
                      type="email"
                      className="w-full"
                      placeholder="Your email"
                      name="email"
                    />
                    <div className="absolute inset-0 left-32 pt-3">
                      <button
                        type="submit"
                        className="rounded-xl text-[#00165A] px-5 py-2 text-base mb-3 font-medium bg-[#BFCFFF] transition duration-200 hover:bg-brand-600 active:bg-brand-700">
                        Subcribe
                      </button>
                    </div>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="flex items-center justify-between py-4 md:py-8 border-t border-[#BFCFFF]">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link
                to="#"
                className="flex justify-center items-center text-black bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Twitter">
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="#"
                className="flex justify-center items-center text-black bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Github">
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="#"
                className="flex justify-center items-center text-black bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook">
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-[#BFCFFF] mr-4">
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
