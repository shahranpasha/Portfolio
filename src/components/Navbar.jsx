import React, { useState } from "react";
import pic from "../../public/image.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from 'react-scroll';
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              <span className=" text-2xl">Mohd Shahran Turki</span>
              <p className="text-sm">Web Develpoer</p>
            </h1>
          </div>

          <div>
            <ul className="hidden  md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass='active'>
                  {text} </Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden" onClick={() => setMenu(!menu)}>
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {menu && (
          <div className='bg-white'>
            <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-3 text-xl ">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                  key={id}
                >
                   <Link to={text}
                   onClick={() => setMenu(!menu)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass='active'>
                  {text} </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
