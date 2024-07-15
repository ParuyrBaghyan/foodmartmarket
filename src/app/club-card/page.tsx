import React from "react";
import classes from "./page.module.css";
import InfoBar from "@/components/info/infoBar";

const PersonalInfo: React.FC = () => {
  return (
    <div className={classes.info_container}>
      <div className={classes.center_container}>
        <InfoBar />
        <div className={classes.info_section_content}>
          <div className={classes.top_line}>
            <p>
              <b>Клубная карта</b>
            </p>
          </div>
          <div className={classes.content}>
            <div className={classes.card_box}>
              <div className={classes.card}>
                <h3>Food Mart</h3>
                <div className={classes.card_bottom}>
                  <span>
                    <p>Ваш баланс</p>
                    <p>798,00 ₽</p>
                  </span>
                  <span>1 2 3 4 4 7</span>
                </div>
              </div>
            </div>
            <div className={classes.transactions}>
              <p>История транзакций</p>
              <span>
                <div className={classes.transaction}>
                  <span>
                    <p>№254555</p>
                    <p>26 Мая 2020 17:54</p>
                  </span>
                  <p>+390 ₽</p>
                </div>
                <div className={classes.transaction}>
                  <span>
                    <p>№254555</p>
                    <p>26 Мая 2020 17:54</p>
                  </span>
                  <p className={classes.redColor}>-90 ₽</p>
                </div>
                <div className={classes.transaction}>
                  <span>
                    <p>№254555</p>
                    <p>26 Мая 2020 17:54</p>
                  </span>
                  <p>+390 ₽</p>
                </div>
                <div className={classes.transaction}>
                  <span>
                    <p>№254555</p>
                    <p>26 Мая 2020 17:54</p>
                  </span>
                  <p className={classes.redColor}>-150 ₽</p>
                </div>
                <div className={classes.transaction}>
                  <span>
                    <p>№254555</p>
                    <p>26 Мая 2020 17:54</p>
                  </span>
                  <p className={classes.redColor}>-290 ₽</p>
                </div>
                <div className={classes.transaction}>
                  <span>
                    <p>№254555</p>
                    <p>26 Мая 2020 17:54</p>
                  </span>
                  <p>+390 ₽</p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
