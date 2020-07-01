import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Sash from "../components/sash";
import HorizontalCard from "../components/horizontal-card";
import VerticalCard from "../components/vertical-card";

import Sponsors from "../components/sponsors";
import Contact from "../components/contact";

import Deversifi from "src/assets/images/deversifi.png";
import Escrow1 from "src/assets/svgs/escrow-screen1.svg";
import Escrow2 from "src/assets/svgs/escrow-screen2.svg";
import EscrowHero from "src/assets/svgs/escrow-hero.svg";

import Warning from "src/assets/svgs/icon-warning.svg";
import EscrowIcon from "src/assets/svgs/icon-escrow.svg";
import Kleros from "src/assets/svgs/icon-kleros.svg";

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

import styles from "./styles/escrow.module.css";

const Escrow = ({ intl }) => (
  <Layout>
    <SEO title="Escrow" lang={intl.locale} />
    <Container fluid className={styles.escrow}>
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
        <EscrowHero />
      </section>
      <section className="light">
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
              icon: Warning,
            },
            {
              title: intl.formatMessage({
                id: "escrow.sash.second.title",
              }),
              text: intl.formatMessage({
                id: "escrow.sash.second.paragraph",
              }),
              icon: EscrowIcon,
            },
            {
              title: intl.formatMessage({
                id: "escrow.sash.third.title",
              }),
              text: intl.formatMessage({
                id: "escrow.sash.third.paragraph",
              }),
              icon: Kleros,
            },
          ]}
        />
      </section>

      <section className={styles.usecases}>
        <h1>{intl.formatMessage({ id: "escrow.section-use-case.h1" })}</h1>
        <div className={styles.cards}>
          <HorizontalCard
            content={{
              icon: freelancing,
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.1" }),
            }}
          />
          <HorizontalCard
            content={{
              icon: www,
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.2" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: bounty,
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.3" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: eCommerce,
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.4" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: payroll,
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.5" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: crowdfunding,
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.6" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: otc,
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.7" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: copyright,
              text: intl.formatMessage({ id: "escrow.section-use-case.cards.8" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: plus,
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
      <section>
        <div id="holder" style={{ position: "relative", height: "50vw", maxWidth: "100vw", margin: "auto" }}>
          <div style={{ float: "right", maxWidth: "70%" }}>
            <Escrow1 />
          </div>
          <div style={{ float: "left", position: "absolute", top: "30%", maxWidth: "70%" }}>
            <Escrow2 />
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      </section>
      <hr />
      <section>
        <Contact
          content={{
            title: intl.formatMessage({
              id: "contact.title",
            }),
          }}
        />
      </section>
    </Container>
  </Layout>
);

export default injectIntl(Escrow);
