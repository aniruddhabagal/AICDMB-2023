import React from 'react'

export default function Staffcard(props) {
    return (
        <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={props.img}
                height="100px"
                width="100px"
                class="staff-img"
                alt="staff_image"
              />
              <div class="staff-name text-center">{props.name}</div>
              <small class="staff-designation text-center">
                {props.designation}
              </small>
              <small class="staff-qualification text-center">
                {props.qualification ? props.qualification : ""}
              </small>
            </div>
          </div>
    )
}
