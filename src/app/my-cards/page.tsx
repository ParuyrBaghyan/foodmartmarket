"use client";
import React from "react";
import classes from "./page.module.css";
import InfoBar from "@/components/info/infoBar";
import Card from "@/components/UI/card/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import { personalActions } from "../GlobalRedux/personalSlice";
import NewCard from "@/components/new-card/newcard";

const MyCards: React.FC = () => {
  const cardNumberArray = useSelector(
    (state: RootState) => state.personal.cardNumberArray
  );

  const openNewCardModalBool = useSelector(
    (state: RootState) => state.personal.openNewCardModalBool
  );

  const dispatch = useDispatch()

  function openNewCardModalHandler(){
    dispatch(personalActions.openNewCardModal())
  }


  return (
    <div className={classes.info_container}>
      {openNewCardModalBool && <NewCard />}
      <div className={classes.center_container}>
        <InfoBar />
        <div className={classes.info_section_content}>
          <div className={classes.top_line}>
            <p>
              <b>Мои карты</b>
            </p>
            <button onClick={openNewCardModalHandler}>+ Добавить карту</button>
          </div>
          <div className={classes.content}>
            {cardNumberArray.map((card, i) => {
              return <Card key={i} card={card}/>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCards;
