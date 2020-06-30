import React from "react";

import Logo from "../assets/svgs/brand_white.svg";
import Github from "src/assets/svgs/github.svg";
import Linkedin from "src/assets/svgs/linkedin.svg";
import Telegram from "src/assets/svgs/telegram.svg";
import Twitter from "src/assets/svgs/twitter.svg";
import Slack from "src/assets/svgs/slack.svg";
import Reddit from "src/assets/svgs/reddit.svg";
import Ghost from "src/assets/svgs/ghost.svg";

import OnePagerEN from "../assets/books-papers-flyers/onepager_en.pdf";
import OnePagerTR from "../assets/books-papers-flyers/onepager_tr.pdf";
import OnePagerFR from "../assets/books-papers-flyers/onepager_fr.pdf";
import OnePagerES from "../assets/books-papers-flyers/onepager_es.pdf";
import OnePagerKO from "../assets/books-papers-flyers/onepager_ko.pdf";
import OnePagerPT from "../assets/books-papers-flyers/onepager_pt.pdf";
import OnePagerRU from "../assets/books-papers-flyers/onepager_ru.pdf";
import OnePagerZH from "../assets/books-papers-flyers/onepager_zh.pdf";

import WhitePaperEN from "../assets/books-papers-flyers/whitepaper_en.pdf";
import WhitePaperES from "../assets/books-papers-flyers/whitepaper_es.pdf";

import YellowPaperEN from "../assets/books-papers-flyers/yellowpaper_en.pdf";

import styles from "./styles/footer.module.css";
import { Button, Col, Row, Container, InputGroup, FormControl } from "react-bootstrap";

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

const ONEPAGERS = {
  en: OnePagerEN,
  tr: OnePagerTR,
  fr: OnePagerFR,
  es: OnePagerES,
  ko: OnePagerKO,
  ru: OnePagerRU,
  zh: OnePagerZH,
  pt: OnePagerPT,
};

const WHITE_PAPERS = {
  en: WhitePaperEN,
  es: WhitePaperES,
};

const YELLOW_PAPERS = {
  en: YellowPaperEN,
};

const Footer = ({ intl }) => {
  return (
    <footer className={styles.footer}>
      <Container fluid className="p-0">
        <Row>
          <Col xs={0} md={3} className="d-none d-md-block">
            <Link to="/">
              <Logo />
            </Link>
          </Col>
          <Col xs={12} md={{ span: 7, offset: 2 }} xl={{ span: 6, offset: 0 }} className={styles.links}>
            <Link className="mr-3" to="/about">
              <FormattedMessage id="footer.about" />
            </Link>
            <Link className="mr-3" to="/coop">
              <FormattedMessage id="footer.cooperative" />
            </Link>
            <a className="mr-3" href={WHITE_PAPERS[intl.locale] || WHITE_PAPERS[intl.defaultLocale]}>
              <FormattedMessage id="footer.whitepaper" />
            </a>
            <a className="mr-3" href={YELLOW_PAPERS[intl.locale] || YELLOW_PAPERS[intl.defaultLocale]}>
              <FormattedMessage id="footer.yellowpaper" />
            </a>
            <a className="mr-3" href={ONEPAGERS[intl.locale] || ONEPAGERS[intl.defaultLocale]}>
              <FormattedMessage id="footer.onepager" />
            </a>
            <Link className="mr-3" to="/research">
              <FormattedMessage id="footer.research" />
            </Link>
            <Link className="mr-3" to="/token">
              <FormattedMessage id="footer.pnktoken" />
            </Link>
            <a className="mr-3" href="https://developer.kleros.io">
              <FormattedMessage id="footer.developer" />
            </a>
            <Link className="mr-3" to="/integrations">
              <FormattedMessage id="footer.integrations" />
            </Link>
            <a className="mr-3" href="https://governance.kleros.io">
              <FormattedMessage id="footer.governance" />
            </a>
            <Link className="mr-3" to="/escrow">
              <FormattedMessage id="footer.escrow" />
            </Link>
            <Link className="mr-3" to="/curate">
              <FormattedMessage id="footer.curate" />
            </Link>
            <Link className="mr-3" to="/fellowship">
              <FormattedMessage id="footer.fellowship" />
            </Link>
            <Link className="mr-3" to="/community">
              <FormattedMessage id="footer.community" />
            </Link>
            <a className="mr-3" href="https://blog.kleros.io">
              <FormattedMessage id="footer.blog" />
            </a>
            <Link className="mr-3" to="/media">
              <FormattedMessage id="footer.media" />
            </Link>
            <Link className="mr-3" to="/book">
              <FormattedMessage id="footer.book" />
            </Link>
            <Link className="mr-3" to="/faq">
              <FormattedMessage id="footer.faq" />
            </Link>
          </Col>
          <Col className="d-none d-xl-block">
            <a href="https://court.kleros.io" className="btn btn-primary d-block mx-0 mt-0">
              <FormattedMessage id="footer.button-primary" />
            </a>
            <Link to="/integrations" className="btn btn-secondary d-block mx-0" variant="secondary">
              <FormattedMessage id="footer.button-secondary" />
            </Link>
          </Col>
        </Row>
        <hr className="mt-4 mb-5" />
        <div className={styles.bottomContainer}>
          <Row className={styles.social}>
            <a className="g-kleros_footer__anchor" rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
              <Github />
            </a>
            <a className="g-kleros_footer__anchor" href="https://slack.kleros.io/" rel="noopener noreferrer" target="_blank">
              <Slack />
            </a>

            <a className="g-kleros_footer__anchor" href="https://reddit.com/r/Kleros/" rel="noopener noreferrer" target="_blank">
              <Reddit />
            </a>
            <a className="g-kleros_footer__anchor" href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
              <Twitter />
            </a>

            <a className="g-kleros_footer__anchor" href="https://blog.kleros.io/" rel="noopener noreferrer" target="_blank">
              <Ghost />
            </a>

            <a className="g-kleros_footer__anchor" href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
              <Telegram />
            </a>
            <a className="g-kleros_footer__anchor" href="https://www.linkedin.com/company/kleros/" rel="noopener noreferrer" target="_blank">
              <Linkedin />
            </a>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center text-white ">
              <FormattedMessage id="footer.subscribe-title" />
            </p>
          </Row>
          <Row className={styles.subscribe}>
            <Button variant="primary" className="mb-5 mt-1" href="https://cdn.forms-content.sg-form.com/e7cee475-ba0e-11ea-ada4-aada6854d8c2" target="blank" rel="noopener noreferrer">
              <FormattedMessage id="footer.subscribe-button" />
            </Button>
          </Row>
        </div>
      </Container>

      <p id="copyright" className="d-block text-center">
        <FormattedMessage id="footer.copyright" /> {new Date().getFullYear()} © Kleros
      </p>

      <Button href="#gatsby-focus-wrapper" className={styles.scrollback}>
        ↑
      </Button>
    </footer>
  );
};

export default injectIntl(Footer);
