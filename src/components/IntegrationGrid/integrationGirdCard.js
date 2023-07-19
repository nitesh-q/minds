import React, { Component } from "react";


class IntegrationGridCard extends Component {
  render() {
    var { pImg, title, desc, type, colClass } = this.props;
    return (
      <div className={`portfolio_item mb-30 ${colClass} `}>
        <div className="portfolio_item_">
          <div className="portfolio_img">
            <img src={pImg} alt="" />
          </div>
          <div className="portfolio_label">{type}</div>
          <div>
            <h2>{title}</h2>
            <p>{desc}</p>

            {/* <button
              className="btn btn_get btn_get_three mt-3"
              type="submit"
              onClick={()=>navigate("/integration")}
            >
              Learn more
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}
export default IntegrationGridCard;
