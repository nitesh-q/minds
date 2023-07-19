import React, { useState } from "react";
import Reveal from "react-reveal";
import TabPannel from "../IconTabComponent/IconTabPannel";
import icon from "../../images/B2B/giftcard_icon.png";
const IconTabComponent = ({ config }) => {
  const [activeTab, setActiveTab] = useState(config.PANNEL_DATA[0].id);

  return (
    <section className="startup_fuatures_area sec_pad pb_0">
      <div className="container">
        <div className="sec_title mb_70 wow fadeInUp" data-wow-delay="0.4s">
          <Reveal effect="fadeInLeft">
            <h2 className="f_p f_size_30 l_height40 f_600 t_color3 mb_50 text-center">
              Power of enterprise in the Cloud
            </h2>
          </Reveal>
        </div>
        <ul className="nav nav-tabs startup_tab mb_50" id="myTab" role="tablist">
          {config.PANNEL_DATA.map((item, index) => (
            
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
                  <img className="icon" src={icon} />
                  <h3>{item.label}</h3>
                </a>
              </li>
        
          ))}
        </ul>
        {config.PANNEL_DATA.map((item, index) =>
          activeTab === item.id ? (
            <div className="tab-content startup_tab_content mt_50" id="myTabContent">
              <div
                className="tab-pane fade show active mt_100"
                id={item.id}
                role="tabpanel"
                aria-labelledby={`${item.id}-tab`}
              >
                {/* <div className="startup_tab_img">
                  <div className="web_img">
                    <img src={require("../../img/new/web_image.jpg")} alt="" />
                  </div>
                  <div className="phone_img">
                    <img src={require("../../img/new/iPhoneX.png")} alt="" />
                  </div>
                </div> */}
                <TabPannel item={item} />
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </section>
  );
};

export default IconTabComponent;
