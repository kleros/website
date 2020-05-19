import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
    </Container>
  </Layout>
)

export default injectIntl(IndexPage)
