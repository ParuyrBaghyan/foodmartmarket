"use client";
import React from "react";
import classes from "../../app/product-details/page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { RootState } from "@/app/GlobalRedux/store";
import { favouriteActions } from "@/app/GlobalRedux/favouriteSlice";
import { ProductModel } from "../module/product";

const TopDetails: React.FC<{ product: ProductModel }> = (props) => {
  const product = props.product;

  const favouriteIdArray = useSelector(
    (state: RootState) => state.favourite.favouriteIdArray
  );

  const dispatch = useDispatch();
  let showHeart = favouriteIdArray.includes(product.id) ? true : false;

  function turnHeartHandler(product: ProductModel) {
    if(showHeart){
      dispatch(favouriteActions.removeFromFavourite(product));
    }else{
      dispatch(favouriteActions.addToFavourite(product));
    }
  }


  return (
    <span>
      <div className={classes.heart_line}>
        <div
          className={classes.heart}
          onClick={() => turnHeartHandler(product)}
        >
          <CiHeart  className={`${showHeart && classes.hide_heart}`} />
          <FaHeart 
            className={`${
              showHeart ? classes.redHeart : classes.hide_Redheart
            }`}
          />
        </div>
        <p>Добавить в избранные</p>
      </div>
      <p className={classes.name}>
        <b>{product?.name}</b>
      </p>
      <div className={classes.curr_last_prices}>
        <p>
          <b>{product?.currPrice}₽</b>
        </p>
        <del>{product?.lastPrice}₽</del>
      </div>
    </span>
  );
};

export default TopDetails;
