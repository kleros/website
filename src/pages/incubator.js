import React from "react";
import { useReducer, useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact-2";
import IncubatorCard from "../components/incubator-card";

import { Col, Container, Row, Button, Accordion, Card } from "react-bootstrap";
import { FormattedMessage, injectIntl, intl } from "gatsby-plugin-intl";
import styles from "./styles/incubator.module.css";
import BookLaunch from "src/assets/images/career/ethcc2-book-launch.jpeg";
import Osaka1 from "src/assets/images/career/osaka-1.png";
import Osaka2 from "src/assets/images/career/osaka-2.png";
import Osaka3 from "src/assets/images/career/osaka-3.png";
import Osaka4 from "src/assets/images/career/osaka-4.png";
import Osaka5 from "src/assets/images/career/osaka-5.png";
import Osaka6 from "src/assets/images/career/osaka-6.jpg";
import Assembly21 from "src/assets/images/career/assembly2-1.png";
import Assembly22 from "src/assets/images/career/assembly2-2.jpg";
import Bushido1 from "src/assets/images/career/bushido-1.png";
import Bushido2 from "src/assets/images/career/bushido-2.png";
import Bushido3 from "src/assets/images/career/bushido-3.png";
import Devcon41 from "src/assets/images/career/devcon4-1.jpg";
import Devcon42 from "src/assets/images/career/devcon4-2.jpg";
import Devcon5 from "src/assets/images/career/devcon5.png";
import EthCC21 from "src/assets/images/career/ethcc2-1.png";
import EthCC2BookLaunch from "src/assets/images/career/ethcc2-book-launch.jpeg";
import Fede1 from "src/assets/images/career/fede-1.png";
import Fede2 from "src/assets/images/career/fede-2.png";
import Icosahedron1 from "src/assets/images/career/icosahedron-1.png";
import Icosahedron2 from "src/assets/images/career/icosahedron-2.png";
import KlerosConference1 from "src/assets/images/career/kleros-conference-1.jpg";
import Block1 from "src/assets/images/block/block1.png";
import Block2 from "src/assets/images/block/block2.png";
import Block3 from "src/assets/images/block/block3.png";
import Block4 from "src/assets/images/block/block4.png";
import Block5 from "src/assets/images/block/block5.png";
import Block6 from "src/assets/images/block/block6.png";
import Block7 from "src/assets/images/block/block7.png";
import Block8 from "src/assets/images/block/block8.png";
import Questions from "src/intl/en.json";

import Play from "src/assets/svgs/play.svg";

const applyNowHref = "https://docs.google.com/document/d/17qUlNz4FoipQgjv4FT_eexx0_AM7uYwF7IELZRPBsWM/edit";

const Incubator = ({ intl }) => {
  const [activeKey, setActiveKey] = useState(-1);

  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "incubator.seo-title" })} />
      <div className={styles.incubator}>
        <section className={`${styles.hero}`}>
          <h1>
            <FormattedMessage id="incubator.section-hero.h1" />
          </h1>
          <h2>
            <FormattedMessage id="incubator.section-hero.h2" />
          </h2>
          <a className="btn btn-primary" href={applyNowHref} target="_blank" rel="noopener noreferrer">
            <FormattedMessage id="incubator.section-hero.button-primary" />
          </a>
        </section>
        <section className={`light ${styles.apply}`}>
          <div className="iframe-container">
            <iframe title="Kleros Explainer" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0" height="315" src="https://www.youtube.com/embed/wZZ2ipS-jZw" width="560" />
          </div>
          <h1>
            <FormattedMessage id="incubator.section-apply.h1" />
          </h1>
          <h2>
            <FormattedMessage id="incubator.section-apply.h2" />
          </h2>
        </section>
        <section className={`light ${styles.decorator}`} />
        <section className={`light ${styles.howItWorks}`}>
          <h1>
            <FormattedMessage id="incubator.section-how-it-works.h1" />
          </h1>
          <h2>
            <FormattedMessage id="incubator.section-how-it-works.h2" />
          </h2>
          <div className={styles.learn}>
            <div className="mb-3">
              <FormattedMessage id="incubator.section-how-it-works.div-learn.title" />
            </div>
            <div className="d-flex flex-wrap justify-content-center ">
              {[1, 2, 3, 4].map((itemNumber) => (
                <IncubatorCard
                  className="mt-3"
                  content={{
                    department: intl.formatMessage({ id: `incubator.section-how-it-works.div-learn.items.${itemNumber}.header` }),
                    role: intl.formatMessage({ id: `incubator.section-how-it-works.div-learn.items.${itemNumber}.body` }),
                    color: "#009aff",
                  }}
                />
              ))}
            </div>
          </div>
          <div className={styles.build}>
            <div className="mb-3">
              <FormattedMessage id="incubator.section-how-it-works.div-build.title" />
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              {[5, 6, 7, 8].map((itemNumber) => (
                <IncubatorCard
                  content={{
                    department: intl.formatMessage({ id: `incubator.section-how-it-works.div-build.items.${itemNumber}.header` }),
                    role: intl.formatMessage({ id: `incubator.section-how-it-works.div-build.items.${itemNumber}.body` }),
                    color: "#9013fe",
                  }}
                />
              ))}
            </div>
          </div>
          <div className={styles.grow}>
            <div className="mb-3">
              <FormattedMessage id="incubator.section-how-it-works.div-grow.title" />
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              {[9, 10, 11, 12].map((itemNumber) => (
                <IncubatorCard
                  content={{
                    department: intl.formatMessage({ id: `incubator.section-how-it-works.div-grow.items.${itemNumber}.header` }),
                    role: intl.formatMessage({ id: `incubator.section-how-it-works.div-grow.items.${itemNumber}.body` }),
                    color: "#4d00b4",
                  }}
                />
              ))}
            </div>
          </div>
        </section>
        <section className={`light ${styles.where}`}>
          <h1>
            <FormattedMessage id="incubator.section-where.h1" />
          </h1>
          <h2>
            <FormattedMessage id="incubator.section-where.h2" />
          </h2>
          <div className={styles.images}>
            <div className={styles.left}>
              <img className="rounded" src={Block5} />
              <img className="rounded" src={Block3} />
              <img className="rounded" src={Block8} />
            </div>
            <div className={styles.right}>
              <img className="rounded" src={Block4} />
              <img className="rounded" src={Block7} />
              <img className="rounded" src={Block2} />
            </div>
          </div>
        </section>
        <section className="light">
          <Contact
            content={{
              title: intl.formatMessage({
                id: "incubator.section-contact.title",
              }),
              bgColor: "#9013fe",
              callToActionText: intl.formatMessage({ id: "incubator.section-contact.button-primary" }),
              callToActionHref: applyNowHref,
            }}
          />
        </section>
        <section className={styles.questions}>
          <h1 className="text-center huge">Frequently Asked Questions</h1>
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

export default injectIntl(Incubator);
