import React from "react";
import { NavLink } from "react-router-dom";
import m from "./Header.module.scss";

import Image from "../../img/logo.png";

const Header = () => {
  return (
    <header className={m.header}>
      <div className={m.header__wrap}>
        <NavLink to={"/home"} className={m.header__logo}>
          <img src={Image} alt="" />
          <div className={m.header__text}>Евдокимова&nbsp;Ольга<span>Frontend-&nbsp;разработчик</span>
          </div>
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
