import React from "react";
import "./pubStyle.css";
import Scopus from "./assets/indexers/scopus_tbg.png";
import Sjr from "./assets/indexers/sjr.png";
import Compendex from "./assets/indexers/comp.png";

const Guidelines = () => {
  return (
    <div className="publication">
      <div className="container about-section pt-3 mb-5">
        {/* <h1 className="display-5 text-center">Publication</h1><hr className="ruler"/> */}
        <div className="div-bg-col">
          <h1 className="display-5 text-center mb-5">Author Guidelines</h1>
          <hr className="ruler" />

          <ul style={{ fontSize: "1.9em" }}>
            <li className="color-green">
              Default Template for Authors:{" "}
              <a
                href="https://typeset.io/formats/taylor-and-francis/default-template-for-taylor-and-francis-articles/59bc5844a98aaefd7bcb6b2844fe7c91"
                target="_blank"
              >
                {" "}
                (Link)
              </a>
            </li>
            <p className="" style={{ fontSize: "0.8em" }}>
              The purpose of a conference template is to provide a consistent
              format for papers appearing in the conference proceedings. AICDMB
              strongly encourages use of the conference manuscript templates
              provided below. AICDMB conference templates contain guidance text
              for composing and formatting conference papers. Please ensure that
              all guidance text is removed from your conference paper prior to
              submission to the conference.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
