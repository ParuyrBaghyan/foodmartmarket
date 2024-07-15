import React, { useEffect, useState } from "react";
import classes from "./header.module.css";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { RootState } from "@/app/GlobalRedux/store";
import { differFuncActions } from "@/app/GlobalRedux/differFunc";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "@/app/GlobalRedux/loginSlice";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { searchActions } from "@/app/GlobalRedux/searchSlice";

const HeaderRight: React.FC = () => {

  const openSearchBool = useSelector(
    (state: RootState) => state.search.openSearchBool
  );

  const logedInBool = useSelector(
    (state: RootState) => state.login.logedInBool
  );

  const cartItemsquantity = useSelector(
    (state: RootState) => state.count.cartItemsquantity
  );

  const favouriteIdArray = useSelector(
    (state: RootState) => state.favourite.favouriteIdArray
  );

  const dispatch = useDispatch();

  function openSearchHandler() {
    dispatch(searchActions.openSearch());
  }

  function openUserDropDown() {
    dispatch(differFuncActions.openUserDropDown());
  }

  function searchHandler(value: string) {
    dispatch(searchActions.onSearch(value));
  }

  function openLoginModalHandler() {
    dispatch(loginActions.openLoginModal());

  }



  const largeClassForParent =
    openSearchBool && classes.main_header_center_right_large;
  const largeClassForChild = openSearchBool && classes.input_box_larg;
  let markHeart = favouriteIdArray.length ? true : false;

  let accountCondition = !logedInBool ? (
    <button className={classes.login} onClick={openLoginModalHandler}>
      <Image src="/assets/user.svg" alt="search icon" width={13} height={13} />
      <span>Войти</span>
    </button>
  ) : (
    <div className={classes.logedin} onClick={openUserDropDown}>
      <Image src="/assets/user.png" alt="user" width={60} height={60} />
      <IoIosArrowDown />
    </div>
  );

  return (
    <>
      <div
        className={`${classes.main_header_center_right} ${largeClassForParent}`}
      >
        <div
          className={`${classes.input_box} ${largeClassForChild}`}
          onClick={openSearchHandler}
        >
          <Image
            src="/assets/search.svg"
            alt="search icon"
            width={13}
            height={13}
          />
          <input
            type="text"
            placeholder="поиск продуктов"
            onChange={(e) => searchHandler(e.target.value)}
          />
        </div>
        <Link href="/favourites">
          <div className={classes.heart}>
            <CiHeart
              style={{ color: "black" }}
              className={`${markHeart && classes.hide_heart}`}
            />
            <FaHeart
              className={`${
                markHeart ? classes.redHeart : classes.hide_Redheart
              }`}
            />
          </div>
        </Link>
        <Link href="/cart" className={classes.basket}>
          <Image
            src="/assets/basket.svg"
            alt="search icon"
            width={23}
            height={23}
          />
          <span className={classes.quantity_of_basket}>
            {cartItemsquantity}
          </span>
        </Link>
        {accountCondition}
      </div>
    </>
  );
};

export default HeaderRight;
