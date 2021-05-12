import React from "react";
import s from "./Preloader.module.scss";
import SpinnerEclipse from "../../../assets/img/SpinnerEclipse.gif";

const Preloader = () => {
  return <img className={s.spinner} src={SpinnerEclipse}/>
}

export default Preloader