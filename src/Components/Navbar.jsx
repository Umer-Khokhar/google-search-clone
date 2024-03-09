import React from "react";
import { NavLink } from "react-router-dom";
import darkModeIcon from "/icons/dark.svg";
import lightModeIcon from "/icons/light.svg";
import { Search } from "./Search";
import { Input } from "./Input";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-2 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-600 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <NavLink to="/search">
          <p
            className="text-2xl bg-blue-500 text-white dark:bg-gray-200 dark:text-gray-700 
          font-bold px-2 py-1 rounded"
          >
            Googl 🔎
          </p>
        </NavLink>
        <img
          className="dark:invert invert-0 cursor-pointer"
          src={darkTheme ? lightModeIcon : darkModeIcon}
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          width="24"
        />
      </div>
      <Search/>
    </div>
  );
};
