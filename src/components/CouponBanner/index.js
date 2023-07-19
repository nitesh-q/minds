import React from "react";
import SupportedBrand from "../SupportedBrand";
import image from "../../images/erp-home/erp_dashboard.jpg";
import StartedFreeButton from "../StartedFreeButton";
import { Reveal } from "react-reveal";

const CouponBanner = ({ config }) => {
  return (
    <section className="support_home_area banner_top ">
      <div className="container container-xl">
        <div className="row">
          <div className="col-lg-5 ">
            <Reveal effect="fadeInRight" duration={3000}>
              {config.map((item, index) => {
                return (
                  <>
                    <h2 className=" wow fadeInUp" data-wow-delay="0.3s">
                      {item.title}
                      <span>{item.subTitle}</span>
                    </h2>
                    <p
                      className="f_size_18 l_height30 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      {item.description}
                    </p>
                  </>
                );
              })}

              <StartedFreeButton />
              <SupportedBrand
                pClass={"partner_white_logo_area_four"}
                fclass={"w_color mb_25 mt_30"}
                imgClass={"partner_img "}
              />
            </Reveal>
          </div>
          {config.map((i, index) => {
            return (
              <div className="col-lg-7">
                <Reveal effect="fadeInRight" duration={3000}>
                  <div
                    className="support_home_img wow fadeInUp"
                    data-wow-delay="0.9s"
                    key={index}
                  >
                    <img className="img-fluid" src={i.image} alt="" />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CouponBanner;
