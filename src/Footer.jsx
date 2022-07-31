import React from "react";
import "./BodyStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-block">
          <ul className="footer-list">
            <li className="footer-link">Quick Links</li>
            <li className="footer-link">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-link">
              <Link to="/committee">Committee</Link>
            </li>
            <li className="footer-link">
              <a href="/#speakers">Speakers</a>
            </li>
            <li className="footer-link">
              <Link to="/publication">Publication</Link>
            </li>
            <li className="footer-link">
              <Link to="/register">Registration</Link>
            </li>
            <li className="footer-link">
              <Link to="/Workshop">Workshops</Link>
            </li>
            {/* <li className="footer-link">
              <Link to="/aicdmb20">AICDMB 2019-20</Link>
            </li> */}
            <li className="footer-link">
              <Link to="/papers">Call for Papers</Link>
            </li>
            <li className="footer-link mt-2 mx-xl-0">
              <a href="https://worldflagcounter.com/details/hee">
                <img
                  src="https://worldflagcounter.com/hee/"
                  alt="Flag Counter"
                />
              </a>
            </li>
          </ul>
          {/* <p
            className="footer-text text-center"
            style={{ opacity: "0.3", fontWeight: "100" }}
          >
            <div>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>
              {", "}
              <a href="https://www.flaticon.com/authors/becris" title="Becris">
                Becris
              </a>
              {" and "}
              <a
                href="https://www.flaticon.com/authors/good-ware"
                title="Good Ware"
              >
                Good Ware
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </p> */}
          <p
            className="footer-text text-center"
            style={{ opacity: "0.5", fontWeight: "100" }}
          >
            <a
              href="https://www.linkedin.com/in/aniruddha-bagal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Developer
            </a>
          </p>
          <p className="footer-text text-center">Copyright(c) AICDMB 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
