import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import MediaCard from "../components/media-card";
import Contact from "../components/contact";
import styles from "./styles/media.module.css";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import Photo from "src/assets/svgs/icon-photo.svg";
import Box from "src/assets/svgs/icon-box.svg";
import { Col, Container, Row } from "react-bootstrap";
import Categories from "src/intl/en.json";
import VerticalCard from "../components/vertical-card";

const CONTENT = {
  conference: [
    { link: "https://www.youtube.com/embed/NqxgMYsw_Ro", text: "media.section-media.conference.items.1" },
    { link: "https://www.youtube.com/embed/2him_8rUMaA", text: "media.section-media.conference.items.2" },
    { link: "https://www.youtube.com/embed/JJPcxuXtHAU", text: "media.section-media.conference.items.3" },
    { link: "https://www.youtube.com/embed/Ga6bbCMKH4A", text: "media.section-media.conference.items.4" },
    { link: "https://www.youtube.com/embed/zQF-j2nHb50", text: "media.section-media.conference.items.5" },
    { link: "https://www.youtube.com/embed/sPKJqsmDQjc", text: "media.section-media.conference.items.6" },
    { link: "https://www.youtube.com/embed/autihwpQPK4", text: "media.section-media.conference.items.7" },
    { link: "https://www.youtube.com/embed/5xMf5BK__7I", text: "media.section-media.conference.items.8" },
    { link: "https://www.youtube.com/embed/S2t7BJWoaBs", text: "media.section-media.conference.items.9" },
    { link: "https://www.youtube.com/embed/zPLK0CDfx7Y", text: "media.section-media.conference.items.10" },
    { link: "https://www.youtube.com/embed/yvhZvKz2p4Y", text: "media.section-media.conference.items.11" },
    { link: "https://www.youtube.com/embed/mX3esOessmE", text: "media.section-media.conference.items.12" },
    { link: "https://www.youtube.com/embed/hC9JgzuXzMk", text: "media.section-media.conference.items.13" },
    
  ],

  presentations: [
    { link: "https://www.youtube.com/embed/m-NGxJfS0mw?start=12", text: "media.section-media.presentations.items.1" },
    { link: "https://www.youtube.com/embed/lPeca1h4auI?start=11", text: "media.section-media.presentations.items.2" },
    { link: "https://www.youtube.com/embed/ssdgdV_fngI", text: "media.section-media.presentations.items.3" },
    { link: "https://www.youtube.com/embed/PRFn3599CY0?start=23", text: "media.section-media.presentations.items.4" },
    { link: "https://www.youtube.com/embed/keQKNiyzVGs?start=316", text: "media.section-media.presentations.items.5" },
    { link: "https://www.youtube.com/embed/8CAL-Vyc-wc", text: "media.section-media.presentations.items.7" },
    { link: "https://www.youtube.com/embed/DVCzEuEwQGg", text: "media.section-media.presentations.items.8" },
    { link: "https://www.youtube.com/embed/YmA0E5EE3OY", text: "media.section-media.presentations.items.9" },
  ],

  promo: [
    { link: "https://www.youtube.com/embed/bVL3ZJ8HNwE", text: "media.section-media.promo.items.1" },
    { link: "https://www.youtube.com/embed/vRhD5WnUX3k", text: "media.section-media.promo.items.2" },
    { link: "https://www.youtube.com/embed/c6YZId8hbqI", text: "media.section-media.promo.items.3" },
    { link: "https://www.youtube.com/embed/IMDLJgTKDNw", text: "media.section-media.promo.items.4" },
    { link: "https://www.youtube.com/embed/-zkRXcd1lMg", text: "media.section-media.promo.items.5" },
    { link: "https://www.youtube.com/embed/bag2M9rGAbE", text: "media.section-media.promo.items.6" },
    { link: "https://www.youtube.com/embed/nlFhHeiyB6A", text: "media.section-media.promo.items.7" },
    { link: "https://www.youtube.com/embed/x0oC0GpDUbM", text: "media.section-media.promo.items.8" },
    { link: "https://www.youtube.com/embed/M-nzG3C8RUc", text: "media.section-media.promo.items.9" },
  ],
};

const Media = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "media.seo-title" })} />

    <div className={styles.media}>
      <section className={styles.sectionHeader}>
        <h1 className="text-center mb-5">
          <FormattedMessage id="media.section-hero.h1" />
        </h1>
        <a className="btn btn-primary" href="https://blog.kleros.io" rel="noopener noreferrer" target="blank">
          <FormattedMessage id="media.section-hero.button" />
        </a>
      </section>
      <section className="speaker" />
      <section className={styles.items}>
        <div aria-orientation="vertical" className={`nav ${styles.nav}`} id="v-pills-tab" role="tablist">
          {Object.keys(Categories.media["section-media"]).map((category, index) => (
            <a aria-controls={`#v-pills-${category}`} aria-selected="true" className={`nav-link ${!index && "active"}`} data-toggle="pill" href={`#v-pills-${category}`} id="v-pills-${category}-tab" key={index} role="tab">
              <FormattedMessage id={`media.section-media.${category}.nav-title`} />
            </a>
          ))}
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          {Object.entries(Categories.media["section-media"]).map((category, index) => (
            <div className={`tab-pane fade ${!index && "show active"}`} id={`v-pills-${category[0]}`} key={index}>
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
              {category[0] === "featured" && (
                <div className={styles.cards}>
                  {CONTENT.featured.map((item, index) => (
                    <MediaCard content={{ href: item.href, icon: item.icon, text: intl.formatMessage({ id: item.text }) }} key={index} />
                  ))}
                </div>
              )}
              {category[0] === "presentations" && (
                <div className={styles.cards}>
                  {CONTENT.presentations.map((item, index) => (
                    <div key={index}>
                      <iframe title={item.text} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0" height="auto" src={item.link} width="100%"></iframe>
                      <span>
                        <FormattedMessage id={item.text} />
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {category[0] === "promo" && (
                <div className={styles.cards}>
                  {CONTENT.promo.map((item, index) => (
                    <div key={index}>
                      <iframe title={item.text} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0" height="auto" src={item.link} width="100%"></iframe>
                      <span>
                        <FormattedMessage id={item.text} />
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {category[0] === "conference" && (
                <>
                  <div className="iframe-container mt-5">
                    <iframe title="conference" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0" height="auto" src="https://www.youtube.com/embed/hC9JgzuXzMk" width="100%"></iframe>
                    <span>
                      <FormattedMessage id="media.section-media.conference.items.1" />
                    </span>
                  </div>
                  <div className={styles.cards}>
                    {CONTENT.conference.slice(1).map((item, index) => (
                      <div key={index}>
                        <iframe title={item.text} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0" height="auto" src={item.link} width="100%"></iframe>
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
        <Container className="p-0" fluid>
          <Row>
            <Col className="mt-5" md>
              <VerticalCard
                content={{
                  button: {
                    href: "../KlerosBrandAssets.zip",
                    text: intl.formatMessage({
                      id: "media.section-cards.card-1.button",
                    }),
                    variant: "primary",
                  },
                  icon: Box,

                  title: intl.formatMessage({
                    id: "media.section-cards.card-1.title",
                  }),
                }}
              />
            </Col>
            <Col className="mt-5" md>
              <VerticalCard
                content={{
                  button: {
                    disabled: true,
                    href: "Assets",
                    text: intl.formatMessage({
                      id: "media.section-cards.card-2.button",
                    }),
                    variant: "secondary",
                  },
                  icon: Photo,

                  title: intl.formatMessage({
                    id: "media.section-cards.card-2.title",
                  }),
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

export default injectIntl(Media);
