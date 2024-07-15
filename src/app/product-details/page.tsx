"use client";
import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { RootState } from "../GlobalRedux/store.tsx";
import { useSelector } from "react-redux";
import TopDetails from "@/components/prod-details/top-details";
import Quantities from "../../components/prod-details/quantities";
import LineOfProducts from "@/components/line-of-products/lineOfProducts";
import { dummyProducts } from "@/utils/listOfProds";
import Description from "@/components/prod-details/description";

const ProductDetailsPage: React.FC = () => {
  const product = useSelector((state: RootState) => state.differFunc.product);

  return (
    <>
      <div className={classes.to_center}>
        <div className={classes.main_product_details_container}>
          <div className={classes.section_names}>
            <p>Главная</p>/<p>Соки и напитки</p>/
            <p>
              {" "}
              <b>Фруктовые соки</b>
            </p>
          </div>
          <div className={classes.details_content}>
            <div className={classes.image_box}>
              <Image
                src={product?.image}
                alt="mango"
                width={380}
                height={400}
              />
            </div>
            <div className={classes.content}>
              <TopDetails product={product}/>
              <Quantities product={product}/>
            </div>
          </div>
          <Description />
        </div>
      <LineOfProducts title="Рекомендуемые товары" productList={dummyProducts}/>
      </div>
    </>
  );
};

export default ProductDetailsPage;
