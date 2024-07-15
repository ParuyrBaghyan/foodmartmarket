import React from "react";
import classes from "./header.module.css";
import HeaderRight from "./headerRight";
import HeaderLeft from "./headerLeft";

const MainHeader: React.FC<{ fixedClass: any }> = (props) => {
  return (
    <div className={`${classes.main_header} ${props.fixedClass}`}>
      <div className={classes.main_header_center}>
        <HeaderLeft />
        <HeaderRight />
      </div>
    </div>
  );
};

export default MainHeader;
