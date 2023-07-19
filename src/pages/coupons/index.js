import React from "react";
import {
  Testimonial,
  TryAction,
  Features,
  Header,
  Services,
  IntegrationList,
  CouponBanner,
  TrustedMerchantsV2,
  SeoHead,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import {
  BANNERS_CONFIG,
  TESTIMONIAL_CONFIG,
  COUPONS_SEO_HEAD,
} from "../../config";

const COUPON_FEATURES = [
  {
    image: Icons.AdvancedCoupon.default,
    title: "Advanced coupon marketing software",
    subTitle: "",
    desc: "",
    list: [
      {
        description:
          "Efficiently create millions of randomly generated coupons.",
      },
      {
        description:
          "Set expiry dates and link customer IDs to single coupons.",
      },
    ],
  },
  {
    rowClass: "flex-row-reverse",
    image: Icons.CustomCoupon.default,
    title: "Custom-made coupons",
    subTitle: "",
    desc: "",
    list: [
      { description: "SKU-based" },
      { description: "Coupon Category based coupon" },
      { description: "BOGO Coupon" },
    ],
  },
  {
    image: Icons.RewardCustomer.default,
    title: "Reward your customers the way they want",
    subTitle: "",
    desc: "",
    list: [
      {
        description:
          "Track coupon usage using coupons transactions associated with Customer & Order ID",
      },
    ],
  },
];

const Coupons = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      <CouponBanner config={BANNERS_CONFIG.COUPONS} />
      <TrustedMerchantsV2 />

      <Header
        className={"bg_white pt_120 "}
        title={"Key features."}
        description={"All your coupon needs, covered"}
      />
      {COUPON_FEATURES.map((card) => (
        <Features {...{ ...card }} url="#" />
      ))}
      <Testimonial
        title="Testimonials"
        subTitle="Hear from our Clients"
        sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />
      <IntegrationList />
      <TryAction />
      {/* <CaseStudiesSlider /> */}
      <Services />
    </Layout>
  );
};
export default Coupons;

//SEO HEAD
export const Head = () => {
  return COUPONS_SEO_HEAD.map((data, index) => (
    <SeoHead {...{ ...data }} key={index} />
  ));
};
