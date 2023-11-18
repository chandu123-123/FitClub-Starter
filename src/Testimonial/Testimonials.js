import React, { useState } from "react";
import "./testimonials.css";

import left from "../assets/leftArrow.png";
import right from "../assets/rightArrow.png";
import { testimonialsData } from "../data/testimonialsData";

import "./testimonials.css";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [se, setstat] = useState(0);
  return (
    <div className="testimonials" id="testimonials-1">
      <div className="leftr">
        <span
          initial={{ right: "1rem" }}
          whileInView={{ right: "15.3rem" }}
          transition={{ duration: "2" }}
        >
          testimonials
        </span>
        <span className="stroke"> what they</span>
        <span>say about us</span>
        <div className="details">
          <motion.span
            key={se}
            initial={{ x: -50 }}
            transition={{ type: "spring", duration: 2 }}
            whileInView={{ x: 0 }}
          >
            {testimonialsData[se].review}
          </motion.span>
          <span>
            <motion.span
              key={se}
              initial={{ x: -50 }}
              transition={{ type: "spring", duration: 2 }}
              whileInView={{ x: 0 }}
            >
              {testimonialsData[se].name} :{" "}
            </motion.span>

            <span> {testimonialsData[se].status}</span>
          </span>
        </div>
      </div>
      <div className="rightr">
        <motion.div className="mil"
          initial={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div className="mile"
          initial={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img 
          key={se}
          initial={{ scale: 1.2 }}
          transition={{ type: "spring", duration: 1 }}
          whileInView={{ scale: 1 }}
          src={testimonialsData[se].image}
          className="mai mi"
          alt=""
        />
        <div className="image">
          <img
            src={left}
            onClick={() => {
              se == 0
                ? setstat(testimonialsData.length - 1)
                : setstat((se) => se - 1);
            }}
            alt=""
          />
          <img
            src={right}
            onClick={() => {
              se == testimonialsData.length - 1
                ? setstat(0)
                : setstat((se) => se + 1);
            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
