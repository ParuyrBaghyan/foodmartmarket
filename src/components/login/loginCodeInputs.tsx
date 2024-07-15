import React, { useRef } from "react";
import classes from "./login.module.css";



const LoginCodeInputs: React.FC = () => {
  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fourthRef = useRef<HTMLInputElement>(null);
  const listOfRefs = [firstRef, secondRef, thirdRef, fourthRef];



  function fillInputsHandler() {
    for (let i = 0; i < listOfRefs.length; i++) {
      if (i < 3 && listOfRefs[i].current?.value !== "") {
        listOfRefs[i + 1].current?.focus();
      }
    }
  }



  return (
    <span className={classes.code_inputs_container}>
      <input
        type="text"
        maxLength={1}
        className={classes.each_code_field}
        ref={firstRef}
        onChange={(e) => fillInputsHandler()}
      />
      <input
        type="text"
        maxLength={1}
        className={classes.each_code_field}
        ref={secondRef}
        onChange={(e) => fillInputsHandler()}
      />
      <input
        type="text"
        maxLength={1}
        className={classes.each_code_field}
        ref={thirdRef}
        onChange={(e) => fillInputsHandler()}
      />
      <input
        type="text"
        maxLength={1}
        className={classes.each_code_field}
        ref={fourthRef}
        onChange={(e) => fillInputsHandler()}
      />
    </span>
  );
};

export default LoginCodeInputs;