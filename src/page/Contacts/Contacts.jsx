import React from "react";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <main>
      <div className="container">
        <h1 className="title">заказать сайт</h1>
        <div className="contacts-wrap">
          <form className="form">
            <label>
              <input
                className="form__input"
                type="text"
                name="name"
                placeholder="Имя"
              />
            </label>
            <label>
              <input
                className="form__input"
                type="email"
                name="email"
                placeholder="Email"
              />
            </label>
            <textarea
              placeholder="Опишите тему заявки."
              name="text"
              rows={5}
            ></textarea>
            <input className="form__submit" type="submit" value="Отправить" />
          </form>
        </div>
      </div>
    </main>
  );
};
export default Contacts;
