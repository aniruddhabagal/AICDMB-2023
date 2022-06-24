import React from 'react';
import './SpeakerStyles.css'

const Speakercard = () => {
    return ( 
        <div className="speakers-section">
            <h1 className="display-5 text-center mt-5">Keynote Speakers</h1><hr className="ruler"/>
            <div class="profile-card-container">
                <div class="profile-card">
                    <div class="profileImage">
                        <img src={Hong} alt="" />
                    </div>
                    <div class="profileHead">
                        <h4 class="profileHeadText">Name</h4>
                        <p class="profileSmallDescription">Professor, University of XYZ, University of XYZ, University of XYZ</p>
                    </div>
                    <div class="profileContent">    
                        <p class="profileDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Speakerca
rd;