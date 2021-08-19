import React from "react";
import dummyBrands from "../../dummyBrands";
import styles from "./Brands.module.css";

const Brands = () => {
  const logo = dummyBrands.map((d) => {
    return <img src={d.link} alt={d.alt} key={Math.random().toString()}></img>;
  });

  return (
    <section className={styles.brandContainer}>
      <article>
        <h1>CLIENTS</h1>
        <p>
          We value a great working relationship with our clients above else.
          It's why they often come to our parties. It's also why we're able to
          challenge and inspire them to reach for the stars.
        </p>
        <span>{logo}</span>
      </article>
    </section>
  );
};

export default Brands;
