import React from "react";
import styles from "./Backdrop.module.scss";

const Backdrop = (props) => (
  <div className={styles.Backdrop} onClick={props.onClick} />
);

export default Backdrop;
