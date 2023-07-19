import React from "react";
import Layout from "../../components/Layout";
import { Breadcrumb, Services, TryAction,SeoHead } from "../../components";
import Icons from "../../shared/assets";
import IntegrationGrid from "../../components/IntegrationGrid";
import { INTEGRATIONS_SEO_HEAD } from "../../config";

const AllIntegrations = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName={Icons.BREADCRUMB.default}
          Ptitle="Integrations"
          Pdescription=""
        />
        <IntegrationGrid />
        <TryAction />
        <Services />
      </Layout>
    </div>
  );
};
export default AllIntegrations;

//SEO HEAD
export const Head = () => {
  return INTEGRATIONS_SEO_HEAD.map((data, index) => (
    <SeoHead {...{ ...data }} key={index} />
  ));
};
