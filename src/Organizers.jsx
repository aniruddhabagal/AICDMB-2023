import React from "react";
import "./BodyStyles.css";

import Princi from "./assets/faculty/princ.png";
import Gururaj from "./assets/faculty/gururaj.png";
import Dean from "./assets/faculty/rkumar.png";
import Hod from "./assets/faculty/pooja.jpg";
import Rnd from "./assets/faculty/rnd.png";
import Reg_cc_2 from "./assets/faculty/Committee Asset/BG-R/reg_cc_2.jpg";
import Bulent from "./assets/faculty/Committee Asset/bulent.jpg";
import Flammini from "./assets/speakers/flammini.jpg";

import Spon_cc_1 from "./assets/faculty/Committee Asset/BG-R/spon_cc_1.jpg";
import Spon_cc_2 from "./assets/faculty/Committee Asset/BG-R/spon_cc_2.jpg";
import Ramkrishna from "./assets/faculty/Committee Asset/BG-R/ramkrishna.jpg";
import Ambika from "./assets/faculty/Committee Asset/BG-R/Ambika.jpg";
import Thanuja from "./assets/faculty/Committee Asset/BG-R/thanuja.jpg";

import Scs from "./assets/faculty/Committee Asset/BG-R/scs.jpg";
import Dcs from "./assets/faculty/Committee Asset/BG-R/dcs.jpg";
import Rcs from "./assets/faculty/Committee Asset/BG-R/rcs.jpg";
import Ppr from "./assets/faculty/Committee Asset/BG-R/ppr.jpg";
import Sunil from "./assets/faculty/Committee Asset/sunil.jpg";

import Fadi from "./assets/faculty/Committee Asset/fadi.jpg";
import Kurt from "./assets/faculty/Committee Asset/kurt.jpg";

import Web_cc_3 from "./assets/faculty/Committee Asset/BG-R/web_cc_3.jpg";
import Vvs_prez from "./assets/faculty/Committee Asset/Patrons/vvs_prez.jpg";
import Vvs_vp from "./assets/faculty/Committee Asset/Patrons/vvs_viceprez.jpg";
import Vvs_secy from "./assets/faculty/Committee Asset/Patrons/vvs_secy.jpg";
import Vvs_tres from "./assets/faculty/Committee Asset/Patrons/vvs_tres.jpg";

import Staffcard from "./components/Staffcard";

const Organizers = () => {
  return (
    <div id="organizers" className="speakers-section">
      <h1 className="display-5 text-center mt-5">Patrons</h1>
      <hr className="ruler" style={{ width: "50px" }} />
      <div class="profile-card-container">
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Vvs_prez} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Sri Gundappa Gowda</h4>
            {/* <h5 className="text-center">President, VVS</h5> */}
            <p className="speaker-desc text-center">President, VVS</p>
          </div>
        </div>
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Vvs_vp} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Sri Shivalingappa B</h4>
            {/* <h5 className="text-center">General Chair</h5> */}
            <p className="speaker-desc text-center">Vice-President, VVS</p>
          </div>
        </div>
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Vvs_secy} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Sri Vishwanath P</h4>
            {/* <h5 className="text-center">General Chair</h5> */}
            <p className="speaker-desc text-center">Secretary, VVS</p>
          </div>
        </div>
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img
              src={Vvs_tres}
              alt=""
              className="staff-img"
              style={{ height: "220px" }}
            />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Sri Shrishaila Ramannavar</h4>
            {/* <h5 className="text-center">General Chair</h5> */}
            <p className="speaker-desc text-center">Treasurer, VVS</p>
          </div>
        </div>
      </div>

      {/* <h1 className="display-5 text-center mt-5">Co-Patron</h1> */}
      {/* <hr className="ruler" style={{ width: "50px" }} /> */}
      {/* <div class="profile-card-container">
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Kurt} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Prof. Dr. Mustafa KURT</h4>
            <h5 className="text-center">General Chair</h5>
            <p className="speaker-desc text-center">Vice Rector <br />
            Near East University, Turkey</p>
          </div>
        </div>       
      </div> */}

      <h1 className="display-5 text-center mt-5">General Co-Chairs</h1>
      <hr className="ruler" style={{ width: "200px" }} />
      <div class="profile-card-container">
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Princi} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Dr. B. Sadashive Gowda</h4>
            <h5 className="text-center">General Chair</h5>
            <p className="speaker-desc text-center">Principal VVCE, Mysuru</p>
          </div>
        </div>
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Rnd} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Dr. G.B. Krishnappa</h4>
            <h5 className="text-center">General Co-Chair</h5>
            <p className="speaker-desc text-center">
              Dean (R&D) of VVCE, Mysuru
            </p>
          </div>
        </div>
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Dean} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Dr. Ravi Kumar V</h4>
            <h5 className="text-center">General Co-Chair</h5>
            <p className="speaker-desc text-center">
              Professor and Dean Faculty of CSE, VVCE, Mysuru
            </p>
          </div>
        </div>
        {/* <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Bulent} alt="" className="staff-img" height="100%" width="100%"/>
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Prof. Dr. Bülent BİLGEHAN</h4>
            <h5 className="text-center">General Co-Chair</h5>
            <p className="speaker-desc text-center">
            Dean - Faculty of Engineering, <br/> Near East University, Turkey
            </p>
          </div>
        </div> */}
      </div>

      {/* publication co chair DR fadi */}

      <h1 className="display-5 text-center mt-5">Program Chairs</h1>
      <hr className="ruler" style={{ width: "200px" }} />
      <div class="profile-card-container">
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Hod} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Dr. Pooja M R</h4>
            <h5 className="text-center">Program Chair</h5>
            <p className="speaker-desc text-center">
              Professor and Head of Dept. of CSE, VVCE, Mysuru
            </p>
          </div>
        </div>
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Gururaj} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Dr. Gururaj H L</h4>
            <h5 className="text-center">Program Co-Chair</h5>
            <p className="speaker-desc text-center">
              ACM Distinguished Speaker <br /> Associate Professor at Dept. of
              CSE, VVCE, Mysuru
            </p>
          </div>
        </div>
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Flammini} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Dr. Francesco Flammini</h4>
            <h5 className="text-center">Program Co-Chair</h5>
            <p className="speaker-desc text-center">
              IDSIA USI-SUPSI,
              <br />
              University of Applied Sciences & <br /> Arts of Southern
              Switzerland (CH)
            </p>
          </div>
        </div>
      </div>

      {/* <h1 className="display-5 text-center mt-5">Publication Chair</h1> */}
      {/* <hr className="ruler" style={{ width: "200px" }} /> */}
      {/* <div class="profile-card-container">
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Fadi} alt="" className="staff-img"  height="100%" width="100%"/>
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Prof. Dr. Fadi Al-Turjman</h4>
            <p className="speaker-desc text-center">
            Associate Dean for Research <br />
            Head of the Department of Artificial Intelligence Engineering<br />
Near East University, Turkey
            </p>
          </div>
        </div>
      </div> */}

      <h1 className="display-5 text-center mt-5">Organizing Co-Chairs</h1>
      <hr className="ruler" style={{ width: "200px" }} />
      <div className="container">
        <div className="row_center mt-5">
          <Staffcard
            img={Spon_cc_1}
            name="Dr. Janhavi V"
            designation="Associate Professor, VVCE"
          />
          <Staffcard
            img={Ramkrishna}
            name="Dr. Ramakrishna Hegde"
            designation="Associate Professor, VVCE"
          />
          <Staffcard
            img={Scs}
            name="Prof. Shraddha C"
            designation="Assistant Professor, VVCE"
          />
          <Staffcard
            img={Dcs}
            name="Prof. Divya C D"
            designation="Assistant Professor, VVCE"
          />
          <Staffcard
            img={Rcs}
            name="Prof. Radhika A D"
            designation="Assistant Professor, VVCE"
          />
          <Staffcard
            img={Ambika}
            name="Prof. Ambika V"
            designation="Assistant Professor, VVCE"
          />
          <Staffcard
            img={Spon_cc_2}
            name="Prof. Swathi B H"
            designation="Assistant Professor, VVCE"
          />
          <Staffcard
            img={Thanuja}
            name="Prof. Tanuja Kayarga"
            designation="Assistant Professor, VVCE"
          />
          <Staffcard
            img={Sunil}
            name="Prof. Sunil Kumar B R"
            designation="Assistant Professor, VVCE"
          />
        </div>
        <h1 className="display-5 text-center mt-5">
          Advisory and Review Committee
        </h1>
        <hr className="ruler" />
        <ul>
          <li>
            Dr. Hong Lin, Ph.D., Professor at University of Downtown, Houston
          </li>
          <li>
            Dr. Heena Rathore, ACM Distinguished Speaker, Assistant Professor at
            University of Texas, USA
          </li>
          <li>
            Dr. Paolo Trunfio, Ph.D., Associate Professor of Computer
            Engineering, University of Calabria, Italy
          </li>
          <li>
            Dr. Fernando Koch, IBM GTS Innovation Senior Technical Solutions
            Manager; Eisenhower Fellow; ACM Distinguished Speaker.
          </li>
          <li>
            Prof. Amlan Chakrabarti, Dean Engg. and Tech. & Director School of
            IT, University of Calcutta & Dist. Speaker at ACM, Sr. Member ACM &
            IEEE.
          </li>
          <li>
            Dr. Varun Menon, Distinguished Speaker at ACM, Associate Professor
            and Head of International Partnerships at SCMS Group.
          </li>
          <li>
            Dr. Ullas Nambiar, Principal Director AI at Accenture, Innovation
            Strategist, Startup Mentor Bengaluru, Karnataka, India.
          </li>
          <li>
            Dr. Ramasuri Narayanam, Senior Research Scientist at IBM Research,
            India Bengaluru, Karnataka, India.
          </li>
          <li>
            Dr. G R Sinha, ACM Distinguished Speaker of ACM New York & Professor
            at Myanmar Institute of Information Tech. (MIIT) Mandalay Myanmar,
            Myanmar.
          </li>
          <li>
            Dr. Anand Nayyar, ACM Distinguished Speaker, Professor, Researcher,
            Scientist, Author, Innovator, Inventor, Orator, Senior
            Member-ACM/IEEE.
          </li>
          <li>
            Dr. Pradeep Kumar TS, Associate Professor in School of Computing
            Science and Engineering at Vellore Institute of Technology (VIT)
            Chennai campus, Chennai, Tamil Nadu, India.
          </li>
          <li>
            Dr. Prasanna Ranjith Christodoss, Faculty of Information Technology.
            Shinas College of Technology Sultanate of Oman.
          </li>
          <li>
            Dr. Neha Sharma, Founder Secretary, Society for Data Science Senior
            IEEE Member, Execom Member, IEEE Pune Section.
          </li>
        </ul>

        <h1 className="display-5 text-center mt-5">
          Technical Program Committee
        </h1>
        <hr className="ruler" />
        <ul className="mb-5">
          <li>Prof. Yu-Chen Hu, Professor, Providence University, Taiwan</li>
          {/* <li>
            Dr. Sandeep Chakraborty, Assistant Professor, Department of Computer
            Science and Engineering, Indian Institute of Technology Kharagpur,
            India.
          </li> */}
          <li>
            Dr. Arun Solanki, Gautam Buddha University Greater Noida, India.
          </li>
          <li>
            Dr. Hanaa Hachimi, Tofail University-National School of Applied
            Sciences of Kenitra, Morocco.
          </li>
          <li>
            Dr. Prathosh A P, Assistant Professor, Department of Computer
            Technology & Electrical Engineering Indian Institute of Technology
            Delhi.
          </li>
          <li>
            Dr. Deepu Vijayasenan, Assistant Professor, Department of ECE, NIT
            Surathkal, Karnataka.
          </li>
          <li>
            Dr. Ramkumar Krishnamoorthy, Department of Information and
            Communications Technology Villa College QI CAMPUS Male' Maldives.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Organizers;
