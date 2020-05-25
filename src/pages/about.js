import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Sash from "../components/sash";
import HorizontalCard from "../components/horizontal-card";
import VerticalCard from "../components/vertical-card";

import Sponsors from "../components/sponsors";
import Contact from "../components/contact";

import Deversifi from "src/assets/images/deversifi.png";

import Ninja from "src/assets/svgs/ninja-black-text.svg";
import Github from "src/assets/svgs/github.svg";
import Linkedin from "src/assets/svgs/linkedin.svg";
import Telegram from "src/assets/svgs/telegram.svg";
import Twitter from "src/assets/svgs/twitter.svg";

import { Badge, Container, Row, Col } from "react-bootstrap";

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import styles from "./styles/about.module.css";

import Federico from "src/assets/images/federico.png";
import Clement from "src/assets/images/clement.png";
import Damjan from "src/assets/images/damjan.png";
import John from "src/assets/images/john.png";
import Lola from "src/assets/images/lola.png";
import Matheus from "src/assets/images/matheus.png";
import Plinio from "src/assets/images/plinio.png";
import William from "src/assets/images/william.png";
import Tobias from "src/assets/images/tobias.png";
import Yann from "src/assets/images/yann.png";
import Ferit from "src/assets/images/ferit.png";
import Henrique from "src/assets/images/henrique.png";
import Laurence from "src/assets/images/laurence.png";
import Danil from "src/assets/images/danil.png";
import Sam from "src/assets/images/sam.png";
import Stuart from "src/assets/images/stuart.png";

const About = ({ intl }) => (
  <Layout>
    {" "}
    <SEO title="About" lang={intl.locale} />
    <Container as="main" fluid className={styles.About}>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="about.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="about.section-hero.h2" />
        </h2>
        <hr />
      </section>
      <section>
        <div className="iframe-container">
          <iframe title="introduction-video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/M8nJ7yrTL-Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; controls=0" allowfullscreen></iframe>
        </div>
      </section>
      <Sash
        as="div"
        figures={[
          {
            title: intl.formatMessage({
              id: "about.sash.first.title",
            }),
            button: {
              text: intl.formatMessage({
                id: "about.sash.first.button",
              }),
              href: "",
            },
            icon: "onepager",
          },
          {
            title: intl.formatMessage({
              id: "about.sash.second.title",
            }),
            button: {
              text: intl.formatMessage({
                id: "about.sash.first.button",
              }),
              href: "",
            },
            icon: "whitepaper",
          },
          {
            title: intl.formatMessage({
              id: "about.sash.third.title",
            }),
            button: {
              text: intl.formatMessage({
                id: "about.sash.first.button",
              }),
              href: "",
            },
            icon: "yellowpaper",
          },
        ]}
      />

      <section className="masked">
        <span className="trapezium" />
        <h1>
          <FormattedMessage id="about.section-3.h1" />
        </h1>
        <h2>
          <FormattedMessage id="about.section-3.h2" />
        </h2>
      </section>
      <section>
        <h1>
          <FormattedMessage id="about.section-4.h1" />
        </h1>
        <h2>
          <FormattedMessage id="about.section-4.h2" />
        </h2>
      </section>
      <Container fluid className={`no-gutters p-0 ${styles.team}`}>
        <Row className="no-gutters">
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>{" "}
          <Col xs={2} className={styles.portraitContainer}>
            <img style={{ width: "100%" }} src={Federico} />
            <div className={styles.overlay}>
              <span>Federico Ast </span>
              <span>DApp Developer </span>
              <Row className={`no-gutters ${styles.social}`}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/kleros">
                  <Github />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                  <Twitter />
                </a>
                <a href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                  <Telegram />
                </a>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <section>
        <hr />
        <Contact />
        <Sponsors extraClass="mt-5" />
      </section>
    </Container>
  </Layout>
);

export default injectIntl(About);
