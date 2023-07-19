import React from "react";
import {
  Testimonial,
  TryAction,
  Banner,
  Services,
  IntegrationList,
  WorkFeatures,
  TrustedMerchantsV2,
  SeoHead,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import {
  TESTIMONIAL_CONFIG,
  BANNERS_CONFIG,
  REFERRAL_SEO_HEAD,
} from "../../config";

const REFERRAL_FEATURES = [
  {
    rowClass: "row agency_featured_item_two ",
    aClass: "pr_70 pl_70",
    fImage: Icons.Referral_Widget.default,
    iImg: Icons.icon01.default,
    fTitle: "Customize Referral Widget & Web page",
    descriptions: "",
  },
  {
    rowClass: "row flex-row-reverse",
    aClass: "pl_100",
    fImage: Icons.Social_Sharing.default,
    iImg: Icons.icon02.default,
    fTitle: "Create Social Sharing & Referral link",
    descriptions:
      "Send and redeem physical and eGift cards issued by any POS like Square, Shopkeep, Vend, Revel, Poynt, Lightspeed etc.",
  },
  {
    rowClass: "row agency_featured_item_two",
    aClass: "pr_70 pl_70",
    fImage: Icons.Reward_Referral.default,
    iImg: Icons.icon03.default,
    fTitle: "Reward your customers the way they want",
    descriptions: "",
  },
  {
    rowClass: " row flex-row-reverse",
    aClass: "pl_100",
    fImage: Icons.Promote_Referral.default,
    iImg: Icons.icon04.default,
    fTitle: "Promote",
    descriptions: "Send announcement Email or SMS Text to your Customer",
  },
];

const Referral = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      <Banner
        config={BANNERS_CONFIG.REFERRAL}
        allService={false}
        bgClass={"bg_banner_2"}
      />
      <TrustedMerchantsV2 />
      <WorkFeatures
        aClass="agency_featured_area_two"
        data={REFERRAL_FEATURES}
        title="Key Features"
        dividerImg={Icons.divider_1.default}
      />

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
export default Referral;

//SEO HEAD
export const Head = () => {
  return REFERRAL_SEO_HEAD.map((data, index) => (
    <SeoHead {...{ ...data }} key={index} />
  ));
};
