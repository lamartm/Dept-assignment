import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Case.module.css";

AOS.init({
  once: true,
});

const Case = (props) => {
  return (
    <article
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.case}
    >
      <a href={props.link}>
        <img src={props.imgSrc} alt={props.imgAlt}></img>
        <h1>{props.title}</h1>
        <p className={styles.content}>{props.content}</p>
        <div>
          <span className="material-icons">chevron_right</span>
          <p>VIEW CASE</p>
        </div>
      </a>
    </article>
  );
};

export default Case;
