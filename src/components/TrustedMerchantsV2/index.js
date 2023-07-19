import React from "react";
import Icons from "../../shared/assets";

const LOGO = [
  {
    image: Icons.Pinstrips_1.default,
  },
  {
    image: Icons.Besttop_1.default,
  },
  {
    image: Icons.Corner_1.default,
  },
  {
    image: Icons.Cariloha_1.default,
  },

  {
    image: Icons.Fylnn_1.default,
  },
];

const TrustedMerchantsV2 = ({ bgClass }) => {
  return (
    <section className={`trusted_merchants_area ${bgClass}`}>
      <div className="container container-xl">
        <div>
          <h2>Trusted by 500+ Merchants</h2>
        </div>
        <div className="row">
          <div className="img">
            {LOGO.map((i, index) => {
              return <img className="img-fluid" src={i.image} alt="" key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrustedMerchantsV2;
