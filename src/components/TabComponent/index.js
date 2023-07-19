import React, { useState } from "react";
import TabPannel from "./TabPannel";

const TabComponent = ({
  config,
  pClass = "",
  rClass = "",
  mClass = "",
  icon,
  hideClass =""
}) => {
  const [activeTab, setActiveTab] = useState(config.PANNEL_DATA[0].id);
  return (
    <section className={`developer_product_area sec_pad ${pClass} ${mClass} ${hideClass}`}>
      <div className="container container-xl">
        {config.HEAD.map((item, index) => (
          <h1 key={index} className="">
            {item.Title}
          </h1>
        ))}

        <div className="row">
          <div className="col-lg-12 d-flex-column align-items-center justify-content-center">
            <div className="developer_product_content">
              <ul
                className="nav nav-tabs develor_tab mb-30 border_none"
                id="myTab1"
                role="tablist"
              >
                {config.PANNEL_DATA.map((item, index) => (
                  <>
                    <li
                      className="nav-item"
                      key={index}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <a
                        className={`nav-link ${
                          activeTab === item.id ? "active" : ""
                        }`}
                        data-tab={`${item.id}-tab`}
                        id={`${item.id}-tab`}
                        data-bs-toggle="tab"
                        href={`#${item.id}`}
                        role="tab"
                        aria-controls={item.id}
                        aria-selected={item.selected}
                      >
                        {item.label}
                      </a>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            {config.PANNEL_DATA.map((item, index) =>
              activeTab === item.id ? (
                <div key={index} className="tab-content developer_tab_content ">
                  <div
                    className={`tab-pane fade show active`}
                    id={item.id}
                    role="tabpanel"
                    aria-labelledby={`${item.id}-tab`}
                  >
                    <TabPannel item={item} rClass={rClass} icon={icon} />
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TabComponent;
