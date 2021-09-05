import React from "react";
import styles from "../styles/Header.module.scss";
import LogoSvg from "../svgs/Logo";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <LogoSvg />
    </div>
  );
}

export default Navigation;
