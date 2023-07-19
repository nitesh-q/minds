import React from "react";

/**
 * Social links
 * @param {*} param0
 * @returns
 */
const CopyWriteSection = ({ copywrite, term, policy }) => {
  return (
    <div className="footer_bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-7">
            <p className="mb-0 f_400">{copywrite}</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="list-unstyled f_menu text-right">
              <li>
                <a href="https://app.termly.io/document/terms-of-use-for-saas/30ada467-9d58-4b21-b3ed-e7d79c015bc4">
                  {term}
                </a>
              </li>
              <li>
                <a href="https://app.termly.io/document/privacy-policy/e1054a68-e1ab-43c0-92ad-e4b68339718d">
                  {policy}
                </a>
              </li>
              <li>
                <a href="/sitemap.xml">Sitemap </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyWriteSection;
