"use client";
import React from "react";
import classes from "../../app/product-details/page.module.css";

import { useSelector } from "react-redux";

import Image from "next/image";
import { RootState } from "@/app/GlobalRedux/store";

const Description: React.FC = () => {
  const product = useSelector((state: RootState) => state.differFunc.product);

  return (
    <div className={classes.description_container}>
      <div className={classes.description}>
        <p>
          <b>Описание товара</b>
        </p>
        <span>
         {product?.description}
        </span>
      </div>
      <div className={classes.brend}>
        <p>
          <b>Бренд</b>
        </p>
        <Image src="/assets/brend.png" alt="brend" width={80} height={80} />
      </div>
    </div>
  );
};

export default Description;
