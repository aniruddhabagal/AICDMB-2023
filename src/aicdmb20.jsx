import React from "react";
import "./PrevStyles.css";
import "./BodyStyles.css";
import "./MastStyles.css";
import Carousel from "react-bootstrap/Carousel";
import Pic2 from "./assets/Prev images/2.jpg";
import Pic3 from "./assets/Prev images/3.jpg";
import Pic4 from "./assets/Prev images/4.jpg";
import Sam from "./assets/Prev images/sam.jpg";
import Ss from "./assets/Prev images/ss.jpg";
import Anand from "./assets/speakers/anand.jpg";
import "./SpeakerStyle.css";
import Posts from "./posts";

const aicdmbold = () => {
  return (
    <div>
      <div className="container">
        <h1 className="mt-4 text-center mb-1 mastHead lead-text">
          AICDMB 2020
        </h1>
        <hr className="ruler" />
        <h3 className="text-center desc mt-4" style={{ color: "#fff" }}>
          Conference held in Vidyavardhaka College of Engineering
        </h3>
        <div className="container mt-5">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Pic3} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Pic2} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Pic4} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="prev-speakers">
          <h1 className="display-5 text-center mt-5">Speakers</h1>
          <hr className="ruler" />
          <div class="profile-card-container">
            <div class="profile-card">
              <div class="profileImage">
                <img src={Sam} alt="" width="100%" className="staff-img" />
              </div>
              <div class="profileHead">
                <h4 class="profileHeadText">Dr. Sam Gounder</h4>
                <p class="profileSmallDescription">
                  Victoria University of Wellington, New Zealand
                </p>
                <p className="speaker-desc text-center">Keynote Speaker</p>
              </div>
            </div>
            <div class="profile-card">
              <div class="profileImage">
                <img src={Ss} alt="" width="100%" className="staff-img" />
              </div>
              <div class="profileHead mb-2">
                <h4 class="profileHeadText">Dr. Sandeep Kumar Shukla</h4>
                <p class="profileSmallDescription">IIT, Kanpur</p>
                <p className="speaker-desc text-center">Keynote Speaker</p>
              </div>
            </div>
            <div class="profile-card">
              <div class="profileImage">
                <img src={Anand} alt="" className="staff-img" />
              </div>
              <div class="profileHead mb-0 pb-0">
                <h4 class="profileHeadText">Dr. Anand Nayyar</h4>
                <p class="profileSmallDescription">
                  Faculty, Researcher and Scientist at Duy Tan University, Da
                  Nang, Vietnam
                </p>
                <p className="speaker-desc text-center">Plenary Speaker</p>
              </div>
            </div>
          </div>
        </div>
        <div className="publications-section">
          <h1 className="display-5 text-center mt-5">Publications</h1>
          <hr className="ruler" />
          <h4 className="mt-5">
            All accepted and presented papers published in the following
            journals:
          </h4>
          <ul className="publication-list">
            <li>
              International Journal of Blockchains and Cryptocurrencies (IJBC) -
              Inderscience
            </li>
            <li>International Journal of Fog Computing (IGI)</li>
            <li>
              Special Issue on blockchain and next Generation Artificial
              Intelligence Technologies - Bentham Science
            </li>
          </ul>
          <h4>Extended High Quality Papers published in:</h4>
          <ul className="publication-list">
            Scalable Computing Practice and Experience (SCPE)
          </ul>
          <h4>Accepted Papers:</h4>
          <Posts />
        </div>

        {/* <div className="prev-dates-section mb-5">
                <h1 className="display-5 text-center mt-5 ">Important Dates</h1><hr className="ruler"/>
                <h5 className="text-center prev-custom-font" style={{color: "#fff"}}>Paper Submission Deadline: 10th November, 2019</h5>
                <h5 className="text-center prev-custom-font" style={{color: "#fff"}}>Acceptance Notification: 30th November, 2019</h5>
                <h5 className="text-center prev-custom-font" style={{color: "#fff"}}>Conference Date: 12th and 13th February, 2020</h5>
            </div> */}
      </div>
    </div>
  );
};

export default aicdmbold;
