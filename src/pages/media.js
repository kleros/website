import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import MediaCard from "../components/media-card";

import Magnifier from "src/assets/svgs/icon-magnifier.svg";

import styles from "./styles/media.module.css";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import copyright from "src/assets/svgs/icon-copyright.svg";
import eCommerce from "src/assets/svgs/icon-e-commerce.svg";
import finance from "src/assets/svgs/icon-finance.svg";
import freelancing from "src/assets/svgs/icon-freelance.svg";
import insurance from "src/assets/svgs/icon-shield.svg";
import moderation from "src/assets/svgs/icon-moderation.svg";
import plus from "src/assets/svgs/icon-plus.svg";
import smallClaims from "src/assets/svgs/icon-gavel.svg";
import token from "src/assets/svgs/icon-token.svg";
import restaurant from "src/assets/svgs/icon-fork-n-knife.svg";
import hotel from "src/assets/svgs/icon-hotel.svg";
import spam from "src/assets/svgs/icon-spam.svg";
import social from "src/assets/svgs/icon-speaker.svg";
import bounty from "src/assets/svgs/icon-bounty.svg";
import otc from "src/assets/svgs/icon-otc.svg";
import crowdfunding from "src/assets/svgs/icon-crowdfunding.svg";
import payroll from "src/assets/svgs/icon-payroll.svg";
import www from "src/assets/svgs/icon-www.svg";

import { Badge, Container, Row, Col, InputGroup, FormControl, Accordion, Card } from "react-bootstrap";
import Categories from "src/intl/en.json";

import ThomsonReuters from "src/assets/svgs/thomson-reuters-2.svg";
import DefiPrime from "src/assets/svgs/defiprime.svg";
import CardRates from "src/assets/svgs/cr-logo.svg";
import BitcoinDotCom from "../assets/svgs/bitcoindotcom.svg";
import VentureBeat from "src/assets/svgs/venture-beat.svg";
import Token2049 from "src/assets/svgs/token2049.svg";
import Consensus from "src/assets/svgs/consensus.svg";
import EthCC from "src/assets/svgs/ethcc.svg";

const Media = ({ intl }) => {
  return (
    <Layout>
      <SEO title="Media" />

      <div className={styles.media}>
        <section className={styles.sectionHeader}>
          <h1 className="text-center mb-5">
            <FormattedMessage id="media.section-hero.h1" />
          </h1>
          <a href="https://blog.kleros.io" target="blank" rel="noopener noreferrer" className="btn btn-primary">
            <FormattedMessage id="media.section-hero.button" />
          </a>
        </section>
        <section className={styles.questions}>
          <div className={`nav ${styles.nav}`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {Object.keys(Categories.media["section-media"]).map((category, index) => (
              <a key={index} className={`nav-link ${!index && "active"}`} id="v-pills-${category}-tab" data-toggle="pill" href={`#v-pills-${category}`} role="tab" aria-controls={`#v-pills-${category}`} aria-selected="true">
                <FormattedMessage id={`media.section-media.${category}.title`} />
              </a>
            ))}
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            {Object.entries(Categories.media["section-media"]).map((category, index) => console.log(category))}
            {Object.entries(Categories.media["section-media"]).map((category, index) => (
              <div className={`tab-pane fade ${!index && "show active"}`} id={`v-pills-${category[0]}`}>
                <h2>
                  <FormattedMessage id={`media.section-media.${category[0]}.title`} />
                </h2>
                {category[0] == "featured" && (
                  <div className={styles.cards}>
                    <MediaCard content={{ icon: DefiPrime, text: intl.formatMessage({ id: "media.section-media.featured.items.defiprime" }), href: "/" }} />
                    <MediaCard content={{ icon: ThomsonReuters, text: intl.formatMessage({ id: "media.section-media.featured.items.thomsonreuters" }), href: "" }} />
                    <MediaCard content={{ icon: CardRates, text: intl.formatMessage({ id: "media.section-media.featured.items.cardrates" }), href: "" }} />
                    <MediaCard content={{ icon: Consensus, text: intl.formatMessage({ id: "media.section-media.featured.items.consensus" }), href: "" }} />
                    <MediaCard content={{ icon: VentureBeat, text: intl.formatMessage({ id: "media.section-media.featured.items.venturebeat" }), href: "" }} />
                    <MediaCard content={{ icon: Token2049, text: intl.formatMessage({ id: "media.section-media.featured.items.token2049" }), href: "" }} />
                    <MediaCard content={{ icon: BitcoinDotCom, text: intl.formatMessage({ id: "media.section-media.featured.items.bitcoindotcom" }), href: "" }} />
                    <MediaCard content={{ icon: EthCC, text: intl.formatMessage({ id: "media.section-media.featured.items.ethcc" }), href: "" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default injectIntl(Media);
