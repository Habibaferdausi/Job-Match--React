import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Bars3BottomRightIcon,
  BoltIcon,
  BookOpenIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-purple-100 px-4 py-5  md:px-24 lg:px-12">
      <div className="relative flex items-center justify-between">
        <Link to="/" className="inline-flex items-center ps-7">
          <p className="ml-2 text-2xl font-bold tracking-wide text-gray-700">
            Job<span className="text-purple-700">Match </span>
          </p>
        </Link>

        <ul className="items-center hidden  space-x-8 font-semibold text-gray-500 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-purple-700" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive ? "text-purple-700" : "default"
              }
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appliedjobs"
              className={({ isActive }) =>
                isActive ? "text-purple-700" : "default"
              }
            >
              Applied Jobs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-purple-700" : "default"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="lg:pe-20">
          <button className="btn-new ">Start Applying</button>
        </div>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <p className="ml-2 text-xl font-bold tracking-wide text-gray-700">
                        Job<span className="text-purple-500">Match </span>
                      </p>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/statistics"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-500"
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/appliedjobs"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200  hover:text-purple-500"
                      >
                        Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-500"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
