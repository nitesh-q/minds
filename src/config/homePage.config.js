import Icons from "../shared/assets";
import { CHILD_ROUTES } from "./route.config";

export const GIFTCARD_LIST = [
  {
    id: 1,
    title: "Sell :",
    description: " eGift (Digital) & Physical Gift card online,and in-store",
  },
  {
    id: 1,
    title: "Omnichannel :",
    description:
      " Drive Revenue with Omnichannel & Multichannel gift card experience.",
  },
  {
    id: 1,
    title: "eGift Card :",
    description:
      " Customer can send gift card via email,Social media, SMS/Text, and Print-at-home.",
  },
  {
    id: 1,
    title: "Physical Gift Card :",
    description:
      " We offer Print-on-demand physical gift card and fulfilment/shipping services.",
  },
  {
    id: 1,
    title: "Schedule :",
    description:
      " Out of Stock Gift card & Schedule delivery for future occasion",
  },
];
export const STORE_CREDIT_LIST = [
  {
    id: 1,
    title: "",
    description: "To refund a customer for their returns",
  },
  {
    id: 2,
    title: "",
    description: "To offer cashback on customers spending",
  },
  {
    id: 3,
    title: "",
    description: "To reward customers for their business",
  },
  {
    id: 4,
    title: "",
    description: " To encourage sales during specific periods",
  },
  {
    id: 5,
    title: "",
    description: " To offer compensation for a poor experience",
  },
];
export const LOYALTY_LIST = [
  { id: 1, title: "", description: "VIP tiers" },
  { id: 2, title: "", description: "Point Program" },
  { id: 3, title: "", description: "Cash Back Loyalty Programs" },
  { id: 4, title: "", description: "Punch card Program" },
  { id: 5, title: "", description: "Premium Loyalty Program" },
];
export const REFERRAL_LIST = [
  { id: 1, title: "", description: "Customizable Widget" },
  { id: 2, title: "", description: "Branded Template experience" },
  { id: 3, title: "", description: "Social Sharing link" },
  { id: 4, title: "", description: "Referral link" },
];
export const COUPONS_LIST = [
  { id: 1, title: "", description: "Bulk Coupons Generation" },
  { id: 2, title: "", description: "Dynamic Coupons" },
  { id: 3, title: "", description: "Unique Coupon code" },
  { id: 4, title: "", description: "Promo Codees." },
  { id: 5, title: "", description: "SKU Based Coupon" },
];
export const WALLET_LIST_ = [
  {
    id: 1,
    title: "",
    description:
      "Digital Loyalty Card & Gift Card compatible with Apple & Google Wallet",
  },
];
export const AUTOMATION_LIST = [
  { id: 1, title: "", description: "Pre-built workflow template" },
  { id: 2, title: "", description: "Loyalty points & Rewards" },
  { id: 3, title: "", description: "Upsell using Gift Card" },
  { id: 4, title: "", description: "Store credit as Refunds." },
  { id: 5, title: "", description: "Adding unique Promo codes/Coupon" },
];

export const HOME_TAB1_CONFIG = {
  HEAD: [{ Title: "Customer Engagement & Retention Platform" }],
  PANNEL_DATA: [
    {
      id: "giftcard",
      label: "Gift Card",
      selected: "true",
      image: Icons.Giftcard_img.default,
      title: "Gift Cards",
      subHeading: "",
      description1: "",
      description2: "",
      list: GIFTCARD_LIST,
      url: CHILD_ROUTES.GIFTCARD,
    },
    {
      id: "storecredit",
      label: "Store Credit",
      selected: "false",
      image: Icons.StoreCredit_img.default,
      title: "Store Credit",
      subHeading: "",
      description1:
        "Offering your customer’s store credit can be a great way of improving customer retention.Merchant can use Store credit:",
      description2:
        " In 99minds, Store credit can be quickly added to customer accounts from the control panel and automation using workflow engine.",
      list: STORE_CREDIT_LIST,
      url: CHILD_ROUTES.STORE_CREDIT,
    },
    {
      id: "loyalty",
      label: "Loyalty Program",
      selected: "false",
      image: Icons.Loyalty_img.default,
      title: "Loyalty",
      subHeading: "",
      description1:
        "Reward your customers for purchases and otheractions with points which can be redeemed for discounts.",
      description2: "",
      list: LOYALTY_LIST,
      url: CHILD_ROUTES.LOYALTY,
    },

    {
      id: "referral",
      label: "Referral",
      image: Icons.Refferal_img.default,
      title: "Referral",
      subHeading: "",
      description1:
        "  Boost your organic sales by adding a customer referral program to your eCommerce store",
      description2: "",
      list: REFERRAL_LIST,
      url: CHILD_ROUTES.REFERRAL,
    },
    {
      id: "coupons",
      label: "Coupons",
      selected: "false",
      image: Icons.Coupons_img.default,
      title: "Coupons",
      subHeading: "Robust coupon creation",
      description1:
        "Generate millions of unique coupons in a few clicks, set rules, coupon lengths, etc.",
      description2: "",
      list: COUPONS_LIST,
      url: CHILD_ROUTES.COUPONS,
    },
    {
      id: "wallet",
      label: "Digital Wallet",
      selected: "false",
      image: Icons.Wallet_img.default,
      title: "Digital Wallet",
      subHeading: "",
      description1:
        "Empower customers to store gift cards, loyalty points, coupons, store credit.",
      description2: "",
      list: WALLET_LIST_,
    },
    {
      id: "automation",
      label: "Automated Workflows",
      image: Icons.Automation_img.default,
      title: "Automated Workflows",
      subHeading: "",
      description1:
        "For ecommerce/retailers brands, Customer acquisition & retention automation enables you to focus on acquiring new customers, and retain customers using:",
      description2: "",
      list: AUTOMATION_LIST,
      url: CHILD_ROUTES.AUTOMATION,
    },
  ],
};

export const HOME_TAB2_CONFIG = {
  HEAD: [{ Title: "" }],
  PANNEL_DATA: [
    // {
    //   id: "refferal1",
    //   label: "Refferral",
    //   selected: "true",
    //   image: Icons.Reward.default,
    //   title: "Refer a Friend",
    //   subTitle: "",
    //   description1:
    //     " Boost yo organic seles by adding a customer refferal program to your eCommerce store",
    //   description2: "",
    //   list: [
    //     // {
    //     //     id: 1,
    //     //     title: "",
    //     //     description: "",
    //     //   },
    //   ],
    //   url:CHILD_ROUTES.REFERRAL
    // },
    {
      id: "onboarding",
      label: "Onboarding",
      selected: "false",
      image: Icons.OnBoarding.default,
      title: "Onboarding",
      // subTitle: "",
      // description1: "  When someone creates a new account, trigger a one-time discount email immeadiately after completion of the Sign-up form",
      // description2: "",
      list: [
        // {
        //   id: 1,
        //   title: "",
        //   description: "",
        // },
      ],
      url: "#",
    },
    {
      id: "upsell",
      label: "Upsell",
      selected: "false",
      image: Icons.Upsell.default,
      title: "Upsell",
      // subTitle: "",
      // description1:
      //   "Based on Customer's Order data, Send Promotional Store Credit to Customer",
      // description2: "",
      list: [
        // { id: 1, title: "", description: "" },
      ],
      // url: "#",
    },

    {
      id: "crosssell",
      label: "Cross Sell",
      image: Icons.CrossSell.default,
      title: "Cross Sell",
      subTitle: "",
      // description1:
      //   "Send Coupons/Gift card specific to relevent product in the order for future purchase",
      // description2: "",
      list: [
        // { id: 1, title: "", description: "" },
      ],
      // url: "#",
    },
    {
      id: "refund",
      label: "Refund",
      image: Icons.Refund.default,
      title: "Refund",
      // subTitle: "",
      // description1: "Issue store credit/gift card as refund after goods return",
      // description2: "",
      list: [
        // { id: 1, title: "", description: "" },
      ],
      // url: "#",
    },

    {
      id: "reward",
      label: "Reward",
      selected: "false",
      image: Icons.Reward.default,
      title: "Reward",
    //   subTitle: "",
    //   description1:
    //     " Reward users with store credit/gift card after reaching order count threshold",
    //   description2: "",
      list: [
        // { id: 1, title: "", description: "" },
      ],
    //   url: "#",
    },
    {
      id: "retain",
      label: "Retain",
      selected: "false",
      image: Icons.Retain01.default,
      title: "Reward",
      // subTitle: "",
      // description1:
      //   "  Automatically trigger a retention campaign when users meet segment conditions such as inactive or canceled",
      // description2: "",
      list: [
        // {
        //   id: 1,
        //   title: "",
        //   description: " ",
        // },
      ],
      // url: "#",
    },
  ],
};
