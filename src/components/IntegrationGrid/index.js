import React, { Component } from "react";
// import Isotope from "isotope-layout/js/isotope";
import ImagesLoaded from "imagesloaded/imagesloaded";
import IntegrationGridCard from "./integrationGirdCard";
import Icons from "../../shared/assets";

const Head = {
  "*": "All",
  ECommerce: "E-Commerce",
  POS: "POS",
  Marketing: "Marketing",
  Email: "Email",
  Payment_Processing: "Payment Processing",
};

const data = [
  {
    label: "All",
    type: "*",
    image: "",
    title: "",
    desc: "",
  },
  {
    label: "E-Commerce",
    type: "ECommerce",
    image: Icons.Shopify_1.default,
    title: "Shopify",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },
  {
    label: " POS",
    type: "POS",
    image: Icons.Vend.default,
    title: "VEND",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },
  {
    label: "E-Commerce",
    type: "ECommerce",
    image: Icons.BigCommerce_1.default,
    title: "Big Commerce",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },


  {
    label: " POS",
    type: "POS",
    image: Icons.Heartland.default,
    title: "Heartland Retail",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },
  {
    label: " POS",
    type: "POS",
    image: Icons.Hike.default,
    title: "Hike",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },
  {
    label: " E-Commerce",
    type: "ECommerce",
    image: Icons.WooCommerce.default,
    title: "WooCommerce",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },

  {
    label: " Payment Processing",
    type: "Payment_Processing",
    image: Icons.Stripe.default,
    title: "Stripe",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },
  {
    label: " Email",
    type: "Email",
    image: Icons.Sendgrid.default,
    title: "SENDGRID",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },
  {
    label: "Email",
    type: "Email",
    image: Icons.mailgun.default,
    title: "MAILGUN",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },
  {
    label: " POS",
    type: "POS",
    image: Icons.Retail_Pro.default,
    title: "Retail Pro 9",
    desc: "Sell and redeem gift cards from your Retail Pro 9 POS. Sync gift cards from Retail Pro 9 and different eCommerce platforms.",
  },
  {
    label: "Marketing",
    type: "Marketing",
    image: Icons.ActiveCampaign.default,
    title: "ACTIVE_CAMPAIGN",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },
  {
    label: "Email",
    type: "Email",
    image: Icons.Awsses.default,
    title: "AWS_SES",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },

  {
    label: "Marketing",
    type: "Marketing",
    image: Icons.Omnisend_1.default,
    title: "OMNISEND",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },
  {
    label: "Marketing",
    type: "Marketing",
    image: Icons.Klaviyo_1.default,
    title: "KLAVIYO",
    desc: "Fully integrate your direct mail and e-gifting campaigns with Salesforce: Send, measure and scale everything using our 1-click integration.",
  },
];

class IntegrationGrid extends Component {
  state = {
    activeItem: "*",
  };

  componentDidMount() {
    var imgLoad = new ImagesLoaded("#work-portfolio");

    var _this = this;
    if (typeof window !== `undefined`) {
      // import Isotope API
      const Isotope = require("isotope-layout/js/isotope");

      // init Isotope
      imgLoad.on("progress", function (instance, image) {
        this.iso = new Isotope("#work-portfolio", {
          itemSelector: ".portfolio_item",
          layoutMode: "masonry",
        });
      });
    }
  }
  onFilterChange = (newFilter) => {
    if (typeof window !== `undefined`) {
      const Isotope = require("isotope-layout/js/isotope");
      this.setState({ activeItem: newFilter });
      if (this.iso === undefined) {
        this.iso = new Isotope("#work-portfolio", {
          itemSelector: ".portfolio_item",
          layoutMode: "masonry",
        });
      }
    }
    // this.iso.arrange({ filter: newFilter });

    if (newFilter === "*") {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  };

  onActive = (v) => (v === this.state.activeItem ? "active" : "");

  render() {
    return (
      <section className="portfolio_area sec_pad ">
        <div className="container container-xl">
          <div id="portfolio_filter" className="portfolio_filter mb_50">
            {Object.keys(Head).map((key, index) => (
              <div
              key={index}
                data-filter={key}
                className={`work_portfolio_item ${this.onActive(key)}`}
                onClick={() => {
                  this.onFilterChange(key);
                }}
              >
                {Head[key]}
              </div>
            ))}
          </div>
          <div className="row portfolio_gallery mb_30" id="work-portfolio">
            {data.map((i, index) => {
              if (!i.title) {
                return null;
              }
              return (
                <IntegrationGridCard
                  colClass={`col-lg-4 col-sm-6  ${i.type} `}
                  pImg={i.image}
                  title={i.title}
                  desc={i.desc}
                  type={i.label}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default IntegrationGrid;
