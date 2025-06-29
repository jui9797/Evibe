import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500 mb-4">
            <span className="text-pink-700">E</span>vibe
          </h2>
          <p className="text-sm">
            Your ultimate event planning platform. Connect, Create & Celebrate
            effortlessly.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-pink-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-pink-500">
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500">
                Event Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Venue Booking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Custom Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-2">
            Subscribe to get the latest event updates.
          </p>
          <form className="flex items-center mt-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-600 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="text-white bg-blue-500 font-bold hover:bg-pink-500 px-4 py-2 rounded-r-md text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Evibe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
