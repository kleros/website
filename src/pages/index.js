import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sash from "../components/sash.js"

import {
  Navbar,
  Nav,
  NavDropdown,
  Collapse,
  Card,
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
      <h1>
        <FormattedMessage id="index.h1" />
      </h1>
      <h2>
        <FormattedMessage id="index.h2" />
      </h2>

      <Container className={styles.buttonWrapper}>
        <Button variant="primary">
          <FormattedMessage id="index.hero.button-primary" />
        </Button>
        <Button variant="secondary">
          <FormattedMessage id="index.hero.button-secondary" />
        </Button>
      </Container>
      <img src="/index-hero.png" />
      <Sash
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
    </Container>
  </Layout>
)

export default injectIntl(IndexPage)
