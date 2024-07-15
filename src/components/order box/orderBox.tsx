"use client";
import React, { useEffect, useState } from "react";
import classes from "./orderBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { differFuncActions } from "@/app/GlobalRedux/differFunc";
import { RootState } from "@/app/GlobalRedux/store";
import { personalActions } from "@/app/GlobalRedux/personalSlice";
import { countActions } from "@/app/GlobalRedux/count";

const OrderBox: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const commonPrice = useSelector(
    (state: RootState) => state.count.commonPrice
  );

  const logedInBool = useSelector(
    (state: RootState) => state.login.logedInBool
  );

  const cartArray = useSelector((state: RootState) => state.count.cartArray);

  let orderBool = useSelector((state: RootState) => state.count.orderBool);

  const dispatch = useDispatch();

  const handleScroll = () => {
    dispatch(differFuncActions.fixWhileScrollOrderBox());
  };

  function openTimeOfDeliveryHandler() {
    dispatch(personalActions.openTimeOfDeliveryModal());
  }

  function openAddressOfDeliveryHandler() {
    dispatch(personalActions.openAddressOfDeliveryModal());
  }

  function orderHandler(logedInBool: boolean) {
    if (!cartArray.length && !logedInBool) {
      setError(
        "пожалуйста, зарегистрируйтесь на сайте и добавьте товары в корзину"
      );
    } else if (!cartArray.length) {
      setError("пожалуйста, добавьте товары в корзину");
    } else if (!logedInBool) {
      setError("пожалуйста, войдите на сайт");
    } else {
      setError("");
      dispatch(countActions.order(logedInBool));
    }
  }

  function confirmOrderHandler() {
    dispatch(countActions.confirmOrder());
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={classes.order_container}>
      <h3>Ваш заказ</h3>

      <div className={classes.box}>
        <div className={classes.title_line}>
          <p>Доставка</p>
          <p onClick={openTimeOfDeliveryHandler}>Изменить</p>
        </div>
        <span>
          <b>18 Янв 16:00 - 16:30</b>
        </span>
      </div>

      <div className={classes.box}>
        <div className={classes.title_line}>
          <p>Адрес доставки</p>
          <p onClick={openAddressOfDeliveryHandler}>Изменить</p>
        </div>
        <span>
          <b>ул Московская 29 кв 61</b>
        </span>
      </div>

      <div className={classes.amount}>
        <p>Сумма</p>
        <span>
          <span>
            <b>Цена:</b>
          </span>
          <span>
            <b>{commonPrice} P</b>
          </span>
        </span>
        <span>
          <span>
            <b>Доставка:</b>
          </span>
          <span>
            <b>500 P</b>
          </span>
        </span>
      </div>

      <span>
        <span>
          <b>Всего:</b>
        </span>
        <span>
          <b>{commonPrice + 500} P</b>
        </span>
      </span>

      {!orderBool ? (
        <button onClick={() => orderHandler(logedInBool)}>
          <b>Перейти к оформлению</b>
        </button>
      ) : (
        <button onClick={confirmOrderHandler}>
          <b>Оформить заказ</b>
        </button>
      )}
      {error && <span>{error}</span>}
    </div>
  );
};
export default OrderBox;
