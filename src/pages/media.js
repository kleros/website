import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import MediaCard from "../components/media-card";
import Contact from "../components/contact";

import Magnifier from "src/assets/svgs/icon-magnifier.svg";

import styles from "./styles/media.module.css";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import copyright from "src/assets/svgs/icon-copyright.svg";
import eCommerce from "src/assets/svgs/icon-e-commerce.svg";
import finance from "src/assets/svgs/icon-finance.svg";
import freelancing from "src/assets/svgs/icon-freelance.svg";
import insurance from "src/assets/svgs/icon-shield.svg";
import moderation from "src/assets/svgs/icon-moderation.svg";
import plus from "src/assets/svgs/icon-plus.svg";
import smallClaims from "src/assets/svgs/icon-gavel.svg";
import token from "src/assets/svgs/icon-token.svg";
import restaurant from "src/assets/svgs/icon-fork-n-knife.svg";
import hotel from "src/assets/svgs/icon-hotel.svg";
import spam from "src/assets/svgs/icon-spam.svg";
import social from "src/assets/svgs/icon-speaker.svg";
import bounty from "src/assets/svgs/icon-bounty.svg";
import otc from "src/assets/svgs/icon-otc.svg";
import crowdfunding from "src/assets/svgs/icon-crowdfunding.svg";
import payroll from "src/assets/svgs/icon-payroll.svg";
import www from "src/assets/svgs/icon-www.svg";

import Scales from "src/assets/svgs/icon-scales.svg";
import Epsilon from "src/assets/svgs/icon-epsilon.svg";
import Kleros from "src/assets/svgs/icon-kleros.svg";
import Photo from "src/assets/svgs/icon-photo.svg";
import Box from "src/assets/svgs/icon-box.svg";

import { Badge, Container, Row, Col, InputGroup, FormControl, Accordion, Card } from "react-bootstrap";
import Categories from "src/intl/en.json";

import ThomsonReuters from "src/assets/svgs/thomson-reuters-2.svg";
import DefiPrime from "src/assets/svgs/defiprime.svg";
import CardRates from "src/assets/svgs/cr-logo.svg";
import BitcoinDotCom from "../assets/svgs/bitcoindotcom.svg";
import VentureBeat from "src/assets/svgs/venture-beat.svg";
import Token2049 from "src/assets/svgs/token2049.svg";
import Consensus from "src/assets/svgs/consensus.svg";
import EthCC from "src/assets/svgs/ethcc.svg";

import VerticalCard from "../components/vertical-card";

const CONTENT = {
  featured: [
    { icon: DefiPrime, text: "media.section-media.featured.items.defiprime", href: "/" },
    { icon: ThomsonReuters, text: "media.section-media.featured.items.thomsonreuters", href: "/" },
    { icon: CardRates, text: "media.section-media.featured.items.cardrates", href: "/" },
    { icon: Consensus, text: "media.section-media.featured.items.consensus", href: "/" },
    { icon: VentureBeat, text: "media.section-media.featured.items.venturebeat", href: "/" },
    { icon: Token2049, text: "media.section-media.featured.items.token2049", href: "/" },
    { icon: BitcoinDotCom, text: "media.section-media.featured.items.bitcoindotcom", href: "/" },
    { icon: EthCC, text: "media.section-media.featured.items.ethcc", href: "/" },
  ],
  presentations: [
    { link: "https://www.youtube.com/embed/m-NGxJfS0mw?start=12", text: "media.section-media.presentations.items.1" },
    { link: "https://www.youtube.com/embed/lPeca1h4auI?start=11", text: "media.section-media.presentations.items.2" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.presentations.items.3" },
    { link: "https://www.youtube.com/embed/PRFn3599CY0?start=23", text: "media.section-media.presentations.items.4" },
    { link: "https://www.youtube.com/embed/keQKNiyzVGs?start=316", text: "media.section-media.presentations.items.5" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.presentations.items.6" },
    { link: "https://www.youtube.com/embed/8CAL-Vyc-wc", text: "media.section-media.presentations.items.7" },
    { link: "https://www.youtube.com/embed/DVCzEuEwQGg", text: "media.section-media.presentations.items.8" },
    { link: "https://www.youtube.com/embed/YmA0E5EE3OY", text: "media.section-media.presentations.items.9" },
  ],
  promo: [
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.1" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.2" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.3" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.4" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.5" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.6" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.7" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.8" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.9" },
  ],

  conference: [
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.1" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.2" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.3" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.4" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.5" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.6" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.7" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.8" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.9" },
  ],
};

const Media = ({ intl }) => {
  return (
    <Layout>
      <SEO title="Media" />

      <div className={styles.media}>
        <section className={styles.sectionHeader}>
          <h1 className="text-center mb-5">
            <FormattedMessage id="media.section-hero.h1" />
          </h1>
          <a href="https://blog.kleros.io" target="blank" rel="noopener noreferrer" className="btn btn-primary">
            <FormattedMessage id="media.section-hero.button" />
          </a>
        </section>
        <section className="speaker" />
        <section className={styles.items}>
          <div className={`nav ${styles.nav}`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {Object.keys(Categories.media["section-media"]).map((category, index) => (
              <a key={index} className={`nav-link ${!index && "active"}`} id="v-pills-${category}-tab" data-toggle="pill" href={`#v-pills-${category}`} role="tab" aria-controls={`#v-pills-${category}`} aria-selected="true">
                <FormattedMessage id={`media.section-media.${category}.nav-title`} />
              </a>
            ))}
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            {Object.entries(Categories.media["section-media"]).map((category, index) => (
              <div key={index} className={`tab-pane fade ${!index && "show active"}`} id={`v-pills-${category[0]}`}>
                <h2>
                  <FormattedMessage id={`media.section-media.${category[0]}.title`} />
                </h2>
                {Categories.media["section-media"][category[0]].subtitle && (
                  <h3>
                    <FormattedMessage id={`media.section-media.${category[0]}.subtitle`} />
                  </h3>
                )}
                {Categories.media["section-media"][category[0]].paragraph && (
                  <p>
                    <FormattedMessage id={`media.section-media.${category[0]}.paragraph`} />
                  </p>
                )}
                {category[0] == "featured" && (
                  <div className={styles.cards}>
                    {CONTENT.featured.map((item, index) => (
                      <MediaCard key={index} content={{ icon: item.icon, text: intl.formatMessage({ id: item.text }), href: item.href }} />
                    ))}
                  </div>
                )}
                {category[0] == "presentations" && (
                  <div className={styles.cards}>
                    {CONTENT.presentations.map((item, index) => (
                      <div key={index}>
                        <iframe width="100%" height="auto" src={item.link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>
                          <FormattedMessage id={item.text} />
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                {category[0] == "promo" && (
                  <div className={styles.cards}>
                    {CONTENT.promo.map((item, index) => (
                      <div key={index}>
                        <iframe width="100%" height="auto" src={item.link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>
                          <FormattedMessage id={item.text} />
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                {category[0] == "conference" && (
                  <>
                    <div className="iframe-container mt-5">
                      <iframe width="100%" height="auto" src="https://www.youtube.com/embed/NuSps_2wMQ4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      <span>
                        <FormattedMessage id="media.section-media.conference.items.1" />
                      </span>
                    </div>
                    <div className={styles.cards}>
                      {CONTENT.conference.slice(1).map((item, index) => (
                        <div key={index}>
                          <iframe width="100%" height="auto" src={item.link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                          <span>
                            <FormattedMessage id={item.text} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
        <hr className="mt-5" />
        <section>
          <Container fluid className="p-0">
            <Row>
              <Col md className="mt-5">
                <VerticalCard
                  content={{
                    icon: Box,
                    title: intl.formatMessage({
                      id: "media.section-cards.card-1.title",
                    }),

                    button: {
                      variant: "primary",
                      text: intl.formatMessage({
                        id: "media.section-cards.card-1.button",
                      }),
                      href: "media://court.kleros.io",
                    },
                  }}
                />
              </Col>
              <Col md className="mt-5">
                <VerticalCard
                  content={{
                    icon: Photo,
                    title: intl.formatMessage({
                      id: "media.section-cards.card-2.title",
                    }),

                    button: {
                      variant: "secondary",
                      text: intl.formatMessage({
                        id: "media.section-cards.card-2.button",
                      }),
                      href: "/integrations",
                    },
                  }}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Contact
            content={{
              title: intl.formatMessage({
                id: "media.section-contact",
              }),
            }}
          />
        </section>
      </div>
    </Layout>
  );
};

export default injectIntl(Media);
