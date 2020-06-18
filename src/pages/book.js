import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import HorizontalCard from "../components/horizontal-card";

import BookCover from "src/assets/svgs/book-cover.svg";
import Content from "src/intl/en.json";

import Github from "src/assets/svgs/github.svg";
import Linkedin from "src/assets/svgs/linkedin.svg";
import Telegram from "src/assets/svgs/telegram.svg";
import Twitter from "src/assets/svgs/twitter.svg";
import Dribble from "src/assets/svgs/dribble.svg";

import styles from "./styles/book.module.css";
import { Badge, Container, Row, Col } from "react-bootstrap";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

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
import Duarte from "src/assets/images/duarte.png";
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

import Config from "../../gatsby-config.js";
const PHOTOS = {
  Ast,
  Lesaege,
  Malbasic,
  John,
  Guérin,
  Alencar,
  Braga,
  George,
  Glemming,
  Aouidef,
  Tunçer,
  Barcelos,
  Zhang,
  Dmitrikov,
  Vitello,
  James,
  Pichler,
  Huculak,
  Rule,
  Dimov,
  Winter,
  Narozhny,
  Raczynski,
  Sharma,
  Blazevic,
  Schmitz,
  Weingast,
  Flippi,
  Mauer,
  Duarte,
  Nappert,
  Deplano,
  Siri,
  Hunn,
  Fidel,
  Ober,
  Stone,
  Sills,
  Hadfield,
  Blazevic,
  Torres,
  Monegro,
  Dagnillo,
  Piqueras,
  Einy,
  Bergolla,
};

const Book = ({ intl }) => (
  <Layout>
    <div className={styles.book}>
      <section className={styles.hero}>
        <Container fluid>
          <Row>
            <Col className="pb-5" xs={12} lg={5}>
              <BookCover />
            </Col>
            <Col xs={12} lg={5}>
              <Row>
                <Col>
                  <h1>
                    <FormattedMessage id="book.section-hero.title" />
                  </h1>
                  <h2>
                    <FormattedMessage id="book.section-hero.subtitle" />
                  </h2>
                </Col>
              </Row>
              <Row className={styles.downloadContainer}>
                <Col className={styles.download}>
                  <h3 className={styles.downloadTitle}>
                    <FormattedMessage id="book.section-hero.title-download" />
                  </h3>
                  <Container className={styles.buttonWrapper}>
                    <a href="https://court.kleros.io" target="blank" rel="noopener noreferrer" className="btn btn-primary">
                      EPUB
                    </a>
                    <Link to="/integrations" className="btn btn-primary">
                      MOBI
                    </Link>
                    <Link to="/integrations" className="btn btn-primary">
                      PDF
                    </Link>
                  </Container>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.chapters}>
        <h1>
          <FormattedMessage id="book.section-contents.h1" />
        </h1>
        <div className={styles.content}>
          {Object.keys(Content.book["section-contents"].chapters).map((chapter, index) => (
            <div key={index}>
              <div>{intl.formatMessage({ id: `book.section-contents.chapters.${chapter}.title` })}</div>
              <div>{intl.formatMessage({ id: `book.section-contents.chapters.${chapter}.paragraph` })}</div>
            </div>
          ))}
        </div>
      </section>
      <h1>
        {" "}
        <FormattedMessage id="book.contributors" />
      </h1>
      <Container as="section" fluid className={`no-gutters px-0 ${styles.team}`}>
        <Row className="no-gutters">
          {Config.siteMetadata.teamMembers.map((member) => (
            <Col xs={12} sm={6} md={4} lg={3} xl={2} className={styles.portraitContainer}>
              <img style={{ width: "100%" }} src={PHOTOS[member.name.split(" ").slice(-1)]} />
              <div className={styles.overlay}>
                <span>{member.name} </span>
                <span>{member.title}</span>
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
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </Layout>
);

export default injectIntl(Book);
