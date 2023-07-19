import React, { useState } from "react";
import BrandModal from "../BrandModal";

// const ICONS = [
//   {
//     icon: Icons.Shopify.default,
//     desc: " Connect a Shopify account to sell & redeem gift cards on your store.",
//   },
//   {
//     icon: Icons.Woo.default,
//     desc: " Connect a Shopify account to sell & redeem gift cards on your store.",
//   },
//   {
//     icon: Icons.BigCommerce.default,
//     desc: " Connect a Shopify account to sell & redeem gift cards on your store.",
//   },
//   {
//     icon: Icons.ShopifyPlus.default,
//     desc: " Connect a Shopify account to sell & redeem gift cards on your store.",
//   },
// ];
const StartedFreeButton = ({ btnClass,className="" }) => {
  const [showModal, setShowModal] = useState(false);
  const toggle = () => setShowModal(!showModal);
  return (
    <div className={`row w-100 service ${className}`}>
      {/* <div className="col-lg-8">
      <form action="#" className="contact_form_box" method="post">
        <div className="form-group text_box">
          <input
          // className="shadow p-3 mb-5 bg-white rounded"
            type="text"
            name="email"
            id="email"
            placeholder="Enter mail"
          />
        </div>
      </form>
    </div> */}
      <div className="col-lg-8">
        <button
          className={` btn_get btn_get_two ${btnClass}`}
          onClick={() => toggle()}
        >
          Get Started for free
        </button>
      </div>
      <BrandModal toggle={()=>toggle()} showModal={showModal} />
    </div>
  );
};

export default StartedFreeButton;
