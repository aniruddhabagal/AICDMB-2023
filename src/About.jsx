import React from "react";
import "./BodyStyles.css";
import Conference from "./assets/conference.svg";

import "./SpeakerStyle.css";
import { Link } from "react-router-dom";
import Princi from "./assets/faculty/princ.png";
import Gururaj from "./assets/faculty/gururaj.png";
import Dean from "./assets/faculty/rkumar.png";
import Rnd from "./assets/faculty/rnd.png";

const About = () => {
  return (
    <div>
      <div id="papers" className="container about-section">
        <h1 className="display-5 text-center">Call for Papers</h1>
        <hr className="ruler" />
        <div className="row mt-5">
          {/* <div className="col-12 col-lg-5 order-md-1"><img src={Papers} alt="" height="100%" width="100%"/></div> */}
          <div className="cforp col-12">
            <p className="lead mt-4 text-justify">
              AICDMB 2023 warmly invites full length original research papers
              describing latest findings and research works to the conference
              from academic professionals, R&D organizations, government
              departments and research scholars from across the globe. The
              manuscripts must contribute original ideas and should not have
              been published in any journals, conference proceedings or
              magazines and not under review in any of them.
              <br />
            </p>
            <table class="table table-light mt-4">
              <tbody>
                <tr>
                  <td>Paper Submission Deadline</td>
                  <td>
                    <s>November 30th, 2022</s>&nbsp;&nbsp;&nbsp;December 31st,
                    2022
                  </td>
                </tr>
                <tr>
                  <td>Paper Acceptance Notification</td>
                  <td>January 15th, 2023</td>
                </tr>
                <tr>
                  <td>Copyright and Final Paper Submission</td>
                  <td>January 25th, 2023</td>
                </tr>
                <tr>
                  <td>Conference Dates</td>
                  <td>16th & 17th March 2023</td>
                </tr>
              </tbody>
            </table>
            <p className="text-center">
              <a
                href="https://easychair.org/conferences/?conf=aicdmb2023"
                class="text-center mb-4 mt-4 btn btn-alt mb-3 btn-border btn-border"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Now!
              </a>
            </p>
          </div>
        </div>
      </div>

      <div id="about" className="container about-section">
        <h1 className="display-5 text-center">About the Conference</h1>
        <hr className="ruler" />
        <div className="row mb-5">
          <div className="about-conference col-12 col-lg-7 mt-md-4">
            <p className="lead text-justify pt-3 pt-md-5">
              <b>AICDMB</b> is an international conference dedicated to advances
              in Data Science, Machine Learning and Blockchain Technology. The
              conference is a yearly event for a world-class gathering of
              researchers from academia and industry, practitioners, and
              business leaders, providing a forum for discussing cutting edge
              research, and directions for new innovative business and
              technology.
            </p>
          </div>
          <div className="col-12 col-lg-5">
            <img src={Conference} alt="" height="100%" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
