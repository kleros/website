import React from "react";
import Media from "react-media";

import Logo from "../assets/svgs/brand_white.svg";

import Court from "../assets/images/kleros.png";
import Curate from "../assets/images/curate.png";
import Escrow from "../assets/images/escrow.png";
import T2CR from "../assets/images/t2cr.png";
import DisputeResolver from "../assets/images/dispute-resolver.png";
import Ninja from "../assets/images/ninja.png";
import Linguo from "../assets/images/linguo.png";

import CryptoUnlocked from "src/assets/images/crypto-unlocked.png";
import Realitio from "src/assets/images/realitio.png";

import styles from "./styles/header.module.css";
import { Navbar, Nav, NavDropdown, Collapse, Card, Button, Badge } from "react-bootstrap";

import { injectIntl, Link, FormattedMessage, IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

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
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { svgs } = this.props;
    return (
      <header className={styles.header}>
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Link className="navbar-brand" to="/">
            <Logo className={styles.brand} />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className={styles.responsiveNavbarNav}>
            <Nav className="m-auto">
              <Button variant="outline-*" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapse" className={`position-relative px-lg-2 pl-0 collapsed`}>
                <FormattedMessage id="header.dapps" />
              </Button>
              <Link to="/integrations" className=" nav-link">
                <FormattedMessage id="header.integrations" />
              </Link>
              <Link to="/research" className=" nav-link">
                <FormattedMessage id="header.research" />
              </Link>
              <Nav.Link className="" href="https://blog.kleros.io">
                <FormattedMessage id="header.blog" />
              </Nav.Link>
              <Link to="/about" className=" nav-link">
                <FormattedMessage id="header.about" />
              </Link>
            </Nav>
            <Media queries={{ notCollapsed: "(min-width: 768px)" }}>
              {(matches) =>
                matches.notCollapsed ? (
                  <Nav style={{ width: "8rem", justifyContent: "flex-end" }}>
                    <IntlContextConsumer>
                      {({ languages, language: currentLocale }) => {
                        const items = languages
                          .filter((language) => language !== currentLocale)
                          .map((language) => (
                            <NavDropdown.Item
                              key={language}
                              title={language}
                              className="h3 text-right px-2 "
                              onClick={() => {
                                changeLocale(language);
                              }}
                            >
                              {FLAGS[language] || language}
                            </NavDropdown.Item>
                          ));

                        return (
                          <NavDropdown alignRight title={FLAGS[currentLocale]} className="d-inline-flex h3">
                            {items}
                          </NavDropdown>
                        );
                      }}
                    </IntlContextConsumer>
                  </Nav>
                ) : (
                  <Nav>
                    <IntlContextConsumer>
                      {({ languages, language: currentLocale }) => {
                        const items = languages
                          .filter((language) => language !== currentLocale)
                          .map((language) => (
                            <NavDropdown.Item
                              key={language}
                              title={language}
                              className="h3 text-right px-2 "
                              onClick={() => {
                                changeLocale(language);
                              }}
                            >
                              {FLAGS[language] || language}
                            </NavDropdown.Item>
                          ));

                        return (
                          <NavDropdown alignRight title={FLAGS[currentLocale]} className="d-inline-flex h3">
                            {items}
                          </NavDropdown>
                        );
                      }}
                    </IntlContextConsumer>
                  </Nav>
                )
              }
            </Media>
          </Navbar.Collapse>
        </Navbar>
        <Collapse as="section" id="collapse" className={`collapse ${styles.dapps}`}>
          <Card>
            <Card.Body className="px-5 py-3 text-center">
              <div className="d-inline-block">
                <a href="https://court.kleros.io">
                  <Badge>
                    <span className={styles.helper}></span>
                    <img src={Court} />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Court</p>
              </div>
              <div className="d-inline-block">
                <a href="https://escrow.kleros.io">
                  <Badge>
                    <span className={styles.helper}></span>
                    <img src={Escrow} />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Escrow</p>
              </div>
              <div className="d-inline-block">
                <a href="https://resolve.kleros.io">
                  <Badge>
                    <span className={styles.helper}></span>
                    <img src={DisputeResolver} />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Dispute Resolver</p>
              </div>
              <div className="d-inline-block">
                <a href="https://linguo.kleros.io">
                  <Badge>
                    <span className={styles.helper}></span>
                    <img src={Linguo} />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Linguo</p>
              </div>
              <div className="d-inline-block">
                <a href="https://tokens.kleros.io">
                  <Badge>
                    <span className={styles.helper}></span>
                    <img src={T2CR} />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">T2CR</p>
              </div>
              <div className="d-inline-block">
                <a href="https://curate.kleros.io">
                  <Badge>
                    <span className={styles.helper}></span>
                    <img src={Curate} />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Curate</p>
              </div>
              <div className="d-inline-block">
                <a href="https://uniswap.ninja">
                  <Badge>
                    <span className={styles.helper}></span>

                    <img src={Ninja} />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Ninja</p>
              </div>

              <div className="d-inline-block">
                <a href="https://resolve.kleros.io">
                  <Badge>
                    <span className={styles.helper}></span>
                    <img src={CryptoUnlocked} />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Crypto Unlocked</p>
              </div>
              <div className="d-inline-block">
                <a href="https://resolve.kleros.io">
                  <Badge>
                    <span className={styles.helper}></span>
                    <img src={Realitio} />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker  ">Realitio</p>
              </div>
            </Card.Body>
          </Card>
        </Collapse>
      </header>
    );
  }
}

export default injectIntl(Header);
