import React, { useRef, useState } from "react";
import classes from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "@/app/GlobalRedux/loginSlice";
import { RootState } from "@/app/GlobalRedux/store";

const LoginNumber: React.FC = () => {
  const dispatch = useDispatch();
  const numberRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const codeArray = useSelector((state: RootState) => state.login.codeArray);
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    openCodeFieldHandler(numberRef.current?.value);
  }
  const verificationCode = useSelector(
    (state: RootState) => state.login.verificationCode
  );
  function openCodeFieldHandler(phoneNumberInString: string | undefined) {
 
    
    if (phoneNumberInString && phoneNumberInString.trim() !== "") {
      const number = +phoneNumberInString;
      dispatch(loginActions.openCodeField(number));
      alert("Your verification code is: " + verificationCode);
    } else {
      setError("поле номера телефона пустое или не соответствует требованиям");
    }
  }

  function randomCodeGenerateHandler() {
    dispatch(loginActions.codeGenerator());
  }

  return (
    <div className={classes.login_titles}>
      <span>
        {" "}
        <p>
          <b>Войдите в систему</b>
        </p>
        <span>Пожалуйста введите номер телефона</span>
      </span>
      <form action="" className={classes.login_titles} onSubmit={handleSubmit}>
        <div className={classes.input_field}>
          {" "}
          <input
            type="number"
            className={classes.number_field}
            placeholder="Мобильный телефон"
            ref={numberRef}
            onChange={() => {
              setError("");
            }}
          />
          {error && <span>{error}</span>}
        </div>
        <button
          className={classes.continue}
          onClick={() => {
            randomCodeGenerateHandler();
          }}
        >
          Продолжить
        </button>
      </form>
    </div>
  );
};

export default LoginNumber;
