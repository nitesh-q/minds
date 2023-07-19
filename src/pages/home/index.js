import React from "react";
import Layout from "../../components/Layout";
import {
  Testimonial,
  TryAction,
  Header,
  TabComponent,
  DigitalBanner,
  Services,
  IntegrationList,
  TrustedMerchantsV2,
  VerticallyTabComponent,
  Features,
  SeoHead,
} from "../../components";
import {
  HOME_TAB1_CONFIG,
  BANNERS_CONFIG,
  TESTIMONIAL_CONFIG,
  HOME_TAB2_CONFIG,
  HOME_SEO_HEAD,
} from "../../config";
import CouponGenerator from "../coupongenerator";


const Home = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      <DigitalBanner config={BANNERS_CONFIG.HOME} allService={false} />
      <TrustedMerchantsV2 bgClass={"bg_black"} />
      {/* <Partner oClass={"logo_item_opacity"} pClass={"sec_pad pb_0"}/> */}
    <CouponGenerator/>
      <Header
        className={"bg_white pt_120 pb_0"}
        title={"Customer Engagement & Retention Platform"}
        hideClass={"section_hide"}
      />

      <TabComponent
        config={HOME_TAB1_CONFIG}
        rClass={"reduce_height"}
        hideClass={"tab_hide"}
      />

      {HOME_TAB1_CONFIG.PANNEL_DATA.map((card) => (
        <Features {...{ ...card }} url="#" hideClass={"section_hide"} />
      ))}

      <Header
        className={"mb_50"}
        title={"Grow your store and drive revenue with Marketing Automation "}
      />
      <VerticallyTabComponent
        config={HOME_TAB2_CONFIG}
        icon={true}
        pClass={"pt_0"}
        hideClass={"tab_hide"}
      />
      {HOME_TAB2_CONFIG.PANNEL_DATA.map((card) => (
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
      <TryAction />
      <Services />
    </Layout>
  );
};
export default Home;

export const Head = () => {
  return HOME_SEO_HEAD.map((data, index) => (
    <SeoHead {...{ ...data }} key={index} />
  ));
};
