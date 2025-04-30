"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-media">
        <a
          href="https://www.facebook.com/share/156R4QStxtw/?mibextid=qi2Omg"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/bilalwaseem099?igsh=dTM0Z2Z5N2szdHNq"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="www.linkedin.com/in/bilal-waseem-b44006338"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/bilalwaseem111"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer-info">
        <p>Email: bilalwaseem.thala@gmail.com</p>
        <p>Phone: +92 337 241 2661</p>
        <p>Made by Bilal Waseem</p>
        <p>{new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
