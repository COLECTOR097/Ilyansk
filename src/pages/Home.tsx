import React, { FC, useEffect } from "react";

import { useAppDispatch } from "../redux/store";
import { setItems } from "../redux/news/slice";
import { setProducts } from "../redux/product/slice";

import { News, Products } from "../components";

import newsData from "../assets/newsSliderData.json";
import productsData from "../assets/productData.json";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setItems(newsData));
    dispatch(setProducts(productsData));
  }, [dispatch]);

  return (
    <div className={"home"}>
      <News />
      <div className="discount">
        <div className="home__title">
          <span>СКИДКИ</span>
          <button className={"button home__title--btn"}>
            Смотреть все
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.69322 0.289794L6.67075 5.26732C7.05701 5.65559 7.05701 6.28273 6.67075 6.671L1.69322 11.6485C1.32092 11.9681 0.770393 11.9681 0.398088 11.6485C-0.0190492 11.2911 -0.0677967 10.662 0.289598 10.2449L4.56027 5.97413L0.289548 1.69347C-0.0967141 1.3052 -0.0967141 0.678064 0.289548 0.289794C0.677818 -0.0964679 1.305 -0.0964679 1.69322 0.289794Z"
                fill="#DA9000"
              />
            </svg>
          </button>
        </div>
        <Products />
      </div>
    </div>
  );
};

export default Home;
