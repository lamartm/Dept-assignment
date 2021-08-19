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
              <a href="https://www.deptagency.com/nl-nl/">HOME</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/nl-nl/">WORK</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/nl-nl/">ABOUT</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/nl-nl/">SERVICES</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/nl-nl/">PARTNERS</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/nl-nl/">STORIES</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/nl-nl/">VACANCIES</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/nl-nl/">EVENTS</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/nl-nl/">CONTACT</a>
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
