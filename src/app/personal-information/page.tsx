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
              <b>Персональная информация</b>
            </p>
          </div>
          <div className={classes.content}>
           <span>
           <label htmlFor="name">
              <p>Имя</p>
              <input type="text" />
            </label>
            <label htmlFor="surname">
              <p>Фамилия</p>
              <input type="text" />
            </label>
            <label htmlFor="email">
              <p>Эл. почта</p>
              <input type="text" />
            </label>
            <label htmlFor="data">
              <p>Дата рождения</p>
              <input type="text" />
            </label>
           </span>
            <button>Сохранить изменения</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
