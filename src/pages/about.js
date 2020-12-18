import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sash from "../components/sash";
import OnePager from "src/assets/svgs/icon-onepager.svg";
import YellowPaper from "src/assets/svgs/icon-yellowpaper.svg";
import WhitePaper from "src/assets/svgs/icon-whitepaper.svg";
import Alice from "src/assets/images/alice.png";
import Deversifi from "src/assets/images/deversifi-bw.png";
import WindingTree from "src/assets/images/winding-tree.png";
import Omen from "src/assets/images/omen-mono-2.png";
import Uniswap from "src/assets/images/uniswap-mono.png";
import Github from "src/assets/svgs/github.svg";
import Linkedin from "src/assets/svgs/linkedin.svg";
import Twitter from "src/assets/svgs/twitter.svg";
import Dribble from "src/assets/svgs/dribble.svg";
import { Col, Container, Row } from "react-bootstrap";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/about.module.css";
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
import Ragosa from "src/assets/images/ragosa.jpg";
import Piqueras from "src/assets/images/piqueras.png";

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
import Config from "../../gatsby-config.js";

const ONEPAGERS = {
  en: OnePagerEN,
  es: OnePagerES,
  fr: OnePagerFR,
  ko: OnePagerKO,
  pt: OnePagerPT,
  ru: OnePagerRU,
  tr: OnePagerTR,
  zh: OnePagerZH,
};

const WHITE_PAPERS = {
  en: WhitePaperEN,
  es: WhitePaperES,
};

const YELLOW_PAPERS = {
  en: YellowPaperEN,
};

const PHOTOS = { Alencar, Aouidef, Ast, Barcelos, Braga, Dmitrikov, George, Glemming, John, Fidel, Lesaege, Guérin, Malbasic, Huculak, James, Pichler, Tunçer, Vitello, Zhang, Ragosa, Piqueras };

const About = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "about.seo-title" })} />
    <Container className={styles.about} fluid>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="about.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage
            id="about.section-hero.h2"
            values={{
              anchor: (children) => (
                <a href={WHITE_PAPERS[intl.locale] || WHITE_PAPERS[intl.defaultLocale]} rel="noopener noreferrer" target="_blank">
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
          <FormattedMessage id="about.section-2" />
        </h1>
        <div className="iframe-container">
          <iframe title="How It Works" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0" height="315" src="https://www.youtube.com/embed/IMDLJgTKDNw" width="560" />
        </div>
      </section>
      <section className="light">
        <Sash
          as="div"
          figures={[
            {
              button: {
                href: ONEPAGERS[intl.locale] || ONEPAGERS[intl.defaultLocale],
                text: intl.formatMessage({
                  id: "about.sash.first.button",
                }),
              },
              icon: OnePager,
              title: intl.formatMessage({
                id: "about.sash.first.title",
              }),
            },
            {
              button: {
                href: WHITE_PAPERS[intl.locale] || WHITE_PAPERS[intl.defaultLocale],
                text: intl.formatMessage({
                  id: "about.sash.first.button",
                }),
              },
              icon: WhitePaper,
              title: intl.formatMessage({
                id: "about.sash.second.title",
              }),
            },
            {
              button: {
                href: YELLOW_PAPERS[intl.locale] || YELLOW_PAPERS[intl.defaultLocale],
                text: intl.formatMessage({
                  id: "about.sash.first.button",
                }),
              },
              icon: YellowPaper,
              title: intl.formatMessage({
                id: "about.sash.third.title",
              }),
            },
          ]}
          separator
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
      <Container as="section" className={`no-gutters px-0 ${styles.team}`} fluid>
        <Row className="no-gutters">
          {Config.siteMetadata.teamMembers
            .filter((member) => PHOTOS[member.name.split(" ").slice(-1)] != null)
            .map((member, index) => (
              <Col key={index} className={styles.portraitContainer} lg={3} md={4} sm={6} xl={2} xs={12}>
                <img alt={member.name} src={PHOTOS[member.name.split(" ").slice(-1)]} style={{ width: "100%" }} />
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
        <img src={Deversifi} alt="Deversifi" />
        <img src={Uniswap} alt="Ink" />
        <img src={Omen} alt="WindingTree" />
        <img src={Alice} alt="Alice" />
        <hr style={{ marginTop: "5rem" }} />
      </section>
    </Container>
  </Layout>
);

export default injectIntl(About);
