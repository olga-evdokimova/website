import Logo from "components/Header/Logo/Logo";
import React from "react";
import "./Footer.scss";
import Social from "./Social/Social";


const Footer = () => {
  return (
    <footer className="footer">
      <Logo></Logo>
      <Social></Social>
    
    </footer>
  );
};
export default Footer;
