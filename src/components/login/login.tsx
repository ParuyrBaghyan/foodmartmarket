import React from "react";
import classes from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "@/app/GlobalRedux/loginSlice";
import LoginNumber from "./loginNumber";
import LoginCode from "./loginCode";
import OutsideClickHandler from "react-outside-click-handler";
import { RootState } from "@/app/GlobalRedux/store";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const openCodeFieldBool = useSelector(
    (state: RootState) => state.login.openCodeFieldBool
  );
  function closeLoginModalHandler() {
    dispatch(loginActions.closeLoginModal());
  }

  return (
    <div id="modal" className={classes.login_modal_container}>
      <OutsideClickHandler onOutsideClick={closeLoginModalHandler}>
        <div className={classes.login_div}>
          <div className={classes.close_btn_line}>
            {" "}
            <div className={classes.close} onClick={closeLoginModalHandler}>
              <span></span>
              <span></span>
            </div>
          </div>
          <div></div>
          <h1>Food Mart</h1>
          {openCodeFieldBool ? <LoginCode /> : <LoginNumber />}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Login;
