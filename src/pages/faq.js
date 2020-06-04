import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Magnifier from "src/assets/svgs/icon-magnifier.svg";

import styles from "./styles/faq.module.css";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import { Badge, Container, Row, Col, InputGroup, FormControl, Accordion, Card } from "react-bootstrap";
import Questions from "src/intl/en.json";
const FAQ = ({ intl }) => (
  <Layout>
    <SEO title="FAQ" />

    <div className={styles.faq}>
      <section>
        <h1>
          <FormattedMessage id="faq.section-hero.h1" />
        </h1>
        <InputGroup className="mb-3">
          <InputGroup.Prepend className={styles.prepend}>
            <InputGroup.Text id="basic-addon1">
              <Magnifier />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder={intl.formatMessage({ id: "faq.section-hero.search" })} aria-label="Username" aria-describedby="basic-addon1" />
        </InputGroup>
      </section>
      <section className={styles.questions}>
        <div className="nav flex-column float-left" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {Object.keys(Questions.faq["section-faq"]).map((category, index) => (
            <a key={index} className={`nav-link ${!index && "active"}`} id="v-pills-${category}-tab" data-toggle="pill" href={`#v-pills-${category}`} role="tab" aria-controls={`#v-pills-${category}`} aria-selected="true">
              <FormattedMessage id={`faq.section-faq.${category}.title`} />
            </a>
          ))}
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          {Object.entries(Questions.faq["section-faq"]).map((value, index) => console.log(value))}
          {Object.entries(Questions.faq["section-faq"]).map((category, index) => (
            <div key={index} className={`tab-pane fade ${!index && "show active"}`} id={`v-pills-${category[0]}`} role="tabpanel" aria-labelledby={`v-pills-${category[0]}`}>
              <h2>
                <FormattedMessage id={`faq.section-faq.${category[0]}.title`} />
              </h2>
              <Accordion defaultActiveKey="0" className={styles.accordion}>
                {Object.values(category[1].questions).map((question, index) => (
                  <Card key={index}>
                    <Accordion.Toggle as={Card.Header} eventKey={index}>
                      {question.q}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>{question.a}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </div>
  </Layout>
);

export default injectIntl(FAQ);
