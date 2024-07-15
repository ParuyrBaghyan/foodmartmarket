"use client";

import React from "react";
import classes from "./product.module.css";
import Image from "next/image";
import { ProductModel } from "@/components/module/product";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { differFuncActions } from "@/app/GlobalRedux/differFunc";
import { FaHeart } from "react-icons/fa";
import { RootState } from "@/app/GlobalRedux/store";
import { favouriteActions } from "@/app/GlobalRedux/favouriteSlice";
import { searchActions } from "@/app/GlobalRedux/searchSlice";
const Product: React.FC<{ product: ProductModel }> = (props) => {
  const product = props.product;
  
  const favouriteIdArray = useSelector((state: RootState) => state.favourite.favouriteIdArray)
  let showHeart = favouriteIdArray.includes(product.id) ? true : false

  const dispatch = useDispatch();
  
  function passProductHandler() {
    dispatch(differFuncActions.passProduct(product));
  }

  function productActionHandler() {
    dispatch(searchActions.closeSearch());
  }
  
  function removeFromFavouriteHandler(product :ProductModel){
    dispatch(favouriteActions.removeFromFavourite(product))
  }

  return (
    <div
      className={classes.main_product_container}
      onClick={productActionHandler}
    >
      {showHeart && <FaHeart className={classes.redHeart} onClick={() => removeFromFavouriteHandler(product)}/>}
      <div className={classes.image_box}>
        <Image src={product.image} alt={product.name} width={100} height={13} />
      </div>
      <span className={classes.product_content}>
        <span className={classes.content_top}>
          <span>{product.weight}мл</span>
          <span>
            <b>{product.name}</b>
          </span>
        </span>
        <span>
          <span className={classes.content_bottom}>
            <span>
              <del>{product.lastPrice}</del>
            </span>
            <span>
              <b>{product.currPrice}₽</b>
            </span>
          </span>
          <div className={classes.details}>
            <span></span>
            <span></span>
          </div>
        </span>
      </span>
      <Link
        href="/product-details"
        className={classes.product_link}
        onClick={passProductHandler}
      ></Link>
    </div>
  );
};
export default Product;
