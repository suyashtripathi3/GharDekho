import React from "react";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <Link to="/">
            <img src="/GharDekho2.png" alt="" width={180} />
          </Link>

          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText">
            Shanti Nagar By Pass Road, Ghaziabad, UP
          </span>
          <div className="flexCenter f-menu">
            <NavLink to="/properties">
              <span>Properties</span>
            </NavLink>
            {/* <span>Services</span> */}
            <a href="mailto:ybrahman51@gmail.com">
              <span>Email Me</span>
            </a>
            <span>Products</span>
            <NavLink to="/contactUs">
              <span>Contact Us</span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
