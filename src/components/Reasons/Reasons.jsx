import React from 'react'
import "./Reasons.css"
import nike from "../../assets/nike.png"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import tick from "../../assets/tick.png"
import adidas from "../../assets/tick.png"
import nb from "../../assets/nb.png"

const Reasons = () => {
  return (
    <div className='Reasons' id="Reasons">
   <div className="left-r">
    <img src={image1} alt="" />
    <img src={image2} alt="" />
    <img src={image3} alt="" />
    <img src={image4} alt="" />
   </div>
   <div className="right-r">
   <span>some reason</span>
   <div>
    <span className='stroke-text'>why </span>
    <span>choose us?</span>
    </div>
    {/* div(div>img*span)*4 */}
    <div className='details-r'>
    <div>
      <img src={tick} alt="" />
      <span>OVER 140+ EXPERT COATCHES</span>
      </div>
    <div>
      <img src={tick} alt="" />
      <span>TRAIN SMARTER AND FATER THAN</span>
      </div>
    <div>
      <img src={tick} alt="" />
      <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
      </div>
    <div>
      <img src={tick} alt="" />
      <span>RELIABLE PARTNERS</span>
      </div>
    </div>
    <span 
    style={{color:'var(--gray)',
    fontWeight:"normal"
    }}>
      Our PARTNERS</span>
      <div className="partners">
        <img src={nb} alt="" />
        <img src={adidas} alt="" />
        <img src={nike} alt="" /></div>
   </div>
    </div>
  )
}

export default Reasons