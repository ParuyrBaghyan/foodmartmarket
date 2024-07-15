import React, { useRef, useState } from "react";
import classes from "./login.module.css";
import LoginCodeInputs from "./loginCodeInputs";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "@/app/GlobalRedux/loginSlice";
import { RootState } from "@/app/GlobalRedux/store";

const LoginCode: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fourthRef = useRef<HTMLInputElement>(null);
  const listOfRefs = [firstRef, secondRef, thirdRef, fourthRef];

  const phoneNumber = useSelector(
    (state: RootState) => state.login.phoneNumber
  );

  const checkedBool = useSelector(
    (state: RootState) => state.login.checkedBool
  );

  const verificationCode = useSelector(
    (state: RootState) => state.login.verificationCode
  );

  const verificationCodeToArray = Array.from(verificationCode!);

  const dispatch = useDispatch();

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
  }

  function closeLoginModalHandler() {
    dispatch(loginActions.closeLoginModal());
  }

  function logedInHandler() {
    dispatch(loginActions.logedIn());
  }

  function checkedHandler() {
    dispatch(loginActions.checked());
  }

  function fillInputsHandler() {
    for (let i = 0; i < listOfRefs.length; i++) {
      if (i < 3 && listOfRefs[i].current?.value !== "") {
        listOfRefs[i + 1].current?.focus();
      }
    }
  }

  function registrationHandler() {
    let matchCount = 0;
    verificationCodeToArray.map((item, i) => {
      if (item === listOfRefs[i].current?.value) {
        matchCount++;
      }
    });
    if (matchCount === 4 && checkedBool) {
      closeLoginModalHandler();
      logedInHandler();
    } else if (matchCount !== 4 && !checkedBool) {
      setError(
        "Вы не согласились с Условиями Использования и Политикой конфиденциальности и ваш код регистрации неверный"
      );
    } else if (matchCount !== 4) {
      setError("Неверный код регистрации");
    } else if (!checkedBool) {
      setError(
        "Вы не согласились с Условиями Использования и Политикой конфиденциальности"
      );
    }
  }

  return (
    <div className={classes.login_titles}>
      <span>
        {" "}
        <p>
          <b>Войдите в систему</b>
        </p>
        <span>Мы отправили код на номер {phoneNumber}</span>
      </span>
      <form action="" className={classes.login_titles} onSubmit={handleSubmit}>
        <span className={classes.code_inputs_container}>
          <input
            type="text"
            maxLength={1}
            className={classes.each_code_field}
            ref={firstRef}
            onChange={fillInputsHandler}
          />
          <input
            type="text"
            maxLength={1}
            className={classes.each_code_field}
            ref={secondRef}
            onChange={fillInputsHandler}
          />
          <input
            type="text"
            maxLength={1}
            className={classes.each_code_field}
            ref={thirdRef}
            onChange={fillInputsHandler}
          />
          <input
            type="text"
            maxLength={1}
            className={classes.each_code_field}
            ref={fourthRef}
            onChange={fillInputsHandler}
          />
        </span>

        <span className={classes.privacy_policy}>
          <label className={classes.container}>
            <input type="checkbox" onClick={checkedHandler} />
            <span className={classes.checkmark}></span>
          </label>
          <span>
            Я согласен с <b>Условиями Использования</b> и{" "}
            <b>Политикой конфиденциальности</b>
          </span>
        </span>
        <span className={classes.login_bottom}>
          {" "}
          <button className={classes.continue} onClick={registrationHandler}>
            Зарегистрироваться
          </button>
          {error && <span className={classes.error}>{error}</span>}
        </span>
      </form>
    </div>
  );
};

export default LoginCode;
