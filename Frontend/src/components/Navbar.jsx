import React, { useState } from "react";
import { assets } from "../assets/assets";
function Navbar() {
  return (
    <header className=" w-full border-solid font-Satohi font-[900] h-[6rem]">
      <nav className=" flex items-center justify-between w-full h-full px-2  py-1 sm:justify-between">
        <span className=" w-[40%] flex items-center justify-start sm:w-[33%] ">
          <img src={assets.logo} alt="" className=" p-2" />
        </span>
        <span className="h-full hidden sm:w-[33%] sm:flex items-center justify-center ">
          <ul className="h-full w-full flex items-center justify-evenly gap-4 px-4">
            <li className="shrink-0 border-b-2 border-transparent pt-2 px-1 pb-4 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              Home
            </li>
            <li className="shrink-0 border-b-2 border-transparent pt-2 px-1 pb-4 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              Menu
            </li>
            <li className="shrink-0 border-b-2 border-transparent pt-2 px-1 pb-4 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              Contact Us
            </li>
          </ul>
        </span>
        <span className="h-full w-[60%] flex items-center justify-end sm:w-[33%] ">
          <ul className="h-full flex  items-center justify-center gap-4 sm:w-full sm:justify-end pr-2">
            <li className="flex items justify-center">
              <button type="button">
                <SearchIcon />
              </button>
            </li>
            <li className="flex items justify-center">
              <button type="button">
                <CartIcon />
              </button>
            </li>
            <li className="flex items justify-center">
              <button
                type="button"
                className="inline-block rounded border border-orange-600 bg-orange-600 px-4 py-1 text-lg font-lg text-nowrap text-white hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500"
              >
                Sign In
              </button>
            </li>
          </ul>
        </span>
      </nav>
    </header>
  );
}

function SearchIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6 sm:size-10 "
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}

function CartIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6 sm:size-10"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}

export default Navbar;
