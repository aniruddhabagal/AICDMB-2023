import React from "react";
import "./SpeakerStyle.css";
import Hong from "./assets/speakers/honglin.jpg";
import dalibor from "./assets/speakers/dalibor.jpg"
import paritosh from "./assets/speakers/paritosh.jpg"
import sandip from "./assets/speakers/Sandip.jpg"

// import Anand from "./assets/speakers/anand.jpg";
// import Flammini from "./assets/speakers/flammini.jpg";

const Speakers = () => {
  return (
    <div id="speakers" className="speakers-section">
      <h1 className="display-5 text-center mt-5">Keynote Speakers</h1>
      <hr className="ruler" />
      <div class="profile-card-container">
        <div class="profile-card">
          <div class="profileImage">
            <img src={Hong} alt="" className="staff-img" />
          </div>
          <div class="profileHead pb-0 mb-1">
            <h4 class="profileHeadText">Dr. Hong Lin</h4>
            <p class="profileSmallDescription">
              PHD., Professor & Scientist, Department of Computer Science University
              of Houston, USA
            </p>
          </div>
          <div class="profileContent">
            {/* <p class="profileDescription">
              Since January 2020, Francesco Flammini is a Full Professor of
              Computer Science with a focus on Cyber-Physical Systems at
              Mälardalen University (MDH page). He has been a Senior Lecturer
              and an Associate Professor ("Docent") in Computer Science at the
              Department of Computer Science and Media Technology of Linnaeus
              University. He has led the Cyber-Physical Systems (CPS) research
              and education area within the Smarter Systems complete knowledge
              environment.
            </p> */}
          </div>
        </div>

        <div class="profile-card">
          <div class="profileImage">
            <img src={dalibor} alt="" className="staff-img" />
          </div>
          <div class="profileHead pb-0 mb-1">
            <h4 class="profileHeadText">Dr. Dalibor Dobrilovic</h4>
            <p class="profileSmallDescription">
              Professor, Department of Computer Science University of Novi Sad,
              Zrenjanin, Republic of Serbia
            </p>
          </div>
          <div class="profileContent">
            {/* <p class="profileDescription">
              Anand Nayyar is working as Faculty, Researcher and Scientist in
              Graduate School, Duy Tan University, Da Nang, Vietnam from January
              2018. Prior to this, he has worked as Assistant Professor in
              Department of Computer Applications & IT from August 2011 to
              December 2017. Before that, he served as Lecturer in Computer
              Science Department of Arya College and KLSD College, Affiliated to
              Punjab University, Chandigarh from 2009 to 2011.
            </p> */}
          </div>
        </div>

        <div class="profile-card">
          <div class="profileImage">
            <img src={paritosh} alt="" className="staff-img" />
          </div>
          <div class="profileHead pb-0 mb-1">
            <h4 class="profileHeadText">Dr. Prathosh A P</h4>
            <p class="profileSmallDescription">
            Assistant Professor, Department of Electronics and Computer Science,
            Indian Institute of Science (IISc), Bangalore, India
            </p>
          </div>
          <div class="profileContent">
            {/* <p class="profileDescription">
              Anand Nayyar is working as Faculty, Researcher and Scientist in
              Graduate School, Duy Tan University, Da Nang, Vietnam from January
              2018. Prior to this, he has worked as Assistant Professor in
              Department of Computer Applications & IT from August 2011 to
              December 2017. Before that, he served as Lecturer in Computer
              Science Department of Arya College and KLSD College, Affiliated to
              Punjab University, Chandigarh from 2009 to 2011.
            </p> */}
          </div>
        </div>

        {/* <div class="profile-card">
          <div class="profileImage">
            <img src={sandip} alt="" className="staff-img" />
          </div>
          <div class="profileHead pb-0 mb-1">
            <h4 class="profileHeadText">Dr. Sandip Chakraborty</h4>
            <p class="profileSmallDescription">
              Associate Professor, Department of Computer Science & Engineering,
              IIT Kharagpur, India
            </p>
          </div>
          <div class="profileContent">
            <p class="profileDescription">
              Anand Nayyar is working as Faculty, Researcher and Scientist in
              Graduate School, Duy Tan University, Da Nang, Vietnam from January
              2018. Prior to this, he has worked as Assistant Professor in
              Department of Computer Applications & IT from August 2011 to
              December 2017. Before that, he served as Lecturer in Computer
              Science Department of Arya College and KLSD College, Affiliated to
              Punjab University, Chandigarh from 2009 to 2011.
            </p>
          </div>
        </div> */}
      </div>

      {/* <h1 className="display-5 text-center mt-5">Plenary Speakers</h1><hr className="ruler"/>
            <div className="profile-card-container">
                <div class="profile-card">
                    <div class="profileImage">
                        <img src={Anand} alt="" />
                    </div>
                    <div class="profileHead">
                        <h4 class="profileHeadText">Dr. Anand Nayyar</h4>
                        <p class="profileSmallDescription">Faculty, Researcher and Scientist at Duy Tan University, Da Nang, Vietnam</p>
                    </div>
                    <div class="profileContent">    
                        <p class="profileDescription">
                        Anand Nayyar is working as Faculty, Researcher and Scientist in Graduate School, Duy Tan University, Da Nang, Vietnam from January 2018. Prior to this, he has worked as Assistant Professor in Department of Computer Applications & IT from August 2011 to December 2017. Before that, he served as Lecturer in Computer Science Department of Arya College and KLSD College, Affiliated to Punjab University, Chandigarh from 2009 to 2011. </p>
                    </div>
                </div>
                <div class="profile-card">
                    <div class="profileImage">
                        <img src={Speakersvg} alt="" />
                    </div>
                    <div class="profileHead">
                        <h4 class="profileHeadText">Coming Soon</h4>
                        <p class="profileSmallDescription"></p>
                    </div>
                    <div class="profileContent">    
                        <p class="profileDescription">Speaker yet to be decided.
                        </p>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default Speakers;
