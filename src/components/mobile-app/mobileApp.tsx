import React from "react";
import classes from "./mobileApp.module.css";
import Image from "next/image";

const MobileApp: React.FC = () => {
  return (
    <div className={classes.mobileApp_container}>
      <div className={classes.mobile_images}>
        <div className={classes.image_box}>
          {" "}
          <Image
            src="/assets/phone-1.png"
            alt="phone"
            width={280}
            height={420}
            className={classes.big_img}
          />
          <Image
            src="/assets/phone-2.png"
            alt="phone"
            width={280}
            height={420}
            className={classes.small_img}
          />
        </div>
      </div>
      <div className={classes.content}>
        <h2>Food Mart</h2>
        <h1>Мы всегда с вами !</h1>
        <span>
          <b>
            Скачайте приложение Foodmart на ваше мобильное устройство и делайте
            заказы из любого места
          </b>
        </span>
        <span className={classes.stores}>
          <Image
            src="/assets/googlePlay.png"
            alt="Google Paly"
            width={150}
            height={52}
          />
          <Image
            src="/assets/appStore.png"
            alt="App Store"
            width={230}
            height={90}
          />
        </span>
      </div>
    </div>
  );
};

export default MobileApp;
