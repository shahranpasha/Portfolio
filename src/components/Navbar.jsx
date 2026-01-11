import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Projects", path: "/projects" },
    { id: 4, text: "Tech Skills", path: "/skills" },
    { id: 5, text: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <div className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className="
            flex items-center justify-center
            px-8 py-3
            rounded-full
            backdrop-blur-xl
            bg-white/10
            border border-white/20
            shadow-lg
            text-white
          "
        >
          <ul className="flex items-center gap-10">
            {navItems.map(({ id, text, path }) => (
              <li key={id}>
                <Link
                  to={path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== MOBILE HAMBURGER ONLY ===== */}
      <div className="md:hidden fixed top-6 left-6 z-50">
        <button onClick={() => setMenu(true)} className="text-white">
          <AiOutlineMenu size={26} />
        </button>
      </div>

      {/* ===== MOBILE FULLSCREEN MENU ===== */}
      {menu && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden">
          {/* CLOSE ICON */}
          <div className="absolute top-6 left-6">
            <button onClick={() => setMenu(false)} className="text-white">
              <IoCloseSharp size={28} />
            </button>
          </div>

          <ul className="flex flex-col items-center justify-center h-full gap-8 text-2xl text-white">
            {navItems.map(({ id, text, path }) => (
              <li key={id} onClick={() => setMenu(false)}>
                <Link
                  to={path}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
