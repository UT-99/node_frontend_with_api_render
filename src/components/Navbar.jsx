import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar_flex background border">
        <Link to="/" className="navlink_specific">
          <span>Home</span>
        </Link>
        <Link to="/bollywood" className="navlink_specific">
          <span>Bollywood</span>
        </Link>
        <Link to="/hollywood" className="navlink_specific">
          <span>Hollywood</span>
        </Link>
        <Link to="/Technology" className="navlink_specific">
          <span>Technology</span>
        </Link>
        <Link to="/Fitness" className="navlink_specific">
          <span>Fitness</span>
        </Link>
        <Link to="/Food" className="navlink_specific">
          <span>Food</span>{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
