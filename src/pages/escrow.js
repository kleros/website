import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Sash from "../components/sash";
import HorizontalCard from "../components/horizontal-card";
import VerticalCard from "../components/vertical-card";

import Sponsors from "../components/sponsors";
import Contact from "../components/contact";

import Deversifi from "src/assets/images/deversifi.png";
import Escrow1 from "src/assets/images/escrow1.png";
import Escrow2 from "src/assets/images/escrow2.png";
import EscrowHero from "src/assets/images/escrow-hero.png";

import Ninja from "src/assets/svgs/ninja-black-text.svg";

import { Badge, Container, Row, Col } from "react-bootstrap";

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import styles from "./styles/escrow.module.css";

const Escrow = ({ intl }) => (
  <Layout>
    {" "}
    <SEO title="Escrow" lang={intl.locale} />
    <Container as="main" fluid className={styles.Escrow}>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="escrow.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="escrow.section-hero.h2" />
        </h2>

        <Container className={styles.buttonWrapper}>
          <a href="https://escrow.kleros.io" target="blank" rel="noopener noreferrer" className="btn btn-primary">
            <FormattedMessage id="escrow.section-hero.button-primary" />
          </a>
        </Container>
        <img src={EscrowHero} alt={EscrowHero} />
      </section>
      <Sash
        as="div"
        figures={[
          {
            title: intl.formatMessage({
              id: "escrow.sash.first.title",
            }),
            text: intl.formatMessage({
              id: "escrow.sash.first.paragraph",
            }),
            icon: "scales",
          },
          {
            title: intl.formatMessage({
              id: "escrow.sash.second.title",
            }),
            text: intl.formatMessage({
              id: "escrow.sash.second.paragraph",
            }),
            icon: "epsilon",
          },
          {
            title: intl.formatMessage({
              id: "escrow.sash.third.title",
            }),
            text: intl.formatMessage({
              id: "escrow.sash.third.paragraph",
            }),
            icon: "kleros",
          },
        ]}
      />
      <section className={styles.usecases}>
        <h1>{intl.formatMessage({ id: "escrow.section-use-case.h1" })}</h1>
        <div className={styles.cards}>
          <HorizontalCard
            content={{
              icon: "freelancing",
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.1" }),
            }}
          />
          <HorizontalCard
            content={{
              icon: "www",
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.2" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "bounty",
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.3" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "eCommerce",
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.4" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "payroll",
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.5" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "crowdfunding",
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.6" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "otc",
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.7" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "copyright",
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.8" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "plus",
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.9" }),
            }}
          />
        </div>
      </section>

      <section className="masked">
        <span className="trapezium" />
        <h1>
          <FormattedMessage id="escrow.section-3.h1" />
        </h1>
        <h2>
          <FormattedMessage id="escrow.section-3.h2" />
        </h2>
        <a className="btn btn-secondary">
          {" "}
          <FormattedMessage id="escrow.section-3.button" />
        </a>
      </section>
      <section>
        <h1>
          <FormattedMessage id="escrow.section-4.h1" />
        </h1>
        <h2>
          <FormattedMessage id="escrow.section-4.h2" />
        </h2>
        <a className="btn btn-primary">
          <FormattedMessage id="escrow.section-4.button" />
        </a>
      </section>
      <div></div>
      <div id="holder" style={{ position: "relative", height: "100vmin", maxWidth: "1700px", margin: "auto" }}>
        <div id="logo" style={{ float: "right" }}>
          <img src={Escrow1} style={{}} />
        </div>
        <div style={{ float: "left", position: "absolute", top: "30vmin" }}>
          <img src={Escrow2} />
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

export default injectIntl(Escrow);
