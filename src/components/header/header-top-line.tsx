import React from "react"
import classes from "./header.module.css";
import Image from "next/image";

const HeaderTopLine:React.FC = () => {




   
    return <div className={classes.header_top_line}>
       <div className={classes.header_top_line_center}>
       <span className={classes.delivery_date}>
        <Image
        src='/assets/bag.svg'
        alt='bag'
        width={13}
        height={13}
      />
      <span>Ближайшая доставка <b>22 июня 11:00 - 11:30</b></span>
        </span>
        <span>
           <b> + 7 925 659-56-99</b>
        </span>
       </div>
    </div>
}



export default HeaderTopLine