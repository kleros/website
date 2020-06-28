import { useContext, useState, useReducer } from "react";
import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import { Badge, Container, Row, Col, InputGroup, FormControl, Accordion, Card } from "react-bootstrap";

import styles from "./styles/fellowship.module.css";

import Dribble from "src/assets/svgs/dribble.svg";

import Logo from "../assets/svgs/brand_white.svg";
import Github from "src/assets/svgs/github.svg";
import Linkedin from "src/assets/svgs/linkedin.svg";
import Telegram from "src/assets/svgs/telegram.svg";
import Twitter from "src/assets/svgs/twitter.svg";
import Slack from "src/assets/svgs/slack.svg";
import Reddit from "src/assets/svgs/reddit.svg";
import Ghost from "src/assets/svgs/ghost.svg";
import FellowshipBadge from "src/assets/svgs/fellowship.svg";

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
import Fidel from "src/assets/images/fidel.png";
import Rule from "src/assets/images/rule.png";
import Dimov from "src/assets/images/dimov.png";
import Winter from "src/assets/images/winter.png";
import Narozhny from "src/assets/images/narozhny.png";
import Raczynski from "src/assets/images/raczynski.png";
import Sharma from "src/assets/images/sharma.png";
import Blazevic from "src/assets/images/blazevic.png";
import Schmitz from "src/assets/images/schmitz.png";
import Weingast from "src/assets/images/weingast.png";
import Ober from "src/assets/images/ober.png";
import Flippi from "src/assets/images/flippi.png";
import Mauer from "src/assets/images/mauer.png";
import Nappert from "src/assets/images/nappert.png";
import Deplano from "src/assets/images/deplano.png";
import Siri from "src/assets/images/siri.png";
import Hunn from "src/assets/images/hunn.png";
import Einy from "src/assets/images/einy.png";
import Stone from "src/assets/images/stone.png";
import Sills from "src/assets/images/sills.png";
import Hadfield from "src/assets/images/hadfield.png";
import Torres from "src/assets/images/torres.png";
import Monegro from "src/assets/images/monegro.png";
import Dagnillo from "src/assets/images/dagnillo.png";
import Piqueras from "src/assets/images/piqueras.png";
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
import G from "src/assets/images/g.png";
import Stanescu from "src/assets/images/stanescu.png";
import Tripathi from "src/assets/images/tripathi.png";
import Vargas from "src/assets/images/vargas.png";
import Carrera from "src/assets/images/carrera.png";
import Lewis from "src/assets/images/lewis.png";

import Config from "../../gatsby-config.js";
import Questions from "src/intl/en.json";

const PHOTOS = {
  Scott,
  Zhao,
  Gudkov,
  Abad,
  Oguz,
  Goldstein,
  Obafemi,
  Gouvea,
  Felicio,
  Tineo,
  Mota,
  Duarte,
  Robertson,
  Aliyev,
  Archila,
  Bhalothia,
  Dean,
  Bel,
  Gray,
  Huculak,
  Jara,
  Lowther,
  Kulshreshtha,
  Mouclier,
  Comenale,
  G,
  Stanescu,
  Tripathi,
  Vargas,
  Carrera,
  Lewis,
  Aouidef,
  Huculak,
  Narozhny,
  Sharma,
  Duarte,
  Dagnillo,
  Bergolla,
  Deplano,
};

const Fellowship = ({ intl }) => {
  const [activeKey, setActiveKey] = useState(-1);
  return (
    <Layout>
      <SEO title="Fellowship" />
      <div className={styles.fellowship}>
        <section className={`${styles.hero}`}>
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
          </div>
          <hr style={{ marginTop: "4rem" }} />
        </section>

        <Container as="section" fluid className={`no-gutters pt-0 px-0 ${styles.team}`}>
          <h1 style={{ marginBottom: "4rem" }}>
            <FormattedMessage id="fellowship.section-fellows" />
          </h1>
          <Row className="no-gutters">
            {Config.siteMetadata.teamMembers
              .filter((member) => PHOTOS[member.name.split(" ").slice(-1)] != null)
              .map((member) => (
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className={styles.portraitContainer}>
                  <img style={{ width: "100%" }} src={PHOTOS[member.name.split(" ").slice(-1)]} />
                  <div className={styles.overlay}>
                    <span>{member.name} </span>
                    <span>{member.title}</span>
                    <span className="bold">{member.location}</span>
                    <br />
                    <span className="bold">Batch {member.batch}</span>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>

        <section className={styles.questions}>
          <h1 className="text-left bigger">FAQ</h1>
          <div className="tab-content" id="v-pills-tabContent">
            <Accordion defaultActiveKey="0" className={styles.accordion} activeKey={activeKey} onSelect={(e) => setActiveKey(e)}>
              {Object.entries(Questions.fellowship["section-faq"]).map((question, index) => (
                <>
                  <Card key={index}>
                    <Accordion.Toggle as={Card.Header} eventKey={index} className={styles.cardHeader}>
                      <span className={`${activeKey === index ? styles.closed : styles.open}`}>{question[1].q}</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body className={styles.cardBody}>{question[1].a}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <hr style={{ border: "1px solid rgba(255, 255, 255, 0.25)" }} />
                </>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default injectIntl(Fellowship);
