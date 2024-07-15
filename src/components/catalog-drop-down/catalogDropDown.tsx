import React, { useRef } from "react";
import classes from "./catalogDropDown.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import CatalogSections from "./catalogSections";
import CatalogSubSections from "./catalogSubSections";
import OutsideClickHandler from "react-outside-click-handler";
import { differFuncActions } from "@/app/GlobalRedux/differFunc";

const CatalogDropDown: React.FC<{ fixedClass: any }> = (props) => {
  const openCatalogBool = useSelector(
    (state: RootState) => state.differFunc.openCatalogBool
  );

  const openCatalog =
    openCatalogBool && classes.catalog_drop_down_container_open;

  const dispatch = useDispatch();
  function closeCatalogHandler() {
    dispatch(differFuncActions.closeCatalog());
  }

  return (
    <div className={classes.catalog_drop_down_container_wrapper}>
    <OutsideClickHandler onOutsideClick={closeCatalogHandler}>
      <div
        className={`${classes.catalog_drop_down_container} ${props.fixedClass} ${openCatalog}`}
      >
        <CatalogSections />
        <CatalogSubSections />
      </div>
    </OutsideClickHandler>
    </div>
  );
};

export default CatalogDropDown;
