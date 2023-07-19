import React from "react";
import Fade from "react-reveal/Fade";
import { Reveal } from "react-reveal";
import Line_01 from "../../images/hosting/line_01.png";
import Line_02 from "../../images/hosting/line_02.png";
import Line_03 from "../../images/hosting/line_03.png";
import Line_04 from "../../images/hosting/line_04.png";
import Line_05 from "../../images/hosting/line_05.png";
import Line_06 from "../../images/hosting/line_06.png";
import Line_07 from "../../images/hosting/line_07.png";
import Line_08 from "../../images/hosting/line_08.png";

import Icons from "../../shared/assets";
import StartedFreeButton from "../StartedFreeButton";
import CTAService from "../Services/CTAService";
import SupportedBrand from "../SupportedBrand";

const HostingBanner = () => {
  return (
    <section className="hosting_banner_area banner_top">
      <Fade bottom cascade>
        {/* <ul className="list-unstyled b_line">
          <li className="wow fadeInUp" data-wow-delay="0.4s">
            <img src={Line_01} alt="" />
          </li>
          <li className="wow fadeInUp" data-wow-delay="0.7s">
            <img src={Line_02} alt="" />
          </li>
          <li className="wow fadeInUp" data-wow-delay="0.9s">
            <img src={Line_03} alt="" />
          </li>
          <li className="wow fadeInUp" data-wow-delay="1.2s">
            <img src={Line_04} alt="" />
          </li>
          <li className="wow fadeInUp" data-wow-delay="0.4s">
            <img src={Line_05} alt="" />
          </li>
          <li className="wow fadeInUp" data-wow-delay="1s">
            <img src={Line_06} alt="" />
          </li>
          <li className="wow fadeInUp" data-wow-delay="1s">
            <img src={Line_07} alt="" />
          </li>
          <li className="wow fadeInUp" data-wow-delay="1.3s">
            <img src={Line_08} alt="" />
          </li>
        </ul> */}
      </Fade>
      <div className="container container-xl">
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center">
            <div className="hosting_content">
              <h2 className="wow fadeInUp" data-wow-delay="0.3s">
                Launch a complete gifting program with
                <br />
                Physical and eGift cards.
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.5s">
                {" "}
                Customers with gift cards usually spend 32% more than gift card
                value
              </p>
              {/* <a
                href="/#"
                className="hosting_btn btn_hover wow fadeInUp"
                data-wow-delay="0.7s"
              >
                Get Started
              </a> */}
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
          </div>
          <div className="col-lg-7 ">
            <Reveal effect="fadeInRight" duration={3000}>
              <img
                className="img-fluid wow fadeInRight"
                data-wow-delay="0.7s"
                src={Icons.GiftBanner.default}
                alt=""
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HostingBanner;
