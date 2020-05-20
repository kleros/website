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

import styles from "./styles/sash.module.css"

import escrow from "src/assets/icons/escrow.png"
import epsilon from "src/assets/icons/epsilon.png"
import kleros from "src/assets/icons/kleros.png"
import list from "src/assets/icons/list.png"
import onepager from "src/assets/icons/onepager.png"
import yellowpaper from "src/assets/icons/yellowpaper.png"
import whitepaper from "src/assets/icons/whitepaper.png"
import t2cr from "src/assets/icons/t2cr.png"
import scales from "src/assets/icons/scales.png"
import risks from "src/assets/icons/risks.png"

import {
  Navbar,
  Nav,
  NavDropdown,
  Collapse,
  Card,
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
  escrow,
  epsilon,
  kleros,
  list,
  onepager,
  yellowpaper,
  whitepaper,
  t2cr,
  scales,
  risks,
}

const Sash = ({ figures, intl }) => {
  return (
    <Container fluid className={styles.sash}>
      <Row className="d-block d-lg-flex">
        <Col>
          <figure>
            <img src={ICONS[figures.first.icon]} />
            <figcaption>
              <span>{figures.first.title}</span>
              <span>{figures.first.paragraph}</span>
            </figcaption>
          </figure>
        </Col>
        <Col>
          <figure>
            <img src={ICONS[figures.second.icon]} />
            <figcaption>
              <span>{figures.second.title}</span>
              <span>{figures.second.paragraph}</span>
            </figcaption>
          </figure>
        </Col>
        <Col>
          <figure>
            <img src={ICONS[figures.third.icon]} />
            <figcaption>
              <span>{figures.third.title}</span>
              <span>{figures.third.paragraph}</span>
            </figcaption>
          </figure>
        </Col>
      </Row>
    </Container>
  )
}

Sash.propTypes = {}

export default injectIntl(Sash)
