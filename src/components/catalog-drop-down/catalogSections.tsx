import React from "react";
import classes from "./catalogDropDown.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";

const CatalogSections: React.FC = (props) => {
 

  return (

    <div className={classes.catalog_section}>
      <ul>
        <li><b>Овощи, фрукты и зелень</b></li>
        <li><b>Молочные продукты</b></li>
        <li><b>Мясо и птица</b></li>
        <li><b>Колбасные изделия</b></li>
        <li><b>Рыба и морепродукты</b></li>
        <li><b>Замороженные продукты</b></li>
        <li><b>Соки и напитки</b></li>
        <li><b>Хлеб и выпечка</b></li>
        <li><b>Чай, кофе и какао</b></li>
        <li><b>Макароны и крупы</b></li>
        <li><b>Хлеб и выпечка</b></li>
        <li><b>Чай, кофе и какао</b></li>
        <li><b>Макароны и крупы</b></li>
      </ul>
    </div>
  );
};

export default CatalogSections;
