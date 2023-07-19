import React from "react";

/**
 * Social links
 * @param {*} param0
 * @returns
 */
const CompanyWidget = ({ title, description }) => {
  return (
    <div
      className="f_widget company_widget wow fadeInLeft"
      data-wow-delay="0.2s"
    >
      <h3 className="f-title f_600 t_color f_size_18">{title}</h3>
      <p>{description}</p>
      <form action="#" className="f_subscribe_two mailchimp" method="post">
        <input
          type="text"
          name="email"
          className="form-control memail"
          placeholder="Email"
        />
        <button className="btn btn_get btn_get_three" type="submit">
          Subscribe
        </button>
        <p className="mchimp-errmessage" style={{ display: "none" }}></p>
        <p className="mchimp-sucmessage" style={{ display: "none" }}></p>
      </form>
    </div>
  );
};

export default CompanyWidget;
