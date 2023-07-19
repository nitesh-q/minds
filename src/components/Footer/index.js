import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import SocialLink from "./SocialLink";
import AboutWidget from "./Widget";
import CompanyWidget from "./CompanyWidget";
import CopyWriteSection from "./CopyWriteSection";

/**
 * Wrapper for tabs
 * @param {*} param0
 * @returns
 */
const RevealWrapper = ({ className, children }) => {
  return (
    <Reveal effect="fadeInLeft" duration={500} key={1}>
      <div className={className}>{children}</div>
    </Reveal>
  );
};

const Footer = ({ config }) => {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container container-xl">
          <div className="row">
            {config.COMPANY_WIDGET.map((widget, index) => {
              return (
                <RevealWrapper key={index} className={"col-lg-3 col-md-6"}>
                  {/* <CompanyWidget {...{ ...widget }} /> */}
                  {config.SOCIAL_LINKS.map((widget, index) => {
                    return (
                      <RevealWrapper
                        key={index}
                      >
                        <SocialLink
                          items={widget.menuItems}
                          title={widget.title}
                        />
                      </RevealWrapper>
                    );
                  })}
                </RevealWrapper>
              );
            })}

            {config.WIDGETS.map((widget, index) => {
              return (
                <RevealWrapper key={index} className={"col-lg-3 col-md-6"}>
                  <AboutWidget items={widget.menuItems} title={widget.title} />
                </RevealWrapper>
              );
            })}

            {/* Social links rendering */}
          </div>
        </div>

        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>

      <CopyWriteSection
        {...{
          copywrite: config.COPY_WRITE,
          term: "Term & Conditions",
          policy: "Privacy Policy",
        }}
      />
    </footer>
  );
};
export default Footer;
