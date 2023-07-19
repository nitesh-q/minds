import React, { Component } from "react";
import { navigate } from "gatsby";
import Slider from "react-slick/";
import Gird1 from "../../images/new/blog/grid1.jpeg";
import Title from "../Common/Title";
const CASE_STUDIES_SLIDER_DATA = [
  {
    type: "E-Commerce",
    image: Gird1,
    title: "Oxford bum bag gutted.",
    description:
      "Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!",
  },
  {
    type: "E-Commerce",
    image: Gird1,
    title: "Oxford bum bag gutted.",
    description:
      "Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!",
  },
  {
    type: "E-Commerce",
    image: Gird1,
    title: "Oxford bum bag gutted.",
    description:
      "Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!",
  },
  {
    type: "E-Commerce",
    image: Gird1,
    title: "Oxford bum bag gutted.",
    description:
      "Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!",
  },
];

const CaseStudiesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <section className="case_studies_area sec_pad">
        <div className="container container-xl">
          <Title
            title={"Learn How Customers are using Gift Cards"}
            sClass="sec_title text-center mb_70"
            tClass="t_color3"
            titleP={"Case Studies Carousel"}
          />
          <Slider {...settings} className="case_studies_slider">
            {CASE_STUDIES_SLIDER_DATA.map((item, index) => {
              return (
                <div className="iitem" key={index}>
                  <div className="studies_item">
                    <img src={item.image} alt="" />
                    <div className="text">
                      <div className="label">{item.type}</div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>

                      <div className="post-info-bottom">
                        <a
                          onClick={() => navigate("/case-study-details")}
                          className="learn_btn_two"
                        >
                          Read more <i className="arrow_right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CaseStudiesSlider;
