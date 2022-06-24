import React from "react";
import "./BodyStyles.css";
// import Confspeaker from "./assets/confspeaker1.svg";
import Speakersvg from "./assets/speakersvg.svg";

import Hong from "./assets/speakers/honglin.jpg";
import Anand from "./assets/speakers/anand.jpg";
import Heena from "./assets/speakers/heena.jpg";
import "./SpeakerStyle.css";
// import Speakersvg from "./assets/speakersvg.svg";
// import Paolo from "./assets/speakers/paolo.jpg";
const Speakers = () => {
  return (
    <div className="speakers-section">
      <div>
        <h1 className="display-5 text-center mt-5">Keynote Speakers</h1>
        <hr className="ruler" />
        {/* <img className="conf-speaker" src={Confspeaker} height="100%" width="100%" alt=""/> */}
        <div className="row no-margin justify-content-center">
          <div
            className="col-12 col-md-5 col-xl-2 speaker speaker-card"
            data-aos="zoom-in"
            data-aos-duration="300"
          >
            <div className="flip-card">
              <div className="card-front">
                <img src={Hong} className="speaker-img" alt="" />
                <h4 className="mt-2 text-center">Dr. Hong Lin</h4>
                <p className="speaker-desc-front">
                  Professor at University of Downtown, Houston
                </p>
              </div>
              <div className="card-back">
                <p className="speaker-desc text-center">
                  Dr. Hong Lin holds a Ph.D. in Computer Science. His graduate
                  work includes theoretical and empirical studies of parallel
                  programming models and implementations. Dr. Lin has worked on
                  large-scale computational biology at Purdue University, active
                  networks at the National Research Council Canada, and network
                  security at Nokia, Inc. Dr. Lin joined UHD at 2001 and he is
                  currently a professor in computer science.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-5 col-xl-2 speaker speaker-card"
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-delay="50"
          >
            <div className="flip-card">
              <div className="card-front">
                <img src={Heena} className="speaker-img" alt="" />
                <h4 className="mt-2 text-center">Dr. Heena Rathore</h4>
                <p className="speaker-desc-front">
                  Assistant Professor at University of Texas, San Antonio
                </p>
              </div>
              <div className="card-back">
                <p className="speaker-desc text-center">
                  Dr. Heena Rathore started working as an Assistant Professor at
                  University of Texas, San Antonio (Spring 2020). In fall 2019,
                  she was working with Texas A&M University as a Visiting
                  Assistant Professor. Prior to that, she was working as a Data
                  Scientist and Program Manager at Hiller Measurements, USA.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-5 col-xl-2 speaker speaker-card"
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-delay="150"
          >
            <div className="flip-card">
              <div className="card-front">
                <img src={Speakersvg} className="speaker-img" alt="" />
                <h4 className="mt-2 text-center">Coming Soon</h4>
              </div>
              <div className="card-back">
                <p className="speaker-desc text-center">
                  Speaker yet to be decided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="plenary">
        <h1 className="display-5 text-center mt-5">Plenary Speakers</h1>
        <hr className="ruler" />
        <div className="row no-margin justify-content-center">
          <div
            className="col-12 col-md-5 col-xl-2 speaker speaker-card"
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-delay="100"
          >
            <div className="flip-card">
              <div className="card-front">
                <img src={Anand} className="speaker-img" alt="" />
                <h4 className="mt-2 text-center">Dr. Anand Nayyar</h4>
                <p className="speaker-desc-front">
                  Faculty, Researcher and Scientist at Duy Tan University, Da
                  Nang, Vietnam
                </p>
              </div>
              <div className="card-back">
                <p className="speaker-desc text-center">
                  Anand Nayyar is working as Faculty, Researcher and Scientist
                  in Graduate School, Duy Tan University, Da Nang, Vietnam from
                  January 2018. Prior to this, he has worked as Assistant
                  Professor in Department of Computer Applications & IT from
                  August 2011 to December 2017. Before that, he served as
                  Lecturer in Computer Science Department of Arya College and
                  KLSD College, Affiliated to Punjab University, Chandigarh from
                  2009 to 2011.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-5 col-xl-2 speaker speaker-card"
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-delay="150"
          >
            <div className="flip-card">
              <div className="card-front">
                <img src={Speakersvg} className="speaker-img" alt="" />
                <h4 className="mt-2 text-center">Coming Soon</h4>
              </div>
              <div className="card-back">
                <p className="speaker-desc text-center">
                  Speaker yet to be decided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
