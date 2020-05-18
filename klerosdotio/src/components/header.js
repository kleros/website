import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import Logo from "../images/brand.svg"
import Court from "../images/kleros.svg"
import Curate from "../images/curate.svg"
import Escrow from "../images/escrow.svg"
import T2CR from "../images/t2cr.svg"
import DisputeResolver from "../images/dispute-resolver.svg"
import Ninja from "../images/ninja.svg"
import Linguo from "../images/linguo.svg"
import CU from "../images/kleros.svg"
import Realitio from "../images/kleros.svg"

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

const Header = ({}) => {
  const [language, setLanguage] = useState("🇬🇧")

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
              DApps
            </Button>
            <Link to="/integrations" className="text-pink nav-link">
              Integrations
            </Link>
            <Link to="/research" className="text-pink nav-link">
              Research
            </Link>
            <Nav.Link className="text-pink" href="https://blog.kleros.io">
              Blog
            </Nav.Link>
            <Link to="/about" className="text-pink nav-link">
              About
            </Link>
          </Nav>
          <Nav>
            <NavDropdown
              alignRight
              title={language}
              className="d-inline-flex h3"
            >
              {language != "🇬🇧" && (
                <NavDropdown.Item
                  className="h3 text-right px-2 "
                  onClick={() => setLanguage("🇬🇧")}
                  role="button"
                >
                  🇬🇧
                </NavDropdown.Item>
              )}
              {language != "🇹🇷" && (
                <NavDropdown.Item
                  className="h3 text-right px-2"
                  onClick={() => setLanguage("🇹🇷")}
                  role="button"
                >
                  🇹🇷
                </NavDropdown.Item>
              )}
              {language != "🇪🇸" && (
                <NavDropdown.Item
                  className="h3 text-right px-2"
                  onClick={() => setLanguage("🇪🇸")}
                  role="button"
                >
                  🇪🇸
                </NavDropdown.Item>
              )}
              {language != "🇫🇷" && (
                <NavDropdown.Item
                  className="h3 text-right px-2"
                  onClick={() => setLanguage("🇫🇷")}
                  role="button"
                >
                  🇫🇷
                </NavDropdown.Item>
              )}
              {language != "🇵🇹" && (
                <NavDropdown.Item
                  className="h3 text-right px-2"
                  onClick={() => {
                    setLanguage("🇵🇹")
                  }}
                  role="button"
                >
                  🇵🇹
                </NavDropdown.Item>
              )}
              {language != "🇨🇳" && (
                <NavDropdown.Item
                  className="h3 text-right px-2"
                  onClick={() => {
                    setLanguage("🇨🇳")
                  }}
                  role="button"
                >
                  🇨🇳
                </NavDropdown.Item>
              )}
              {language != "🇷🇺" && (
                <NavDropdown.Item
                  className="h3 text-right px-2"
                  onClick={() => {
                    setLanguage("🇷🇺")
                  }}
                  role="button"
                >
                  🇷🇺
                </NavDropdown.Item>
              )}
            </NavDropdown>
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

export default Header
