"use client";
import React from "react";
import classes from "./page.module.css";
import { RootState } from "../GlobalRedux/store.tsx";
import { useSelector } from "react-redux";
import Product from "@/components/UI/product/product";

const ProductDetailsPage: React.FC = () => {
  const favouriteArray = useSelector(
    (state: RootState) => state.favourite.favouriteArray
  );

  const title = !favouriteArray.length ? (
    <p>Нет избранных продуктов</p>
  ) : (
    <b>Избранные</b>
  );

  return (
    <div className={classes.favourite_container}>
      <div className={classes.to_center}>
        <p>
          <b>{title}</b>
        </p>
        <div className={classes.favourite_products}>
          {favouriteArray.map((prod, i) => {
            return <Product key={i} product={prod} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
