import React from "react";
import {
  IntegrationList,
  Testimonial,
  TryAction,
  Features,
  Services,
  Banner,
  TrustedMerchantsV2,
  SeoHead,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import {
  TESTIMONIAL_CONFIG,
  BANNERS_CONFIG,
  AUTOMATED_WORKFLOWS_SEO_HEAD,
} from "../../config";
import Work from "../../components/work";

const BOOST_Loyalty = [
  {
    description:
      "Integrate rewards logic with data from your marketing & communication app.",
  },
  {
    description:
      "Connect your store to automate and run more personalized loyalty & reward programs.",
  },
];
const CENTRALIZE_DATA = [
  { description: "Average order value (AOV)" },
  { description: "Customer lifetime value (CLV)" },
  { description: "Shopping Cart Abandonment Rate (CAR)" },
  { description: " Net Promoter Score (NPS)" },
];

const AUTOMATION_FEATURES = [
  {
    rowClass: "flex-row-reverse",
    image: Icons.Centralize.default,
    title: "Centralize Data Platform",
    subTitle: "",
    desc: "Connect with Centralize Customer data from across customer touchpoints and the dozens of apps in your Brick & Mortar, eCommerce stack. Create workflow utilizing following key eCommerce customer attributes",
    list: CENTRALIZE_DATA,
  },
  {
    image: Icons.Workflow.default,
    title: "Pre-built Workflow Template",
    subTitle: "",
    desc: "Utilize Average order value (AOV) boost, First Purchase reward, Out of Stock, Punch Card and Refund templates to run your program",
    list: [],
  },
  {
    rowClass: "flex-row-reverse",
    image: Icons.AutomationLoyalty.default,
    title: "Boost Loyalty",
    subTitle: "",
    desc: "",
    list: BOOST_Loyalty,
  },
];

const AUTOMATION_WORK = [
  {
    title: "Set up Trigger",
    subTitle: "TRIGGER",
    desc: "When order status is updated to paid",
    img: [Icons.Shopify_Bag.default, Icons.BigCommerce_Icon.default],
  },
  {
    title: "Logic Conditions",
    subTitle: "CONDITIONS ",
    desc: "If total value of order is greater than $50",
    img: [Icons._99minds_Logo.default],
  },
  {
    title: "Execute Action",
    subTitle: "ACTION ",
    desc: "Send a text/email message with a discount gift card",
    img: [Icons.Klaviyo_Icon.default, Icons.Omnisend_Icon.default],
  },
];

const Automation = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      <Banner
        config={BANNERS_CONFIG.AUTOMATION}
        titleClass={`bannerTitle`}
        allService={false}
        bgClass={"bg_banner_3"}
      />
      <TrustedMerchantsV2 />
      <Work config={AUTOMATION_WORK} />

      {AUTOMATION_FEATURES.map((card, index) => (
        <Features ptClass="pt_0" {...{ ...card }} url="#" key={index} />
      ))}

      <Testimonial
        title="Testimonials"
        subTitle="Hear from our Clients"
        sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />
      <IntegrationList />
      <TryAction pClass={"pt_50"} />
      <Services />
    </Layout>
  );
};
export default Automation;

//SEO HEAD
export const Head = () => {
  return AUTOMATED_WORKFLOWS_SEO_HEAD.map((data, index) => (
    <SeoHead {...{ ...data }} key={index} />
  ));
};
