import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <strong>Social Links</strong>
            <div className="d-flex flex-column ">
              <a
                className="icons mt-2"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className="icons mt-1"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                className="icons mt-1"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
              <a
                className="icons mt-1"
                href="https://web.telegram.org/z/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTelegramPlane} />
              </a>
            </div>
          </div>

          <div className="col">
            <strong>Outlets</strong>
            <div className="d-flex flex-column mt-3 ">
              <small>Chitagong</small>
              <small>Dhaka</small>
              <small>khulna</small>
            </div>
          </div>

          <div className="col">
            <strong>Contact</strong>
            <div className="d-flex flex-column mt-3 ">
              <p>
                <FontAwesomeIcon icon={faMobileAlt} />
                +0123456789{" "}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelopeSquare} />
                mirar.watch@gmail.com{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p>slafg</p>
    </div>
  );
};

export default Footer;
