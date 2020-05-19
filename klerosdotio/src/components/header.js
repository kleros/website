import PropTypes from "prop-types"
import React, { useState } from "react"

import Logo from "../assets/images/brand.svg"
import Court from "../assets/images/kleros.svg"
import Curate from "../assets/images/curate.svg"
import Escrow from "../assets/images/escrow.svg"
import T2CR from "../assets/images/t2cr.svg"
import DisputeResolver from "../assets/images/dispute-resolver.svg"
import Ninja from "../assets/images/ninja.svg"
import Linguo from "../assets/images/linguo.svg"
import CU from "../assets/images/kleros.svg"
import Realitio from "../assets/images/kleros.svg"

import styles from "./styles/header.module.css"
import {
  Navbar,
  Nav,
  NavDropdown,
  Collapse,
  Card,
  Button,
  Badge,
} from "react-bootstrap"

import {
  injectIntl,
  Link,
  FormattedMessage,
  IntlContextConsumer,
  changeLocale,
} from "gatsby-plugin-intl"

const FLAGS = {
  en: "🇬🇧",
  tr: "🇹🇷",
  fr: "🇫🇷",
  ru: "🇷🇺",
  es: "🇪🇸",
  pt: "🇵🇹",
  "pt-br": "🇧🇷",
  zh: "🇨🇳",
  ko: "🇰🇷",
}

const Header = ({}) => {
  return (
    <header className={styles.header}>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Button
              variant="outline-*"
              data-toggle="collapse"
              data-target="#dapps"
              aria-expanded="false"
              aria-controls="dapps"
              className={`position-relative px-lg-2 pl-0 collapsed`}
            >
              <FormattedMessage id="header.dapps" />
            </Button>
            <Link to="/integrations" className="text-pink nav-link">
              <FormattedMessage id="header.integrations" />
            </Link>
            <Link to="/research" className="text-pink nav-link">
              <FormattedMessage id="header.research" />
            </Link>
            <Nav.Link className="text-pink" href="https://blog.kleros.io">
              <FormattedMessage id="header.blog" />
            </Nav.Link>
            <Link to="/about" className="text-pink nav-link">
              <FormattedMessage id="header.about" />
            </Link>
          </Nav>
          <Nav>
            <IntlContextConsumer>
              {({ languages, language: currentLocale }) => {
                const items = languages
                  .filter(language => language != currentLocale)
                  .map(language => (
                    <NavDropdown.Item
                      key={language}
                      title={language}
                      className="h3 text-right px-2 "
                      onClick={() => {
                        changeLocale(language)
                      }}
                    >
                      {FLAGS[language] || language}
                    </NavDropdown.Item>
                  ))

                return (
                  <NavDropdown
                    alignRight
                    title={FLAGS[currentLocale]}
                    className="d-inline-flex h3"
                  >
                    {items}
                  </NavDropdown>
                )
              }}
            </IntlContextConsumer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Collapse className="collapse" id="dapps">
        <Card>
          <Card.Body className="px-5 py-3 text-center">
            <div className="d-inline-block">
              <a href="https://court.kleros.io">
                <Badge>
                  <Court />
                </Badge>
              </a>
              <p className="text-center text-purple-darker f-weight-600">
                Court
              </p>
            </div>
            <div className="d-inline-block">
              <a href="https://escrow.kleros.io">
                <Badge>
                  <Escrow />
                </Badge>
              </a>
              <p className="text-center text-purple-darker f-weight-600">
                Escrow
              </p>
            </div>
            <div className="d-inline-block">
              <a href="https://linguo.kleros.io">
                <Badge>
                  <Linguo />
                </Badge>
              </a>
              <p className="text-center text-purple-darker f-weight-600">
                Linguo
              </p>
            </div>
            <div className="d-inline-block">
              <a href="https://tokens.kleros.io">
                <Badge>
                  <T2CR />
                </Badge>
              </a>
              <p className="text-center text-purple-darker f-weight-600">
                T2CR
              </p>
            </div>
            <div className="d-inline-block">
              <a href="https://uniswap.ninja">
                <Badge>
                  <Ninja />
                </Badge>
              </a>
              <p className="text-center text-purple-darker f-weight-600">
                Ninja
              </p>
            </div>
            <div className="d-inline-block">
              <a href="https://resolve.kleros.io">
                <Badge>
                  <DisputeResolver />
                </Badge>
              </a>
              <p className="text-center text-purple-darker f-weight-600">
                Dispute Resolver
              </p>
            </div>
            <div className="d-inline-block">
              <a href="https://resolve.kleros.io">
                <Badge>
                  <CU />
                </Badge>
              </a>
              <p className="text-center text-purple-darker f-weight-600">
                Crypto Unlocked
              </p>
            </div>
            <div className="d-inline-block">
              <a href="https://resolve.kleros.io">
                <Badge>
                  <Realitio />
                </Badge>
              </a>
              <p className="text-center text-purple-darker f-weight-600 ">
                Realitio
              </p>
            </div>
          </Card.Body>
        </Card>
      </Collapse>
    </header>
  )
}

export default injectIntl(Header)
