import React, { Component } from "react";
import { Reveal } from "react-reveal";
const Title = ({ title, titleP, tClass="", sClass="" }) => {
  return (
    <div className={`${sClass}`}>
      <Reveal effect="fadeInUp" duration={1300}>
        <h2 className={`f_p f_size_30 l_height50 f_600 ${tClass}`}>{title}</h2>
      </Reveal>
      <Reveal effect="fadeInUp" duration={1600}>
        <p className="f_400 f_size_16 mb-0">{titleP}</p>
      </Reveal>
    </div>
  );
};
export default Title;
