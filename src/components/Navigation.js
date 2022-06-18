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
          <div className="drop_item">
            <p>Product</p>
            <LightArrow />
            <div className="drop_menu">
              <ul>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Integrations</li>
              </ul>
            </div>
          </div>
          <div className="drop_item">
            <p>Company</p>
            <LightArrow />
            <div className="drop_menu">
              <ul>
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="drop_item">
            <p>Connect</p>
            <LightArrow />
            <div className="drop_menu">
              <ul>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
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
