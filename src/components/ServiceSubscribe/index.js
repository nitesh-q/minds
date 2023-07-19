import React, { Component } from "react";

const ServiceSubscribe = ({ sClass }) => {
  return (
    <div className="container">
      <div className={`subscribe_form_info text-center ${sClass}`}>
        <h2 className="f_600 f_size_30 l_height30 t_color3 mb_20">
          Want to buildmore powerful incentive programs?
        </h2>
        <p>
          Open up a world of possibilities in your campaigns with 99minds Get
          Your Demo
        </p>
        <form action="#" className="subscribe-form">
          <button type="submit" className="btn_hover btn_four mt_30">
            Get your Demo
          </button>
        </form>
      </div>
    </div>
  );
};
export default ServiceSubscribe;
