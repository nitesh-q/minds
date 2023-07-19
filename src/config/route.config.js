export const ROUTES = {
  HOME: "/home",
  PRODUCTS: "./",
  INTEGRATIONS: "/integrations",
  RESOURCES: "./",
  PRICE: "/pricing",
  SIGN_IN: "/signup",
  
};

export const ROUTES_LABEL = {
  HOME: "Home",
  PRODUCTS: "Products",
  INTEGRATIONS: "Integrations",
  BIGCOMMERCE: "BigCommerce",
  PRICE: "Pricing",
  SIGN_IN: "Sign In",
  GIFTCARD: "Gift Card",
  LOYALTY: "Loyalty Program",
  COUPONS: "Coupons",
  REFERRAL: "Referral Program",
  AUTOMATION: "Automated Workflows",
  COUPONS_GENERATORS:"/coupongenerators",//<= me
  // B2B_GIFTCARDS: "B2B Gift Cards",
  STORE_CREDIT: "Store Credit",
  DEVELOPERS_1: "Developers 1",
  DEVELOPERS_2: "Developers 2",
  RESOURCES: "Resources",
  BLOG: "Blog",
  BLOG_1: "Blog_1",
  BLOG_2: "Blog_2",
  DOCUMENTATION: "Documentation",
  
};

export const CHILD_ROUTES = {
  GIFTCARD: "/giftcard",
  LOYALTY: "/loyalty",
  COUPONS: "/coupons",
  REFERRAL: "/referral",
  AUTOMATION: "/automated-workflows",
  COUPONS_GENERATORS:"/coupongenerators",//<= me
  B2B_GIFTCARDS: "/b2b-giftcards",
  STORE_CREDIT: "/store-credit",
  DEVELOPERS_1: "/giftcard",
  DEVELOPERS_2: "/giftcard",
  CASE_STUDIES: "/case-studies",
  BIGCOMMERCE: "/bigcommerce",
  BLOG: "/blog",
  THANK_YOU: "/book-a-demo-thank-you",
  DOCUMENTATION: "https://support.99minds.io/portal/en/home",
};

export const CHILDRENS = {
  HOME: [],
  PRODUCTS: [
    "GIFTCARD",
    "STORE_CREDIT",
    "LOYALTY",
    "COUPONS",
    "REFERRAL",
    "AUTOMATION",
    "B2B_GIFTCARDS",
  ],
  INTEGRATIONS: [],
  RESOURCES: ["CASE_STUDIES", "BLOG", "DOCUMENTATION"],
  PRICE: [],
  SIGN_IN: [],
};

export const ADD_DEVIDER_BEFORE = { SIGN_IN: true };
