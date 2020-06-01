import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Sash from "../components/sash";
import HorizontalCard from "../components/horizontal-card";
import VerticalCard from "../components/vertical-card";

import Sponsors from "../components/sponsors";
import Contact from "../components/contact";

import Deversifi from "src/assets/images/deversifi.png";
import Curate1 from "src/assets/images/curate1.png";
import Curate2 from "src/assets/images/curate2.png";
import CurateHero from "src/assets/images/curate-hero.png";

import List from "src/assets/svgs/icon-list.svg";
import TCR from "src/assets/svgs/icon-tcr.svg";
import Scales from "src/assets/svgs/icon-scales.svg";

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

import Ninja from "src/assets/svgs/ninja-black-text.svg";

import { Badge, Container, Row, Col } from "react-bootstrap";

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import styles from "./styles/curate.module.css";

const Curate = ({ intl }) => (
  <Layout>
    {" "}
    <SEO title="Curate" lang={intl.locale} />
    <Container as="main" fluid className={styles.curate}>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="curate.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="curate.section-hero.h2" />
        </h2>

        <Container className={styles.buttonWrapper}>
          <a href="https://curate.kleros.io" target="blank" rel="noopener noreferrer" className="btn btn-primary">
            <FormattedMessage id="curate.section-hero.button-primary" />
          </a>
        </Container>
        <img src={CurateHero} alt={CurateHero} />
      </section>
      <Sash
        as="div"
        figures={[
          {
            title: intl.formatMessage({
              id: "curate.sash.first.title",
            }),
            text: intl.formatMessage({
              id: "curate.sash.first.paragraph",
            }),
            icon: List,
          },
          {
            title: intl.formatMessage({
              id: "curate.sash.second.title",
            }),
            text: intl.formatMessage({
              id: "curate.sash.second.paragraph",
            }),
            icon: TCR,
          },
          {
            title: intl.formatMessage({
              id: "curate.sash.third.title",
            }),
            text: intl.formatMessage({
              id: "curate.sash.third.paragraph",
            }),
            icon: Scales,
          },
        ]}
      />
      <section className={styles.usecases}>
        <h1>{intl.formatMessage({ id: "curate.section-use-case.h1" })}</h1>
        <div className={styles.cards}>
          <HorizontalCard
            content={{
              icon: token,
              text: intl.formatMessage({ id: "curate.section-use-case.cards.1" }),
            }}
          />
          <HorizontalCard
            content={{
              icon: moderation,
              text: intl.formatMessage({ id: "curate.section-use-case.cards.2" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: hotel,
              text: intl.formatMessage({ id: "curate.section-use-case.cards.3" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: restaurant,
              text: intl.formatMessage({ id: "curate.section-use-case.cards.4" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: insurance,
              text: intl.formatMessage({ id: "curate.section-use-case.cards.5" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: eCommerce,
              text: intl.formatMessage({ id: "curate.section-use-case.cards.6" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: social,
              text: intl.formatMessage({ id: "curate.section-use-case.cards.7" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: spam,
              text: intl.formatMessage({ id: "curate.section-use-case.cards.8" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: plus,
              text: intl.formatMessage({ id: "curate.section-use-case.cards.9" }),
            }}
          />
        </div>
      </section>

      <section className="masked">
        <span className="trapezium" />
        <h1>
          <FormattedMessage id="curate.section-3.h1" />
        </h1>
        <h2>
          <FormattedMessage id="curate.section-3.h2" />
        </h2>
        <a className="btn btn-secondary">
          <FormattedMessage id="curate.section-3.button" />
        </a>
      </section>
      <section>
        <h1>
          <FormattedMessage id="curate.section-4.h1" />
        </h1>
        <Container className="mt-5 d-flex flex-wrap justify-content-around">
          <Badge as="a" href="https://www.deversifi.com/" className={styles.badge}>
            <span class={styles.helper}></span>
            <img src={Deversifi} />
          </Badge>
          <Badge as="a" href="https://uniswap.ninja/" className={styles.badge}>
            <Ninja />
          </Badge>
        </Container>
      </section>
      <div></div>
      <div id="holder" style={{ position: "relative", height: "80vw", maxHeight: "1500px", maxWidth: "2000px", margin: "auto" }}>
        <div style={{ float: "right" }}>
          <img src={Curate1} style={{ maxWidth: "70vw" }} />
        </div>
        <div style={{ float: "left", position: "absolute", top: "30vmin" }}>
          <img src={Curate2} style={{ maxWidth: "70vw" }} />
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      <section>
        <hr />
        <Contact />
        <Sponsors extraClass="mt-5" />
      </section>
    </Container>
  </Layout>
);

export default injectIntl(Curate);
