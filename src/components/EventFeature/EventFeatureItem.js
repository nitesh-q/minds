import React from "react";

const EventFeatureItem = ({ url, title, description, image }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="event_features_item text-center wow fadeInUp">
        <img src={image} alt="" />
        <a href="/#">
          <h5>{title}</h5>
        </a>
        <p>{description}</p>
        <a href={url} className="e_features_btn">
          Learn more <i className="ti-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};
export default EventFeatureItem;
