import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "/Think MH.png";

import {
  FaChartLine,
  FaLandmark,
  FaVoteYea,
  FaBriefcase,
  FaUsers,
  FaMapMarkedAlt,
  FaFileAlt,
  FaChartBar,
  FaNewspaper,
  FaPenFancy,
} from "react-icons/fa";

const Navbar = () => {
  const [showInsights, setShowInsights] = useState(false);
  const menuRef = useRef(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileInsights, setMobileInsights] = useState(false);
  const [mobileFormats, setMobileFormats] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowInsights(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="ThinkMH Logo"
            className="h-12 w-auto object-cover"
          />
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-2xl text-blue-900"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700 items-center">
          <li>
            <Link to="/about" className="hover:text-blue-700 transition">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/team" className="hover:text-blue-700 transition">
              Team
            </Link>
          </li>

          <li>
            <Link
              to="/pulse-tracker"
              className="hover:text-blue-700 transition"
            >
              Pulse Tracker
            </Link>
          </li>

          <li>
            <Link
              to="/market-tracker"
              className="hover:text-blue-700 transition"
            >
              Market Tracker
            </Link>
          </li>

          {/* Insights Mega Menu */}
          <li
            className="relative"
            ref={menuRef}
            onMouseEnter={() => setShowInsights(true)}
          >
            <button
              onClick={() => setShowInsights(!showInsights)}
              className="hover:text-blue-700 transition"
            >
              Insights
            </button>

            {showInsights && (
              <div
                className="absolute left-1/2 -translate-x-1/2 mt-5 w-[650px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 z-50"
                onMouseLeave={() => setShowInsights(false)}
              >
                <div className="grid grid-cols-2 gap-10">
                  {/* Categories */}
                  <div>
                    <h3 className="font-bold text-blue-900 mb-5">
                      Browse by Category
                    </h3>

                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/insights?category=economy"
                          onClick={() => setShowInsights(false)}
                          className="flex items-center gap-3 hover:text-blue-700 transition"
                        >
                          <FaChartLine />
                          Economy
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/insights?category=governance"
                          onClick={() => setShowInsights(false)}
                          className="flex items-center gap-3 hover:text-blue-700 transition"
                        >
                          <FaLandmark />
                          Governance
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/insights?category=politics"
                          onClick={() => setShowInsights(false)}
                          className="flex items-center gap-3 hover:text-blue-700 transition"
                        >
                          <FaVoteYea />
                          Politics
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/insights?category=business"
                          onClick={() => setShowInsights(false)}
                          className="flex items-center gap-3 hover:text-blue-700 transition"
                        >
                          <FaBriefcase />
                          Business
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/insights?category=society"
                          onClick={() => setShowInsights(false)}
                          className="flex items-center gap-3 hover:text-blue-700 transition"
                        >
                          <FaUsers />
                          Society
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/insights?category=maharashtra-trends"
                          onClick={() => setShowInsights(false)}
                          className="flex items-center gap-3 hover:text-blue-700 transition"
                        >
                          <FaMapMarkedAlt />
                          Maharashtra Trends
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Formats */}
                  <div>
                    <h3 className="font-bold text-blue-900 mb-5">
                      Content Formats
                    </h3>

                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/insights?format=article"
                          onClick={() => setShowInsights(false)}
                          className="flex items-center gap-3 hover:text-blue-700 transition"
                        >
                          <FaFileAlt />
                          Articles
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/insights?format=infographic"
                          onClick={() => setShowInsights(false)}
                          className="flex items-center gap-3 hover:text-blue-700 transition"
                        >
                          <FaChartBar />
                          Infographics
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/insights?format=data-story"
                          onClick={() => setShowInsights(false)}
                          className="flex items-center gap-3 hover:text-blue-700 transition"
                        >
                          <FaNewspaper />
                          Data Stories
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/insights?format=opinion"
                          onClick={() => setShowInsights(false)}
                          className="flex items-center gap-3 hover:text-blue-700 transition"
                        >
                          <FaPenFancy />
                          Opinion Pieces
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t pt-5">
                  <Link
                    to="/insights"
                    onClick={() => setShowInsights(false)}
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    View All Insights →
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-700 transition">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-white shadow-xl border-t">
          <div className="flex flex-col p-6 space-y-5">
            <Link to="/" onClick={() => setMobileMenu(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setMobileMenu(false)}>
              About Us
            </Link>

            <Link to="/team" onClick={() => setMobileMenu(false)}>
              Team
            </Link>

            <Link to="/pulse-tracker" onClick={() => setMobileMenu(false)}>
              Pulse Tracker
            </Link>

            <Link to="/market-tracker" onClick={() => setMobileMenu(false)}>
              Market Tracker
            </Link>

            {/* Insights */}

            <button
              onClick={() => setMobileInsights(!mobileInsights)}
              className="flex justify-between items-center"
            >
              Insights
              <FaChevronDown
                className={`transition ${mobileInsights ? "rotate-180" : ""}`}
              />
            </button>

            {mobileInsights && (
              <div className="ml-4 flex flex-col space-y-3">
                <Link to="/insights?category=economy">Economy</Link>

                <Link to="/insights?category=governance">Governance</Link>

                <Link to="/insights?category=politics">Politics</Link>

                <Link to="/insights?category=business">Business</Link>

                <Link to="/insights?category=society">Society</Link>

                <Link to="/insights?category=maharashtra-trends">
                  Maharashtra Trends
                </Link>

                <button
                  onClick={() => setMobileFormats(!mobileFormats)}
                  className="flex justify-between items-center"
                >
                  Content Formats
                  <FaChevronDown
                    className={`transition ${
                      mobileFormats ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileFormats && (
                  <div className="ml-4 flex flex-col space-y-2">
                    <Link to="/insights?format=article">Articles</Link>
                    <Link to="/insights?format=infographic">Infographics</Link>
                    <Link to="/insights?format=data-story">Data Stories</Link>
                    <Link to="/insights?format=opinion">Opinion Pieces</Link>
                  </div>
                )}

                <Link to="/insights">View All Insights →</Link>
              </div>
            )}

            <Link to="/contact" onClick={() => setMobileMenu(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
