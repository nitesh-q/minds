import React, { Fragment } from "react";
import {
  IntegrationList,
  Testimonial,
  Banner,
  Features,
  Header,
  TabComponent,
  Services,
  CTA_1,
  TrustedMerchantsV2,
  SeoHead,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import {
  TESTIMONIAL_CONFIG,
  BANNERS_CONFIG,
  GIFTCARD_TABS_CONFIG,
  GIFTCARD_SEO_HEAD,
} from "../../config";

const GIFTCARD = [
  { description: "100’s of beautiful Gift Cards based on themes" },
  { description: "Upload your brand design Gift Cards" },
  {
    description:
      "Customize & Personalize gift card experience with your Picture and Video",
  },
  {
    description:
      "Send gift card via Multi-channel like email, Social media, SMS/Text, and Print-at-home.",
  },
];
const REPORT = [
  {
    description:
      "Gift card life-cycle management, tracking, and visibility from issuance to order level redemption",
  },
  {
    description:
      "Customer data reporting and analytics based on gift card usage.",
  },
];

const SCHEDULE = [
  { description: "Out of stock gift card to retain customer" },
  { description: "Gift card balance reminder email to customer" },
];
const SALE = [
  {
    description:
      "Sell and Redeem Physical and Digital (eGift) Card issued by any POS like Square, Shopkeep, Vend, Revel, Poynt, Lightspeed, etc.",
  },
  { description: "Check balance, Reload Gift card at store and online" },
];
const GIFTCARD_FEATURES = [
  {
    image: Icons.Giftcard_01.default,
    title: "Gift Card Platform key features",
    subTitle: "",
    desc: "",
    list: GIFTCARD,
  },
  {
    rowClass: "flex-row-reverse",
    image: Icons.Sale.default,
    title: "Point of Sale",
    subTitle: "",
    desc: "",
    list: SALE,
  },
  {
    image: Icons.Report.default,
    title: "Reporting & Analytics",
    subTitle: "",
    desc: "",
    list: REPORT,
  },
  {
    rowClass: "flex-row-reverse",
    image: Icons.Schedule.default,
    title: "Schedule Delivery & Gift card for Out of Stock inventory",
    subTitle: "",
    desc: "",
    list: SCHEDULE,
  },
];

const GiftCard = () => {
  return (
    <Fragment>
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <Banner
          config={BANNERS_CONFIG.BIGCOMMERCE}
          titleClass={`bannerTitle`}
          allService={false}
          bgClass={"bg_BannerV1"}
        />
        <TrustedMerchantsV2 />

        {/* <TrustedMerchantsV1 /> */}

        <Header
          className={"bg_white pt_120 "}
          title={"Build a Rewards Program to acquire & retain customers"}
          // description={"All your gift card needs, covered"}
        />

        {GIFTCARD_FEATURES.map((card) => (
          <Features {...{ ...card }} url="#" />
        ))}

        <Header className={"mt_120"} title={"Additional  key features"} />

        <TabComponent
          config={GIFTCARD_TABS_CONFIG}
          pClass={"pt_0"}
          hideClass={"tab_hide"}
        />
        {GIFTCARD_TABS_CONFIG.PANNEL_DATA.map((card) => (
          <Features {...{ ...card }} url="#" hideClass={"section_hide"} />
        ))}
        <Testimonial
          title="Testimonials"
          subTitle="Hear from our Clients"
          sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
          bgColor={`bg_color`}
        />

        <IntegrationList
          title={"Integrations"}
          description={
            "Empower Your Brick & Click Store With Powerful Integrations"
          }
        />
        <CTA_1 />
        {/* <CaseStudiesSlider /> */}
        <Services />
      </Layout>
    </Fragment>
  );
};
export default GiftCard;

export const Head = () => {
  return GIFTCARD_SEO_HEAD.map((data, index) => (
    <SeoHead {...{ ...data }} key={index} />
  ));
};
