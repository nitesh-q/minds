import Icons from "../shared/assets";

export const LOYALTY_TABS_CONFIG = {
  HEAD: [{ Title: "" }],
  PANNEL_DATA: [
    {
      id: "controlPanel",
      label: "Control Panel",
      selected: "true",
      image: Icons.Control_Pannel.default,
      title: "Control Panel",
      description1: "Manage a loyalty program that your customers love",
      description2: "",
      list: [
        {
          id: 1,
          title: "Points expiration : ",
          description:
            "Remind customers about any points about to expire with built-in reminder emails.",
        },
        {
          id: 2,
          title: "Custom branding : ",
          description:
            "Give your points a name like “stars” or “glam bucks” to create a loyalty experience that matches your brand.",
        },
        {
          id: 3,
          title: "Limit settings : ",
          description:
            "Decide how often your customers can earn points for any given action.",
        },
        {
          id: 4,
          title: "Integration : ",
          description:
            "Integrate with different tools and vendors you already use to run your business, including all of the major ecommerce platforms, email/SMS marketing solutions, productivity apps, and more.",
        },
      ],
    },
    {
      id: "rewardPage",
      label: "Rewards",
      selected: "true",
      image: Icons.Rewards_Loyalty.default,
      title: "Rewards",
      description1: "Build a rewards experience that your customers love",
      description2: "",
      list: [
        {
          title: "Customization : ",
          description:
            "Make an on-brand launcher with a full range of customizable settings including changing the background and button colors, labels, and more.",
        },
        {
          title: "Points Branding : ",
          description: "Create the perfect on-brand point names.",
        },
      ],
    },
    {
      id: "promote",
      label: "Promote",
      selected: "true",
      image: Icons.Promote_Loyalty.default,
      title: "Promote",
      description1: "",
      description2: "",
      list: [
        {
          title: "",
          description:
            "Automate email and texts to customers to confirm enrollment and keep them updated on their rewards.",
        },
        {
          title: "",
          description:
            "Market loyalty enrollees with automated text message campaigns and email campaigns via 99minds automation Marketing.",
        },
      ],
    },
    {
      id: "reportsAnalytics",
      label: "Reports & Analytics",
      selected: "true",
      image: Icons.ReportAnalytic.default,
      title: "Reports & Analytics",
      description1:
        "Track sales and see the impact of your Loyalty program in one place",
      description2: "",
      list: [
        {
          title: "",
          description:
            "Your 99minds Dashboard tracks data like total loyalty customers, loyalty rewards, and top loyalty customers.",
        },
        {
          title: "",
          description:
            "You can even compare average spending and visits from loyalty versus non-loyalty customers.",
        },
      ],
    },
  ],
};
