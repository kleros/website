import React from "react";
import { useContext, useState, useReducer } from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Magnifier from "src/assets/svgs/icon-magnifier.svg";

import styles from "./styles/faq.module.css";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import { Badge, Container, Row, Col, InputGroup, FormControl, Accordion, Card } from "react-bootstrap";
import Questions from "src/intl/en.json";

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const FAQ = ({ intl }) => {
  const [activeKey, setActiveKey] = useState(-1);
  const [state, dispatch] = useReducer(reducer, { search: "" });

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  console.log(state.search);
  return (
    <Layout>
      <SEO title="FAQ" />

      <div className={styles.faq}>
        <section>
          <h1 className="text-center mb-5">
            <FormattedMessage id="faq.section-hero.h1" />
          </h1>
          <InputGroup className="mb-3 ">
            <InputGroup.Prepend className={styles.prepend}>
              <InputGroup.Text id="basic-addon1" className="">
                <Magnifier />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="search" placeholder={intl.formatMessage({ id: "faq.section-hero.search" })} aria-label="Username" aria-describedby="basic-addon1" value={state.search} onChange={onChange} />
          </InputGroup>
        </section>
        <section className={styles.questions}>
          <div className={`nav ${styles.nav}`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {Object.keys(Questions.faq["section-faq"]).map((category, index) => (
              <a key={index} className={`nav-link ${!index && "active"}`} id="v-pills-${category}-tab" data-toggle="pill" href={`#v-pills-${category}`} role="tab" aria-controls={`#v-pills-${category}`} aria-selected="true" onClick={() => setActiveKey(-1)}>
                <FormattedMessage id={`faq.section-faq.${category}.title`} />
              </a>
            ))}
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            {Object.entries(Questions.faq["section-faq"]).map((category, index) => (
              <div key={index} className={`tab-pane fade ${!index && "show active"}`} id={`v-pills-${category[0]}`} role="tabpanel" aria-labelledby={`v-pills-${category[0]}`}>
                <h2>
                  <FormattedMessage id={`faq.section-faq.${category[0]}.title`} />
                </h2>
                <Accordion defaultActiveKey="0" className={styles.accordion} activeKey={activeKey} onSelect={(e) => setActiveKey(e)}>
                  {Object.values(category[1].questions)
                    .filter((question) => question.q.search(new RegExp(state.search, "i")) != -1)
                    .map((question, index) => (
                      <>
                        <Card key={index}>
                          <Accordion.Toggle as={Card.Header} eventKey={index} className={styles.cardHeader}>
                            <span className={`${activeKey === index ? styles.closed : styles.open}`}>{question.q}</span>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={index}>
                            <Card.Body className={styles.cardBody}>{question.a}</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <hr style={{ border: "1px solid rgba(255, 255, 255, 0.25)" }} />
                      </>
                    ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default injectIntl(FAQ);
