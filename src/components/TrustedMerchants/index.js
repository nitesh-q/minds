import React from "react";
import Slider from "react-slick";
import { MERCHANTS_CONFIG } from "../../config";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.9,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.9,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 0.85,
        slidesToScroll: 1,
      },
    },
  ],
};



const TrustedMerchants = ({ tClass }) => {
  return (
    <section className="erp_testimonial_area slick_pad ">
      <div className={`container ${tClass}`}>
        <h3 className="f_size_20 f_600 t_color5 l_height40 text-center mb_15">
          Trusted by 500+ Merchants
        </h3>
        <div className="row">
          <div className="erp_testimonial_info">
            <Slider className="erp_testimonial_slider" {...settings}>
              {MERCHANTS_CONFIG.MERCHANTS.map((item, index) => (
                <div key={index} className="erp_testimonial_item">
                  <div className="media">
                    <div
                      className="media-body  wow fadeInLeft"
                      data-wow-delay="0.1s"
                    >
                      <img src={item.image} alt={item.id} />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrustedMerchants;
