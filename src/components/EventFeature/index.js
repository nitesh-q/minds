import React from "react";
import EventFeatureItem from "./EventFeatureItem";

const EventFeature = ({ config, title, desc }) => {
  return (
    <section className="event_features_area sec_pad pt_0">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            {title}
          </h2>
          <p>{desc}</p>
        </div>
        <div className="row event_features_inner">
          {config.map((item, index) => {
            return <EventFeatureItem {...{ ...item }} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default EventFeature;
