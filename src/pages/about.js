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

import WhitePaperEN from "../assets/books-papers-flyers/whitepaper_en.pdf";
import WhitePaperES from "../assets/books-papers-flyers/whitepaper_es.pdf";

import Federico from "src/assets/images/federico.png";
import Clément from "src/assets/images/clement.png";
import Damjan from "src/assets/images/damjan.png";
import Shebin from "src/assets/images/shebin.png";
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

import OnePager from "src/assets/svgs/icon-onepager.svg";
import WhitePaper from "src/assets/svgs/icon-whitepaper.svg";
import YellowPaper from "src/assets/svgs/icon-yellowpaper.svg";

import Config from "../../gatsby-config.js";

const WHITE_PAPERS = {
  en: WhitePaperEN,
  es: WhitePaperES,
};

const PHOTOS = { Federico, Clément, Damjan, Shebin, Lola, Matheus, Plinio, William, Tobias, Yann, Ferit, Henrique, Laurence, Danil, Sam, Stuart };

const About = ({ intl }) => {
  return (
    <Layout>
      {" "}
      <SEO title="About" lang={intl.locale} />
      <Container as="main" fluid className={styles.About}>
        <section className={styles.hero}>
          <h1>
            <FormattedMessage id="about.section-hero.h1" />
          </h1>
          <h2>
            <FormattedMessage
              id="about.section-hero.h2"
              values={{
                anchor: (children) => (
                  <a href={WHITE_PAPERS[intl.locale] || WHITE_PAPERS[intl.defaultLocale]} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              }}
            />
          </h2>
          <hr />
        </section>
        <section>
          <div className="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IMDLJgTKDNw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section>
        <Sash
          as="div"
          separator={true}
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
              icon: OnePager,
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
              icon: WhitePaper,
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
              icon: YellowPaper,
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
            {Config.siteMetadata.teamMembers.map((member) => (
              <Col xs={12} sm={6} md={4} lg={3} xl={2} className={styles.portraitContainer}>
                <img style={{ width: "100%" }} src={PHOTOS[member.name.split(" ")[0]]} />
                <div className={styles.overlay}>
                  <span>{member.name} </span>
                  <span>{member.title}</span>
                  <Row className={`no-gutters ${styles.social}`}>
                    {member.links.github && (
                      <a rel="noopener noreferrer" target="_blank" href={member.links.github.url}>
                        <Github />
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a href={member.links.linkedin.url} rel="noopener noreferrer" target="_blank">
                        <Linkedin />
                      </a>
                    )}

                    {member.links.twitter && (
                      <a href={member.links.twitter.url} rel="noopener noreferrer" target="_blank">
                        <Twitter />
                      </a>
                    )}
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <section>
          <hr />
          <Sponsors extraClass="mt-5" />
        </section>
      </Container>
    </Layout>
  );
};

export default injectIntl(About);
