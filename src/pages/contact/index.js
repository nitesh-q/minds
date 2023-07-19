import React from "react";
import Layout from "../../components/Layout";
import { Breadcrumb, Services, TryAction, ContactForm } from "../../components";
import Icons from "../../shared/assets";

const contact = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName={Icons.BREADCRUMB.default}
          Ptitle="Contact Us"
          Pdescription=""
        />
        <ContactForm />
        <TryAction />
        <Services />
      </Layout>
    </div>
  );
};
export default contact;
