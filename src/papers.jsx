import React from "react";
import Papers from "./assets/papers.svg";
import { register } from "./serviceWorker";
import { Link } from "react-router-dom";
import Arrow from "./assets/arrow.svg";

const PapersPage = () => {
  return (
    <div>
      <div id="papers" className="container about-section pt-3">
        <h1 className="display-5 text-center">Call for Papers</h1>
        <hr className="ruler" />
        <div className="row mt-5">
          {/* <div className="col-12 col-lg-5 order-md-1"><img src={Papers} alt="" height="100%" width="100%"/></div> */}
          <div className="cforp col-12">
            <p className="lead text-justify mt-4">
              AICDMB 2022 warmly invites full length original research papers
              describing latest findings and research works to the conference
              from academic professionals, R&D organizations, government
              departments and research scholars from across the globe. The
              manuscripts must contribute original ideas and should not have
              been published in any journals, conference proceedings or
              magazines and not under review in any of them.
              <br />
              <br />
              The soft copy of full length manuscripts shall be shared in .PDF
              format through the Easy Chair Account.
            </p>
            <table class="table table-light mt-4">
              <tbody>
                <tr>
                  <td>Paper Submission Deadline</td>
                  <td>
                    {" "}
                    <s>September 30th, 2022</s>&nbsp;&nbsp;&nbsp;October 30th,
                    2022
                  </td>
                </tr>
                <tr>
                  <td>Paper Acceptance Notification</td>
                  <td>December 15th, 2022</td>
                </tr>
                <tr>
                  <td>Copyright and Final Paper Submission</td>
                  <td>December 30th, 2022</td>
                </tr>
                <tr>
                  <td>Conference Dates</td>
                  <td>16th & 17th March 2023</td>
                </tr>
              </tbody>
            </table>
            {/* <h4 className="mt-4">
                Paper Submission Deadline: November 15, 2020
              </h4>
              <h4>Paper Acceptance Notification: December 15, 2020</h4> */}
            {/* <br/> */}
            {/* <h4>Submission and Registration begins soon.</h4> */}
            <p className="text-center">
              <a
                href="https://easychair.org/conferences/?conf=aicdmb2023"
                class="text-center mb-4 mt-4 btn btn-alt mb-3 btn-border btn-border"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Now!
              </a>
              <br />
              <Link
                to="/register"
                style={{ color: "#e9c46a", textDecoration: "underline" }}
              >
                Click here to register{" "}
                <img
                  src={Arrow}
                  style={{ color: "#e9c46a" }}
                  height="20px"
                  width="15px"
                  alt=""
                />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PapersPage;
