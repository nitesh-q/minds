import React from "react";
import Reveal from "react-reveal";
import Icons from "../../shared/assets";
import { BANNERS_CONFIG } from "../../config";
import StartedFreeButton from "../StartedFreeButton";
import scrollTo from "gatsby-plugin-smoothscroll";
import CTAService from "../Services/CTAService";
import SupportedBrand from "../SupportedBrand";
const AppBanner = ({
  config,
  supportedBrand,
  startedFreeForm,
  titleClass,
  allService,
  mClass,
  wClass,
}) => {
  return (
    <section className="app_banner_area banner_top pb_0" id="home">
      <div className="container container-xl">
        <div className="row">
          <div className="col-lg-5">
            <Reveal bottom cascade>
              <div className="app_banner_contentmt ">
                {config.map((i) => {
                  return (
                    <>
                      <h2
                        className=" wow fadeInLeft"
                        data-wow-delay="0.2s"
                      >
                        {i.title}
                      </h2>
                      <p
                        className="f_400 f_size_18 l_height30 w_color wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        {i.description}
                      </p>
                    </>
                  );
                })}
                <div className="col-lg-12">
                  <StartedFreeButton btnClass={"bg_color2 border_btn"} />
                </div>
                <CTAService allService={allService} />
                 <SupportedBrand
                  pClass={"partner_white_logo_area_four"}
                  fclass={"w_color mb_25"}
                  imgClass={"partner_img "}
                />
              </div>
            </Reveal>
          </div>
          <div className="col-lg-7">
            {config.map((i, index) => {
              return (
                <Reveal effect="fadeInRight" duration={3000}>
                  <div className="app_img" key={index}>
                    <img className="img-fluid" src={i.image} alt={index} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
