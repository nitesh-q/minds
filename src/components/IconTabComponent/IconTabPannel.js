import { Link, navigate } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
import Icons from "../../shared/assets";

const TabPannel = ({ item, rClass, icon }) => {
  return (
    <section className="customer_engagement_one d-flex-row justify-content-center align-items-start">
      <div className="container">
        <div className="row ">
          <div className={`col-lg-7 `}>
            <div className="customer_engagement_img">
              <Fade bottom cascade>
                <img
                  className="img-fluid"
                  src={item.image}
                  alt="features_img"
                />
              </Fade>
            </div>
          </div>

          <div className="col-lg-5   ">
            <Fade bottom cascade>
              <div className="customer_engagement_content d-flex-row justify-content-center align-items-start ">
                {icon ? <img src={Icons.Icon.default} /> : ""}
                <h2 className="">{item.title}</h2>
                <h3 className="t">{item.subTitle}</h3>
                <h6 className="">{item.description1}</h6>
                {item.list.map((i, index) => {
                  return (
                    <ul
                      className="d-flex justify-content-start pl_1"
                      key={index}
                    >
                      <li>
                        {i.title}
                        <span>{i.description}</span>
                      </li>
                    </ul>
                  );
                })}
                <h6>{item.description2}</h6>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabPannel;
