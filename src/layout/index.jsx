import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from "../components/Footer/Footer"
import MainNav from "../components/MainNav/MainNav"
import "./index.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
        <link rel="stylesheet" href="https://use.typekit.net/ktp5bhz.css"></link>
      </Helmet>
      <MainNav config={config} />
      {children}
      <Footer config={config} />
    </div>
  );
}
