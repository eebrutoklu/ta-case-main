// Header.jsx

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const loggedInUserName = localStorage.getItem("loggedInUserName");

  return (
    <header>
      <div className="flex justify-between items-center  lg:mx-10">
        <Link
          to="/"
          className="flex items-center text-xl font-bold text-gray-800"
        >
          <img
            src="/public/images/logo.png"
            alt=""
            className="w-30 h-20 max-w-none"
            // max-width stil özelliği eklendi
          />
        </Link>

        <nav className="flex gap-4 text-gray-800 mx-4 lg:mx-10 align-items-center">
          <div>
            {loggedInUserName && (
              <span className="flex text-sm font-semibold text-gray-800">
                Welcome, {loggedInUserName}!
              </span>
            )}
          </div>
          <Link
            to="/"
            className="flex w-full justify-center rounded-md bg-sky-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 whitespace-nowrap"
          >
            Log Out
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
