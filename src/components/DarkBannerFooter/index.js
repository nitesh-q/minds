import React from "react";

const DarkBannerFooter = ({ config, title }) => {
  return (
    <section className="fun_fact_footer_area dk_bg_two pb_50">
      <div className="container container-xl">
        <div className="">
          <h4 className="w_color f_p f_700 mb_40 text-center">{title}</h4>
          <ul>
            {config.map((details, index) => {
              return (
                <li key={index}>
                  <h3>{details.title}</h3>
                  <p className="mb-0 d_p_color">
                    {details.description}
                    <br /> {details.descriptionTwo}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DarkBannerFooter;
