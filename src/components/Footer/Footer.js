import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <article>
            <h1>RAY</h1>
            <ul>
              <li>WORK</li>
              <li>SERVICES</li>
              <li>STORIES</li>
              <li>ABOUT</li>
              <li>CAREERS</li>
              <li>CONTACT</li>
            </ul>
            <ul>
              <li>
                <img src="./images/facebook.svg" alt="facebook"></img>
              </li>
              <li>
                <img src="./images/twitter.svg" alt="twitter"></img>
              </li>
              <li>
                <img src="./images/instagram.svg" alt="instagram"></img>
              </li>
            </ul>
          </article>
          <article>
            <ul>
              <li>Term and conditions</li>
            </ul>
            <p>2022 Ray Productions</p>
          </article>
        </div>
        <button onClick={scrollTop}>
          <img src="./images/up-arrow.svg" alt="arrow"></img>
          <p>TOP</p>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
