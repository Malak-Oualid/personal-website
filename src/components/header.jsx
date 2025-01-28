import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col items-end p-4 space-y-2">
    <div className="flex justify-end p-4 space-x-5 items-center">
        {isOpen && (
        <div className="flex space-x-5">
          <NavLink to="/" className="text-cyan">
            HOME
          </NavLink>
          <NavLink to="/about" className="text-cyan">
            ABOUT
          </NavLink>
          <NavLink to="/output" className="text-cyan">
            OUTPUT
          </NavLink>
          <NavLink to="/contact" className="text-cyan">
            CONTACT
          </NavLink>
        </div>
      )}
          <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-6 h-6 bg-cyan rounded-full focus:outline-none"
      >
        <span className="text-midnight">+</span>
      </button>
      </div>
      <hr className="w-full border-t border-gray-300 mt-2" />
    </div>
  );
}

export default Header;
