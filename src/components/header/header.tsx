"use client";
import React from "react";
import HeaderTopLine from "./header-top-line";
import MainHeader from "./main-header";
import classes from "./header.module.css";
import CatalogDropDown from "../catalog-drop-down/catalogDropDown";
import { useDispatch, useSelector } from "react-redux";
import { differFuncActions } from "@/app/GlobalRedux/differFunc";
import { RootState } from "@/app/GlobalRedux/store";
import SearchDropDown from "../search drop down/searchDropDown";
import Login from "@/components/login/login";
import UserDropDown from "../user-drop-down/userDropDown";

const Header: React.FC = () => {
  const fixedHeader = useSelector(
    (state: RootState) => state.differFunc.fixedHeader
  );
  const dispatch = useDispatch();

  const handleScroll = () => {
    dispatch(differFuncActions.fixWhileScrollHeader());
  };
  const openLoginModalBool = useSelector(
    (state: RootState) => state.login.openLoginModalBool
  );

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={classes.header}>
      {openLoginModalBool && <Login />}
      <HeaderTopLine />
      <div
        style={{
          height: fixedHeader ? "89px" : "0px",
        }}
      ></div>
      <MainHeader fixedClass={fixedHeader ? classes.main_header_fixed : ""} />
      <CatalogDropDown
        fixedClass={fixedHeader ? classes.drop_down_container_move_top : ""}
      />
      <SearchDropDown
        fixedClass={fixedHeader ? classes.drop_down_container_move_top : ""}
      />
      <UserDropDown
        fixedClass={fixedHeader ? classes.drop_down_container_move_top : ""}
      />
    </div>
  );
};

export default Header;
