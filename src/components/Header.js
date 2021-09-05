import React from "react";
import styles from "../styles/Header.module.scss";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className={styles.container}>
      <Navigation />
    </div>
  );
}

export default Header;
