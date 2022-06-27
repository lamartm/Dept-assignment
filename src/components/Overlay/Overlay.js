import React from "react";
import ReactDOM from "react-dom";
import styles from "./Overlay.module.css";

const Module = (props) => {
  const classes = [
    styles.overlay,
    props.show === "entering"
      ? styles.overlayOpen
      : props.show === "exiting"
      ? styles.overlayClosed
      : null,
  ];
  return (
    <section className={classes.join(" ")}>
      <div className={styles.wrapper}>
        <div className={styles.spacing}></div>
        <article>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">WORK</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">SERVICES</a>
            </li>
            <li>
              <a href="/">PARTNERS</a>
            </li>
            <li>
              <a href="/">STORIES</a>
            </li>
            <li>
              <a href="/">VACANCIES</a>
            </li>
            <li>
              <a href="/">EVENTS</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
const Overlay = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Module show={props.show} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Overlay;
