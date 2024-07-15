import React from "react";
import Greating from "@/components/greating/greating";
import LineOfProducts from "@/components/line-of-products/lineOfProducts";
import classes from "./page.module.css";
import AboutPoints from "@/components/aboutPoint/aboutPoints";
import MobileApp from "@/components/mobile-app/mobileApp";
import { dummyProducts } from "@/utils/listOfProds";


const  Home:React.FC = () => {
  return (
    <div className={classes.home_page}>
      <Greating />
      <LineOfProducts title="У нас новые скидки" productList={dummyProducts}  />
      <AboutPoints />
      <LineOfProducts title="Популярные товары" productList={dummyProducts}/>
      <MobileApp />
      <LineOfProducts title="Мы рекомендуем" productList={dummyProducts}/>
    </div>
  );
}
export default Home