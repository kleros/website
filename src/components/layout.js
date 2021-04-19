/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { Helmet } from "react-helmet";
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
import MetaCard from "../assets/images/open-graph-card.png";

const Layout = ({ children, omitSponsors }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kleros</title>
      <link rel="canonical" href="https://kleros.io/" />
      <meta property="og:title" content="Kleros - The Justice Protocol" />
      <meta property="og:description" content="Kleros is a decentralized arbitration service for the disputes of the new economy." />
      <meta property="og:image" content={`https://kleros.io${MetaCard}`} />
      <meta property="og:url" content="https://kleros.io/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Kleros" />
      <meta name="twitter:image:alt" content="Kleros" />
    </Helmet>
    <Header svgs={{ Court, Curate, DisputeResolver, Escrow, Linguo, Logo, Ninja, T2CR }} />
    <main>
      {children} {!omitSponsors && <Sponsors />}
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
