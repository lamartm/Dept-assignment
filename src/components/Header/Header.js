import React, { useEffect, useState } from "react";
import Transition from "react-transition-group/Transition";
import Overlay from "../Overlay/Overlay";
import styles from "./Header.module.css";

const Header = () => {
  const [position, setPosition] = useState(true);
  const [open, setOpen] = useState(false);
  const btnClass = [styles.btn, open === true ? styles.btnOpen : null];
  const wrapperClass = [
    styles.wrapper,
    open === true ? styles.wrapperOpen : null,
  ];

  if (open === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scroll = document.scrollingElement.scrollTop;
      if (scroll > 10) {
        setPosition(false);
      } else {
        setPosition(true);
      }
    });
  }, []);

  return (
    <header
      className={
        position === true || open === true
          ? styles.mainHeader
          : styles.secondHeader
      }
    >
      <div className={styles.container}>
        <div className={wrapperClass.join(" ")}>
          <a href="https://www.deptagency.com/nl-nl/">
            <h1>DEPT</h1>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className={btnClass.join(" ")}
          ></button>
          <Transition mountOnEnter unmountOnExit in={open} timeout={1000}>
            {(state) => <Overlay show={state} />}
          </Transition>
        </div>
      </div>
    </header>
  );
};

export default Header;
