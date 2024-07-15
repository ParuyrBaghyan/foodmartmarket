import React from "react";
import classes from "./page.module.css";
import InfoBar from "@/components/info/infoBar";

const Address: React.FC = () => {
  return (
    <div className={classes.info_container}>
      <div className={classes.center_container}>
        <InfoBar />
        <div className={classes.info_section_content}>
          <div className={classes.top_line}>
            <p>
              <b>Настройки</b>
            </p>
          </div>
          <div className={classes.content}>
            <div className={classes.setting}>
              <span>
                <p>Обновление заказа</p>
                <label className={classes.switch}>
                  <input type="checkbox" id="toggleSwitch" />
                  <span className={classes.slider}></span>
                </label>
              </span>
              <span>Получать уведомления об рбновлении статуса заказа</span>
            </div>
            <div className={classes.setting}>
              <span>
                <p>Email обновления</p>
                <label className={classes.switch}>
                  <input type="checkbox" id="toggleSwitch" />
                  <span className={classes.slider}></span>
                </label>
              </span>
              <span>
                Получать уведомления по электронной почте об изменении статуса
                заказа, скидках и подтверждении заказа
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
