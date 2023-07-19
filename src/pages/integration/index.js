import React from "react";
import {
  TryAction,
  Banner,
  Features,
  Header,
  Services,
  IntegartionDataPoints,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import { BANNERS_CONFIG } from "../../config";

const INTEGRATION_FEATURES = [
  {
    rowClass: "flex-row-reverse",

    image: Icons.Image_1.default,
    title: "Easy one-click integration. No, seriously.",
    subTitle: "",
    desc: "No hair pulling, no hassle. Just *click* and your integration is all set! That includes all your email marketing and SMS marketing too.",
    list: [],
  },
  {
    image: Icons.Image_2.default,
    title: "Connect all your BigCommerce stores at no extra cost.",
    subTitle: "",
    desc: "Other ESPs limit you to just one store. We don't! Easily sync and manage communications for multiple BigCommerce stores under one account.",
    list: [],
  },
  {
    rowClass: "flex-row-reverse",

    image: Icons.Image_3.default,
    title:
      "Leverage automated abandoned cart funnels to recover those lost sales.",
    subTitle: "",
    desc: "Automation shouldn't be hard, so we made it simple. Pre-populated and dynamic BigCommerce content blocks mean every abandoned cart recovery email or SMS is automatically personalized for each customer.",
    list: [],
  },
  {
    image: Icons.Image_4.default,
    title: "Create multivariable segments to increase customer LTV.",
    subTitle: "",
    desc: "People who buy from you are 72% more likely to purchase from you again. Send highly targeted email and SMS product recommendations based on your customers' previous purchases and website activity, and get the LTV boost you've been searching for.",
    list: [],
  },
  {
    rowClass: "flex-row-reverse",

    image: Icons.Image_5.default,
    title:
      "Provide an exceptional customer experience tailored to each and every customer.",
    subTitle: "",
    desc: "With hyper-personalized funnels based on individual activity, you can build 'set it and forget it automations' tailored to every customer based on product purchases, orders, frequency, product category, inventory levels, and so much more.",
    list: [],
  },
  {
    image: Icons.Image_6.default,
    title:
      "Find hidden growth opportunities with better tracking and reporting.",
    subTitle: "",
    desc: "No more digging for data or guessing about what's working. Get a birds-eye-view of contact growth and activity, total revenue, customer LTV, deliverability, and more to find areas to double down in your marketing efforts across email and SMS marketing campaigns.",
    list: [],
  },
];

const GiftCard = () => {
  return (
    <Layout>
      <Banner
        config={BANNERS_CONFIG.INTEGRATION}
        titleClass={`bannerTitle`}
        allService={true}
        mClass={"mb_90"}
        wClass={"mw_125"}
      />

      <Header
        className={"bg_white"}
        title={"Benefits of connecting Sendlane with BigCommerce"}
        description={""}
      />

      {INTEGRATION_FEATURES.map((card) => (
        <Features {...{ ...card }} url="#" />
      ))}
      <IntegartionDataPoints />
      <TryAction />
      <Services />
    </Layout>
  );
};
export default GiftCard;
