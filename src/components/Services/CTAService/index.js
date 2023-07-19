import React from "react";

import Tick from "../../../images/icon/tick-Arrow.svg";
const CTAService = ({ allService = "", mClass = "" }) => {
  return (
    <section className="CTA_service">
      <div className="col-lg-12">
        <div className={`row mt_15 flex mb_20 ${mClass} `}>
          <img src={Tick} alt="" />
          <span className="col "> No Credit Card Required</span>
          {allService ? (
            <>
              <img src={Tick} className="img-fluid" alt="" />{" "}
              <span className="col "> Free Sign Up</span>
              <img src={Tick} alt="" /> <span className="col"> 24/7 Support</span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};
export default CTAService;
