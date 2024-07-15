import React, { useState } from "react";
import classes from "../../../app/my-cards/page.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { personalActions } from "@/app/GlobalRedux/personalSlice";

const Card: React.FC<{ card: string }> = (props) => {
  const card = props.card;

  const dispatch = useDispatch();

  function removeCardHandler(cardNumber: string) {
    dispatch(personalActions.removeCard(cardNumber));
  }

  function maskCardNumber(cardNumber: string): string {
    const maskedPart = "*".repeat(12);
    const visiblePart = cardNumber.slice(12, 16);

    return maskedPart + visiblePart;
  }

  const maskedCardNumber = maskCardNumber(card);

  return (
    <div className={classes.card_box}>
      <span>
        <div className={classes.card_type}>
          <Image src="/assets/visa.png" alt="visa" width={45} height={30} />
        </div>
        <span className={classes.card_number}>{maskedCardNumber}</span>
      </span>
      <div className={classes.bottom_line}>
        <p className={classes.default}>Сделать по умолчанию</p>
        <p className={classes.delete} onClick={() => removeCardHandler(card)}>
          Удалить
        </p>
      </div>
    </div>
  );
};

export default Card;
