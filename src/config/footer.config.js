import { CHILD_ROUTES } from "./route.config";
export const FOOTER_SEQUENCE = [
  "COMPANY_WIDGET",
  "ABOUT_WIDGET",
  "TERM_CONDITION",
  "SOCIAL_LINKS",
  "SOCIAL_ICONS",
  "COPY_WRITE",
  "TESTTIMONIAL_TEXT",
  "ABOUT_LINKS",
  "HELP_LINKS",
  "PRIVACY_LINKS",
  "ABOUT",
  "SOLUTIONS",
  "TEAM_SOLUTION",
];

export const FOOTER_CONFIG = {
  COMPANY_WIDGET: [
    {
      id: 1,
      title: "Get In Touch",
      description:
        "Don’t miss any updates of our new templates and extensions.!",
    },
  ],

  WIDGETS: [
    {
      id: 1,
      title: "Products",
      menuItems: [
        { id: 1, url: CHILD_ROUTES.GIFTCARD, text: "Gift Cards" },
        { id: 2, url: CHILD_ROUTES.STORE_CREDIT, text: "Store Credit" },
        { id: 3, url: CHILD_ROUTES.LOYALTY, text: "Loyalty Programs" },
        { id: 4, url: CHILD_ROUTES.COUPONS, text: "Coupons" },
        { id: 5, url: CHILD_ROUTES.REFERRAL, text: "Referral Programs" },
        { id: 6, url: CHILD_ROUTES.AUTOMATION, text: "Automated Workflows" },
        // { id: 7, url: CHILD_ROUTES.B2B_GIFTCARDS, text: "B2B Gift Cards" },
        // { id: 8, url: "#", text: "Promotion Engine" },
      ],
    },
    {
      id: 2,
      title: "Resources",
      menuItems: [
        // { id: 1, url: CHILD_ROUTES.CASE_STUDIES, text: "Case Studies" },
        { id: 2, url: "/blog", text: "Blog" },
        { id: 3, url: "https://support.99minds.io/portal/en/home", text: "Documentation" },

      ],
    },
    {
      id: 3,
      title: "About Us",
      menuItems: [
        { id: 1, url: "/about-us", text: "About Us" },
        { id: 2, url: "/contact", text: "Contact" },
        // { id: 3, url: "#", text: "Join Us" },
      ],
    },
  ],

  TERM_CONDITION: [
    {
      id: 1,
      title: "Team Solutions",
      menuItems: [
        { id: 1, url: "#", text: "Support" },
        { id: 2, url: "#", text: "Sales" },
        { id: 3, url: "#", text: "Report Abuse" },
        { id: 4, url: "#", text: "System Status" },
      ],
    },
  ],

  SOCIAL_LINKS: [
    {
      id: 1,
      title: "Team Solutions",
      menuItems: [
        {
          id: 1,
          url: "https://www.facebook.com/99mindsloyaltypromotionsgiftcard/",
          icon: "ti-facebook",
        },
        {
          id: 2,
          url: "https://twitter.com/99mindmarketing",
          icon: "ti-twitter-alt",
        },
        {
          id: 3,
          url: "https://www.linkedin.com/company/99minds-loyalty-promotions-and-giftcard/",
          icon: "ti-linkedin",
        },
        {
          id: 4,
          url: "https://www.instagram.com/99mindsloyaltypromotions/",
          icon: "ti-instagram",
        },
      ],
    },
  ],

  SOCIAL_ICONS: [
    {
      id: 1,
      url: "https://www.facebook.com/",
      icon: "ti-facebook",
    },
    {
      id: 2,
      url: "#",
      icon: "ti-twitter-alt",
    },
    {
      id: 3,
      url: "#",
      icon: "ti-vimeo-alt",
    },
    {
      id: 4,
      url: "#",
      icon: "ti-pinterest",
    },
  ],

  COPY_WRITE: `Copyright © ${new Date().getFullYear()} 99minds Inc. All rights reserved.`,

  TESTTIMONIAL_TEXT: [
    {
      id: 1,
      image: "new/member_01.jpg",
      description:
        "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
      authorName: "Phillip Anthropy",
      authorPost: "UI/UX designer",
    },
    {
      id: 2,
      image: "new/member_01.jpg",
      description:
        "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
      authorName: "Phillip Anthropy",
      authorPost: "UI/UX designer",
    },
    {
      id: 3,
      image: "new/member_01.jpg",
      description:
        "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
      authorName: "Phillip Anthropy",
      authorPost: "UI/UX designer",
    },
    {
      id: 4,
      image: "new/member_01.jpg",
      description:
        "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
      authorName: "Phillip Anthropy",
      authorPost: "UI/UX designer",
    },
  ],

  ABOUT_LINKS: [
    {
      id: 1,
      url: "#",
      item: "Developer",
    },
    {
      id: 2,
      url: "#",
      item: "Blog",
    },
    {
      id: 3,
      url: "#",
      item: "Investor",
    },
    {
      id: 4,
      url: "#",
      item: "Sitemap",
    },
    {
      id: 5,
      url: "#",
      item: "Jobs",
    },
  ],

  HELP_LINKS: [
    {
      id: 1,
      url: "#",
      item: "Help and Contact",
    },
    {
      id: 2,
      url: "#",
      item: "Fees",
    },
    {
      id: 3,
      url: "#",
      item: "Security",
    },
    {
      id: 4,
      url: "#",
      item: "App",
    },
    {
      id: 5,
      url: "#",
      item: "Shop",
    },
  ],

  PRIVACY_LINKS: [
    {
      id: 1,
      url: "#",
      item: "Privacy Policy",
    },
    {
      id: 2,
      url: "#",
      item: "Legal Agreement",
    },
    {
      id: 3,
      url: "#",
      item: "Feedback",
    },
  ],

  ABOUT: [
    {
      id: 1,
      url: "#",
      text: "Company",
    },
    {
      id: 2,
      url: "#",
      text: "Leadership",
    },
    {
      id: 3,
      url: "#",
      text: "Diversity",
    },
    {
      id: 4,
      url: "#",
      text: "Jobs",
    },
    {
      id: 5,
      url: "#",
      text: "Press",
    },
    {
      id: 6,
      url: "#",
      text: "Wavelength",
    },
  ],

  SOLUTIONS: [
    {
      id: 1,
      url: "#",
      text: "Project Management",
    },
    {
      id: 2,
      url: "#",
      text: "Agile",
    },
    {
      id: 3,
      url: "#",
      text: "Task Management",
    },
    {
      id: 4,
      url: "#",
      text: "Reporting",
    },
    {
      id: 5,
      url: "#",
      text: "Work Tracking",
    },
    {
      id: 6,
      url: "#",
      text: "See All Uses",
    },
  ],

  TEAM_SOLUTION: [
    {
      id: 1,
      url: "#",
      text: "Engineering",
    },
    {
      id: 2,
      url: "#",
      text: "Designers",
    },
    {
      id: 3,
      url: "#",
      text: "Sales",
    },
    {
      id: 4,
      url: "#",
      text: "Developers",
    },
    {
      id: 5,
      url: "#",
      text: "Marketing",
    },
    {
      id: 6,
      url: "#",
      text: "See All team",
    },
  ],
};
