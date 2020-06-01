import React from "react";

import Logo from "../assets/svgs/brand_white.svg";
import Court from "../assets/svgs/kleros.svg";
import Curate from "../assets/svgs/curate.svg";
import Escrow from "../assets/svgs/escrow.svg";
import T2CR from "../assets/svgs/t2cr.svg";
import DisputeResolver from "../assets/svgs/dispute-resolver.svg";
import Ninja from "../assets/svgs/ninja.svg";
import Linguo from "../assets/svgs/linguo.svg";

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
    this.state = { navbarNotCollapsed: window && window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ navbarNotCollapsed: e.matches });
    window && window.matchMedia("(min-width: 768px)").addListener(handler);
  }

  render() {
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
            <Nav style={this.state.navbarNotCollapsed ? { width: "8rem", justifyContent: "flex-end" } : {}}>
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
          </Navbar.Collapse>
        </Navbar>
        <Collapse id="collapse" className={`collapse ${styles.dapps}`}>
          <Card>
            <Card.Body className="px-5 py-3 text-center">
              <div className="d-inline-block">
                <a href="https://court.kleros.io">
                  <Badge>
                    <Court />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Court</p>
              </div>
              <div className="d-inline-block">
                <a href="https://escrow.kleros.io">
                  <Badge>
                    <Escrow />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Escrow</p>
              </div>
              <div className="d-inline-block">
                <a href="https://linguo.kleros.io">
                  <Badge>
                    <Linguo />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Linguo</p>
              </div>
              <div className="d-inline-block">
                <a href="https://tokens.kleros.io">
                  <Badge>
                    <T2CR />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">T2CR</p>
              </div>
              <div className="d-inline-block">
                <a href="https://curate.kleros.io">
                  <Badge>
                    <Curate />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Curate</p>
              </div>
              <div className="d-inline-block">
                <a href="https://uniswap.ninja">
                  <Badge>
                    <Ninja />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Ninja</p>
              </div>
              <div className="d-inline-block">
                <a href="https://resolve.kleros.io">
                  <Badge>
                    <DisputeResolver />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Dispute Resolver</p>
              </div>
              <div className="d-inline-block">
                <a href="https://resolve.kleros.io">
                  <Badge>
                    <span class={styles.helper}></span>
                    <img src={CryptoUnlocked} />
                  </Badge>
                </a>
                <p className="text-center text-purple-darker ">Crypto Unlocked</p>
              </div>
              <div className="d-inline-block">
                <a href="https://resolve.kleros.io">
                  <Badge>
                    <span class={styles.helper}></span>
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
