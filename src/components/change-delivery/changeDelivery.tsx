import React from "react";
import classes from "./changeDelivery.module.css";
import { useDispatch } from "react-redux";
import { personalActions } from "@/app/GlobalRedux/personalSlice";

const ChangeDelivery: React.FC = () => {
  const dispatch = useDispatch();

  function closeTimeOfDeliveryModalHandler() {
    dispatch(personalActions.closeTimeOfDeliveryModal());
  }

  return (
    <div className={classes.time_delivery_modal_container}>
      <div className={classes.time_delivery_div}>
        <p>Выберите время доставки</p>
        <div className={classes.data_field}>
          <span>
            <p>День заказа</p>
            <input list="days" name="browser" id="day" />
            <datalist id="days">
              <option value="22 Января" />
              <option value="23 Января" />
              <option value="25 Января" />
              <option value="27 Января" />
              <option value="29 Января" />
            </datalist>
          </span>
          <span>
            <p>Времч заказа</p>

            <input list="speeds" name="browser" id="speed" />
            <datalist id="speeds">
              <option value="Так скоро, как возможно" />
              <option value="Так скоро, как возможно" />
              <option value="Так скоро, как возможно" />
              <option value="Так скоро, как возможно" />
            </datalist>
          </span>
        </div>
        <div className={classes.buttons}>
          <button onClick={closeTimeOfDeliveryModalHandler}>Отменить</button>
          <button onClick={closeTimeOfDeliveryModalHandler}>Выбрвть</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeDelivery;
