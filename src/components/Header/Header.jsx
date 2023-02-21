import React from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import Nav from "components/Nav/Nav";

const Header = () => {
  return (
    <header className="header container">
      <Logo></Logo>
      <Nav></Nav>
    </header>
  );
};
export default Header;
