import React from "react";
import FeaturesItems from "./FeatureItems";

const WorkFeatures = ({ aClass, data, title, dividerImg }) => {
  return (
    <section className={`agency_featured_area  ${aClass}`}>
      <div className="container">
        <h2
          className="f_size_30 f_600 t_color3 l_height40 text-center wow fadeInUp"
          data-wow-delay="0.3s"
        >
          {title}
        </h2>
        <div className="features_info">
          <img className="dot_img" src={dividerImg} alt="" />
          {data.map((work, index) => (
            <FeaturesItems {...{ ...work }} key={index} />
          ))}
          {/* <div className="dot middle_dot">
            <span className="dot1"></span>
            <span className="dot2"></span>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default WorkFeatures;
