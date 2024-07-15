import React from "react";
import classes from "./changeAddress.module.css";
import { useDispatch } from "react-redux";
import { personalActions } from "@/app/GlobalRedux/personalSlice";
import Image from "next/image";
const ChangeAddress: React.FC = () => {
  const dispatch = useDispatch();

  function closeAddressOfDeliveryModalHandler() {
    dispatch(personalActions.closeAddressOfDeliveryModal());
  }

  return (
    <div className={classes.address_delivery_modal_container}>
      <div className={classes.address_delivery_div}>
        <div className={classes.top_line}>
          <p>Выберите время доставки</p>
          <button>+ Новый адрес</button>
        </div>
        <div className={classes.addresses}>
          <div className={classes.card_box}>
            <span>
              <div className={classes.place}>
                <Image
                  src="/assets/location.png"
                  alt="location icon"
                  width={15}
                  height={18}
                />
                <p>Работа</p>
              </div>
            </span>
            <p>Ул. Заварная 17, кв 71, Москва</p>
           
          </div>
          <div className={classes.card_box}>
            <span>
              <div className={classes.place}>
                <Image
                  src="/assets/location.png"
                  alt="location icon"
                  width={15}
                  height={18}
                />
                <p>Работа</p>
              </div>
            </span>
            <p>Ул. Заварная 17, кв 71, Москва</p>
           
          </div>
        </div>
        <div className={classes.buttons}>
          <button onClick={closeAddressOfDeliveryModalHandler}>Отменить</button>
          <button onClick={closeAddressOfDeliveryModalHandler}>Выбрвть</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeAddress;
