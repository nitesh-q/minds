import React from "react";
import { Link } from "gatsby";

/**
 * Abut Widgets
 * @param {*} param0
 * @returns
 */
const Widget = ({ title, items }) => {
  return (
    <div
      className="f_widget about-widget pl_40 wow fadeInLeft"
      data-wow-delay="0.4s"
    >
      <h3 className="f-title f_600 t_color f_size_18">{title}</h3>
      <ul className="list-unstyled f_list">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Widget;
