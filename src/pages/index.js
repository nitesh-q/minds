import * as React from "react";
import ZohoSalesIQ from "../components/ZohoSalesIQ";
import Home from "./home";
import { SeoHead } from "../components";
import { HOME_SEO_HEAD } from "../config";

const IndexPage = () => {
  return (
    <div>
      <Home />
      {process.env.GATSBY_NODE_ENV === "prod" && <ZohoSalesIQ />}
    </div>
  );
};

export default IndexPage;

export const Head = () => {
  return HOME_SEO_HEAD.map((data, index) => (
    <SeoHead {...{ ...data }} key={index} />
  ));
};
