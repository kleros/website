import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import George from "src/assets/images/george.png";

import HorizontalCard from "../components/horizontal-card";
import VerticalCard from "../components/vertical-card";

import Fellowship from "src/assets/svgs/fellowship.svg";
import Book from "src/assets/svgs/book-illustration.svg";

import styles from "./styles/research.module.css";
import { Badge, Container, Row, Col, InputGroup, FormControl, Accordion, Card } from "react-bootstrap";

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import Content from "src/intl/en.json";

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "research.seo-title" })} />
    <div className={styles.research}>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="research.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="research.section-hero.h2" />
        </h2>
      </section>
      <section className={styles.director}>
        <h1>
          <FormattedMessage id="research.section-director.title" />
        </h1>
        <h2>
          <FormattedMessage id="research.section-director.subtitle" />
        </h2>
        <img src={George} />
        <p>
          <FormattedMessage id="research.section-director.paragraph" />
        </p>
      </section>
      <section className={styles.papers}>
        <h1>
          <FormattedMessage id="research.section-papers.papers.title" />
        </h1>
        <div className={styles.cards}>
          {Object.keys(Content.research["section-papers"].papers.items).map((paper, index) => (
            <HorizontalCard
              content={{
                text: intl.formatMessage({ id: `research.section-papers.papers.items.${paper}` }),
              }}
            />
          ))}
        </div>
      </section>
      <section className={styles.papers}>
        <h1>
          <FormattedMessage id="research.section-papers.mentions.title" />
        </h1>
        <div className={styles.cards}>
          {Object.keys(Content.research["section-papers"].mentions.items).map((mention, index) => (
            <HorizontalCard
              content={{
                text: intl.formatMessage({ id: `research.section-papers.mentions.items.${mention}` }),
              }}
            />
          ))}
        </div>
      </section>
      <section>
        <Container fluid className="p-0">
          <Row>
            <Col md className="mt-5">
              <VerticalCard
                content={{
                  icon: Fellowship,
                  title: intl.formatMessage({
                    id: "research.section-cards.card-1.title",
                  }),

                  button: {
                    variant: "primary",
                    text: intl.formatMessage({
                      id: "research.section-cards.card-1.button",
                    }),
                    href: "/fellowship",
                  },
                }}
              />
            </Col>
            <Col md className="mt-5">
              <VerticalCard
                content={{
                  icon: Book,
                  title: intl.formatMessage({
                    id: "research.section-cards.card-2.title",
                  }),

                  button: {
                    variant: "secondary",
                    text: intl.formatMessage({
                      id: "research.section-cards.card-2.button",
                    }),
                    href: "/book",
                  },
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  </Layout>
);

export default injectIntl(IndexPage);
