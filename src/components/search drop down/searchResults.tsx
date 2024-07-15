import React from "react";
import classes from "./searchDropDown.module.css";
import Product from "../UI/product/product";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";

const SearchResults: React.FC = () => {
  const foundProductsArray = useSelector(
    (state: RootState) => state.search.foundProductsArray
  );

  return (
    <div className={classes.result_container}>
      <p>
        <b>Результаты поиска</b>
      </p>
      <div className={classes.result_products}>
        {foundProductsArray.map((product, i) => {
          return <Product key={i} product={product} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
