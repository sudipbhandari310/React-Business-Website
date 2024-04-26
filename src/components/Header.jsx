import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/header.scss";

const Header = () => {
  return (
    <nav>
      <h1>Navyata</h1>
      <main>
        <HashLink to={"/"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/contact"}>Contact</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;
