import React from "react";
import styles from "./Btn.module.css";

const Btn = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};
export default Btn;
