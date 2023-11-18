import React from "react";
import "./plan.css";
import tick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
export default function Plan() {
  return (
    <div className="main" id="pricing-1">
      <div className="heads">
        <span className="stroke">Let's Start</span>
        <span>Your Journey</span>
        <span className="stroke">With Us</span>
      </div>
      <div className="plans" >
        {plansData.map((plan) => (
          <div className="category">
            <div className="price">
              <span className="sv" style={{ fontSize: "24px" }}>
                {plan.icon}
              </span>
              <span>{plan.name}</span>
            </div>

            <div className="features">
              <span>$ {plan.price}</span>
              {plan.features.map((feature) => (
                <div className="feature-item">
                  <img src={tick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
              <button className="btn">JOIN NOW</button>
            </div>
          </div>
        ))}
        <div className="blur plans-blur"></div>
      </div>
    </div>
  );
}
