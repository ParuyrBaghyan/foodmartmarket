"use client";
import React, { useRef, useState } from "react";
import classes from "./newcard.module.css";
import { useDispatch, useSelector } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import { personalActions } from "@/app/GlobalRedux/personalSlice";
import Image from "next/image";

const NewCard: React.FC = () => {
  const cardNumber = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  function closeNewCardModalHandler() {
    dispatch(personalActions.closeNewCardModal());
  }

  function addNewCardHandler(numberInString: string) {
    if (numberInString.length === 16) {
        dispatch(personalActions.addNewCard(numberInString));
        dispatch(personalActions.closeNewCardModal());
    }else {
        setError("поле номера карта пусто или не соответствует требованиям");
      }
  }

  return (
    <div className={classes.new_card_container}>
      <OutsideClickHandler onOutsideClick={closeNewCardModalHandler}>
        <div className={classes.new_card}>
          <div className={classes.card}>
            <div className={classes.card_center}>
              <Image
                src="/assets/mastercard.png"
                alt="master card"
                width={50}
                height={30}
              />
              <p>3456 5767 3323 6768</p>
              <div className={classes.bottom_line}>
                <p>ANNA SMITH</p>
                <p>09/23</p>
              </div>
            </div>
          </div>

          <p>Добавить новую платежную карту</p>

          <div className={classes.inputes}>
            <span>
              <p>Номер карты</p>
              <input type="number" ref={cardNumber} />
              {error && <span>{error}</span>}
            </span>
            <span>
              <p>Имя владельца</p>
              <input type="text" />
            </span>
            <div>
              <span>
                <p>Срок действия</p>
                <input type="number" />
              </span>
              <span>
                <p>CVV</p>
                <input type="number" />
              </span>
            </div>
          </div>
          <button onClick={() => addNewCardHandler(cardNumber.current!.value)}>
            Добавить карту
          </button>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default NewCard;
