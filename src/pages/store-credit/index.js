import React from "react";
import {
  Testimonial,
  TryAction,
  CrmBanner,
  Features,
  Header,
  Services,
  IntegrationList,
  TrustedMerchantsV2,
  SeoHead,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import {
  TESTIMONIAL_CONFIG,
  BANNERS_CONFIG,
  STORE_CREDIT_SEO_HEAD,
} from "../../config";

const RETURN_REFUNDS_LIST = [
  {
    description:
      "Automate store credit for merchandise return using return tools like Novaro etc.",
  },
  { description: "Add store credit directly in customer wallet." },
];
const TIME_COST_LIST = [
  {
    description:
      "Save time of your customer support team by automating refunds with 99minds store credit and gift certificates.",
  },
  {
    description:
      "Consolidates system data with better Returns & Refunds Reports.",
  },
];
const REWARDS_LIST = [
  { description: "Reward your customers with Store Credit." },
  { description: "Convert loyalty points to Store credit and Gift vouchers." },
];
const STORE_CREDIT_FEATURES = [
  {
    image: Icons.Return_Refund_StoreCredit.default,
    title: "Returns & Refunds",
    desc: "",
    subTitle: "",
    list: RETURN_REFUNDS_LIST,
  },
  {
    rowClass: "flex-row-reverse",
    image: Icons.Time_Cost_StoreCredit.default,
    title: "Save Time and Cost",
    desc: "",
    subTitle: "",
    list: TIME_COST_LIST,
  },
  {
    image: Icons.Rewards_StoreCredit.default,
    title: "Rewards",
    subTitle: "",
    desc: "",
    list: REWARDS_LIST,
  },
  {
    rowClass: "flex-row-reverse",
    image: Icons.Promotional_StoreCredit.default,
    title: "Promotional Store Credit",
    desc: "Entice customer by assigning time sensitive promotional Store Credit to their Account.",
    subTitle: "",
    list: [],
  },
];

const StoreCredit = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      <CrmBanner config={BANNERS_CONFIG.STORE_CREDIT} />
      <TrustedMerchantsV2 />

      {/* <Partner pClass={"sec_pad pb_0"} /> */}
      <Header
        className={"bg_white pt_120"}
        title={"Key features."}
        description={"All your store credit needs, covered"}
      />

      {STORE_CREDIT_FEATURES.map((card) => (
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
      <Services />
    </Layout>
  );
};
export default StoreCredit;

//SEO HEAD
export const Head = () => {
  return STORE_CREDIT_SEO_HEAD.map((data, index) => (
    <SeoHead {...{ ...data }} key={index} />
  ));
};
