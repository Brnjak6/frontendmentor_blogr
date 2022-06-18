import React from 'react';
import styles from '../styles/Header.module.scss';
import LogoSvg from '../svgs/Logo';
import LightArrow from '../svgs/LightArrow';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <section className={styles.left_side}>
        <LogoSvg />
        <div className={styles.drop_items}>
          <div className={styles.drop_item}>
            <p>Product</p>
            <LightArrow />
          </div>
          <div className={styles.drop_item}>
            <p>Company</p>
            <LightArrow />
          </div>
          <div className={styles.drop_item}>
            <p>Connect</p>
            <LightArrow />
          </div>
        </div>
      </section>
      <section className={styles.right_side}>
        <p style={{ marginRight: '2rem', cursor: 'pointer' }}>Login</p>
        <button>Sign Up</button>
      </section>
      <div className={styles.burger_menu}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </div>
  );
}

export default Navigation;
