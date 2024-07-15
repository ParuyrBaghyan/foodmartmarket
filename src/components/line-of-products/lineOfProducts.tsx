import React from "react";
import classes from "./lineOfProducts.module.css";
import Product from "../UI/product/product";
import { ProductModel } from "../module/product";

const LineOfProducts: React.FC<{
    title: string;
    productList: ProductModel[]
  }> = (props) => {

  const productList = props.productList 

  return (
    <div className={classes.main_container}>
      <p><b>{props.title}</b></p>
      <div className={classes.products_container}>
        {productList.map((product , i) => {
          return <Product key={i} product={product}/>
        })}
        
      </div>
    </div>
  );
};

export default LineOfProducts;

