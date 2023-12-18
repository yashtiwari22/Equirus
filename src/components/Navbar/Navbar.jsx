import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="links">
        <li>Product</li>
        <li>Features</li>
        <li>Marketplace</li>
        <li>Company</li>
      </ul>
      <p>Log In</p>
    </div>
  );
};

export default Navbar;
