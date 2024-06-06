import React, { useState } from "react";
import { close, menu, sunlogo } from "../assets";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";

//import {FaXmark, FaBar} from 'react-icons/fa6'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between w-full items-center gap-4 bg-black lg:px-10 px-4 py-6 sticky top-0 z-30 border-[8px] border-yellow-500 my-4 ">
      <NavLink to="/">
        <div id="logo" className="sm:flex">
          <img src={sunlogo} alt="logo" className="h-[100px] w-[100px]" />
        </div>
      </NavLink>

      <div>
        <ul className="sm:flex justify-center items-center gap-6 hidden">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={` uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-yellow-500 hover:text-black text-white
               ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[40px] h-[40px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-yellow-500 absolute top-[64px] right-10 max-w-30  rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
