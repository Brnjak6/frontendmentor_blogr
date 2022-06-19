import React from 'react';

import DarkArrow from '../svgs/DarkArrow';

function BurgerMenu() {
  return (
    <div className="burger_active_container">
      <ul className="menu">
        <li>
          <input type="radio" name="menuopt" id="drop1" />
          <label className="opener" htmlFor="drop1">
            <p>Product</p>
            <DarkArrow />
          </label>
          <label className="closer" htmlFor="dropclose">
            <p>Product</p>
            <DarkArrow />
          </label>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </li>
        <li>
          <input type="radio" name="menuopt" id="drop2" />
          <label className="opener" htmlFor="drop2">
            <p>Company</p>
            <DarkArrow />
          </label>
          <label className="closer" htmlFor="dropclose">
            <p>Company</p>
            <DarkArrow />
          </label>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </li>
        <li>
          <input type="radio" name="menuopt" id="drop3" />
          <label className="opener" htmlFor="drop3">
            <p>Connect</p>
            <DarkArrow />{' '}
          </label>
          <label className="closer" htmlFor="dropclose">
            <p>Connect</p>
            <DarkArrow />{' '}
          </label>
          <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
          <input type="radio" name="menuopt" id="dropclose" />
        </li>
      </ul>
      <section className="authorization">
        <div className="authorization_line"></div>
        <p className="burger_login">Login</p>
        <button className="burger_signup">Sign Up</button>
      </section>
    </div>
  );
}

export default BurgerMenu;
