import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full sticky top-0 py-2 px-6 rounded-b-3xl bg-[#213555] ${
        isOpen ? "menu-open" : "menu-closed"
      }`}
    >
      <div className="flex justify-between items-center">
        <p className="text-[36px] sm:text-[44px] h-fit">Story.ai</p>
        <div className="gap-10 text-[32px] hidden sm:flex">
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/home/profile"}>Profile</NavLink>
          <div className="rounded-full w-12 h-12 bg-white" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="bg-transparent text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 ${
                isOpen ? "menu-icon-open" : "menu-icon-closed"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex gap-6 text-lg">
            <NavLink to={"/home"} className="py-2 tracking-widest">
              Home
            </NavLink>
            <NavLink to={"/profile"} className="py-2 tracking-widest">
              Profile
            </NavLink>
            <NavLink to={"/leaderboard"} className="py-2 tracking-widest">
              Leaderboard
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
