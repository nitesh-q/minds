import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import Icons from "../../shared/assets";
import Banner3 from "../../images/loyalty/banner3.svg";
import Banner4 from "../../images/loyalty/banner3(1).svg";
import CTAService from "../Services/CTAService";
import SupportedBrand from "../SupportedBrand";
import StartedFreeButton from "../StartedFreeButton";

const LoyaltyBanner = () => {
  return (
    <section className="n_hero_banner_area banner_top">
      <div className="shape_banners">
        <img
          className="img3"
          data-wow-delay="1s"
          src={Icons.BannerImg1.default}
        ></img>
      </div>
      <div className="shape_banners_left">
        <img
          className="header-btm-shape wow fadeIn"
          data-wow-delay="1.5s"
          src={Icons.BannerImg2.default}
        ></img>
      </div>

      {/* <img className="svg" src={Banner4}></img>
      <img className="svg_two" src={Banner3}></img> */}

      <div className="container container-xl">
        <div className="row">
          <div className="col-lg-5">
            <Reveal bottom cascade>
              <div className="n_hero_content">
                <h2 className="wow fadeInLeft" data-wow-delay="0.2s">
                Forge a strong relationship with your customers
                </h2>
                <p data-wow-delay="0.3s">
                 Customers who enroll in a Loyalty rewards program spend on average of 33% more.
                </p>
                <div className="col-lg-12">
                  <StartedFreeButton btnClass={"bg_color2 border_btn"} />
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
          <div className="col-lg-7">
            <div className="hero_img w-100">
              <img
                className="img img-fluid"
                src={Icons.LoyaltyBanner1.default}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoyaltyBanner;
