import React from "react";
import styles from "../styles/Mobile.module.scss";
import Circles from "../svgs/Circles";
import MobilePhone from "../svgs/MobilePhone";

function Mobile() {
  return (
    <div className={styles.container}>
      <MobilePhone />

      <section className={styles.left}>
        <Circles />
      </section>
      <section className={styles.right}>
        <h1>State of the Art Infrastructure</h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive
        </p>
      </section>
    </div>
  );
}

export default Mobile;
