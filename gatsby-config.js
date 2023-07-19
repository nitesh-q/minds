require("dotenv").config({ path: "./.env" });

const plugins = [
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-smoothscroll`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images-native-lazy-load`,
          options: {
            loading: "lazy", // "lazy" | "eager" | "auto"
          },
        },
      ],
    },
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: "src/images/icon/logo.png",
    },
  },
  {
    resolve: `gatsby-plugin-advanced-sitemap`,
    options: {
      exclude: [
        `/case-study-details`,
        `/b2b-giftcards`,
        `/integration`,
    ],
      additionalSitemaps: [
        {
          url: `https://www.99minds.io/blog/sitemap_index.xml`,
        },
      ],
    },
  },
];

if (process.env.GATSBY_NODE_ENV === "prod") {
  plugins.push({
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        process.env.GATSBY_APP_GA_MEASUREMENT_ID, // Google Analytics / GA
      ],
    },
  });

  plugins.push({
    resolve: "gatsby-plugin-robots-txt",
    options: {
      sitemap: "https://www.99minds.io/sitemap.xml",
      policy: [{ userAgent: "*", allow: "/" }],
    },
  });
} else {
  plugins.push(`gatsby-plugin-no-index`);
}

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.99minds.io`,
  },
  plugins: plugins,
};
