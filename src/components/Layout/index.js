import React, { Fragment } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FOOTER_CONFIG } from "../../config";
import "../../assets/themify-icon/themify-icons.css";
import "../../assets/simple-line-icon/simple-line-icons.css";
import "../../assets/font-awesome/css/all.css";
import "../../assets/elagent/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/main.css";
import "../../assets/responsive.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import { Helmet } from "react-helmet";

const Layout = ({ children, slogo, mClass, nClass }) => {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>

        <script
          data-name="termly-embed-banner"
          id="d9663863-bfd6-4088-bd75-e9f13af491e1"
          src={"https://app.termly.io/embed.min.js"}
          type="text/javascript"
          async
        />
      </Helmet>
      <div className="body_wrapper">
        <Navbar
          cClass="container-xl p0"
          hbtnClass="new_btn"
          mClass={mClass}
          slogo={slogo}
          nClass={nClass}
        />
        {children}
        <Footer config={FOOTER_CONFIG} />
      </div>
    </Fragment>
  );
};

export default Layout;
