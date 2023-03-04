import React, { FC } from "react";

import apple from "../assets/images/svg/apple.svg";
import pizza from "../assets/images/svg/pizza.svg";
import fire from "../assets/images/svg/fire.svg";
import market from "../assets/images/svg/market.svg";
import sponge from "../assets/images/svg/sponge.svg";
import dumplings from "../assets/images/svg/dumplings.svg";
const Categories: FC = () => {
  return (
    <div className={"categories"}>
      <div className={"category"}>
        <img src={apple} alt="" />
        <span>Супермаркет</span>
      </div>
      <div className={"category"}>
        <img src={pizza} alt="" />
        <span>Кулинария</span>
      </div>
      <div className={"category"}>
        <img src={dumplings} alt="" />
        <span>Заморозка</span>
      </div>
      <div className={"category"}>
        <img src={sponge} alt="" />
        <span>Другое</span>
      </div>
      <div className={"category"}>
        <img src={fire} alt="" />
        <span>Акции</span>
      </div>
      <div className={"category"}>
        <img src={market} alt="" />
        <span>Магазины</span>
      </div>
    </div>
  );
};

export default Categories;
