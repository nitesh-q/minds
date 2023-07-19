import React from "react";
import Reveal from "react-reveal";
import Icons from "../../shared/assets";
import StartedFreeFrom from "../StartedFreeButton";
import CTAService from "../Services/CTAService";
import Slider from "react-slick";
import SupportedBrand from "../SupportedBrand";

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1800,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const DigitalBanner = ({
  config,
  supportedBrand,
  startedFreeForm,
  titleClass,
  allService,
  mClass,
  wClass,
}) => {
  return (
    // <section className="app_hero_banner_area" id="home">
    //   <div className="app_hero_banner_shap "></div>
    //   <div className="round_shap one"></div>
    //   <div className="round_shap two "></div>
    //   <div className="round_shap three "></div>
    //   <div className="container">
    <section className="seo_features_one bg_color sec_pad banner_top">
      <div className="container container-xl">
        <div className="row">
          <div className="col-lg-6 col-xl-5 mt_20">
            <Reveal bottom cascade>
              {/* <div className="app_hero_banner_content"> */}
              <div className="seo_features_content">
                <h2>Engage, Acquire & Retain Customers</h2>
                <p>
                  Enrich your Customer Journey with a Gift Card, Store Credit,
                  and Loyalty Program. Empower them to share your brand
                  experience with Referrals
                </p>

                <div className="col-lg-7">
                  <StartedFreeFrom />
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
          <div className="col-lg-6 col-xl-7">
            <div className=" p0 app_screenshot_area">
              <div className="app_screen_info">
                <Slider className="app_screenshot_slider" {...settings}>
                  <div className="item">
                    <div className="screenshot_img">
                      <img
                        className="img-fluid"
                        src={Icons.Engage.default}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="screenshot_img">
                      <img
                        className="img-fluid"
                        src={Icons.Acquire.default}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="screenshot_img">
                      <img
                        className="img-fluid"
                        src={Icons.Retain.default}
                        alt=""
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalBanner;
