import React from "react";
import styles from "./Banner.module.css";
import Btn from "../UI/Btn";

const Banner = () => {
  return (
    <section className={styles.container}>
      <article>
        <h1>WORK</h1>
      </article>
      <div>
        <Btn>VIEW CASE</Btn>
      </div>
    </section>
  );
};

export default Banner;
