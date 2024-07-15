"use client";
import React, { useEffect, useState } from "react";
import classes from "../../app/product-details/page.module.css";
import { RootState } from "../../app/GlobalRedux/store.tsx";
import { useDispatch, useSelector } from "react-redux";
import { differFuncActions } from "../../app/GlobalRedux/differFunc";
import { ProductModel } from "@/components/module/product";
import { countActions } from "../../app/GlobalRedux/count";

const Quantities: React.FC<{ product: ProductModel | null }> = (props) => {
  let product = props.product;

  const choseQuantityTypeBool = useSelector(
    (state: RootState) => state.differFunc.choseQuantityTypeBool
  );

  const quantity = useSelector((state: RootState) => state.count.quantity);

  const dispatch = useDispatch();

  function choseQuantityTypeHandler(bool: boolean) {
    dispatch(differFuncActions.choseQuantityType(bool));
  }

  function decrementProductQuantityHandler() {
    dispatch(countActions.decrementProductQuantity());
  }

  function incrementProductQuantityHandler() {
    dispatch(countActions.incrementProductQuantity());
  }

  function addToCartHandler(product: ProductModel | null) {
    dispatch(countActions.addToCart(product));
  }

  useEffect(() => {
    dispatch(countActions.loseProductQuantity());
  }, [product]);

  return (
    <span>
      <div className={classes.quantity_line}>
        <button
          className={`${!choseQuantityTypeBool ? classes.setBorder : ""}`}
          onClick={() => choseQuantityTypeHandler(false)}
        >
          <b>1 шт</b>
        </button>
        <button
          className={`${choseQuantityTypeBool ? classes.setBorder : ""}`}
          onClick={() => choseQuantityTypeHandler(true)}
        >
          <span>
            <b>16 հատ</b>
          </span>
          <span>1 տուպ</span>
        </button>
      </div>
      <div className={classes.add_to_cart}>
        <span>
          <button onClick={decrementProductQuantityHandler}>-</button>
          <span>{quantity} шт</span>
          <button onClick={incrementProductQuantityHandler}>+</button>
        </span>
        <button
          onClick={() => {
            addToCartHandler(product);
          }}
        >
          <b>В корзину</b>
        </button>
      </div>
    </span>
  );
};

export default Quantities;
