import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import { Categories } from "./index";

import logo from "../assets/images/svg/logo.svg";
import burger from "../assets/images/svg/burger.svg";
import search from "../assets/images/svg/search.svg";
import compass from "../assets/images/svg/compass.svg";
import like from "../assets/images/svg/like.svg";
import userHover from "../assets/images/svg/userHover.svg";
import user from "../assets/images/svg/user.svg";
import likeRed from "../assets/images/svg/likeRed.svg";
import busked from "../assets/images/svg/busked.svg";

const Header: FC = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className={"header"}>
      <div className={"header__main"}>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <button className={"button button__red"}>
          <img src={burger} alt="" />
          <span>Каталог</span>
        </button>
        <div className={"header__main--input"}>
          <input placeholder={"Начать поиск"} type="text" />
          <img src={search} alt="" />
        </div>
        <div className={"delivery"}>
          <div className={"delivery__compass"}>
            <img src={compass} alt="" />
            <span>МСК</span>
          </div>
          <div className={"delivery__type"}>
            <span className={"delivery__type--title"}>
              Выберите спосаб получения
            </span>
            <span className={"delivery__type--type"}>
              Доставка или самовывоз
            </span>
          </div>
        </div>
        <div onClick={() => setLiked(!liked)} className={"header__main--spec"}>
          <img className={liked ? "disabled" : ""} src={like} alt="" />
          <img className={!liked ? "disabled" : ""} src={likeRed} alt="" />
        </div>
        <div
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={"header__main--spec"}
        >
          <img className={isHover ? "disabled" : ""} src={user} alt="" />
          <img className={!isHover ? "disabled" : ""} src={userHover} alt="" />
        </div>
        <button className={"button button__red"}>
          <img src={busked} alt="" />
          <span>Корзина</span>
        </button>
      </div>
      <Categories />
    </div>
  );
};

export default Header;
