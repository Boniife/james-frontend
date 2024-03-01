import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-main">
        <div className="footer-link-head">
          <a
            href="https://www.linkedin.com/in/ifeanyi-anyanwu-255476273/"
            className="footer-link"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer-p-main">
          <p className="footer-p">All Rights Reserved 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
