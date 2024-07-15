"use client";

import React from "react";
import classes from "./confirmOrder.module.css";


const ConfirmOrder: React.FC = () => {
  return (
    <div className={classes.confirm_container}>
        <p><b>Информация о получателе</b></p>
        <div className={classes.data_field}>
          <span>
            <p>Имя получателя</p>
            <input   type="text" />
          </span>
          <span>
            <p>Номер телефона</p>

            <input type="number" />
          
          </span>
        </div>
    </div>
  );
};
export default ConfirmOrder;
