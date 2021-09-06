import React from "react";
import styles from "../styles/Header.module.scss";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.title}>
        <h1>A modern publishing platform</h1>
        <h4>Grow your audience and build your online brand</h4>
      </div>
      <div className={styles.call_to_action}>
        <button className={styles.btn_start}>Start for Free</button>
        <button className={styles.btn_learn}>Learn More</button>
      </div>
    </div>
  );
}

export default Header;
