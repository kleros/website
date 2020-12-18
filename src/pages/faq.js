import React from "react";
import { useReducer, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Magnifier from "src/assets/svgs/icon-magnifier.svg";
import styles from "./styles/faq.module.css";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import { Accordion, Card, FormControl, InputGroup } from "react-bootstrap";
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

  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "faq.seo-title" })} />

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
              <a aria-controls={`#v-pills-${category}`} aria-selected="true" className={`nav-link ${!index && "active"}`} data-toggle="pill" href={`#v-pills-${category}`} id={`v-pills-${category}-tab`} key={index} onClick={() => setActiveKey(-1)} role="tab">
                <FormattedMessage id={`faq.section-faq.${category}.title`} />
              </a>
            ))}
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            {Object.entries(Questions.faq["section-faq"]).map((category, index) => console.log(category))}
            {Object.entries(Questions.faq["section-faq"]).map((category, index) => (
              <div aria-labelledby={`v-pills-${category[0]}`} className={`tab-pane fade ${index === 0 && "show active"}`} id={`v-pills-${category[0]}`} key={index} role="tabpanel">
                <h2>
                  <FormattedMessage id={`faq.section-faq.${category[0]}.title`} />
                </h2>
                <Accordion
                  className={styles.accordion}
                  onSelect={(e) => {
                    setActiveKey(e);
                  }}
                >
                  {Object.values(category[1].questions)
                    .filter((question) => question.q.search(new RegExp(state.search, "i")) !== -1)
                    .map((question, index) => (
                      <React.Fragment key={index}>
                        <Card>
                          <Accordion.Toggle as={Card.Header} className={styles.cardHeader} eventKey={`key${index}`}>
                            <span className={`${activeKey === `key${index}` ? styles.closed : styles.open}`}>
                              <FormattedMessage id={`faq.section-faq.${category[0]}.questions.${index + 1}.q`} />
                            </span>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={`key${index}`}>
                            <Card.Body className={styles.cardBody}>
                              <FormattedMessage id={`faq.section-faq.${category[0]}.questions.${index + 1}.a`} />
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <hr style={{ border: "1px solid rgba(255, 255, 255, 0.25)" }} />
                      </React.Fragment>
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
