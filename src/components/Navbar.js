import React from "react";
import menu from "../constants/menu";
import { Link } from "gatsby";
import { FaAlignRight } from "react-icons/fa";
import logo from "../assets/images/opillis-logo.png";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="toggle-btn">
            <FaAlignRight onClick={toggleSidebar} />
          </button>{" "}
        </div>
        <div className="nav-links">
          {menu.map((link) => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
