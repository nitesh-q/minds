import React from "react";
import Layout from "../../components/Layout";
import { Breadcrumb } from "../../components";
import Icons from "../../shared/assets";
import ServiceSubscribe from "../../components/ServiceSubscribe";

const About = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName={Icons.BREADCRUMB.default}
          Ptitle="About Us"
          Pdescription=""
        />
        <section className="pricing_area_two sec_pad">
          <div class="sec_title text-center startup_tab_img">
            <h2 class="f_p f_size_30 l_height50 f_600 t_color2">
            99minds is an all-encompassing solution to
              <br /> engagement, acquisition, and retention.
            </h2>
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <p class="f_400 f_size_16 l_height30 mb-0 text-justify ">
                99minds Inc is US Based software company founded in 2019 with
                the goal to provide a complete solution for engagement, acquisition
                and retention using our gift card and loyalty program services.
                99minds platform enables you to create coupons, gift cards,
                  discounts, sends out referrals, builds loyalty programs, and
                  location-based promotions for your customers. The best part
                  about 99minds is easy-to-use, plug-&amp;-play, cost-effective
                  marketing platform that empowers a marketing team to create
                  campaigns to personalized promotions &amp; build omnichannel
                  customer experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ServiceSubscribe sClass="s_form_info_two" />
      </Layout>
    </div>
  );
};
export default About;
