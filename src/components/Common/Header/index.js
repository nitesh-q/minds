import React from "react";

const Header = ({ title,description,className,hideClass }) => {
  return (
    <section className={`erp_action_area  ${className} ${hideClass}`}>
      <div className="container container-xl ">
        <div className="row align-items-center">
          <h2>
            {title}
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};
export default Header;
