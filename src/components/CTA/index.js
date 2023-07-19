import React from "react";
import Tick from "../../images/icon/tick-Arrow.svg"

const CTA = () => {
  return (
    <section className="get_started_area">
      <div className="shap one"></div>
      <div className="shap two"></div>
      <div className="shap one three"></div>
      <div className="shap two four"></div>
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
              <div className=" action_about_btn_col">
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
export default CTA;
