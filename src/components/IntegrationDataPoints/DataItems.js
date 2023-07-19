import React, { Component } from "react";
const DataItems = ({ ticon, text, description, colClass }) => {
  return (
    <div className={`col-lg-4`}>
      <div className="software_service_item mb_70">
        <i className={ticon}></i>
        <h5 className="mt_30 mb_15">{text}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default DataItems;
