import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { Moon, Sun } from "lucide-react";

import { useEffect, useState } from "react";

const Navbar = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);

  }, [theme]);

  const toggleTheme = () => {

    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }

  };

  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50

      px-6 md:px-10
      py-5

      flex
      items-center
      justify-between

      backdrop-blur-xl

      bg-white/80
      dark:bg-black/40

      border-b
      border-black/10
      dark:border-white/10

      transition-all
      duration-300
      "
    >

      {/* LOGO */}
      <h1
        className="
        text-2xl
        font-bold
        tracking-wide

        text-black
        dark:text-white
        "
      >
        Shahran Pasha
      </h1>

      {/* DESKTOP MENU */}
      <div
        className="
        hidden md:flex

        gap-8

        text-sm
        uppercase
        tracking-[3px]

        text-black
        dark:text-white
        "
      >

        <Link
          to="/"
          className="
          hover:text-blue-500
          transition-all duration-300
          "
        >
          Home
        </Link>

        <Link
          to="/services"
          className="
          hover:text-blue-500
          transition-all duration-300
          "
        >
          Services
        </Link>

        <Link
          to="/portfolio"
          className="
          hover:text-blue-500
          transition-all duration-300
          "
        >
          Portfolio
        </Link>

        <Link
          to="/pricing"
          className="
          hover:text-blue-500
          transition-all duration-300
          "
        >
          Pricing
        </Link>

        <a
  href="#contact"
  className="
  hover:text-blue-500
  transition-all duration-300
  "
>
  Contact
</a>
      </div>

      {/* RIGHT */}
      <div
        className="
        flex
        items-center
        gap-4

        text-xl

        text-black
        dark:text-white
        "
      >

{/* DESKTOP SOCIALS */}
<div className="hidden md:flex items-center gap-5">

  {/* GITHUB */}
  <a
    href="https://github.com/shahranpasha"
    target="_blank"
    className="
    hover:text-gray-700
    dark:hover:text-white

    hover:scale-110
    transition-all duration-300
    "
  >
    <FaGithub />
  </a>

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/shahranpasha/"
    target="_blank"
    className="
    hover:text-[#0077B5]

    hover:scale-110
    transition-all duration-300
    "
  >
    <FaLinkedin />
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/shahranpashaa/"
    target="_blank"
    className="
    hover:text-[#E1306C]

    hover:scale-110
    transition-all duration-300
    "
  >
    <FaInstagram />
  </a>

  {/* FACEBOOK */}
  <a
    href="https://www.facebook.com/shahranpasha04"
    target="_blank"
    className="
    hover:text-[#1877F2]

    hover:scale-110
    transition-all duration-300
    "
  >
    <FaFacebookF />
  </a>

</div>

        {/* THEME BUTTON */}
        <button
          onClick={toggleTheme}
          className="
          w-10
          h-10

          rounded-full

          border
          border-black/10
          dark:border-white/10

          flex
          items-center
          justify-center

          hover:bg-black/5
          dark:hover:bg-white/10

          transition-all duration-300
          "
        >

          {theme === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}

        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
          md:hidden

          w-10
          h-10

          rounded-full

          border
          border-black/10
          dark:border-white/10

          flex
          items-center
          justify-center
          "
        >

          {menuOpen ? (
            <FaTimes size={18} />
          ) : (
            <FaBars size={18} />
          )}

        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`
        absolute top-full left-0

        w-full

        bg-white
        dark:bg-[#0b0b12]

        border-b
        border-black/10
        dark:border-white/10

        backdrop-blur-xl

        flex flex-col
        items-center
        gap-8

        py-10

        transition-all duration-500

        ${menuOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-10"}
        `}
      >

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium hover:text-blue-500"
        >
          Home
        </Link>

        <Link
          to="/services"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium hover:text-blue-500"
        >
          Services
        </Link>

        <Link
          to="/portfolio"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium hover:text-blue-500"
        >
          Portfolio
        </Link>

        <Link
          to="/pricing"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium hover:text-blue-500"
        >
          Pricing
        </Link>

        <a
  href="#contact"
  onClick={() => setMenuOpen(false)}
  className="text-lg font-medium hover:text-blue-500"
>
  Contact
</a>

        {/* MOBILE SOCIALS */}
        <div className="flex items-center gap-6 text-2xl">

          <FaGithub />
          <FaLinkedin />
          <FaInstagram />
          <FaFacebookF />

        </div>

      </div>

    </nav>

  );
};

export default Navbar;