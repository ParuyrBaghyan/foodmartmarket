import React from "react";
import classes from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { differFuncActions } from "@/app/GlobalRedux/differFunc";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { RootState } from "@/app/GlobalRedux/store";

const HeaderLeft: React.FC = () => {
  const openCatalogBool = useSelector(
    (state: RootState) => state.differFunc.openCatalogBool
  );
  const dispatch = useDispatch();
  function openCatalogHandler() {
    dispatch(differFuncActions.openCatalog());
    console.log(openCatalogBool)
  }

  return (
    <div className={classes.main_header_center_left}>
      <Link href="/">
        <b>Food Mart</b>
      </Link>
      <button className={classes.catalog} onClick={openCatalogHandler}>
        <span className={classes.four_cubes}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span>
          <b>Каталог</b>
        </span>
        <IoIosArrowDown
          className={`${
            openCatalogBool
              ? classes.catalog_arrow
              : classes.catalog_arrow_bottom
          }`}
        />
      </button>
    </div>
  );
};

export default HeaderLeft;
