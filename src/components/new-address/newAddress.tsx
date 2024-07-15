"use client";
import React from "react";
import classes from "./newAddress.module.css";
import { useDispatch } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import { personalActions } from "@/app/GlobalRedux/personalSlice";

const NewAddress: React.FC = () => {
  const dispatch = useDispatch();

  function closeNewAddressModalHandler() {
    dispatch(personalActions.closeNewAddressModal());
  }

  return (
    <div className={classes.new_address_container}>
      <OutsideClickHandler onOutsideClick={closeNewAddressModalHandler}>
        <div className={classes.new_address}>
          <div className={classes.address_inputes}>
            <p>Новый адрес доставки</p>

            <div className={classes.inputes}>
              <span>
                <p>Улица</p>
                <input type="text" />
              </span>

              <div>
                <span>
                  <p>Дом</p>
                  <input type="number" />
                </span>
                <span>
                  <p>Строение</p>
                  <input type="number" />
                </span>
              </div>

              <div>
                <span>
                  <p>Корпус</p>
                  <input type="number" />
                </span>
                <span>
                  <p>Подъезд</p>
                  <input type="number" />
                </span>
              </div>

              <div>
                <span>
                  <p>Этаж</p>
                  <input type="number" />
                </span>
                <span>
                  <p>Квартира</p>
                  <input type="number" />
                </span>
              </div>

              <span>
                <p>Комментарий курьеру</p>
                <input type="text" />
              </span>
            </div>
            <button>Добавить адрес</button>
          </div>
          <div className={classes.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1524.022598689558!2d44.51472604816519!3d40.18580758638699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1720604264024!5m2!1sru!2sam"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default NewAddress;
