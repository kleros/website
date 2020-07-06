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
import Sponsors from "./sponsors";
import Logo from "../assets/svgs/brand_white.svg";
import Court from "../assets/svgs/kleros.svg";
import Curate from "../assets/svgs/curate.svg";
import Escrow from "../assets/svgs/escrow.svg";
import T2CR from "../assets/svgs/t2cr.svg";
import DisputeResolver from "../assets/svgs/dispute-resolver.svg";
import Ninja from "../assets/svgs/ninja.svg";
import Linguo from "../assets/svgs/linguo.svg";

const Layout = ({ children }) => (
  <>
    <Header svgs={{ Court, Curate, DisputeResolver, Escrow, Linguo, Logo, Ninja, T2CR }} />
    <main>
      {children} <Sponsors />
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
