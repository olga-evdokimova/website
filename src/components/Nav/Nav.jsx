import React from "react";
import { NavLink } from "react-router-dom";
import m from "./Nav.module.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const toggleActive = () => {
    setNav(!nav);
  };

  return (
    <nav className={m.nav}>
      <ul className={nav ? [m.nav_menu, m.active_menu].join(" ") : m.nav_menu}>
        <li onClick={toggleActive}>
          <NavLink to="/about">Обо мне</NavLink>
        </li>
        <li onClick={toggleActive}>
          <NavLink to="/blog">Блог</NavLink>
        </li>
        <li onClick={toggleActive}>
          <NavLink to="/contacts">Контакты</NavLink>
        </li>
      </ul>
      <div onClick={toggleActive} className={m.icon_menu}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </nav>
  );
};
export default Nav;
