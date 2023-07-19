import React from "react";
import "../../assets/main.css";
import CustomNavbar from "../../components/Navbar";

const Claim = () => {
  return (
    <>
    <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu" />
      <section className="bg_BannerV1 sec_pad">
        <div>
          <h2 className="text-center w_color ">Enter to WIN a Gift Card</h2>
        </div>
      </section>

      <div className="">
        <iframe
          className="google_form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSej_Q6OGdlkrLxwXB58yNQ8LRDF2fgNIRtcgqjjkuArhXiTyw/viewform?embedded=true"
          width="640"
          height="1000"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
        >
          Loading…
        </iframe>{" "}
      </div>
    </>
  );
};
export default Claim;
