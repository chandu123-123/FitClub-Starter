import React from "react";
import "./Hero.css";
import {motion} from 'framer-motion'
import heart from "../../../assets/heart.png";
import Her from "../../../assets/hero_image.png";
import Herback from "../../../assets/hero_image_back.png";
import calorie from "../../../assets/calories.png";
import Header from "../Header";
import Numbercounter from 'number-counter'
export default function Hero() {
  const mobile=window.innerWidth<=768?true:false;
  return (
    <div className="hero" id="hero-1">
      <div className="hero-blur  blur"></div>
      <div className="left">
        <Header></Header>
        <div className="the-best-ad">
          <motion.div 
          initial={{right:"1rem"}}
          whileInView={{right:mobile?"12.3rem":"15rem"}}
          transition={{duration:"2"}}
          ></motion.div>
          
          <span>Best Fitnees in Vanasthalipuram</span>
        </div>

        <div className="hero-head">
          <div>
            <span className="stroke">start </span>
            <span>Your</span>
          </div>
          <div>
            <span>Gym </span>
            <span className="stroke">Journey</span>
          </div>
          <div>
            <span>
              The journey to better fitness is about making consistent progress
              and improvements, rather than striving for an unattainable state
              of perfection.
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span><Numbercounter end={140} start={50} delay='4' preFix="+" /></span>
            <span>coaches</span>
          </div>
          <div>
            <span><Numbercounter end={1000} start={500} delay='4' preFix="+" /></span>
            <span>trained</span>
          </div>
          <div>
            <span><Numbercounter end={50} start={10} delay='4' preFix="+" /></span>
            <span>Programs</span>
          </div>
        </div>
        <div className="hero-btn">
          <button className="btn">Get Started</button>
          <button className="btn btn2">Learn More</button>
        </div>
      </div>
      <div className="right" style={{backgroundColor:"orange"}}>
        <button className="btn1">Join Now</button>
        <motion.div 
          initial={{right:"-3rem"}}
          whileInView={{right:"3.5rem"}}
          transition={{duration:"2"}} className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={Her} className="hero1" alt="" />
        <img src={Herback} alt="" className="heroback" />
        <motion.div 
          initial={{right:"50rem"}}
          whileInView={{right:"37rem"}}
          transition={{duration:"2"}} className="calories">
        <img src={calorie} alt="" />
        <div>
        <span>calories burned</span>
        <span>220 kcal</span>
        </div>
  
      </motion.div>
      </div>
      
    </div>
  );
}
