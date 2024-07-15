"use client";
import React from "react";
import classes from "./page.module.css";
import InfoBar from "@/components/info/infoBar";
import Image from "next/image";
import NewAddress from "@/components/new-address/newAddress";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store.tsx";
import { personalActions } from "../GlobalRedux/personalSlice";

const Address: React.FC = () => {
  const openNewAddressModalBool = useSelector(
    (state: RootState) => state.personal.openNewAddressModalBool
  );

  const dispatch = useDispatch()

  function openNewAddressModalHandler(){
    dispatch(personalActions.openNewAddressModal())
  }

  return (
    <div className={classes.info_container}>
      {openNewAddressModalBool && <NewAddress />}
      <div className={classes.center_container}>
        <InfoBar />
        <div className={classes.info_section_content}>
          <div className={classes.top_line}>
            <p>
              <b>История заказов</b>
            </p>
            <button onClick={openNewAddressModalHandler}>+ Новый адрес</button>
          </div>
          <div className={classes.content}>
            <div className={classes.card_box}>
              <span>
                <div className={classes.place}>
                  <Image
                    src="/assets/location.png"
                    alt="location icon"
                    width={15}
                    height={18}
                  />
                  <p>Дом</p>
                </div>
              </span>
              <p>Ул. Заварная 17, кв 71, Москва</p>
              <div className={classes.bottom_line}>
                <p className={classes.default}>Редактировать</p>
                <p className={classes.delete}>Удалить</p>
              </div>
            </div>
            <div className={classes.card_box}>
              <span>
                <div className={classes.place}>
                  <Image
                    src="/assets/location.png"
                    alt="location icon"
                    width={15}
                    height={18}
                  />
                  <p>Работа</p>
                </div>
              </span>
              <p>Ул. Заварная 17, кв 71, Москва</p>
              <div className={classes.bottom_line}>
                <p className={classes.default}>Редактировать</p>
                <p className={classes.delete}>Удалить</p>
              </div>
            </div>
            <div className={classes.card_box}>
              <span>
                <div className={classes.place}>
                  <Image
                    src="/assets/location.png"
                    alt="location icon"
                    width={15}
                    height={18}
                  />
                  <p>На дачу</p>
                </div>
              </span>
              <p>Ул. Заварная 17, кв 71, Москва</p>
              <div className={classes.bottom_line}>
                <p className={classes.default}>Редактировать</p>
                <p className={classes.delete}>Удалить</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
