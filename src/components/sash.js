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

const Sash = ({ intl }) => {
  return (
    <Container fluid className={styles.sash}>
      <h2> To Be Continued...</h2>
    </Container>
  )
}

Sash.propTypes = {}

export default injectIntl(Sash)
