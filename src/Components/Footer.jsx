import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-gray-400 body-font bg-gray-900 w-full">
      <div className="container p-12 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first w-full md:justify-between">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <p className="text-sm text-gray-400  sm:mt-0 mt-4">
              © 2023 Lumination — Sagar Santra
            </p>
            <div className="list-none mb-10">
              <li>
                <Link
                  to="/Termsofservice"
                  className="text-gray-400 hover:text-white"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  to="/Shippingpolicy"
                  className="text-gray-400 hover:text-white"
                >
                  Shipping policy
                </Link>
              </li>
              <li>
                <Link
                  to="/Refundpolicy"
                  className="text-gray-400 hover:text-white"
                >
                  Refund policy
                </Link>
              </li>
              <span className="inline-flex mt-4 justify-center">
                <Link to="/" className="text-gray-400 hover:text-white">
                  <FaFacebookF />
                </Link>
                <Link
                  to="https://twitter.com/SagarSa03495060"
                  className="ml-3 text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="https://www.instagram.com/sagarsantra397/"
                  className="ml-3 text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/sagar-santra-8526051ab/"
                  className="ml-3 text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </span>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              TABS
            </h2>
            <div className="list-none mb-10">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Product" className="text-gray-400 hover:text-white">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/Blogs" className="text-gray-400 hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/About" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
            </div>
          </div>

          <div className="lg:w-2/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-400"
                >
                  Enter your mail
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-gray-800 focus:border-gray-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              ! This dose nothing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
