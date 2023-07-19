import React from "react";
import Slider from "react-slick";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

/**
 * Testimonial data
 * @param {*} param0
 * @returns
 */
const Testimonial = ({ sliderData, bgColor, title, subTitle }) => {
  return (
    <section className={`agency_testimonial_area sec_pad ${bgColor}`}>
      <div className="container">
        <h2 >
          Testimonial
        </h2>
        <p className="text-center" >Hear from our Clients</p>
        <div className="agency_testimonial_info">
          <Slider className="testimonial_slider" {...settings}>
            {sliderData.map((item,index) => {
              return (
                <div
                  className="testimonial_item text-center left"
                  key={index}
                >
                  <div className="author_img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="author_description">
                    <h4 className="f_500 t_color3 f_size_18">
                      {item.Name}
                    </h4>
                  </div>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
