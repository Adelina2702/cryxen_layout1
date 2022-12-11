import React, { useState } from "react";
import "./index.css";
import fill from '../../img/fill.svg'
import mastercard from '../../img/mastercard.svg'

export default function NavBar() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src={fill} alt="" />
          <img src={mastercard} alt="" />
        <div className="links1">
          <li className="link1" >
              <a href="/">Personal</a>
            </li>

            <li>
              <a href="/">Business</a>
            </li>
        </div>
        </div>

        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li>
              <a href="/">Zenefits</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li className="services">
              <a href="/">Pricing</a>

              <ul className="dropdown">
                <li>
                  <a href="/">Dropdown 1 </a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
              </ul>
            </li>
            <li>
            <button className="btn">Get app</button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
