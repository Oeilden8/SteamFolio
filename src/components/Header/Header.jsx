import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo-RVB.png";

function Header() {
  return (
    <div className="header-container">
      <ul className="nav">
        <li>
          <NavLink to="/">
            <img src={logo} alt="logo steamFolio" height="60px" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">MAGASIN</NavLink>
        </li>
        <li>
          <NavLink to="/bibliotheque">BIBLIOTHEQUE</NavLink>
        </li>
        <li>
          <NavLink to="/oeildenuit">OEILDENUIT</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
