import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Sash from "../components/sash";
import HorizontalCard from "../components/horizontal-card";
import VerticalCard from "../components/vertical-card";

import Sponsors from "../components/sponsors";
import Contact from "../components/contact";

import Deversifi from "src/assets/images/deversifi-bw.png";
import Ink from "src/assets/images/ink.png";
import MarketProtocol from "src/assets/images/marketprotocol.png";
import BlueFrontiers from "src/assets/images/bluefrontiers.png";
import WindingTree from "src/assets/images/winding-tree.png";

import Ninja from "src/assets/svgs/ninja-black-text.svg";
import Github from "src/assets/svgs/github.svg";
import Linkedin from "src/assets/svgs/linkedin.svg";
import Telegram from "src/assets/svgs/telegram.svg";
import Twitter from "src/assets/svgs/twitter.svg";
import Dribble from "src/assets/svgs/dribble.svg";

import { Badge, Container, Row, Col } from "react-bootstrap";

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import styles from "./styles/about.module.css";

import WhitePaperEN from "../assets/books-papers-flyers/whitepaper_en.pdf";
import WhitePaperES from "../assets/books-papers-flyers/whitepaper_es.pdf";

import Ast from "src/assets/images/ast.png";
import Lesaege from "src/assets/images/lesaege.png";
import Malbasic from "src/assets/images/malbasic.png";
import John from "src/assets/images/john.png";
import Guérin from "src/assets/images/guerin.png";
import Alencar from "src/assets/images/alencar.png";
import Braga from "src/assets/images/braga.png";
import George from "src/assets/images/george.png";
import Glemming from "src/assets/images/glemming.png";
import Aouidef from "src/assets/images/aouidef.png";
import Tunçer from "src/assets/images/tuncer.png";
import Barcelos from "src/assets/images/barcelos.png";
import Zhang from "src/assets/images/zhang.png";
import Dmitrikov from "src/assets/images/dmitrikov.png";
import Vitello from "src/assets/images/vitello.png";
import James from "src/assets/images/james.png";
import Pichler from "src/assets/images/pichler.png";
import Huculak from "src/assets/images/huculak.png";
import Fidel from "src/assets/images/fidel.png";

import OnePager from "src/assets/svgs/icon-onepager.svg";
import WhitePaper from "src/assets/svgs/icon-whitepaper.svg";
import YellowPaper from "src/assets/svgs/icon-yellowpaper.svg";

import Config from "../../gatsby-config.js";

const WHITE_PAPERS = {
  en: WhitePaperEN,
  es: WhitePaperES,
};

const PHOTOS = { Ast, Lesaege, Malbasic, John, Guérin, Alencar, Braga, George, Glemming, Aouidef, Tunçer, Barcelos, Zhang, Dmitrikov, Vitello, James, Pichler, Huculak, Fidel };

const About = ({ intl }) => {
  return (
    <Layout>
      <SEO title="About" lang={intl.locale} />
      <Container fluid className={styles.about}>
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
        </section>
        <hr />
        <section>
          <h1>
            {" "}
            <FormattedMessage id="about.section-2" />
          </h1>
          <div className="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IMDLJgTKDNw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section>
        <section className="light">
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
        </section>
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
        <Container as="section" fluid className={`no-gutters px-0 ${styles.team}`}>
          <Row className="no-gutters">
            {Config.siteMetadata.teamMembers
              .filter((member) => PHOTOS[member.name.split(" ").slice(-1)] != null)
              .map((member) => (
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className={styles.portraitContainer}>
                  <img style={{ width: "100%" }} src={PHOTOS[member.name.split(" ").slice(-1)]} />
                  <div className={styles.overlay}>
                    <span>{member.name} </span>
                    <span>{member.title}</span>
                    {member.links && (
                      <Row className={`no-gutters ${styles.social}`}>
                        {member.links.github && (
                          <a href={member.links.github} rel="noopener noreferrer" target="_blank">
                            <Github />
                          </a>
                        )}
                        {member.links.linkedin && (
                          <a href={member.links.linkedin} rel="noopener noreferrer" target="_blank">
                            <Linkedin />
                          </a>
                        )}
                        {member.links.twitter && (
                          <a href={member.links.twitter} rel="noopener noreferrer" target="_blank">
                            <Twitter />
                          </a>
                        )}
                        {member.links.dribble && (
                          <a href={member.links.dribble} rel="noopener noreferrer" target="_blank">
                            <Dribble />
                          </a>
                        )}
                      </Row>
                    )}
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
        <section className={styles.partners}>
          <h2>
            <FormattedMessage id="about.section-5" />
          </h2>
          <img src={Deversifi} />
          <img src={MarketProtocol} />
          <img src={Ink} />
          <img src={WindingTree} />
          <img src={BlueFrontiers} />
        </section>
        <hr />
      </Container>
    </Layout>
  );
};

export default injectIntl(About);
