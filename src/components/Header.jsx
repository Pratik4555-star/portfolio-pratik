import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Header() {
  useGSAP(() => {
    gsap.from('header', {
      y: -20,
      opacity: 0,
      duration: 0.5,
      delay: 0.7,
      stagger: 0.2
    });
  });

  const [theme, setTheme] = useState({ bg: "bg-white", text: "text-gray-950" });

  const handleThemeChange = (newBg, newText) => {
    setTheme({ bg: newBg, text: newText });
  };

  return (
    <header className={`top-0 ${theme.bg} ${theme.text}`}>
      <nav className="px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center">
          <Link
            to="/"
            onClick={() => handleThemeChange("bg-white", "text-gray-950")}
            className={`text-lg md:text-xl ml-5 md:ml-10 font-semibold font-Abs tracking-normal ${theme.text}`}
          >
            Pratik
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="block md:hidden text-2xl p-2"
            onClick={() => document.getElementById("mobileMenu").classList.toggle("hidden")}
          >
            ☰
          </button>

          {/* Navigation Menu */}
          <ul
            id="mobileMenu"
            className="hidden md:flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 mr-5 md:mr-10 w-full md:w-auto mt-4 md:mt-0"
          >  
            <li>
              <NavLink
                to="/startup"
                onClick={() => handleThemeChange("bg-[#191919]", "text-white")}
                className={({ isActive }) =>
                  `block font-Abs duration-300 ${isActive ? theme.text : "text-gray-400"}`
                }
              >
                Startup
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
