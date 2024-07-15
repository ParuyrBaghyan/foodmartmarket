import React from "react";
import classes from "./greating.module.css";
import Image from "next/image";

const Greating: React.FC = () => {
  return (
    <div className={classes.greating}>
      <span className={classes.contnet_box}>
        <h1>Самые свежие фрукты и ягоды у нас</h1>
        <span>
          <b>
            {" "}
            Мы предоставляем вам большой ассортимент фруктов и овощей ,Которые
            мы доставим вам в кратчайшие сроки
          </b>
        </span>
        <button>
          <b>Купить сейчас</b>
        </button>
      </span>
      <Image src="/assets/1.png" alt="search icon" width={350} height={400} />
    </div>
  );
};

export default Greating;
