import React from "react";
import Title from "../Common/Title";
import Icons from "../../shared/assets";

const COUPONS_WORK_DATA = [
  {
    id: "01",
    icon: Icons.Icon1.default,
    title: "Brand Name",
    subTitle: "Vertical",
    list: [
      { decc: "Product Recommendations" },
      { desc: " Abandoned Cart" },
      { desc: " Facebook & Instagram Ads" },
      { desc: " Order Notifications" },
      { desc: " Landing Pages" },
    ],
    bgColor: "bg_color1",
  },
  {
    id: "02",
    icon: Icons.Icon2.default,
    title: "Brand Name",
    subTitle: "Vertical",
    list: [
      { decc: "Product Recommendations" },
      { desc: " Abandoned Cart" },
      { desc: " Facebook & Instagram Ads" },
      { desc: " Order Notifications" },
      { desc: " Landing Pages" },
    ],
  },
  {
    id: "03",
    icon: Icons.Icon3.default,
    title: "Brand Name",
    subTitle: "Vertical",
    bgColor: "bg_color1",
    list: [
      { decc: "Product Recommendations" },
      { desc: " Abandoned Cart" },
      { desc: " Facebook & Instagram Ads" },
      { desc: " Order Notifications" },
      { desc: " Landing Pages" },
    ],
  },
];

const CouponWork = () => {
  return (
    <section className="app_service_area sec_pad" id="work">
      <div className="container">
        <Title
          sClass="sec_title text-center mb_70"
          title="Learn How Customer is using Coupons"
          tClass="t_color3"
          titleP="A list of carousals with case studies involving multiple companies"
        />
        <div className="row app_service_info">
          {COUPONS_WORK_DATA.map((items) => {
            return (
              <div className="col-lg-4" key={items.id}>
                <div
                  className={`app_service_item wow fadeInUp ${items.bgColor}`}
                  data-wow-delay="0.2s"
                >
                  {/* <i className={`app_icon ${items.icon}`}></i> */}
                  <img className="" src={items.icon} alt="" />
                  <h5 className="f_p f_size_18 f_600 t_color3 mt_40 mb-10">
                    {items.title}
                  </h5>
                  <p>{items.subTitle}</p>
                  <div className="w-100">
                    <hr className="line_horizontal" />
                  </div>
                  <ul>
                    {items.list.map((i, index) => {
                      return <li key={index}>{i.desc}</li>;
                    })}
                  </ul>
                  <a href=".#" className="btn_get btn_hover demo  new_btn">
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    
  );
};
export default CouponWork;
