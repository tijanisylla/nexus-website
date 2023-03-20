import React from "react";
import "./Footer.css";
const Footer: React.FC = () => {
  const yeareDate: Date = new Date();
  const thisYear: number = yeareDate.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="row">
          <div className="footer-col">
            <h4>location</h4>
            <ul>
              <li>
                <i className="bx bx-mail-send"></i>
                <a href="/#">Jwats229@gmail.com </a>
              </li>
              <li>
                <i className="bx bx-phone-call"></i>
                <a href="/#">+1 (312) 509-0626</a>
              </li>
              <li>
                <i className="bx bx-map"></i>
                <a href="/#">123 Street, Chicago,IL USA</a>
              </li>
              <li>
                <i className="bx bx-time"></i>
                <a href="/#">All week: 9:00 - 18:00</a>
              </li>
              <li>
                <i className="bx bx-time"></i>
                <a href="/#">24/7 Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="/#">Home</a>
              </li>

              <li>
                <a href="/#">Services</a>
              </li>

              <li>
                <a href="/#"> AI Features</a>
              </li>

              <li>
                <a href="/#">About us</a>
              </li>

              <li>
                <a href="/#">Careers</a>
              </li>

              <li>
                <a href="/#">Contact us </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get help</h4>
            <ul>
              <li>
                <a href="/#">FAQ</a>
              </li>
              <li>
                <a href="/#">Shipping</a>
              </li>
              <li>
                <a href="/#">Returns</a>
              </li>
              <li>
                <a href="/#">Order Status</a>
              </li>
              <li>
                <a href="/#">Payment options</a>
              </li>
            </ul>
          </div>

          {/* Subcribe */}
          <div className="footer-col">
            <h4>News letter</h4>
            <div className="form-control-subs">
              <input
                type="text"
                className="input-subs"
                placeholder="Enter e-mail adress"
              />
              <button className="btn-subs">
                <i className="bx bx-mail-send"></i>
              </button>
            </div>
            <div className="footer-subs-text">
              <p>
                Subscribe to our newsletter to get the latest news and offers.
              </p>
            </div>
          </div>
        </div>
        {/* All right reserved */}
        <hr />
        <div className="footer-bottom">
          <div className="row">
            <div className="">
              <p className="copyright-text">
                Copyright © {thisYear} All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="footer-col-social">
            <div className="social-links">
              <a href="/#" className="social-facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="/#" className="social-twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="/#" className="social-instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="/#" className="social-linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
