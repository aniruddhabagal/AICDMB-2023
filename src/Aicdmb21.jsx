import React from "react";
import "./PrevStyles.css";
import Carousel from "react-bootstrap/Carousel";

import Pic2 from "./assets/Prev images/aicdmb21/2.jpg";
import Pic3 from "./assets/Prev images/aicdmb21/3.jpg";
import Pic4 from "./assets/Prev images/aicdmb21/1.jpg";

import Hong from "./assets/speakers/honglin.jpg";
import Anand from "./assets/speakers/anand.jpg";
import Heena from "./assets/speakers/heena.jpg";
import Paolo from "./assets/speakers/paolo.jpg";

import ProfileCard from "./ProfileCard";


const Aicdmb21 = () => {
  return (
    <div>
      <div className="container">
        <h1 className="mt-4 text-center mb-1 mastHead lead-text">
          AICDMB 2021
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
          <div class="profile-card-container">
            <ProfileCard name="Dr. Hong Lin" desc="Ph.D., Professor at University of Downtown, Houston" img={Hong} type="Keynote Speaker"/>
            <ProfileCard name="Dr. Heena Rathore" desc="ACM Distinguished Speaker
Assistant Professor at University of Texas, USA" img={Heena} type="Keynote Speaker"/>
            <ProfileCard name="Dr. Paolo Trunfio" desc="Ph.D., Associate Professor of Computer Engineering, University of Calabria, Italy" img={Paolo} type="Keynote Speaker"/>
            <ProfileCard name="Dr. Anand Nayyar" desc="Faculty, Researcher and Scientist at Duy Tan University, Da Nang, Vietnam" img={Anand} type="Keynote Speaker"/>
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
              IOP Conference Series: Material Science and Engineering
            </li>
            <li>International Journal of Fog Computing (IGI)</li>
          </ul>
          {/* <h4>Extended High Quality Papers published in:</h4>
          <ul className="publication-list">
            Scalable Computing Practice and Experience (SCPE)
          </ul>
          <h4>Accepted Papers:</h4>
          <Posts /> */}
        </div>
      </div>
    </div>
  );
};

export default Aicdmb21;
