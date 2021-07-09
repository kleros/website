import React from "react";
import Media from "react-media";
import Logo from "../assets/svgs/brand_white.svg";
import styles from "./styles/header.module.css";

import ProductBadges from "./product-badges";
import ServiceBadges from "./service-badges";

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

const STORE_URLS = {
  en: "https://www.zazzle.com/",
  es: "https://www.zazzle.es/",
  "pt-br": "https://www.zazzle.com.br/",
};

class Header extends React.Component {
  render() {
    const { intl } = this.props;
    return (
      <header className={styles.header} id="header">
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Link className="navbar-brand" to="/">
            <Logo className={styles.brand} />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className={styles.responsiveNavbarNav} id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="nav-link" href="https://court.kleros.io" target="_blank" rel="noopener noreferrer">
                Court
              </Nav.Link>
              <Button aria-controls="#products" type="button" aria-expanded="false" className="position-relative px-lg-2 pl-0 collapsed" data-target="#products" data-toggle="collapse" variant="outline-*">
                <FormattedMessage id="header.dapps" />
              </Button>
              <Button aria-controls="#services" type="button" aria-expanded="false" className="position-relative px-lg-2 pl-0 collapsed" data-target="#services" data-toggle="collapse" variant="outline-*">
                <FormattedMessage id="header.services" />
              </Button>
              <Link className="nav-link" to="/integrations">
                <FormattedMessage id="header.integrations" />
              </Link>
              <Link className="nav-link" to="/research">
                <FormattedMessage id="header.research" />
              </Link>
              <Nav.Link className="nav-link" href="https://blog.kleros.io" target="_blank" rel="noopener noreferrer">
                <FormattedMessage id="header.blog" />
              </Nav.Link>
              <Nav.Link className="nav-link" href="https://kleros.gitbook.io" target="_blank" rel="noopener noreferrer">
                <FormattedMessage id="header.docs" />
              </Nav.Link>
              <Nav.Link className="nav-link" href={`${STORE_URLS[intl.locale] || STORE_URLS.en}store/kleros`} target="_blank" rel="noopener noreferrer">
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
        <div className="panel">
          <Collapse className="collapse" id="products" data-parent="#header">
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
        </div>
        <div className="panel">
          <Collapse className="collapse" id="services" data-parent="#header">
            <Card className={styles.productsCard}>
              <Card.Body className="px-5 py-3 text-center">
                <ServiceBadges />
              </Card.Body>
            </Card>
          </Collapse>
        </div>
      </header>
    );
  }
}

export default injectIntl(Header);
