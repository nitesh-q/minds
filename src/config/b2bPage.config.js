import Icons from "../shared/assets";

export const B2B_GIFTCARD_LIST = [
  {
    title: "",
    description: " Bulk Order Gift card",
  },
  {
    title: "",
    description: "Customer KYC",
  },
];

export const PHYSICAL_GIFTCARD_LIST = [
  {
    title: "",
    description: "Direct to recipient Gift",
  },
  {
    title: "",
    description: "Card Delivery",
  },
  {
    title: "",
    description: " Bulk Gift card fulfillment",
  },
];



export const PRINTING_LIST = [
  {
    title: "",
    description: "Gift Card Packaging",
  },
  {
    title: "",
    description: "Design and Creative",
  },
  {
    title: "",
    description: "Services",
  },
];
export const THIRD_PARTY_LIST = [
    {
      title: "",
      description: "Blackhawk",
    },
    {
        title: "",
        description: "Incomm",
      },
  ];

export const GIFTCARD_API_LIST = [
  {
    title: "",
    description:
      " Loyalty Programs",
  },
  {
    title: "",
    description:
      "Rewards Program",
  },
  {
    title: "",
    description:
      " Consumer Promotions",
  },
];

export const B2B_TABS_CONFIG = {
  HEAD: [{ Title: "" }],
  PANNEL_DATA: [
    {
      id: "b2b_gift_card",
      label: "B2B Gift Card ",
      selected: "true",
      image: Icons.ComputerImage.default,
      title: "B2B Corporate Gift Card Program",
      description1: "",
      description2: "",
      list: B2B_GIFTCARD_LIST,
    },
    {
      id: "physical_gift_card",
      label: "Physical Gift Card",
      selected: "false",
      image: Icons.ComputerImage.default,
      title: "Physical Gift Card Fulfillment",
      description1: "",
      description2: "",
      list: PHYSICAL_GIFTCARD_LIST,
    },
    {
      id: "printing",
      label: "Printing",
      selected: "false",
      image: Icons.ComputerImage.default,
      title: "Printing Plastic Gift Card On Carrier",
      subTitle: "",
      description1: "",
      description2: "",
      list: PRINTING_LIST,
    },

    {
      id: "third_party",
      label: "Third Party",
      image: Icons.ComputerImage.default,
      title: "Third Party Distribution",
      description1: "  ",
      description2: "",
      list: THIRD_PARTY_LIST,
    },
    {
      id: "gift_card_API",
      label: "Gift Card API",
      image: Icons.ComputerImage.default,
      title: "Gift Card API",
      subTitle: "",
      description1: "",
      description2: "",
      list: GIFTCARD_API_LIST,
    },
  ],
};
