import React from 'react'

export default function ProfileCard(props) {
    return (
        <div class="profile-card">
              <div class="profileImage">
                <img src={props.img} alt="" width="100%" className="staff-img" />
              </div>
              <div class="profileHead">
                <h4 class="profileHeadText">{props.name}</h4>
                <p class="profileSmallDescription">
                  {props.desc}
                </p>
                <p className="speaker-desc text-center">{props.type}</p>
              </div>
            </div>
    )
}
