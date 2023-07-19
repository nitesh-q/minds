import React, { useState } from "react";
import {
  TABLE_HEAD,
  CHECK_ICON,
  TABLE_BOTTOM,
  PRICE_LIST_AMOUNT,
  TOP_PRODUCT_PRICE_LIST,
  REMAINING_PRODUCT_PRICE_LIST,
} from "../../../config";
import BrandModal from "../../BrandModal";

const getClassNameForIcon = (icon) => {
  switch (icon) {
    case "Y":
      return "icon_check_alt2";
    case "N":
      return "icon_close";
    default:
      return null;
  }
};
const PriceList = () => {
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggle = () => setShowModal(!showModal);

  return (
    <section className="pricing_area_four sec_pad">
      <div className="container container-xl">
        <div className="hosting_title security_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            <span>For teams of all sizes, in the cloud</span>
          </h2>
          <p>
            Our FREE plan comes with 50 transactions, 1 Campaign, 1 Integration
            and $0.5 per additional transaction.
          </p>
        </div>
        <div className="price_info_two price_info_three">
          <div className="price_head">
            {TABLE_HEAD.map((i, index) => {
              return (
                <div className="p_head" key={index}>
                  <h5>{i}</h5>
                </div>
              );
            })}
          </div>
          <div className="price_body">
            {PRICE_LIST_AMOUNT.map((list, index) => {
              return (
                <div className="pr_list" key={index}>
                  <div className="price_item">
                    <h5
                      className="pr_title"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Save time by using keyboard shortcuts all across SaasLand"
                    >
                      {list.Column1}
                    </h5>
                  </div>
                  {TABLE_HEAD.map((i, index) => {
                    if (!i) {
                      return null;
                    }
                    return (
                      <div className="price_item" data-title={i} key={index}>
                        <h5 className="check">
                          <div className="d-flex justify-content-center align-items-center">
                            {i === "Enterprise" ? "" : <sup>$</sup>}

                            {CHECK_ICON.includes(list[i]) ? null : list[i]}
                            <i className={getClassNameForIcon(list[i])}></i>

                            {i === "Enterprise" ? "" : <sub>/month</sub>}
                          </div>
                        </h5>{" "}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            {TOP_PRODUCT_PRICE_LIST.map((list, index) => {
              return (
                <div className="pr_list" key={index}>
                  <div className="price_item">
                    <h5
                      className="pr_title"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Save time by using keyboard shortcuts all across SaasLand"
                    >
                      {list.Column1}
                    </h5>
                  </div>
                  {TABLE_HEAD.map((i, index) => {
                    if (!i) {
                      return null;
                    }
                    return (
                      <div className="price_item" data-title={i} key={index}>
                        <h5 className="check">
                          {CHECK_ICON.includes(list[i]) ? null : list[i]}
                          <i className={getClassNameForIcon(list[i])}></i>
                        </h5>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <div className="pr_list">
              <div className="price_item"></div>
              {TABLE_BOTTOM.map((item, index) => {
                return (
                  <>
                    <div className="price_item " key={index}>
                      <button
                        className={`price_btn btn_hove `}
                        onClick={() => toggle()}
                      >
                        {item.Label}
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tab-content faq_content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="purchas"
                role="tabpanel"
                aria-labelledby="purchas-tab"
              >
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="tableOne">
                      <h5 className="mb-0">
                        <button
                          className={`btn btn-link text-center ${
                            showMore === false ? "collapsed" : ""
                          }`}
                          data-bs-toggle="collapse"
                          data-bs-target="#priceTable"
                          aria-expanded="true"
                          aria-controls="priceTable"
                          onClick={() => setShowMore(!showMore)}
                        >
                          Complete Price list<i className="ti-angle-down"></i>
                          <i className="ti-angle-up"></i>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="priceTable"
                      aria-labelledby="TableOne"
                      data-parent="#accordion"
                      className={`collapse ${showMore === false ? "" : "show"}`}
                    >
                      <div className="card-body">
                        <div className="price_body">
                          {REMAINING_PRODUCT_PRICE_LIST.map((list, index) => {
                            return (
                              <div className="pr_list" key={index}>
                                <div className="price_item">
                                  <h5
                                    className="pr_title"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Save time by using keyboard shortcuts all across SaasLand"
                                  >
                                    {list.Column1}
                                  </h5>
                                </div>
                                {TABLE_HEAD.map((i,index) => {
                                  if (!i) {
                                    return null;
                                  }
                                  return (
                                    <div className="price_item" data-title={i} key={index}>
                                      <h5 className="check">
                                        {CHECK_ICON.includes(list[i])
                                          ? null
                                          : list[i]}
                                        <i
                                          className={getClassNameForIcon(
                                            list[i]
                                          )}
                                        ></i>
                                      </h5>
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrandModal toggle={() => toggle()} showModal={showModal} />
    </section>
  );
};
export default PriceList;
