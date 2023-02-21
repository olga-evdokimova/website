import React from "react";
import "./Home.scss";
import Post from "./Post/Post";
import image1 from "../../img/1.jpg"
import image2 from "../../img/3.jpg";
import image3 from "../../img/2.jpg";
import image4 from "../../img/bg.jpg";

let postData = [
  {
    id: 1,
    title: "Интернет-магазин",
    img: image1,
    text: "Итернет-магазин электронной техники написан кодом, работает на CMS WordPress. В данный момент заполняется самим заказчиком.",
    to: "http://electronicashop.ru/",
  },
  {
    id: 2,
    title: "pavel.evdokimov.xyz",
    img: image2,
    text: "Сайт написан для плиточника, здесь выставлены все его проекты с фото и видео. Сайт был создан именно для демонстрации проектов. Дополнительный функционал будет добавляться по мере необходимости.",
    to: "http://pavel.evdokimov.xyz/",
  },
  {
    id: 3,
    title: "khachkar.com",
    img: image3,
    text: "Доработка готового сайта на теме WordPress. Подключение платежной системы.",
    to: "https://khachkar.com/",
  },
  {
    id: 4,
    title: "Блог",
    img: image4,
    text: "Подойдет для продажи одежды, хендмейд изделий, комнатных растений, тортов...",
    to: "/contacts",
  },
];

  
let postElements = postData.map((element,key) => 
  <Post key={key} id={element.id} title={element.title} img={element.img} text={element.text} to={element.to} />
);

const Home = (props) => {
  return (
    <main>
      <h1 className="title">мои проекты</h1>
      {postElements}
    </main>
  );
};
export default Home;
