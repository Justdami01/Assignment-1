import React from "react";
{
  /*import { Link } from "react-router-dom";*/
}
import { IoIosArrowDropdown } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { useState } from "react";


function Navigation() {
  const [open, setOpen] = useState(false);

  const switches = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="h-16 bg-white font-semibold relative md:py-2 py-1">
      <div className="w-10/12 m-auto">
        {/**Desktop view */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 lg:text-xl text-xl justify-between">
            {/**Remember to add link function to listed items */}
            <li>News</li>
            <li className="flex items-center gap-2">
              Find a car
              {open ? (
                <IoIosArrowDropdown
                  size={25}
                  onClick={() => setOpen(false)}
                />
              ) : (
                <IoMdArrowDropupCircle size={25} onClick={() => setOpen(true)} />
              )}
            </li>
            <span className="font-bold text-blue-600 text-5xl font-serif">carserra</span>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        {/**Mobile view */}
        <div className="md:hidden absolute top-5 right-7" onClick={() => {}}>
          {open ? (
            <AiOutlineClose size={25} onClick={() => setOpen(false)} />
          ) : (
            <AiOutlineMenu size={25} onClick={() => setOpen(true)} />
          )}
        </div>
        <div className="md:hidden">
          <div className="font-bold text-2xl text-blue-700 mb-4">
          <span className="font-bold text-4xl font-serif">carserra</span>
          </div>
          {open && (
            <div className="md:hidden bg-blue-700 py-4">
              <ul className="flex flex-col gap-3 font-bold">
                {/**Remember to add link function to listed items */}
                <li className="text-xl text-white p-2 rounded cursor-pointer bg-blue-500 hover:bg-blue-400 transition duration-400">
                  News
                </li>
                <li className="flex items-center text-xl text-white p-2 rounded cursor-pointer bg-blue-500 hover:bg-blue-400 transition duration-400">
                  Find a car
                  <IoMdArrowDropupCircle />
                </li>
                <li className="text-xl text-white p-2 rounded cursor-pointer bg-blue-500 hover:bg-blue-400 transition duration-400">
                  About Us
                </li>
                <li className="text-xl text-white p-2 rounded cursor-pointer bg-blue-500 hover:bg-blue-400 transition duration-400">
                  Contact
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
