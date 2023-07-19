import Icons from "../shared/assets";

export const BULK_GIFTCARD_LIST = [
  {
    title: "",
    description:
      " Generate gift cards numbers for printing physical plastic gift card",
  },
  {
    title: "",
    description: "Generate gift cards numbers for Corporate Gifting",
  },
];

export const MIGRATION_LIST = [
  {
    title: "",
    description:
      "Import existing gift cards | voucher | Certificates balance into 99minds.",
  },
  {
    title: "",
    description:
      "Seamless migration from existing gift card processor to 99minds",
  },
];

export const MULTICURRENCY_LIST = [
  {
    title: "",
    description:
      " Supports 100+ currencies, including USD, CAD, EUR, GBP, KRW, JPY, CNY & many more!",
  },
];

export const MULTI_STORE_LIST = [
  {
    title: "",
    description: "Gift card can be redeemed at multiple locations",
  },
];

export const RETURN_REFUND_LIST = [
  {
    title: "",
    description: " Gift card can be issue for merchandise return.",
  },
  {
    title: "",
    description:
      " Gift card amount can be updated on merchandise return bought on gift card.",
  },
];
export const SCHEDULE_DELIVERY_LIST = [
  {
    title: "",
    description:
      " Schedule Gift card delivery on special occasion like Birthday, Anniversary, Christmas, Hanukkah etc.",
  },
  {
    title: "",
    description: "Schedule Gift card delivery up to 180 days",
  },
];

export const GIFTCARD_TABS_CONFIG = {
  HEAD: [{ Title: "" }],
  PANNEL_DATA: [
    {
      id: "bulk_gift_card",
      label: "Bulk Gift Card ",
      selected: "true",
      image: Icons.Bulk_Gifcard.default,
      title: "Bulk Gift Card ",
      subHeading:"",
      description1: "",
      description2: "",
      list: BULK_GIFTCARD_LIST,
    },
    {
      id: "migration",
      label: "Import & Migration",
      selected: "false",
      image: Icons.Import_Migration.default,
      title: "Import & Migration",
      description1: "",
      description2: "",
      list: MIGRATION_LIST,
    },
    {
      id: "multicurrency",
      label: "Multi-Currency",
      selected: "false",
      image: Icons.Multi_Currency.default,
      title: "Multicurrency",
      subHeading:"",
      description1: "",
      description2: "",
      list: MULTICURRENCY_LIST,
    },

    {
      id: "multi-Store",
      label: "Multi-Store",
      image: Icons.Multi_Store.default,
      title: "Multi-Store",
      description1: "  ",
      description2: "",
      list: MULTI_STORE_LIST,
    },
    {
      id: "return_refund",
      label: "Return & Refund",
      image: Icons.Refund_Giftcard.default,
      title: "Return & Refund",
      subHeading:"",
      description1: "",
      description2: "",
      list: RETURN_REFUND_LIST,
    },
    {
      id: "schedule_delivery",
      label: "Schedule Delivery",
      image: Icons.Schedule_Delivery.default,
      title: "Schedule Delivery",
      subHeading:"",
      description1: "",
      description2: "",
      list: SCHEDULE_DELIVERY_LIST,
    },
  ],
};
