/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import styles from "./styles/horizontal-card.module.css"

import copyright from "src/assets/icons/copyright.png"
import eCommerce from "src/assets/icons/e-commerce.png"
import finance from "src/assets/icons/finance.png"
import freelancing from "src/assets/icons/freelancing.png"
import insurance from "src/assets/icons/insurance.png"
import moderation from "src/assets/icons/moderation.png"
import plus from "src/assets/icons/plus.png"
import smallClaims from "src/assets/icons/small-claims.png"
import token from "src/assets/icons/token.png"

import {
  Navbar,
  Nav,
  NavDropdown,
  Collapse,
  Button,
  Badge,
  Col,
  Row,
  Container,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap"

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const ICONS = {
  copyright,
  eCommerce,
  finance,
  freelancing,
  insurance,
  moderation,
  plus,
  smallClaims,
  token,
}

const HorizontalCard = ({ content, intl }) => (
  <Container fluid className={styles.horizontalCard}>
    <img src={ICONS[content.icon]} />
    <span>{content.text}</span>
  </Container>
)

HorizontalCard.propTypes = {}

export default injectIntl(HorizontalCard)
