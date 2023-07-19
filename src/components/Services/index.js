import React from "react";
import Icon1 from "../../images/service/icon1.png";
import Icon2 from "../../images/service/icon2.png";
import Icon3 from "../../images/service/icon3.png";

const data = [
  {
    image: Icon1,
    title: "24/7 Support",
  },
  {
    image: Icon3,
    title: "Trusted by 500+ Merchants",
  },
  {
    image: Icon2,
    title: "Safe and Secure Platform",
  },
];

const Service = () => {
  return (
    <section className=" service_provide">
      <div className="container">
        <div className="row">
          <div className="service_provide_content ">
            {data.map((item, index) => {
              return (
                <div className=" d-flex service_provide_content_item" key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
