import React from "react";
import Media from "react-media";
import Logo from "../assets/svgs/brand_white.svg";
import styles from "./styles/header.module.css";

import ProductBadges from "./product-badges";

import { Button, Card, Collapse, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FormattedMessage, IntlContextConsumer, Link, changeLocale, injectIntl } from "gatsby-plugin-intl";

import EN from "src/assets/svgs/flags/gb-nir.svg";
import ES from "src/assets/svgs/flags/es.svg";
import FR from "src/assets/svgs/flags/fr.svg";
import KO from "src/assets/svgs/flags/kr.svg";
import PT from "src/assets/svgs/flags/pt.svg";
import BR from "src/assets/svgs/flags/br.svg";
import RU from "src/assets/svgs/flags/ru.svg";
import TR from "src/assets/svgs/flags/tr.svg";
import ZH from "src/assets/svgs/flags/cn.svg";

const FLAGS = {
  en: <EN />,
  es: <ES />,
  fr: <FR />,
  ko: <KO />,
  pt: <PT />,
  "pt-br": <BR />,
  ru: <RU />,
  tr: <TR />,
  zh: <ZH />,
};

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Link className="navbar-brand" to="/">
            <Logo className={styles.brand} />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className={styles.responsiveNavbarNav} id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Button aria-controls="collapse" aria-expanded="false" className="position-relative px-lg-2 pl-0 collapsed" data-target="#collapse" data-toggle="collapse" variant="outline-*">
                <FormattedMessage id="header.dapps" />
              </Button>
              <Link className="nav-link" to="/integrations">
                <FormattedMessage id="header.integrations" />
              </Link>
              <Link className="nav-link" to="/research">
                <FormattedMessage id="header.research" />
              </Link>
              <Nav.Link className="nav-link" href="https://blog.kleros.io" rel="noopener noreferrer">
                <FormattedMessage id="header.blog" />
              </Nav.Link>
              <Nav.Link className="nav-link" href="https://www.zazzle.com/store/kleros" rel="noopener noreferrer">
                <FormattedMessage id="header.store" />
              </Nav.Link>
              <Link className="nav-link" to="/about">
                <FormattedMessage id="header.about" />
              </Link>
            </Nav>
            <Media queries={{ notCollapsed: "(min-width: 768px)" }}>
              {(matches) =>
                matches.notCollapsed ? (
                  <Nav style={{ justifyContent: "flex-end", width: "8rem" }}>
                    <IntlContextConsumer>
                      {({ languages, language: currentLocale }) => {
                        const items = languages
                          .filter((language) => language !== currentLocale)
                          .map((language) => (
                            <NavDropdown.Item
                              className={` h3 text-right px-2`}
                              style={{ backgroundColor: "transparent" }}
                              key={language}
                              onClick={() => {
                                changeLocale(language);
                              }}
                              title={language}
                            >
                              {FLAGS[language] || language}
                            </NavDropdown.Item>
                          ));

                        return (
                          <NavDropdown alignRight className={`${styles.flagContainer} d-inline-flex h3`} title={FLAGS[currentLocale]}>
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
                              className={`h3 text-right px-2 ${styles.flag}`}
                              style={{ backgroundColor: "transparent" }}
                              key={language}
                              onClick={() => {
                                changeLocale(language);
                              }}
                              title={language}
                            >
                              {FLAGS[language] || language}
                            </NavDropdown.Item>
                          ));

                        return (
                          <NavDropdown alignRight className={`${styles.flagContainer} d-inline-flex h3`} title={FLAGS[currentLocale]}>
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
        <Collapse className="collapse" id="collapse">
          <Card className={styles.productsCard}>
            <Card.Title>
              <h1 className={styles.productsTitle}>
                <FormattedMessage id="header.dapps-title" />
              </h1>
            </Card.Title>
            <Card.Body className="px-5 py-3 text-center">
              <ProductBadges />
            </Card.Body>
          </Card>
        </Collapse>
      </header>
    );
  }
}

export default injectIntl(Header);
