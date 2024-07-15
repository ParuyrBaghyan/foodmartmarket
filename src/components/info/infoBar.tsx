import React from "react";
import classes from "./infoBar.module.css";
import Image from "next/image";
import NavLink from "@/utils/Navlink/NavLink";
import { FaPen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

const InfoBar: React.FC = () => {
  return (
    <div className={classes.info_bar_container}>
      <span className={classes.user_icon_box}>
        {" "}
        <Image src="/assets/user-big.png" alt="user" width={120} height={120} />
        <div className={classes.user_icon_fon}>
          <FaPen />
          <FaTrash />
        </div>
      </span>
      <ul>
        <NavLink href="/personal-information">Персональная информация</NavLink>
        <NavLink href="/my-cards">Мои карты</NavLink>
        <NavLink href="/story-of-orders">История заказов</NavLink>
        <NavLink href="/club-card">Клубная карта</NavLink>
        <NavLink href="/address">Адреса</NavLink>
        <NavLink href="/settings">Настройки</NavLink>
      </ul>
    </div>
  );
};

export default InfoBar;

12;
