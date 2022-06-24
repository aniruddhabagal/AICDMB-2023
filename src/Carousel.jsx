import React from "react";
import "./CarouselStyle.css";
import Carousel from "react-bootstrap/Carousel";
import vvce from "./assets/Carousel Images/vvce.jpg";
import img1 from "./assets/Carousel Images/1.jpg";
import img2 from "./assets/Carousel Images/2.jpg";
import img3 from "./assets/Carousel Images/3.jpg";
import img4 from "./assets/Carousel Images/4.jpg";
import ExternalSolid from "./assets/external-link-alt-solid.svg";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="container mt-5">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="First slide" />

          <Carousel.Caption>
            <Link to="/aicdmb20" style={{ color: "#fff" }}>
              <h3>AICDMB 2020</h3>
              <p>Click to learn more about the previous conference.</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={vvce} alt="Second slide" />
          <Carousel.Caption>
            <a
              href="https://vvce.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              <h3>Vidyavardhaka College of Engineering</h3>
              <p>
                Venue of the Conference. Click to visit the Website.
                <img
                  className="svg-icon"
                  src={ExternalSolid}
                  alt=""
                  height="10px"
                  width="10px"
                />
              </p>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Inaguration of the Conference, AICDMB 2020</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
