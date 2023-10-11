import React from "react";
import latinize from "latinize";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BookCover from "src/assets/svgs/book-cover.svg";
import Content from "src/intl/en.json";
import Linkedin from "src/assets/svgs/linkedin.svg";
import X from "src/assets/svgs/x.svg";
import Dribble from "src/assets/svgs/dribble.svg";
import styles from "./styles/book.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import Ast from "src/assets/images/person/ast.png";
import Lesaege from "src/assets/images/person/lesaege.png";
import Malbasic from "src/assets/images/person/malbasic.png";
import Alencar from "src/assets/images/person/alencar.png";
import Braga from "src/assets/images/person/braga.png";
import George from "src/assets/images/person/george.png";
import Tuncer from "src/assets/images/person/tuncer.jpg";
import Vitello from "src/assets/images/person/vitello.png";
import James from "src/assets/images/person/james.png";
import Rule from "src/assets/images/person/rule.png";
import Dimov from "src/assets/images/person/dimov.png";
import Winter from "src/assets/images/person/winter.png";
import Narozhny from "src/assets/images/person/narozhny.png";
import Raczynski from "src/assets/images/person/raczynski.png";
import Sharma from "src/assets/images/person/sharma.png";
import Blazevic from "src/assets/images/person/blazevic.png";
import Schmitz from "src/assets/images/person/schmitz.png";
import Weingast from "src/assets/images/person/weingast.png";
import Ober from "src/assets/images/person/ober.png";
import Flippi from "src/assets/images/person/flippi.png";
import Mauer from "src/assets/images/person/mauer.png";
import Duarte from "src/assets/images/person/duarte.png";
import Nappert from "src/assets/images/person/nappert.png";
import Deplano from "src/assets/images/person/deplano.png";
import Siri from "src/assets/images/person/siri.png";
import Hunn from "src/assets/images/person/hunn.png";
import Einy from "src/assets/images/person/einy.png";
import Stone from "src/assets/images/person/stone.png";
import Sills from "src/assets/images/person/sills.png";
import Hadfield from "src/assets/images/person/hadfield.png";
import Torres from "src/assets/images/person/torres.png";
import Monegro from "src/assets/images/person/monegro.png";
import Dagnillo from "src/assets/images/person/dagnillo.png";
import Piqueras from "src/assets/images/person/piqueras.png";
import Bergolla from "src/assets/images/person/bergolla.png";
import Config from "../../gatsby-config.js";

/* eslint sort-vars: "error" */
const PHOTOS = [
  Rule,
  Raczynski,
  Weingast,
  Ober,
  Winter,
  Stone,
  Sills,
  Hadfield,
  Nappert,
  Blazevic,
  Torres,
  Schmitz,
  Monegro,
  Siri,
  Flippi,
  Deplano,
  Dagnillo,
  Braga,
  Tuncer,
  Malbasic,
  Alencar,
  Lesaege,
  Ast,
  James,
  George,
  Vitello,
  Piqueras,
  Einy,
  Hunn,
  Dimov,
  Mauer,
  Duarte,
  Narozhny,
  Bergolla,
  Sharma,
];

const Book = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "book.seo-title" })} />
    <div className={styles.book}>
      <section className={styles.hero}>
        <Container fluid>
          <Row>
            <Col className="pb-5" lg={5} xs={12}>
              <BookCover />
            </Col>
            <Col lg={5} xs={12}>
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
                    <a className="btn btn-primary" href="/../book.epub" rel="noopener noreferrer" target="_blank">
                      EPUB
                    </a>
                    <a className="btn btn-primary" href="/../book.mobi" rel="noopener noreferrer" target="_blank">
                      MOBI
                    </a>
                    <a className="btn btn-primary" href="/../book.pdf" rel="noopener noreferrer" target="_blank">
                      PDF
                    </a>
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
      <Container as="section" className={`no-gutters px-0 ${styles.team}`} fluid>
        <Row className="no-gutters">
          {PHOTOS.map((member) => {
            const lastName = member.split("/")[2].split("-")[0];
            const person = Config.siteMetadata.teamMembers.find((object) => latinize(object.name).toLowerCase().includes(lastName.toString()));
            return (
              <Col className={styles.portraitContainer} key={member} lg={3} md={4} sm={6} xl={2} xs={12}>
                <img src={member} alt={person.name} style={{ width: "100%" }} />
                <div className={styles.overlay}>
                  <span>{person.name}</span>
                  <span>{person.title}</span>
                  {person.links && (
                    <Row className={`no-gutters ${styles.social}`}>
                      {person.links.linkedin && (
                        <a href={person.links.linkedin} rel="noopener noreferrer" target="_blank">
                          <Linkedin />
                        </a>
                      )}
                      {person.links.x && (
                        <a href={person.links.x} rel="noopener noreferrer" target="_blank">
                          <X />
                        </a>
                      )}
                      {person.links.dribble && (
                        <a href={person.links.dribble} rel="noopener noreferrer" target="_blank">
                          <Dribble />
                        </a>
                      )}
                    </Row>
                  )}
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  </Layout>
);

export default injectIntl(Book);
