import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'
const Hero = () => {
  const transition = {type : 'spring',duration :3}
  const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*the best ad */}
        <div className="the-best-ad">
          <motion.div
          initial={{left:mobile ? "145px" :" 238px"}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          >
             
          </motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/*Hero Adding */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> your</span>
          </div>
          <div>
            <span>
            Ideal body</span>
            </div>
          <div>
            <span>In here we will help you to shape and build
              your ideal body and live   up your life to fullest
              
              </span>
          </div>
        </div>
              <br />
        {/* */}
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={1} delay='4ms' preFix="+"/></span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={1} delay='4ms' preFix="+"/></span>
            <span>memebers joins</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={1} delay='4ms' preFix="+"/></span>
            <span>fitness programs</span>
          </div>
        </div>
        {/*Hero button*/}
        <div className="hero-buttons">
          <buttons className="btn">Get started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join now</button>
        <motion.div
        transition={transition}
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>166 bpm</span>
        </motion.div>
        {/* Hero image */}
        <img src={hero_image} alt="" className='hero-image'/>
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={hero_image_back} className="hero-image-back"/>
        {/*Calories */}
        <motion.div 
        transition={transition}
        initial={{right:'37rem'}}
        whileInView={{right:'28rem'}}
        className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero