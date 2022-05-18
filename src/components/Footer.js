import React from 'react';
import Logo from '../svgs/Logo';
import styles from '../styles/Footer.module.scss';
function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.product}>
        <h4>Product</h4>
        <ul>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div className={styles.company}>
        <h4>Company</h4>
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className={styles.connect}>
        <h4>Connect</h4>
        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
