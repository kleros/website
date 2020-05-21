import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sash from "../components/sash.js"
import HorizontalCard from "../components/horizontal-card.js"

import {
  Navbar,
  Nav,
  NavDropdown,
  Collapse,
  Button,
  Badge,
  Container,
} from "react-bootstrap"

import {
  injectIntl,
  Link,
  FormattedMessage,
  IntlContextConsumer,
  changeLocale,
} from "gatsby-plugin-intl"

import styles from "./styles/index.module.css"

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Home" lang={intl.locale} />
    <Container as="main" fluid className={styles.index}>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="index.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="index.section-hero.h2" />
        </h2>

        <Container className={styles.buttonWrapper}>
          <Button variant="primary">
            <FormattedMessage id="index.section-hero.button-primary" />
          </Button>
          <Button variant="secondary">
            <FormattedMessage id="index.section-hero.button-secondary" />
          </Button>
        </Container>
        <img src="/index-hero.png" />
      </section>
      <Sash
        as="div"
        figures={{
          first: {
            title: intl.formatMessage({
              id: "index.sash.first.title",
            }),
            paragraph: intl.formatMessage({
              id: "index.sash.first.paragraph",
            }),
            icon: "scales",
          },
          second: {
            title: intl.formatMessage({
              id: "index.sash.second.title",
            }),
            paragraph: intl.formatMessage({
              id: "index.sash.second.paragraph",
            }),
            icon: "epsilon",
          },
          third: {
            title: intl.formatMessage({
              id: "index.sash.third.title",
            }),
            paragraph: intl.formatMessage({
              id: "index.sash.third.paragraph",
            }),
            icon: "kleros",
          },
        }}
      />
      <section>
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/M8nJ7yrTL-Q"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; controls=0"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <hr />
      <section className={styles.usecases}>
        <h1>{intl.formatMessage({ id: "index.section-2.h1" })}</h1>
        <h2>{intl.formatMessage({ id: "index.section-2.h2" })}</h2>
        <div className={styles.cards}>
          <HorizontalCard
            content={{
              icon: "smallClaims",
              text: intl.formatMessage({ id: "index.section-2.cards.1" }),
            }}
          />
          <HorizontalCard
            content={{
              icon: "insurance",
              text: intl.formatMessage({ id: "index.section-2.cards.2" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "eCommerce",
              text: intl.formatMessage({ id: "index.section-2.cards.3" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "finance",
              text: intl.formatMessage({ id: "index.section-2.cards.4" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "freelancing",
              text: intl.formatMessage({ id: "index.section-2.cards.5" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "token",
              text: intl.formatMessage({ id: "index.section-2.cards.6" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "moderation",
              text: intl.formatMessage({ id: "index.section-2.cards.7" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "copyright",
              text: intl.formatMessage({ id: "index.section-2.cards.8" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "plus",
              text: intl.formatMessage({ id: "index.section-2.cards.9" }),
            }}
          />
        </div>
      </section>
      <section>
        <h1>{intl.formatMessage({ id: "index.section-3.h1" })}</h1>
        <h2>{intl.formatMessage({ id: "index.section-3.h2" })}</h2>
        <img src="/cases-disputes.png" />
      </section>
    </Container>
  </Layout>
)

export default injectIntl(IndexPage)
