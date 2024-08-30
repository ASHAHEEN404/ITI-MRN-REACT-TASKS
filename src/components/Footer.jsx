import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
          <p className={styles.tagline}>Your ultimate movie guide</p>
        </div>
        <div className={styles.linksSection}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.linksList}>
            <li>
              <Link to="/movies" className={styles.link}>
                Movies
              </Link>
            </li>
            <li>
              <Link to="/actors" className={styles.link}>
                Actors
              </Link>
            </li>
            <li>
              <Link to="/tvshows" className={styles.link}>
                TV Shows
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.socialSection}>
          <h4 className={styles.heading}>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 MovieApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
