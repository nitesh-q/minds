import React from "react";
import Icons from "../../shared/assets";
const items = [
  { id: 1, image: Icons.Miva.default },
  { id: 2, image: Icons.Shopify.default },
  { id: 3, image: Icons.Woo.default },
  { id: 1, image: Icons.BigCommerce.default },
];

const SupportedBrand = ({ id, pClass, fclass, imgClass }) => {
  return (
    <section id="supportedBrand">
      <div className={`partner_logo_area_four  ${pClass}`}>
        <h3 className={`${fclass} `}>Install from</h3>
        <div className="row  partner_info">
          <div className="col-lg-4 col-sm-6  col-xsm-6">
            <div
              className={` logo_item  w_110 ${imgClass} mb_30 `}
              data-wow-delay="0.1s"
            >
              <a href="#">
                <img
                  className="h_auto"
                  src={Icons.Shopify_Logo.default}
                  alt="Shopify_Logo"
                />
                <img
                  className="h_auto"
                  src={Icons.Shopify.default}
                  alt="Shopify"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  col-xsm-6">
            <div
              className={` logo_item  w_110 ${imgClass}  mb_30   `}
              data-wow-delay="0.1s"
            >
              <a href="#">
                <img className="h_auto" src={Icons.Woo_Logo.default} alt="" />

                <img className="h_auto" src={Icons.Woo.default} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  col-xsm-6">
            <div
              className={` logo_item  w_110 ${imgClass}  mb_30   `}
              data-wow-delay="0.1s"
            >
              <a href="#">
                <img
                  className="h_auto"
                  src={Icons.BigCommerce_Logo.default}
                  alt=""
                />
                <img
                  className="h_auto"
                  src={Icons.BigCommerce.default}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  col-xsm-6">
            <div
              className={` logo_item  w_110 ${imgClass}  mb_30  `}
              data-wow-delay="0.1s"
            >
              <a href="#">
                <img
                  className="h_auto"
                  src={Icons.ShopifyPlus_Logo.default}
                  alt=""
                />
                <img
                  className="h_auto"
                  src={Icons.ShopifyPlus.default}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  col-xsm-6">
            <div
              className={` logo_item  w_110 ${imgClass}  mb_30  `}
              data-wow-delay="0.1s"
            >
              <a href="#">
                <img className="h_25" src={Icons.Miva.default} alt="" />
                <img className="h_25" src={Icons.Miva.default} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SupportedBrand;
