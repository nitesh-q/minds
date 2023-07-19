import React from "react";
import Layout from "../../components/Layout";
import {
  Header,
  Features,
  Testimonial,
  Services,
  LoyaltyBanner,
  TabComponent,
  IntegrationList,
  TrustedMerchantsV2,
  CTA,
  SeoHead,
} from "../../components";
import {
  TESTIMONIAL_CONFIG,
  LOYALTY_TABS_CONFIG,
  LOYALTY_SEO_HEAD,
} from "../../config";

import Icons from "../../shared/assets";

const CUSTOM_LOYALTY_FEATURES_LIST = [
  { description: "Point Program" },
  { description: "VIP Tiered Program" },
  { description: "Cash Back Program" },
  { description: "Premium Loyalty Program ( Fee-based loyalty program)" },
  { description: "Hybrid Loyalty Program" },
];
const VIP_TIER_FEATURES_LIST = [
  { description: "$ Spend value vs. Points" },
  { description: "Calendar year vs. Lifetime" },
];

const LOYALTY_REWARD_FEATURES_LIST = [
  { description: "Free product" },
  { description: "Amount discount" },
  { description: "Percentage discount" },
  { description: "Accelerated points earning" },
];

const LOYALTY_FEATURES = [
  {
    image: Icons.CustomLoyalty.default,
    title: "Custom Loyalty Program",
    subTitle: "Design Loyalty program right for your brand",
    desc: "",
    list: CUSTOM_LOYALTY_FEATURES_LIST,
  },
  {
    rowClass: "flex-row-reverse",
    image: Icons.VipTier.default,
    title: "Configure VIP Tiers",
    subTitle: "Set up landmarks to accomplish VIP status",
    desc: "Encourage your customers to attain the next tier with contesting but achievable milestones!",
    list: VIP_TIER_FEATURES_LIST,
  },
  {
    image: Icons.LoyaltyPoints.default,
    title: "Select activities for earning Points",
    subTitle: "Earning Points for more than just purchases",
    desc: "Choose the terminology that makes sense for you: points, punches, or stars.",
    list: [],
  },
  {
    rowClass: "flex-row-reverse",
    image: Icons.LoyaltyReward.default,
    title: "Offer Rewards",
    subTitle: "Customers can redeem points for awesome rewards like:",
    desc: "",
    list: LOYALTY_REWARD_FEATURES_LIST,
  },
];

const Loyalty = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      <LoyaltyBanner />
      {/* <Partner pClass={"sec_pad"} oClass={"logo_item_opacity"} /> */}
      <TrustedMerchantsV2 bgClass={"bg_color2"} />

      <Header
        className={"bg_white pt_120"}
        title={
          "Build an effective Customer loyalty programs right for your brand "
        }
        description={"All your required key features under one roof"}
      />

      {LOYALTY_FEATURES.map((card) => (
        <Features {...{ ...card }} url="#" />
      ))}

      <Header
        className={"mb_50"}
        title={
          "How to Customize, Promote and Manage your brand's loyalty program"
        }
      />

      <TabComponent
        config={LOYALTY_TABS_CONFIG}
        pClass={"pt_0"}
        hideClass={"tab_hide"}
        //   rClass={"reduce_height"}
      />
      {LOYALTY_TABS_CONFIG.PANNEL_DATA.map((card) => (
        <Features {...{ ...card }} url="#" hideClass={"section_hide"} />
      ))}
      <Testimonial
        title="Learn How Customer is using Coupons"
        subTitle="Case Studies Carousel"
        sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />
      <IntegrationList />
      <CTA />
      <Services />
    </Layout>
  );
};
export default Loyalty;

//SEO HEAD
export const Head = () => {
  return LOYALTY_SEO_HEAD.map((data, index) => (
    <SeoHead {...{ ...data }} key={index} />
  ));
};
