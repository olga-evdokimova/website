import React from "react";
import "./Social.scss";
// import Img from "./img/GutHub.png";

const Social = (props) => {
  return (
    <div className="social">
      <a href="https://t.me/olga_developer" className="social__item">
        {/* <img src={Img} alt="" /> */}
     
        Telegram
      </a>
      <a
        href="https://tenchat.ru/olga_developer?utm_source=17942794-ee25-4d18-944f-0d2ab648ed9e"
        className="social__item"
      >
        TenChat
      </a>
      <a href="https://github.com/olga-evdokimova" className="social__item">
        GitHub
      </a>
      <a href="https://vk.com/olgaevdokimova13" className="social__item">
        ВКонтакте
      </a>
    </div>
  );
};
export default Social;
