import React from "react";
import classes from "./searchDropDown.module.css";
import Product from "../UI/product/product";
import { dummyProducts } from "@/utils/listOfProds";

const Popular: React.FC = () => {
  return (
    <div className={classes.popular_container}>
      <p>
        <b>Популярные продукты</b>
      </p>
      <div className={classes.popular_products}>
      {dummyProducts.map((product , i) => {
        if(i >= 4){
          return
        }
          return <Product key={i} product={product}/>
        })}
      </div>
    </div>
  );
};

export default Popular;
