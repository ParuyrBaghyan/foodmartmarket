import React from "react";
import classes from "./cartProduct.module.css";
import Image from "next/image";
import { ProductModel } from "@/components/module/product";
import { countActions } from "@/app/GlobalRedux/count";
import { useDispatch } from "react-redux";
import { favouriteActions } from "@/app/GlobalRedux/favouriteSlice";

const CartProduct: React.FC<{ product: ProductModel }> = (props) => {
  const product = props.product;
  const dispatch = useDispatch();

  function decrementProductQuantityInCartHandler(product: ProductModel) {
    dispatch(countActions.decrementProductQuantityInCart(product));
  }

  function incrementProductQuantityInCartHandler(product: ProductModel) {
    dispatch(countActions.incrementProductQuantityInCart(product));
  }

  function removeFromCartHandler(product: ProductModel) {
    dispatch(countActions.removeFromCart(product));
  }
  
  function addToFavouriteHandler(product:ProductModel){
    dispatch(favouriteActions.addToFavourite(product))
  }
  return (
    <div className={classes.cart_product_container}>
      <div className={classes.top_line}>
        <p onClick={() => addToFavouriteHandler(product)}>
          <b>Добавить в избранное</b>
        </p>
        <p onClick={() => removeFromCartHandler(product)}>
          <b>Удалить</b>
        </p>
      </div>
      <div className={classes.content}>
        <span>
          {" "}
          <Image src={product!.image} alt="sdf" width={120} height={120} />
          <div className={classes.name_box}>
            <p>{product.weight} мл</p>
            <p>
              <b>{product.name}</b>
            </p>
          </div>
        </span>
        <div className={classes.price_box}>
          <del>
            <b>{product.lastPrice}</b>
          </del>
          <p>
            <b>{product.currPrice} ₽</b>
          </p>
        </div>
        <div className={classes.quantity_box}>
          <span>
            {" "}
            <button
              onClick={() => decrementProductQuantityInCartHandler(product)}
            >
              -
            </button>
            <span>{product.quantity} шт</span>
            <button
              onClick={() => incrementProductQuantityInCartHandler(product)}
            >
              +
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
