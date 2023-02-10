import Logo from "components/Logo/Logo";
import React from "react";
import "./Footer.scss";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Logo></Logo>
        <Social></Social>
      </div>
      <div className="footer__copy">
        <span>© 2023 </span>
        <a href="https://github.com/olga-evdokimova">
          Developed by Olga Evdokimova
        </a>
      </div>
    </footer>
  );
};
export default Footer;
