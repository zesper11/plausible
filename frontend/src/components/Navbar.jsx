import React from "react";
import logo from "../assets/plausible_logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between align-middle">
      <img src={logo} className="w-42" alt="Plausible Logo" />
      <ul className="flex text-dull gap-6 cursor-pointer align-middle m-auto ">
        <li>Why Plausible</li>
        <li>Resources</li>
        <li>Priceing</li>
      </ul>
      <div>
        <button className="secondary-btn">Login</button>
        <button className="primary-btn">Start free Trail</button>
      </div>
    </nav>
  );
};

export default Navbar;
