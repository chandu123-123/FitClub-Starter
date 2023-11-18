import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nike from "../../assets/nike.png";
import adidas from "../../assets/adidas.png";
import nb from "../../assets/nb.png";
export default function Reasons() {
  return (
    <div className="reasons" id="why-1">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <div className="why">
          <span className="reason">Reasons</span>
          <span>
            <div>
              <span className="stroke">why </span>
              <span>you choose ?</span>
            </div>
          </span>
        </div>

        <div className="ticks">
          <div>
            <img src={tick} alt=""></img>
            <span>Latest Instruments</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Music sytem</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Beautiful visuals</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>100 coaches</span>
          </div>
        </div>
        <span className="partners">our partners</span>
      <div className="brands">
        <img src={adidas} alt="" />
        <img src={nike} alt="" />
        <img src={nb} alt="" />
      </div>
      </div>
      
    </div>
  );
}
