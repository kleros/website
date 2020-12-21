import { useState } from "react";
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./styles/fellowship.module.css";
import Github from "src/assets/svgs/github.svg";
import Linkedin from "src/assets/svgs/linkedin.svg";
import Telegram from "src/assets/svgs/telegram.svg";
import Twitter from "src/assets/svgs/twitter.svg";
import Slack from "src/assets/svgs/slack.svg";
import Reddit from "src/assets/svgs/reddit.svg";
import Ghost from "src/assets/svgs/ghost.svg";
import FellowshipBadge from "src/assets/svgs/fellowship.svg";
import Narozhny from "src/assets/images/narozhny.png";
import Sharma from "src/assets/images/sharma.png";
import Deplano from "src/assets/images/deplano.png";
import Dagnillo from "src/assets/images/dagnillo.png";
import Bergolla from "src/assets/images/bergolla.png";
import Scott from "src/assets/images/scott.png";
import Zhao from "src/assets/images/zhao.png";
import Gudkov from "src/assets/images/gudkov.png";
import Abad from "src/assets/images/abad.png";
import Oguz from "src/assets/images/oguz.png";
import Goldstein from "src/assets/images/goldstein.png";
import Obafemi from "src/assets/images/obafemi.png";
import Gouvea from "src/assets/images/gouvea.png";
import Felicio from "src/assets/images/felicio.png";
import Tineo from "src/assets/images/tineo.png";
import Mota from "src/assets/images/mota.png";
import Duarte from "src/assets/images/duarte.png";
import Robertson from "src/assets/images/robertson.png";
import Aliyev from "src/assets/images/aliyev.png";
import Archila from "src/assets/images/archila.png";
import Bhalothia from "src/assets/images/bhalothia.png";
import Dean from "src/assets/images/dean.png";
import Bel from "src/assets/images/bel.png";
import Gray from "src/assets/images/gray.png";
import Huculak from "src/assets/images/huculak.png";
import Jara from "src/assets/images/jara.png";
import Lowther from "src/assets/images/lowther.png";
import Kulshreshtha from "src/assets/images/kulshreshtha.png";
import Mouclier from "src/assets/images/mouclier.png";
import Comenale from "src/assets/images/comenale.png";
import Galindo from "src/assets/images/galindo.png";
import Stanescu from "src/assets/images/stanescu.png";
import Tripathi from "src/assets/images/tripathi.png";
import Vargas from "src/assets/images/vargas.png";
import Carrera from "src/assets/images/carrera.png";
import Lewis from "src/assets/images/lewis.png";
import Config from "../../gatsby-config.js";
import Questions from "src/intl/en.json";

const PHOTOS = {
  Abad,
  Aliyev,
  Archila,
  Bel,
  Bergolla,
  Bhalothia,
  Carrera,
  Comenale,
  Dagnillo,
  Dean,
  Deplano,
  Duarte,
  Felicio,
  Galindo,
  Goldstein,
  Gouvea,
  Gray,
  Gudkov,
  Huculak,
  Jara,
  Kulshreshtha,
  Lewis,
  Lowther,
  Mota,
  Mouclier,
  Narozhny,
  Obafemi,
  Oguz,
  Robertson,
  Scott,
  Sharma,
  Stanescu,
  Tineo,
  Tripathi,
  Vargas,
  Zhao,
};

const Fellowship = ({ intl, data }) => {
  const [activeKey, setActiveKey] = useState(-1);
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "fellowship.seo-title" })} />
      <div className={styles.fellowship}>
        <section className={`pb-0 ${styles.hero} `}>
          <FellowshipBadge />
          <h1>
            <FormattedMessage id="fellowship.section-hero.h1" />
          </h1>
          <h2>
            <FormattedMessage id="fellowship.section-hero.h2" />
          </h2>
          <hr className="my-5" />
          <h2 className="white bold">
            <FormattedMessage id="fellowship.section-hero.conversion-phrase" />
          </h2>
          <div className={`${styles.social}`}>
            <div>
              <a className="g-kleros_footer__anchor" href="https://github.com/kleros" rel="noopener noreferrer" target="_blank">
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
            </div>
          </div>
          <hr style={{ marginTop: "4rem" }} />
          <h1 style={{ marginBottom: "4rem", marginTop: "6rem" }}>
            <FormattedMessage id="fellowship.section-fellows" />
          </h1>
        </section>

        <Container as="section" className={`no-gutters pt-0 px-0 ${styles.team}`} fluid>
          <Row className="no-gutters">
            {Config.siteMetadata.teamMembers
              .filter((member) => PHOTOS[member.name.split(" ").slice(-1)] != null)
              .map((member, index) => {
                if (data.allSitePage.edges.find((object) => object.node.path === `/${member.name.toLowerCase().split(/(\s)/).slice(-1)}/`))
                  return (
                    <Link className="no-gutters" key={index} style={{ display: "contents" }} to={`/${member.name.toLowerCase().split(" ").slice(-1)}`}>
                      <Col className={styles.portraitContainer} lg={3} md={4} sm={6} xl={2} xs={12}>
                        <img src={PHOTOS[member.name.split(" ").slice(-1)]} style={{ width: "100%" }} alt={member.name} />
                        <div className={styles.overlay}>
                          <span>{member.name} </span>
                          <span>{member.title}</span>
                          <span className="bold">{member.location}</span>
                          <br />
                          <span className="bold">Batch {member.batch}</span>
                        </div>
                      </Col>
                    </Link>
                  );
                return (
                  <Col className={styles.portraitContainer} lg={3} md={4} sm={6} xl={2} xs={12}>
                    <img src={PHOTOS[member.name.split(" ").slice(-1)]} style={{ width: "100%" }} alt={member.name} />
                    <div className={styles.overlay}>
                      <span>{member.name} </span>
                      <span>{member.title}</span>
                      <span className="bold">{member.location}</span>
                      <br />
                      <span className="bold">Batch {member.batch}</span>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>

        <section className={styles.questions}>
          <h1 className="text-left bigger">FAQ</h1>
          <div className="tab-content" id="v-pills-tabContent">
            <Accordion activeKey={activeKey} className={styles.accordion} onSelect={(e) => setActiveKey(e)}>
              {Object.entries(Questions.fellowship["section-faq"]).map((question, index) => (
                <React.Fragment key={index}>
                  <Card>
                    <Accordion.Toggle as={Card.Header} className={styles.cardHeader} eventKey={`key${index}`}>
                      <span className={`${activeKey == `key${index}` ? styles.closed : styles.open}`}>
                        <FormattedMessage id={`fellowship.section-faq.${index + 1}.q`} />
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={`key${index}`}>
                      <Card.Body className={styles.cardBody}>
                        <FormattedMessage
                          id={`fellowship.section-faq.${index + 1}.a`}
                          values={{
                            anchor: (children) => (
                              <a href="https://forms.gle/s6nND6jmKriNyDsR8" rel="noopener noreferrer" target="_blank">
                                {children}
                              </a>
                            ),
                          }}
                        />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <hr style={{ border: "1px solid rgba(255, 255, 255, 0.25)" }} />
                </React.Fragment>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;

export default injectIntl(Fellowship);
