import React from "react";
// import "./Workshop.css";
import "./Workshop.css";

const Workshop = () => {
  return (
    <div className="publication">
      <h1 className="display-5 text-center">Workshops</h1>
      <h2 className="about-section text-center pt-3 mb-5">
        Call For Papers On:
      </h2>
      <div class="reg-container">
        <div class="reg-card">
          <div class="reg-price">
            <h3>
              <span className="reg-rupee">Cyber-Security</span>
            </h3>
          </div>
          <ul>
            {/* <span className="reg-span">For</span> */}
            <li>More Details Awaited</li>
            <a
              // href="https://forms.gle/db4XRHH76jWcVqkEA"
              href="##"
              class="text-center mb-4 mt-4 btn btn-alt mb-3 btn-border btn-border"
            >
              Register
            </a>
          </ul>
        </div>

        <div class="reg-card">
          <div class="reg-price">
            <h3>
              <span className="reg-rupee">Data-Science</span>
            </h3>
          </div>
          <ul>
            {/* <span>For</span> */}
            <li>More Details Awaited</li>
            <a
              // href="https://forms.gle/db4XRHH76jWcVqkEA"
              href="##"
              class="text-center mb-4 mt-4 btn btn-alt mb-3 btn-border btn-border"
            >
              Register
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
