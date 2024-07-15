import React from "react";
import classes from "./userDropDown.module.css";
import { RootState } from "@/app/GlobalRedux/store";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { differFuncActions } from "@/app/GlobalRedux/differFunc";
import { loginActions } from "@/app/GlobalRedux/loginSlice";

const UserDropDown: React.FC<{ fixedClass: any }> = (props) => {
  const openUserDropDownBool = useSelector(
    (state: RootState) => state.differFunc.openUserDropDownBool
  );
  const openSearch =
    openUserDropDownBool && classes.user_drop_down_container_open;

  const  dispatch =  useDispatch()

  function closeUserDD(){
    dispatch(differFuncActions.openUserDropDown())
  }

  function logOutHandler(){
    dispatch(loginActions.logedOut())
  }

  return (
    <ul
      className={`${classes.user_drop_down_container} ${props.fixedClass} ${openSearch}`}
    >
      <Link onClick={closeUserDD} href="/personal-information">Персональная информация</Link>
      <Link onClick={closeUserDD} href="/my-cards">Мои карты</Link>
      <Link onClick={closeUserDD} href="/story-of-orders">История заказов</Link>
      <Link onClick={closeUserDD} href="/club-card">Клубная карта</Link>
      <Link onClick={closeUserDD} href="/address">Адреса</Link>
      <Link onClick={closeUserDD} href="/settings">Настройки</Link>
      <Link onClick={() => {
        closeUserDD()
        logOutHandler()
      }} href="/">Выход</Link>
    </ul>
  );
};

export default UserDropDown;
