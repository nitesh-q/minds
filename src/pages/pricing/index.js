import React from "react";
import Layout from "../../components/Layout";
import {
  Breadcrumb,
  FAQ,
  Services,
  Testimonial,
  TrustedMerchantsV1,
  TryAction,
  PriceList,
} from "../../components";
import { TESTIMONIAL_CONFIG } from "../../config";
import Icons from "../../shared/assets";

const Price = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName={Icons.BREADCRUMB.default}
          Ptitle="Pricing"
          Pdescription=""
        />
        <PriceList />
        <FAQ />
        <TrustedMerchantsV1 />
        <Testimonial
          title="Testimonials"
          subTitle="Hear from our Clients"
          sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
          bgColor={`bg_color`}
        />
        <TryAction />
        <Services />
      </Layout>
    </div>
  );
};
export default Price;
