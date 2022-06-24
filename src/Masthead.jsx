import React from "react";
import "./components/navbar/CustomStyle.css";
import Aicte from "./assets/aicte.png";
import Acm from "./assets/ACMO.svg";
import Vvce from "./assets/vvce.png";
import Neu from "./assets/neuwt.png";
import Cse from "./assets/indexers/cse.png";
import AICDMB_BRAIN from './assets/AICDMB22_single.svg'
import img1 from "./assets/Carousel Images/1.jpg";
import "./MastStyles.css";
import ExternalSolid from "./assets/external-link-alt-solid.svg";
import { Link } from "react-router-dom";

const Masthead = () => {
  const handleClose = () => {
    let banner = document.getElementById("banner");
    banner.classList.toggle("hide");
  };

  return (
    <div className="bd-masthead">
      {/* <div className="fullBanner" id="banner">
        Alert! Paper Submission Final Deadline has been extended until December
        15, 2020
        <FontAwesomeIcon
          className="closeBtn"
          icon={faTimes}
          onClick={handleClose}
        />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto my-auto col-md-4 order-md-2">
            <img
              src={AICDMB_BRAIN}
              alt="aicdmb"
              width="400"
              height="400"
              className="lead-img img-fluid mb-3 mb-md-0"
            />
          </div>
          <div className="col-md-8 order-md-1 text-center text-md-left pr-md-5">
            {/* <img
              className="mt-lg-ed5"
              src={Aicte}
              alt=""
              height="100px"
              width="100px"
            /> */}
            {/* <h1 className="spons-text mt-2">AICTE Sponsored</h1> */}
            <h1 className="mb-1 mastHead lead-text">AICDMB 2022</h1>
            <h2 className="desc">
              <span className="custom-text-col">Third</span> Annual
              International Conference on Data Science, Machine Learning and
              Blockchain Technology
            </h2>
            <div className="row my-4 sponsor">
              {/* <div className="col4 mx-2"><img src={Vvce} alt="" height="75px" width="75px"/></div> */}
              {/* <div className="col4 mx-2"><img src={Acm} alt="" height="75px" width="75px"/></div> */}
            </div>
            {/* <h1 className="mb-3 mastHead lead-text">Annual International Conference on Data Science, Machine Learning and Blockchain Technology (AICDMB)</h1> */}
            <div class="d-flex flex-column flex-md-row flex-xs-row">
              {/* <a href="#about" class="btn btn-lg btn-primary mb-3 mr-md-3 btn-border" onclick="#">Get Started</a> */}
              <a href="#papers" class="btn-alt mb-3 mr-md-3 btn-border" style={{backgroundColor: "#0069d9"}}>
                Call for Papers
              </a>
              {/* <a href="#" class="btn btn-lg btn-primary mb-3 btn-border btn-dark-border" onclick="#">Register</a> */}
              <Link className="btn-alt mb-3 btn-border"  style={{backgroundColor: "#218838"}} to="/register">
                Register
              </Link>
            </div>
            <div className="row details-block text-left">
          <div className="col-6 details mt-3">
            <h5 className="details-head">WHEN</h5>
            <h3 className="details-text">February 16 & 17, 2022</h3>
          </div>
          <div className="col-6 details mt-3">
            <h5 className="details-head">WHERE</h5>
            <h3 className="details-text">
              <a
                href="https://vvce.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff" }}
              >
                Vidyavardhaka College of Engineering, Mysuru{" "}
                <img
                  className="svg-icon"
                  src={ExternalSolid}
                  alt=""
                  height="10px"
                  width="10px"
                />
              </a>
            </h3>
          </div>
          </div>
          <div className="host-section">
          <h1 className="spons-text text-left">Hosted by</h1>
          <div className="row">
            <div className="col- mx-2">
              <a
                href="https://vvce.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Vvce} alt="" height="100px" width="100px" />
              </a>
            </div>
            <div className="col-">
              <a
                href="https://neu.edu.tr/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Neu} alt="" height="100px" width="100px" />
              </a>
            </div>
            <div className="col- mx-2">
              <a
                href="https://vvce.acm.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Acm} alt="" height="100px" width="100px" />
              </a>
            </div>
            {/* <div className="col- mx-2">
              <a
                href="https://www.iop.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Iop} alt="" height="100px" width="100px" />
              </a>
            </div>
            <div className="col- mx-2">
              <img
                src={Iict}
                alt="IICT Logo"
                height="120px"
                width="170px"
                style={{ transform: "translateY(-10px)" }}
              />
            </div> */}
          </div>
        </div>
        </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Masthead;
