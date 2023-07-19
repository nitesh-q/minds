import React, { Component } from "react";
import Reveal from "react-reveal";
import Line01 from "../../images/new/line_01.png";
import Line02 from "../../images/new/line_02.png";
import Line03 from "../../images/new/line_03.png";
import img from "../../images/new/startup_banner_img.png";
import StartedFreeButton from "../StartedFreeButton";
import CTAService from "../Services/CTAService";
import SupportedBrand from "../SupportedBrand";
const CrmBanner = ({ config }) => {
  return (
    <section className="new_startup_banner_area banner_top">
      <div className="container container-xl ">
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center">
            <Reveal bottom cascade duraton={1200}>
              <div className="new_startup_content">
                {config.map((i, index) => {
                  return (
                    <>
                      <h2
                        className="wow fadeInRight"
                        data-wow-delay="0.3s"
                        key={index}
                      >
                        {i.title}
                        <br />
                        <span>{i.subTitle}</span>
                      </h2>
                      <p className=" wow fadeInRight" data-wow-delay="0.4s">
                        {i.description}
                      </p>
                    </>
                  );
                })}
                {/* <div
                    className="action_btn d-flex align-items-center mt_40 wow fadeInRight"
                    data-wow-delay="0.6s"
                  >
                    <a href=".#" className="btn_hover app_btn">
                      Sign up <i className="ti-arrow-right"></i>
                    </a>
                  </div> */}
                <div className="col-lg-12">
                  <StartedFreeButton />
                </div>
                <CTAService allService={false} />
                <SupportedBrand
                  pClass={"partner_white_logo_area_four"}
                  fclass={"w_color mb_25"}
                  imgClass={"partner_img "}
                />
              </div>
            </Reveal>
          </div>
          <div className="col-lg-7 wow fadeInLeft" data-wow-delay="0.4s">
            <Reveal left cascade>
              <div className="new_startup_img">
                {/* <div className="line line_one">
                  <img src={Line01} alt="" />
                </div>
                <div className="line line_two">
                  <img src={Line02} alt="" />
                </div>
                <div className="line line_three">
                  <img src={Line03} alt="" />
                </div> */}
                {config.map((i, index) => {
                  return <img className="img-fluid" src={i.image} alt="" />;
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CrmBanner;
