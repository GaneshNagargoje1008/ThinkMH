import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
    </nav>
  );
};

export default Navbar;
