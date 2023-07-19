import React from "react";
import CloudImage from "../../images/seo/cloud.png";
import Tick from "../../images/icon/tick-Arrow.svg"

const CTA_1 = () => {
  return (
    <section className="seo_subscribe_area">
      <div className="overlay_img"></div>
      <div className="cloud_img">
        <img src={CloudImage} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6  ">
            <div className="try_call_action_text">
              <h2>Try 99minds now</h2>
              <p>
                The free trial comes with no commitments <br></br>and no credit
                card required
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row  try_action_service">
        
              <div className="action_about_btn_col">
                <a href="/" className="about_btn">
                  Get Started for free
                </a>
              </div>
            </div>

            <div className="try_call_to_action_service">
              <div className="">
                {" "}
                <img src={Tick} />
                No Credit Card Required
              </div>
              <div className="">
                {" "}
                <img src={Tick} />
                Free Sign Up
              </div>
              <div className="">
                {" "}
                <img src={Tick} />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA_1;
