import React from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import "./style.css";

/**
 * @author
 * @function Navbar
 **/

export const Navbar = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src="assets/item-01.jpg" alt="logo"/>
        </Link>
      </div>

      <input type="text" placeholder="Search Srijcon" />

      <div className="rightSide">
        <div className="icons">
          <RiCheckboxMultipleLine />
        </div>
        <div className="icons">
          <BsPencilSquare />
        </div>
      </div>
    </div>
  );
};

export default Navbar;