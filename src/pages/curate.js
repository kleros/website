import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sash from "../components/sash";
import HorizontalCard from "../components/horizontal-card";
import Contact from "../components/contact";
import Deversifi from "src/assets/images/third-party-logos/deversifi.png";
import CurateTwoScreen from "src/assets/svgs/curate-twoscreen.svg";
import CurateHero from "src/assets/images/curate-hero.png";
import List from "src/assets/svgs/icon-list.svg";
import TCR from "src/assets/svgs/icon-tcr.svg";
import Scales from "src/assets/svgs/icon-scales.svg";
import eCommerce from "src/assets/svgs/icon-e-commerce.svg";
import insurance from "src/assets/svgs/icon-shield.svg";
import moderation from "src/assets/svgs/icon-moderation.svg";
import plus from "src/assets/svgs/icon-plus.svg";
import token from "src/assets/svgs/icon-token.svg";
import restaurant from "src/assets/svgs/icon-fork-n-knife.svg";
import hotel from "src/assets/svgs/icon-hotel.svg";
import spam from "src/assets/svgs/icon-spam.svg";
import social from "src/assets/svgs/icon-speaker.svg";
import Ninja from "src/assets/svgs/ninja-black-text.svg";
import { Badge, Container } from "react-bootstrap";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/curate.module.css";

const Curate = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "curate.seo-title" })} />
    <Container className={styles.curate} fluid>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="curate.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="curate.section-hero.h2" />
        </h2>

        <Container className={styles.buttonWrapper}>
          <a className="btn btn-primary" href="https://curate.kleros.io" rel="noopener noreferrer" target="blank">
            <FormattedMessage id="curate.section-hero.button-primary" />
          </a>
        </Container>
        <img alt={CurateHero} src={CurateHero} />
      </section>
      <section className="light">
        <Sash
          as="div"
          figures={[
            {
              icon: List,
              text: intl.formatMessage({
                id: "curate.sash.first.paragraph",
              }),
              title: intl.formatMessage({
                id: "curate.sash.first.title",
              }),
            },
            {
              icon: TCR,
              text: intl.formatMessage({
                id: "curate.sash.second.paragraph",
              }),
              title: intl.formatMessage({
                id: "curate.sash.second.title",
              }),
            },
            {
              icon: Scales,
              text: intl.formatMessage({
                id: "curate.sash.third.paragraph",
              }),
              title: intl.formatMessage({
                id: "curate.sash.third.title",
              }),
            },
          ]}
        />
      </section>
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
        <a href="https://curate.kleros.io" target="blank" rel="noopener noreferrer" className="btn btn-secondary">
          <FormattedMessage id="curate.section-3.button" />
        </a>
      </section>
      <section>
        <h1>
          <FormattedMessage id="curate.section-4.h1" />
        </h1>
        <Container className="mt-5 d-flex flex-wrap justify-content-around">
          <Badge as="a" className={styles.badge} href="https://www.deversifi.com/">
            <span className={styles.helper} />
            <img src={Deversifi} alt="Deversifi" />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://uniswap.ninja/">
            <Ninja />
          </Badge>
        </Container>
      </section>
      <div />
      <section className="nopadding">
        <CurateTwoScreen />
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

export default injectIntl(Curate);
