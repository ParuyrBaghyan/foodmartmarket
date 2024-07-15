import React, { useImperativeHandle, useRef } from "react";
import classes from "./login.module.css";

const Login: React.FC = () => {
  return <dialog id="modal" className={classes.login_modal_container}></dialog>;
};

export default Login;
