/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import Sponsors from "../components/sponsors";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
        <Sponsors />
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
