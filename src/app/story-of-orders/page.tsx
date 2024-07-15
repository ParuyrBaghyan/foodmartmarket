import React from "react";
import classes from "./page.module.css";
import InfoBar from "@/components/info/infoBar";
import Image from "next/image";

const StoryOfOrders: React.FC = () => {
  return (
    <div className={classes.info_container}>
      <div className={classes.center_container}>
        <InfoBar />
        <div className={classes.info_section_content}>
          <div className={classes.top_line}>
            <p>
              <b>Мои карты</b>
            </p>
          </div>
          <div className={classes.content}>
            <div className={classes.order_box}>
              <div className={classes.top_line}>
                <p>№01215415</p>
                <p>12 Июня 2020 16:40</p>
              </div>
              <p className={classes.address}>Ул. Заварная 17, кв 71, Москва</p>
              <span className={classes.line}></span>
              <div className={classes.bottom_line}>
                <div className={classes.price}>
                  <p>Сумма:</p>
                  <p>880,00 ₽</p>
                </div>
                <button className={classes.grayColor}>В ожидании</button>
              </div>
            </div>
            <div className={classes.order_box}>
              <div className={classes.top_line}>
                <p>№01215415</p>
                <p>12 Июня 2020 16:40</p>
              </div>
              <p className={classes.address}>Ул. Заварная 17, кв 71, Москва</p>
              <span className={classes.line}></span>
              <div className={classes.bottom_line}>
                <div className={classes.price}>
                  <p>Сумма:</p>
                  <p>880,00 ₽</p>
                </div>
                <button>Завершен</button>
              </div>
            </div>
            <div className={classes.order_box}>
              <div className={classes.top_line}>
                <p>№01215415</p>
                <p>12 Июня 2020 16:40</p>
              </div>
              <p className={classes.address}>Ул. Заварная 17, кв 71, Москва</p>
              <span className={classes.line}></span>
              <div className={classes.bottom_line}>
                <div className={classes.price}>
                  <p>Сумма:</p>
                  <p>880,00 ₽</p>
                </div>
                <button>Завершен</button>
              </div>
            </div>
            <div className={classes.order_box}>
              <div className={classes.top_line}>
                <p>№01215415</p>
                <p>12 Июня 2020 16:40</p>
              </div>
              <p className={classes.address}>Ул. Заварная 17, кв 71, Москва</p>
              <span className={classes.line}></span>
              <div className={classes.bottom_line}>
                <div className={classes.price}>
                  <p>Сумма:</p>
                  <p>880,00 ₽</p>
                </div>
                <button>Завершен</button>
              </div>
            </div>
            <div className={classes.order_box}>
              <div className={classes.top_line}>
                <p>№01215415</p>
                <p>12 Июня 2020 16:40</p>
              </div>
              <p className={classes.address}>Ул. Заварная 17, кв 71, Москва</p>
              <span className={classes.line}></span>
              <div className={classes.bottom_line}>
                <div className={classes.price}>
                  <p>Сумма:</p>
                  <p>880,00 ₽</p>
                </div>
                <button>Завершен</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryOfOrders;
