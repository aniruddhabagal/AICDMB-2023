import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div>
      <h1 className="display-5 text-center">Registration</h1>
      <hr className="ruler" />
      <div class="reg-container">
        <div class="reg-card">
          <div class="reg-price">
            <h3>
              <span className="reg-rupee">₹</span> 5000 / $70{" "}
            </h3>
          </div>
          <ul>
            <span className="reg-span">For</span>
            <li>UG / PG / PhD Scholars</li>
            <a
              href="https://forms.gle/db4XRHH76jWcVqkEA"
              class="text-center mb-4 mt-4 btn btn-alt mb-3 btn-border btn-border"
            >
              Register
            </a>
          </ul>
        </div>

        <div class="reg-card">
          <div class="reg-price">
            <h3>
              <span className="reg-rupee">₹</span> 5500 / $80
            </h3>
          </div>
          <ul>
            <span>For</span>
            <li>Academicians / Industry Persons</li>
            <a
              href="https://forms.gle/db4XRHH76jWcVqkEA"
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

export default Register;
