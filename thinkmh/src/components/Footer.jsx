import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaChevronRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <img
              src="/images/logo.png"
              alt="ThinkMH Logo"
              className="h-16 mb-4"
            />

            <h2 className="text-2xl font-bold mb-3">ThinkMH</h2>

            <p className="text-gray-300 leading-7">
              ThinkMH is a research and analytics platform dedicated to
              understanding Maharashtra through data, field research, governance
              insights, public opinion, and market intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 border-b border-blue-700 pb-2">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Team", path: "/team" },
                { name: "Pulse Tracker", path: "/pulse-tracker" },
                { name: "Market Tracker", path: "/market-tracker" },
                { name: "Insights", path: "/insights" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    <FaChevronRight size={10} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 border-b border-blue-700 pb-2">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 text-lg" />
                <p className="text-gray-300 leading-7">
                  ThinkMH Research Center
                  <br />
                  Pune, Maharashtra - 411001
                  <br />
                  India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <a
                  href="mailto:info@thinkmh.org"
                  className="hover:text-white transition"
                >
                  info@thinkmh.org
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-5 border-b border-blue-700 pb-2">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-blue-800 hover:bg-blue-600 flex items-center justify-center transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-pink-600 hover:bg-pink-500 flex items-center justify-center transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center transition duration-300"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-blue-700 hover:bg-blue-500 flex items-center justify-center transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ThinkMH. All Rights Reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>

            <Link to="/sitemap" className="hover:text-white transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
