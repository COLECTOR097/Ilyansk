import React, { FC } from "react";

import { Product } from "../redux/product/types";
import { useSelector } from "react-redux";
import { getProducts } from "../redux/product/selectors";

import { Slider } from "./index";

import granola from "../assets/images/png/granola.png";
import like from "../assets/images/svg/like.svg";

const Products: FC = () => {
  const { products } = useSelector(getProducts);

  return (
    <Slider
      spaceBtw={25}
      slidesView={4}
      controllers={{
        prevBtn: "prevBtn",
        nextBtn: "nextBtn",
      }}
    >
      {products.map((product: Product) => {
        return (
          <div key={product.id} className={"slider__slide discount__product"}>
            <div className={"discount__product--img"}>
              <span>%</span>
              <img src={granola} alt="" />
              <img className={"like"} src={like} alt="" />
            </div>
            <div className={"discount__product--stock"}>
              <span>В наличии {product.stock} шт</span>
              <span>{product.price} грн</span>
            </div>
            <div className={"discount__product--desc"}>
              {product.desc}
              {product.weight}г
            </div>
            <div className={"discount__product--price"}>
              <div>
                <div className={"discount-price"}>{product.discount} грн</div>
                <div className={"price"}>{product.price} грн</div>
              </div>
              <button className={"button"}>В корзину</button>
            </div>
          </div>
        );
      })}
      <button className={"prevBtn"}>
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.30678 0.289794L0.329247 5.26732C-0.0570147 5.65559 -0.0570147 6.28273 0.329247 6.671L5.30678 11.6485C5.67908 11.9681 6.22961 11.9681 6.60191 11.6485C7.01905 11.2911 7.0678 10.662 6.7104 10.2449L2.43973 5.97413L6.71045 1.69347C7.09671 1.3052 7.09671 0.678064 6.71045 0.289794C6.32218 -0.0964679 5.695 -0.0964679 5.30678 0.289794Z"
            fill="#FFA900"
          />
        </svg>
      </button>
      <button className={"nextBtn"}>
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.69322 0.289794L6.67075 5.26732C7.05701 5.65559 7.05701 6.28273 6.67075 6.671L1.69322 11.6485C1.32092 11.9681 0.770393 11.9681 0.398088 11.6485C-0.0190492 11.2911 -0.0677967 10.662 0.289598 10.2449L4.56027 5.97413L0.289548 1.69347C-0.0967141 1.3052 -0.0967141 0.678064 0.289548 0.289794C0.677818 -0.0964679 1.305 -0.0964679 1.69322 0.289794Z"
            fill="white"
          />
        </svg>
      </button>
    </Slider>
  );
};

export default Products;
