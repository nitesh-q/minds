import React from "react";
import Tick from "../../images/icon/tick-Arrow.svg";

const TryAction = ({ pClass = "" }) => (
  <section className={`try_call_to_action_area sec_pad ${pClass}`}>
    <div className="container ">
      <div className="row ">
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
          <div className="row try_action_service">
            {/* <div className="col">
              <form action="#" className="contact_form_box" method="post">
                <div className="form-group text_box">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </form>
            </div> */}
            <div className="action_about_btn_col">
              <a href="/" className="about_btn ">
                Get Started for free
              </a>
            </div>
          </div>

          <div className="try_call_to_action_service">
            <div className="">
              {" "}
              <img src={Tick} alt="" />
              No Credit Card Required
            </div>
            <div className="">
              {" "}
              <img src={Tick} alt="" />
              Free Sign Up
            </div>
            <div className="">
              {" "}
              <img src={Tick} alt="" />
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default TryAction;
