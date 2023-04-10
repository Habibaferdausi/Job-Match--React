import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="bg-purple-100 px-4 py-5  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
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
        <div>
          <button className="btn-new">Start Applying</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
