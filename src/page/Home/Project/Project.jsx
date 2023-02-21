import React from "react";
import m from "./Project.module.scss";
import { NavLink } from "react-router-dom";

const Project = (props) => {
  const link = props.to.startsWith("http");

  return (
    <div className={m.post}>
      <div className={m.post__filter}></div>
      <div className={m.post__img}>
        <img src={props.img} alt="" />
      </div>
      <div className="container">
        <div className={m.post__wrap}>
          {link ? (
            <a
              href={props.to}
              className={m.post__title}
              target="_blank"
              rel="noreferrer"
            >
              {props.title}
            </a>
          ) : (
            <NavLink to={props.to}>
              <div className={m.post__title}>{props.title}</div>
            </NavLink>
          )}

          <div className={m.post__text}>{props.text}</div>
        </div>
      </div>
    </div>
  );
};
export default Project;
