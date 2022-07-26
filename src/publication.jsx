import React from "react";
import "./pubStyle.css";
import Scopus from "./assets/indexers/scopus_tbg.png";
import Sjr from "./assets/indexers/sjr.png";
import Compendex from "./assets/indexers/comp.png";

const Publication = () => {
  return (
    <div className="publication">
      <div className="container about-section pt-3 mb-5">
        {/* <h1 className="display-5 text-center">Publication</h1><hr className="ruler"/> */}

        <h1 className="display-5 text-center mb-5">Publication</h1>
        <div className="div-bg-col">
          <ul style={{ fontSize: "1.3em" }}>
            <li>
              All the accepted and presented papers will be published in{" "}
              <span className="color-red"></span> CRC Conference Proceedings.
              {/* Material Science and Engineering{" "} */}
              <span className="color-red">(Indexed by Scopus & WoS)</span><span className="color-orange">(Submitted)</span>
            </li>
            <li>
              All extended papers of the conference will be published in
              <ul>
                <li>
                CRC Press Edited Book "Intelligent Systems in Healthcare and Disease Identification using Data Science{" "}
                  <span className="color-red">(indexed by Scopus & WoS)</span>
                  <span className="color-green">(Accepted)</span>
                </li>
      
                <li>
                IAP Edited Book "Convergence of Cyber Security and Cloud Computing{" "}
                  <span className="color-red">(Indexed by Scopus & WoS)</span>
                  <span className="color-green">(Accepted)</span>
                </li>
                <li>More publications will be updated soon.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Publication;
