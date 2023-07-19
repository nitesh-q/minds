import React from "react";
import { Reveal } from "react-reveal";

const Features = ({
  image,
  rowClass = "",
  title,
  subTitle,
  subHeading,
  description1,
  description2,
  desc,
  list,
  pClass = "",
  ptClass = "",
  hideClass = "",
}) => {
  return (
    <section className={`chat_features_area ${ptClass} ${hideClass}`}>
      <div className=" container container-xl">
        <div className={`row  ${rowClass}`}>
          <div className={`col-lg-5`}>
            <div className={`chat_features_content ${pClass}`}>
              <h2>{title}</h2>
              <h4>{subHeading}</h4>
              <h6>{subTitle}</h6>
              <h5>{description1}</h5>
              <p>{desc}</p>

              {list.map((i, index) => {
                return (
                  <>
                    <ul className="pl_1" key={index}>
                      <li>
                        {" "}
                        {i.title}
                        <span>{i.description}</span>
                      </li>
                    </ul>
                  </>
                );
              })}
              <h5>{description2}</h5>

              {/* <a
                href="/#"
                className="btn btn_get btn_get_three fadeInLeft "
                data-wow-delay="0.5s"
              >
                Try it free
              </a> */}
            </div>
          </div>
          <div className={`col-lg-7`}>
            <div className="chat_features_img chat_features_img_one">
              <Reveal effect="fadeInRight" duration={1000}>
                <img
                  className="chat_one img-fluid"
                  src={image}
                  alt=""
                  loading="lazy"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
