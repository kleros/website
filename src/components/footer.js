import React from "react";
import Logo from "../assets/svgs/brand_white.svg";
import Github from "src/assets/svgs/github.svg";
import Linkedin from "src/assets/svgs/linkedin.svg";
import Telegram from "src/assets/svgs/telegram.svg";
import X from "src/assets/svgs/x.svg";
import Reddit from "src/assets/svgs/reddit.svg";
import Ghost from "src/assets/svgs/ghost.svg";
import Medium from "src/assets/svgs/medium.svg";
import Discord from "src/assets/svgs/discord.svg";
import Soundcloud from "src/assets/images/third-party-logos/soundcloud.png";

import WhitePaperEN from "../assets/books-papers-flyers/whitepaper_en.pdf";
import WhitePaperES from "../assets/books-papers-flyers/whitepaper_es.pdf";
import WhitePaperZH from "../assets/books-papers-flyers/whitepaper_zh.pdf";
import YellowPaperEN from "../assets/books-papers-flyers/yellowpaper_en.pdf";
import YellowPaperZH from "../assets/books-papers-flyers/yellowpaper_zh.pdf";
import styles from "./styles/footer.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl";

const WHITE_PAPERS = {
  en: WhitePaperEN,
  es: WhitePaperES,
  zh: WhitePaperZH,
};

const YELLOW_PAPERS = {
  en: YellowPaperEN,
  zh: YellowPaperZH,
};

const Footer = ({ intl }) => (
  <footer className={styles.footer}>
    <Container className="p-0" fluid>
      <Row>
        <Col className="d-none d-md-block" md={3} xs={0}>
          <Link to="/">
            <Logo />
          </Link>
        </Col>
        <Col className={styles.links} md={{ offset: 2, span: 7 }} xl={{ offset: 0, span: 6 }} xs={12}>
          <Link className="mr-3" to="/about">
            <FormattedMessage id="footer.about" />
          </Link>
          <Link className="mr-3" to="/treasury">
            <FormattedMessage id="footer.treasury-reports" />
          </Link>
          <Link className="mr-3" to="/coop">
            <FormattedMessage id="footer.cooperative" />
          </Link>
          <a className="mr-3" href={WHITE_PAPERS[intl.locale] || WHITE_PAPERS[intl.defaultLocale]} rel="noopener noreferrer" target="_blank">
            <FormattedMessage id="footer.whitepaper" />
          </a>
          <a className="mr-3" href={YELLOW_PAPERS[intl.locale] || YELLOW_PAPERS[intl.defaultLocale]} rel="noopener noreferrer" target="_blank">
            <FormattedMessage id="footer.yellowpaper" />
          </a>
          <Link className="mr-3" to="/research">
            <FormattedMessage id="footer.research" />
          </Link>
          <Link className="mr-3" to="/token">
            <FormattedMessage id="footer.pnktoken" />
          </Link>
          <a className="mr-3" href="https://kleros.gitbook.io" rel="noopener noreferrer" target="_blank">
            <FormattedMessage id="footer.developer" />
          </a>
          <Link className="mr-3" to="/integrations">
            <FormattedMessage id="footer.integrations" />
          </Link>
          <Link className="mr-3" to="/governance">
            <FormattedMessage id="footer.governance" />
          </Link>
          <Link className="mr-3" to="/escrow">
            <FormattedMessage id="footer.escrow" />
          </Link>
          <Link className="mr-3" to="/curation">
            <FormattedMessage id="footer.curate" />
          </Link>
          <Link className="mr-3" to="/oracle">
            <FormattedMessage id="footer.oracle" />
          </Link>
          <Link className="mr-3" to="/scout">
            <FormattedMessage id="footer.scout" />
          </Link>
          <Link className="mr-3" to="/moderate">
            <FormattedMessage id="footer.moderate" />
          </Link>
          <Link className="mr-3" to="/fellowship">
            <FormattedMessage id="footer.fellowship" />
          </Link>
          <Link className="mr-3" to="/community">
            <FormattedMessage id="footer.community" />
          </Link>
          <a className="mr-3" href="https://blog.kleros.io" rel="noopener noreferrer" target="_blank">
            <FormattedMessage id="footer.blog" />
          </a>
          <Link className="mr-3" to="/media">
            <FormattedMessage id="footer.media" />
          </Link>
          <a className="mr-3" href="https://kleros.io/KlerosBrandAssets.zip" target="_blank" rel="noopener noreferrer">
            <FormattedMessage id="footer.brand-assets" />
          </a>
          <a className="mr-3" href="https://www.zazzle.com/store/kleros" target="_blank" rel="noopener noreferrer">
            <FormattedMessage id="footer.store" />
          </a>
          <Link className="mr-3" to="/book">
            <FormattedMessage id="footer.book" />
          </Link>
          <a className="mr-3" href="https://kleros.gitbook.io/docs/kleros-faq" rel="noopener noreferrer" target="_blank">
            <FormattedMessage id="footer.faq" />
          </a>
          <Link className="mr-3" to="/career">
            <FormattedMessage id="footer.career" />
          </Link>
          <Link className="mr-3" to="/incubator">
            <FormattedMessage id="footer.incubator" />
          </Link>
        </Col>
        <Col className="d-none d-xl-block">
          <a className="btn btn-primary d-block mx-0 mt-0" href="https://court.kleros.io">
            <FormattedMessage id="footer.button-primary" />
          </a>
          <Link className="btn btn-secondary d-block mx-0" to="/integrations" variant="secondary">
            <FormattedMessage id="footer.button-secondary" />
          </Link>
        </Col>
      </Row>
      <hr className="mt-4 mb-5" />
      <div className={styles.bottomContainer}>
        <Row className={styles.social}>
          <a className="" href="https://github.com/kleros" rel="noopener noreferrer" target="_blank">
            <Github />
          </a>
          <a className="" href="https://discord.gg/MhXQGCyHd9" rel="noopener noreferrer" target="_blank">
            <Discord />
          </a>
          <a className="" href="https://reddit.com/r/Kleros/" rel="noopener noreferrer" target="_blank">
            <Reddit />
          </a>
          <a className="" href="https://x.com/kleros_io?" rel="noopener noreferrer" target="_blank">
            <X />
          </a>
          <a className="" href="https://soundcloud.com/cooperative-kleros" rel="noopener noreferrer" target="_blank">
            <img src={Soundcloud} />
          </a>

          <a className="" href="https://blog.kleros.io/" rel="noopener noreferrer" target="_blank">
            <Medium />
          </a>

          <a className="" href="https://forum.kleros.io/" rel="noopener noreferrer" target="_blank">
            <Ghost />
          </a>

          <a className="" href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
            <Telegram />
          </a>
          <a className="" href="https://www.linkedin.com/company/kleros/" rel="noopener noreferrer" target="_blank">
            <Linkedin />
          </a>
        </Row>
        <Row className="justify-content-center">
          <p className="text-center text-white ">
            <FormattedMessage id="footer.subscribe-title" />
          </p>
        </Row>
        <Row className={styles.subscribe}>
          <Button className="mb-5 mt-1" href="https://cdn.forms-content.sg-form.com/e7cee475-ba0e-11ea-ada4-aada6854d8c2" rel="noopener noreferrer" target="blank" variant="primary">
            <FormattedMessage id="footer.subscribe-button" />
          </Button>
        </Row>
      </div>
    </Container>

    <p className="d-block text-center" id="copyright">
      <FormattedMessage id="footer.copyright" /> {new Date().getFullYear()} © Kleros
    </p>

    <Button className={styles.scrollback} href="#gatsby-focus-wrapper">
      ➜
    </Button>
  </footer>
);

export default injectIntl(Footer);
