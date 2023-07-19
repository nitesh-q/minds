import React from "react";
import Marker from "../../images/home-event/marker.png";
import Timer from "../../images/home-event/timer.png";
import Icons from "../../shared/assets";

const EventAbout = () => {
  return (
    <section className="event_about_area sec_pad pt_0">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="event_about_img">
              <img
                className="wow fadeInRight img-fluid"
                data-wow-delay="0.2s"
                src={Icons.Upload.default}
                alt=""
              />
              {/* <div className="about_bg"></div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="event_about_content">
              <h2 className="wow fadeInUp">Ready to get started?</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                A list of functionalities will go under this section which will
                enable them to boost their sales - Dummy Text.
              </p>
              <div className="row">
                <div className="col-6">
                  <div
                    className="event_about_item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <img src={Marker} alt="" />
                    <h6>Customized registration</h6>
                    <p>
                      Nice one mufty brown bread James Bond lost the plot
                      chinwag vagabond are.!
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="event_about_item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <img src={Timer} alt="" />
                    <h6>Fast and simple Setup</h6>
                    <p>
                      Nice one mufty brown bread James Bond lost the plot
                      chinwag vagabond are.!
                    </p>
                  </div>
                </div>
                <div className="action_btn d-flex align-items-center mt_60">
                  <a
                    href="/#"
                    className="btn btn_get btn_get_two fadeInLeft"
                    data-wow-delay="0.5s"
                  >
                    Get Started for Free
                  </a>
                  <a
                    href="/#"
                    className="agency_banner_btn_two wow fadeInLeft"
                    data-wow-delay="0.7s"
                  >
                    View Pricing <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAbout;
