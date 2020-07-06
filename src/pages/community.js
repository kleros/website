import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Members from "src/assets/images/members.png";
import Contact from "../components/contact";

import Telegram from "src/assets/svgs/telegramColored.svg";
import Envoy from "src/assets/svgs/envoy.svg";
import Herald from "src/assets/svgs/herald.svg";
import Russia from "src/assets/svgs//flags/ru.svg";
import Turkey from "src/assets/svgs/flags/tr.svg";
import France from "src/assets/svgs/flags/fr.svg";
import Spain from "src/assets/svgs/flags/es.svg";
import SouthKorea from "src/assets/svgs/flags/kr.svg";
import Portuguese from "src/assets/svgs/flags/pt.svg";

import PoH from "src/assets/svgs/poh.svg";

import VerticalCard from "../components/vertical-card";
import { Badge, Container, Row, Col, InputGroup, FormControl, Accordion, Card } from "react-bootstrap";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import styles from "./styles/community.module.css";

const Community = ({ intl }) => (
  <Layout>
    <SEO title="Community" />
    <div className={styles.community}>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="community.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="community.section-hero.h2" />
        </h2>
      </section>
      <section className="light">
        <h3 className="bigger bold purple mb-5 mr-4 ml-4">
          <FormattedMessage id="community.section-members.title" />
        </h3>
        <iframe src="https://www.google.com/maps/d/embed?mid=177hy7Cx7opzdjeaZXjHMRx1LdJsbKYEH" width="640" height="480"></iframe>
        <h3 className="bigger bold purple mt-5 mb-5 mr-4 ml-4">
          <FormattedMessage id="community.section-members.telegram" />
        </h3>

        <Telegram className={styles.telegram} />
        <a className="purple bold medium" href="t.me/kleros">
          t.me/kleros
        </a>
      </section>
      <section className={styles.groups}>
        <h1>{intl.formatMessage({ id: "community.section-groups.title" })}</h1>
        <div className={styles.cards}>
          <VerticalCard
            content={{
              icon: Russia,
              title: "русский",
              paragraph: "t.me/kleros_ru",
              paragraphHref: "https://t.me/kleros_ru",
            }}
          />
          <VerticalCard
            content={{
              icon: Turkey,
              title: "Türkçe",
              paragraph: "t.me/kleros_turkey",
              paragraphHref: "https://t.me/kleros_turkey",
            }}
          />
          <VerticalCard
            content={{
              icon: Spain,
              title: "Espanol",
              paragraph: "t.me/kleros_espanol",
              paragraphHref: "https://t.me/kleros_espanol",
            }}
          />
          <VerticalCard
            content={{
              icon: Portuguese,
              title: "Portugais",
              paragraph: "t.me/klerosportuguese",
              paragraphHref: "https://t.me/klerosportuguese",
            }}
          />
          <VerticalCard
            content={{
              icon: SouthKorea,
              title: "한국어",

              paragraph: "t.me/kleros_kor",
              paragraphHref: "https://t.me/kleros_kor",
            }}
          />
          <VerticalCard
            content={{
              icon: France,
              title: "Francais",
              paragraph: "t.me/klerosenfrancais",
              paragraphHref: "https://t.me/klerosenfrancais",
            }}
          />
        </div>
        <hr style={{ marginTop: "5rem" }} />
        <div className={styles.singleCard}>
          <VerticalCard
            content={{
              icon: PoH,
              title: intl.formatMessage({ id: "community.section-groups.title-poh" }),
              paragraph: "t.me/proofhumanity",
              paragraphHref: "t.me/proofhumanity",
            }}
          />
        </div>
      </section>
      <hr />
      <section className={styles.guild}>
        <h1>
          <FormattedMessage id="community.section-guild.title" />
        </h1>
        <h2>
          <FormattedMessage id="community.section-guild.paragraph-1" />
        </h2>
        <h2>
          <FormattedMessage id="community.section-guild.paragraph-2" />
        </h2>

        <Container fluid className="p-0">
          <Row>
            <Col md className="mt-5">
              <VerticalCard
                content={{
                  icon: Envoy,
                  title: intl.formatMessage({
                    id: "community.section-guild.envoy.title",
                  }),
                  paragraph: intl.formatMessage({
                    id: "community.section-guild.envoy.paragraph",
                  }),
                  listTitle: intl.formatMessage({
                    id: "community.section-guild.envoy.activities.title",
                  }),
                  list: [
                    intl.formatMessage({
                      id: "community.section-guild.envoy.activities.items.1",
                    }),
                    intl.formatMessage({
                      id: "community.section-guild.envoy.activities.items.2",
                    }),
                    intl.formatMessage({
                      id: "community.section-guild.envoy.activities.items.3",
                    }),
                  ],

                  button: {
                    variant: "primary",
                    text: intl.formatMessage({
                      id: "community.section-guild.envoy.button",
                    }),
                    href: "/fellowship",
                  },
                }}
              />
            </Col>
            <Col md className="mt-5">
              <VerticalCard
                content={{
                  icon: Herald,
                  title: intl.formatMessage({
                    id: "community.section-guild.herald.title",
                  }),
                  paragraph: intl.formatMessage({
                    id: "community.section-guild.herald.paragraph",
                  }),

                  listTitle: intl.formatMessage({
                    id: "community.section-guild.herald.activities.title",
                  }),
                  list: [
                    intl.formatMessage({
                      id: "community.section-guild.herald.activities.items.1",
                    }),
                    intl.formatMessage({
                      id: "community.section-guild.herald.activities.items.2",
                    }),
                    intl.formatMessage({
                      id: "community.section-guild.herald.activities.items.3",
                    }),
                  ],

                  button: {
                    variant: "secondary",
                    text: intl.formatMessage({
                      id: "community.section-guild.herald.button",
                    }),
                    href: "/book",
                  },
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Contact
          content={{
            title: intl.formatMessage({
              id: "community.section-contact",
            }),
          }}
        />
      </section>
    </div>
  </Layout>
);

export default injectIntl(Community);
