import React from "react";
import classes from "./aboutPoints.module.css";
import Image from "next/image";

const AboutPoints: React.FC = () => {
  return (
    <div className={classes.greating}>
      <span className={classes.contnet_box}>
        <h1>Баллы за каждую покупку</h1>
        <span>
          <b> Совершайте покупки и копите баллы</b>
        </span>
        <button>
          <b>Оформить</b>
        </button>
      </span>
    </div>
  );
};

export default AboutPoints;
