import React, { useState } from "react";
import { FAQ } from "../../../config";

const Faq = () => {
  const [activeTab, setActiveTab] = useState(FAQ[0].id);
  const [collapseClass, setCollapseClass] = useState("");

  return (
    <section className="faq_area  ">
      <div className="container">
        <div className="row">
          <h2>FAQs</h2>
          <div className="col-lg-12">
            <div className="tab-content faq_content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="purchas"
                role="tabpanel"
                aria-labelledby="purchas-tab"
              >
                {/* <h3 className="f_p f_size_22 f_500 t_color3 mb_20">
                  How to purchase
                </h3> */}
                <div id="accordion">
                  {FAQ.map((i, index) => {
                    return (
                      <div className="card">
                        <div className="card-header" id={i.id}>
                          <h5 className="mb-0">
                            <button
                              className={`btn btn-link ${
                                activeTab === i.id ? "" : "collapsed"
                              }`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${i.id}`}
                              aria-expanded="true"
                              aria-controls={`collapse${i.id}`}
                              onClick={() => setActiveTab(i.id)}
                            >
                              {i.question}
                              <i
                                className="ti-plus"
                                onClick={() => setCollapseClass("collapsing")}
                              ></i>
                              <i className="ti-minus"></i>
                            </button>
                          </h5>
                        </div>

                        <div
                          id={`collapse${i.id}`}
                          className={`collapse  ${collapseClass} ${
                            activeTab === i.id ? "show" : ""
                          }`}
                          aria-labelledby={i.id}
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            {i.answer.map((item, index) => (
                              <>
                                {item}
                                <br />
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
