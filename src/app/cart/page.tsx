"use client";

import React, { ReactElement } from "react";
import classes from "./page.module.css";
import CartProduct from "@/components/UI/cart-product/cartProduct";
import OrderBox from "@/components/order box/orderBox";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store.tsx";
import ChangeDelivery from "@/components/change-delivery/changeDelivery";
import ChangeAddress from "@/components/change-address/changeAddress";
import ConfirmOrder from "@/components/confirm-order/confirmOrder";

const Cart: React.FC = () => {
  const cartArray = useSelector((state: RootState) => state.count.cartArray);
  const openTimeOfDeliveryModalBool = useSelector(
    (state: RootState) => state.personal.openTimeOfDeliveryModalBool
  );

  const openAddressOfDeliveryModalBool = useSelector(
    (state: RootState) => state.personal.openAddressOfDeliveryModalBool
  );

  const orderBool = useSelector((state: RootState) => state.count.orderBool);

  let title:ReactElement;

  if (!cartArray.length) {
    title = <p>Корзина все еще пуста</p>;
  } else if (orderBool === true) {
    title = <p>Оформление заказа</p>;
  } else {
    title = <p>Корзина</p>;
  }

  const content = orderBool ? (
    <ConfirmOrder />
  ) : (
    <div className={classes.products_container}>
      {cartArray.map((product, i) => {
        return <CartProduct key={i} product={product} />;
      })}
    </div>
  );

  return (
    <div className={classes.cart_page}>
      {openTimeOfDeliveryModalBool && <ChangeDelivery />}
      {openAddressOfDeliveryModalBool && <ChangeAddress />}
      <div className={classes.cart_page_center}>
        <b>{title}</b>

        <div className={classes.main_container}>
          {content}
          <div className={classes.order}>
            <OrderBox />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
