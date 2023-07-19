import React, { useState } from "react";
// import TabPannel from "./TabPannel";
import { Reveal } from "react-reveal";
import Title from "../Common/Title";

const VerticallyTabComponent = ({
  config,
  pClass = "",
  rClass = "",
  mClass = "",
  icon,
  hideClass
}) => {
  const [activeTab, setActiveTab] = useState(config.PANNEL_DATA[0].id);

  return (
    <section
      className={`software_service_area sec_pad sec_pad ${pClass} ${mClass} ${hideClass}`}
    >
      <div className="container">
        {config.HEAD.map((item, index) => (
          <Title
            title={item.Title}
            sClass="sec_title text-center mb_70"
            tClass="t_color3"
          />
          //   <h2
          //     key={index}
          //     className="f_size_30 f_600 t_color3 l_height40 text-center mb_50 l_sapcing1"
          //   >
          //     {item.Title}
          //   </h2>
        ))}

        <div className="row">
          <div className="col-lg-5 col-md-3 mt_50">
            <ul
              className="nav nav-tabs software_service_tab"
              id="myTab1"
              role="tablist"
            >
              {config.PANNEL_DATA.map((item, index) => (
                <>
                  <li
                    className="nav-item"
                    key={index}
                    onClick={() => setActiveTab(item.id)}
                    data-bs-toggle="collapse"
                    data-bs-target={`#${item.id}`}
                    aria-expanded="false"
                    aria-controls={item.id}
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
          <div className="col-lg-7 col-md-9">
            {config.PANNEL_DATA.map((item, index) =>
              activeTab === item.id ? (
                <div
                  key={index}
                  className="tab-content software_service_tab_content "
                >
                  <div
                    className={`tab-pane fade show active`}
                    id={item.id}
                    role="tabpanel"
                    aria-labelledby={`${item.id}-tab`}
                  >
                    {/* <TabPannel item={item} rClass={rClass} icon={icon} /> */}
                    <Reveal effect="fadeInLeft" duration={2000}>
                      <img className="img-fluid" src={item.image} />
                    </Reveal>
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
export default VerticallyTabComponent;
