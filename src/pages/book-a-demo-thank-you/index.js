import React from "react";
import Layout from "../../components/Layout";
import { Link } from "gatsby";
import { Breadcrumb } from "../../components";
import Icons from "../../shared/assets";
import ServiceSubscribe from "../../components/ServiceSubscribe";

const ThankYou = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_log" mClass="menu_four" nClass="menu">
        {/* <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName={Icons.BREADCRUMB.default}
          Ptitle="About Us"
          Pdescription=""
        /> */}
        <section className="pricing_area_two sec_pad">
          <div class="sec_title text-center startup_tab_img">
           
            <div class="row chat_features_content">
              <div class="col-lg-8 offset-lg-2">
              <div class="subscribe_form_info text-center drdt-ignore-dark">
        <h1 class="f_600 f_size_30 l_height30 t_color3 mb_30 saas_subscribe_color drdt-ignore-dark">
        Check your inbox to accept the calendar invite!</h1>
  <p class="f_400 f_size_16 l_height30 mb-0 text-justify ">
  Thanks for booking a demo! Your meeting is confirmed.
                </p>
    
<Link to="https://www.99minds.io/blog/" target="_blank"><button class="btn_hover btn_four mt_40 drdt-ignore-dark" type="submit">
Check out this article to read</button></Link> 
        <p class="mchimp-errmessage drdt-ignore-dark" style={{display: 'none'}}></p>
    <p class="mchimp-sucmessage drdt-ignore-dark" style={{display: 'none'}}> </p>

</div>
              
              </div>
            </div>
          </div>
        </section>
        {/* <ServiceSubscribe sClass="s_form_info_two" /> */}
      </Layout>
    </div>
  );
};
export default ThankYou;
