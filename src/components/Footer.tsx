import React, { FC } from "react";

import phone from "../assets/images/svg/phone.svg";
import compassFooter from "../assets/images/svg/compassFooter.svg";
import instagram from "../assets/images/svg/instagram.svg";
import email from "../assets/images/svg/email.svg";
import visa from "../assets/images/svg/visa.svg";
import masterCard from "../assets/images/svg/masterCard.svg";
import gazizov from "../assets/images/svg/gazizov.svg";

const Footer: FC = () => {
  return (
    <div className={"footer"}>
      <div className={"container"}>
        <div className={"info"}>
          <div className={"info__categories"}>
            <div className={"info__categories--title"}>Ильинский онлайн</div>
            <div className={"info__categories--category"}>Кулинария</div>
            <div className={"info__categories--category"}>Супермаркет</div>
            <div className={"info__categories--category"}>Заморозка</div>
            <div className={"info__categories--category"}>Другое</div>
          </div>
          <div className={"info__categories"}>
            <div className={"info__categories--title"}>Ильинский клуб</div>
            <div className={"info__categories--category"}>Акции</div>
            <div className={"info__categories--category"}>
              Доставка и оплата
            </div>
            <div className={"info__categories--category"}>
              Программа лояльности
            </div>
            <div className={"info__categories--category"}>Вакансии</div>
          </div>
          <div className={"info__contact"}>
            <div className={"info__contact--phone"}>
              <img src={phone} alt="" />
              <span>+38 (000) 49-09-99</span>
              <div>Ежедневно c 09:00 до 21:00</div>
            </div>
            <div className={"info__contact--social"}>
              <img src={compassFooter} alt="" />
              <span>Адреса магазинов</span>
            </div>
            <div className={"info__contact--social"}>
              <img src={instagram} alt="" />
              <span>Следите за нами</span>
            </div>
            <div className={"info__contact--social"}>
              <img src={email} alt="" />
              <span>Обратная связь</span>
            </div>
          </div>
          <div className={"info__form"}>
            <div className={"info__form--title"}>
              Подпишитесь на вкусные и полезые новости
            </div>
            <div className={"info__form--form"}>
              <input placeholder={"Подпишитесь"} type="text" />
              <button className={"button button__red"}>Подписаться</button>
            </div>
            <div className={"info__form--agreement"}>
              <input type="radio" />
              <span>Согласен с политикой конфиденциальности</span>
            </div>
          </div>
        </div>
        <div className={"copyright"}>
          <span>
            © 2022 Ильинский онлайн — доставкатоваров и продуктов на дом
          </span>
          <span>Информация на сайте не является публичной офертой</span>
          <span className={"payment"}>
            <img src={visa} alt="" />
            <img src={masterCard} alt="" />
          </span>
          <span>
            Разработано в <img src={gazizov} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
