import React from "react";
import Media from "react-media";
import Logo from "../assets/svgs/brand_white.svg";
import styles from "./styles/header.module.css";

import ProductBadges from "./product-badges";
import ServiceBadges from "./service-badges";

import { Button, Card, Collapse, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FormattedMessage, IntlContextConsumer, Link, changeLocale, injectIntl } from "gatsby-plugin-intl";

import IconDapps from "src/assets/svgs/icon-dapps.svg";

import EN from "src/assets/svgs/flags/gb-nir.svg";
import ES from "src/assets/svgs/flags/es.svg";
import FR from "src/assets/svgs/flags/fr.svg";
import KO from "src/assets/svgs/flags/kr.svg";
import PT from "src/assets/svgs/flags/pt.svg";
import BR from "src/assets/svgs/flags/br.svg";
import RU from "src/assets/svgs/flags/ru.svg";
import TR from "src/assets/svgs/flags/tr.svg";
import ZH from "src/assets/svgs/flags/cn.svg";

import Court from "../assets/svgs/kleros.svg";
import Escrow from "../assets/svgs/escrow.svg";
import T2CR from "../assets/svgs/t2cr.svg";
import POH from "../assets/svgs/poh-logo.svg";
import Curate from "../assets/svgs/curate.svg";
import DisputeResolver from "../assets/svgs/dispute-resolver.svg";
import CryptoUnlocked from "src/assets/images/third-party-logos/crypto-unlocked.png";
import Realitio from "src/assets/images/third-party-logos/realitio.png";
import Omen from "src/assets/images/third-party-logos/omen.png";
import Linguo from "../assets/svgs/linguo.svg";
import Revoke from "../assets/svgs/revoke.svg";
import Gnosis from "../assets/svgs/gnosis.svg";
import Unslashed from "../assets/svgs/unslashed.svg";
import Polka from "../assets/images/third-party-logos/polkamarkets.png";
import Sushi from "../assets/images/third-party-logos/sushi.png";
import Zerion from "../assets/svgs/third-party-logos/zerion/logos/svg/blue-logo.svg";
import Uniswap from "../assets/svgs/third-party-logos/uniswap/default.svg";
import CLR from "../assets/images/third-party-logos/clr-fund.png";
import Gitcoin from "../assets/svgs/third-party-logos/gitcoin/logo/duotone/positive.svg";
import RCN from "../assets/svgs/third-party-logos/ripio.svg";

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
const PNGToIcon = (alt, PNG) => (props) => <img alt={alt} src={PNG} {...props} />;

const products = [
  { name: "Proof of Humanity", href: "https://www.proofofhumanity.id/", Icon: POH, target: "_blank" },
  { name: "Escrow", href: "https://www.escrow.kleros.io/", Icon: Escrow, target: "_blank" },
  { name: "Curate", href: "https://www.curate.kleros.io/", Icon: Curate, target: "_blank" },
  { name: "Tokens", href: "https://tokens.kleros.io", Icon: T2CR, target: "_blank" },
  { name: "Linguo", href: "https://linguo.kleros.io", Icon: Linguo, target: "_blank" },
  { name: "Dispute Resolver", href: "https://resolve.kleros.io", Icon: DisputeResolver, target: "_blank" },
];

const integrations = [
  { name: "Crypto Unlocked", href: "https://cryptounlocked.wetrust.io", Icon: PNGToIcon("Crypto Unlocked", CryptoUnlocked), target: "_blank" },
  { name: "Reality", href: "https://realit.io", Icon: PNGToIcon("Realitio", Realitio), target: "_blank" },
  { name: "Omen", href: "https://gateway.ipfs.io/ipfs/QmbB3wA5R2PR8s87pJRSUCcBHRxAtfFtkSWmVWEcHsaFeV/#/0x592af74865799e1ed509afef002a6eca26e1caa2", Icon: PNGToIcon("Omen", Omen), target: "_blank" },
  { name: "Revoke", href: "https://revoke.cash", Icon: Revoke, target: "_blank" },
  { name: "Gnosis", href: "https://gnosis-safe.io/", Icon: Gnosis, target: "_blank" },
  { name: "Polkamarkets", href: "https://www.polkamarkets.com/", Icon: PNGToIcon("Polkamarkets", Polka), target: "_blank" },
  { name: "Sushi", href: "https://www.polkamarkets.com/", Icon: PNGToIcon("Sushi", Sushi), target: "_blank" },
  { name: "Zerion", href: "https://zerion.io/", Icon: Zerion, target: "_blank" },
  { name: "Uniswap", href: "https://uniswap.io/", Icon: Uniswap, target: "_blank" },
  { name: "clr.fund", href: "https://clr.fund/", Icon: PNGToIcon("CLR", CLR), target: "_blank" },
  { name: "Gitcoin", href: "https://gitcoin.co/", Icon: Gitcoin, target: "_blank" },
  { name: "Ripio Credit", href: "https://https://rcn.finance/", Icon: RCN, target: "_blank" },
];

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
        <Navbar collapseOnSelect expand="lg" variant="dark">
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
              <NavDropdown title="Usecases" id="usecases" className={styles.usecases}>
                <NavDropdown.Link eventKey="4.1">Escrow</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Governance</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Curation</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">Oracle</NavDropdown.Item>
              </NavDropdown>
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
            <Media queries={{ notCollapsed: "(min-width: 992px)" }}>
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
              <Card.Header>
                <span>
                  <IconDapps />
                </span>
                <FormattedMessage id="header.dapps-header" />
              </Card.Header>

              <Card.Body className="px-5 py-3 text-center">
                <ProductBadges title="Products" items={products} />
                <ProductBadges title="Integrations" items={integrations} />
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
