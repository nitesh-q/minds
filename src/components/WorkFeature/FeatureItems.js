import React from "react";
import Reveal from "react-reveal/Reveal";
const FeaturesItems = ({
  rowClass,
  fImage,
  iImg,
  fTitle,
  descriptions,
  aClass,
}) => {
  return (
    <div className={`agency_featured_item ${rowClass} `}>
      <div className="col-lg-6">
        <div
          className={`agency_featured_content wow fadeInLeft ${aClass}`}
          data-wow-delay="0.6s"
        >
          <Reveal effect="fadeInRight">
            <div className="dot">
              <span className="dot1"></span>
              <span className="dot2"></span>
            </div>
            <img className="number" src={iImg} alt="" />
            <h3>{fTitle}</h3>
            <p>{descriptions}</p>
            {/* <a href=".#" className="icon mt_30">
              <i className="ti-arrow-right"></i>
            </a> */}
          </Reveal>
        </div>
      </div>
      <div className="col-lg-6">
        <Reveal effect="fadeInLeft">
          <div className="agency_featured_img text-right">
            <img className="img-fluid" src={fImage} alt="" />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default FeaturesItems;
