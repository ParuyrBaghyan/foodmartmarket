import React from "react";
import classes from "./catalogDropDown.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import Image from "next/image";

const CatalogSubSections: React.FC = (props) => {
  // const openCatalogBool = useSelector(
  //   (state: RootState) => state.differFunc.openCatalogBool
  // );

  return (
    <div className={classes.catalog_sub_section}>
      <div className={classes.catalog_sub_section_top}>
        <span><b>Овощи</b></span>
        <span><b>Ягоды</b></span>
        <span><b>Грибы</b></span>
        <span><b>Зелень</b></span>
        <span><b>Фрукты</b></span>
        <span><b>Экзотические фрукты</b></span>
      </div>
      <div className={classes.catalog_sub_section_bottom}>
        <Image src='/assets/vegetables.png' alt="vegetables" width={140} height={140} />
        <Image src='/assets/fruits.png' alt="fruits" width={140} height={140} />
        <Image src='/assets/berries.png' alt="berries" width={140} height={140} />
        <Image src='/assets/greenery.png' alt="greenery" width={140} height={140} />
        <Image src='/assets/mushrooms.png' alt="mushrooms" width={140} height={140} />
      </div>
    </div>
  );
};

export default CatalogSubSections;
