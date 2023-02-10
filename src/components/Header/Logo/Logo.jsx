import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.scss";


const Logo = () => {
  return (
    <div className="logo">
      <NavLink to={"/home"} className="logo__link">
        <img src="https://i.ibb.co/kQ4T5tX/logo.png" alt="" />
        <div className="logo__text">
          Евдокимова&nbsp;Ольга<span>Frontend-&nbsp;разработчик</span>
        </div>
      </NavLink>
    </div>
  );
};
export default Logo;
