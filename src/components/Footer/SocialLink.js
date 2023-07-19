import React from "react";
import { Link } from "gatsby";
import CompanyLogo from "../../images/logo/logo.png";

/**
 * Social links
 * @param {*} param0
 * @returns
 */
const SocialLink = ({ title, items }) => {
  return (
    // <div
    //   className="f_widget social-widget  wow fadeInLeft"
    //   data-wow-delay="0.4s"
    // >
    //   {/* <h3 className="f-title f_600 t_color f_size_18">{title}</h3> */}
    //   <div className="f_social_icon">
    //     {items.map((item, index) => {
    //       return (
    //         <Link to="/" key={index}>
    //           <i className={item.icon}></i>
    //         </Link>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="">
      <div
        className="f_widget dark_widget company_widget"
        data-wow-delay="0.2s"
      >
        <a href="index.html" className="f-logo">
          <img src={CompanyLogo} alt="" />
        </a>
        <p>
          99minds platform enables you to create coupons, gift cards, discounts,
          send out referrals, build loyalty programs, and location-based
          promotions for your customers
        </p>
        <div className="f_social_icon">
          {items.map((item, index) => {
            return (
              <a href={item.url} key={index} target="_blank">
                <i className={item.icon}></i>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialLink;
