import React from "react";
import "./SiteLinks.css";

function SiteLinks({ config, labeled }) {
  function getLinkElements() {
    const { siteLinks } = config;

    return siteLinks.map((link) => (
      <a href={link.url} key={link.label}>
        {labeled ? link.label : ""}
      </a>
    ));
  }

  const { siteLinks } = config;
  if (!siteLinks) {
    return null;
  }
  return <div className="site-links">{getLinkElements()}</div>;
}

export default SiteLinks;
