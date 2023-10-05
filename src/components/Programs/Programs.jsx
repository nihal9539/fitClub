import React from 'react'
import "./Programs.css"
import {programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"
const Programs = () => {
  return (
    <div className="programs" id="program">
        {/*Program */}
        <div className="programs-header">
        <span className='stroke-text'>Expolre our</span>
        <span>Program</span>
        <span className='stroke-text'>to shape</span>
        </div>
        <div className="program-categories">
          {programsData.map((programs)=>(
            <div className="category">
              {/* <h1>rdtfyguhj</h1> */}
              {programs.image}
              <span>{programs.heading}</span>
              <span>{programs.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Programs