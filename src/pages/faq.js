import React from "react";
import { useContext, useReducer, useState } from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Magnifier from "src/assets/svgs/icon-magnifier.svg";
import styles from "./styles/faq.module.css";
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl";
import { Accordion, Badge, Card, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
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
        <section className={styles.sectionHeader}>
          <h1 className="text-center mb-5">
            <FormattedMessage id="faq.section-hero.h1" />
          </h1>
          <InputGroup className="mb-3 ">
            <InputGroup.Prepend className={styles.prepend}>
              <InputGroup.Text className="" id="basic-addon1">
                <Magnifier />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" aria-label="Username" name="search" onChange={onChange} placeholder={intl.formatMessage({ id: "faq.section-hero.search" })} value={state.search} />
          </InputGroup>
        </section>
        <section className={styles.questions}>
          <div aria-orientation="vertical" className={`nav ${styles.nav}`} id="v-pills-tab" role="tablist">
            {Object.keys(Questions.faq["section-faq"]).map((category, index) => (
              <a aria-controls={`#v-pills-${category}`} aria-selected="true" className={`nav-link ${!index && "active"}`} data-toggle="pill" href={`#v-pills-${category}`} id="v-pills-${category}-tab" key={index} onClick={() => setActiveKey(-1)} role="tab">
                <FormattedMessage id={`faq.section-faq.${category}.title`} />
              </a>
            ))}
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            {Object.entries(Questions.faq["section-faq"]).map((category, index) => (
              <div aria-labelledby={`v-pills-${category[0]}`} className={`tab-pane fade ${!index && "show active"}`} id={`v-pills-${category[0]}`} key={index} role="tabpanel">
                <h2>
                  <FormattedMessage id={`faq.section-faq.${category[0]}.title`} />
                </h2>
                <Accordion activeKey={activeKey} className={styles.accordion} defaultActiveKey="0" onSelect={(e) => setActiveKey(e)}>
                  {Object.values(category[1].questions)
                    .filter((question) => question.q.search(new RegExp(state.search, "i")) != -1)
                    .map((question, index) => (
                      <>
                        <Card key={index}>
                          <Accordion.Toggle as={Card.Header} className={styles.cardHeader} eventKey={index}>
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
