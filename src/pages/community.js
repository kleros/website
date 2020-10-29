import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
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
import { Col, Container, Row } from "react-bootstrap";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/community.module.css";

const Community = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "community.seo-title" })} />
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
        <iframe title="Community Map" height="480" src="https://www.google.com/maps/d/embed?mid=177hy7Cx7opzdjeaZXjHMRx1LdJsbKYEH" width="900" />
        <h3 className="bigger bold purple mt-5 mb-5 mr-4 ml-4">
          <FormattedMessage id="community.section-members.telegram" />
        </h3>

        <Telegram className={styles.telegram} />
        <a className="purple bold medium" href="https://t.me/kleros">
          t.me/kleros
        </a>
      </section>
      <section className={styles.groups}>
        <h1>{intl.formatMessage({ id: "community.section-groups.title" })}</h1>
        <div className={styles.cards}>
          <VerticalCard
            content={{
              icon: Russia,
              paragraph: "t.me/kleros_ru",
              paragraphHref: "https://t.me/kleros_ru",
              title: "русский",
            }}
          />
          <VerticalCard
            content={{
              icon: Turkey,
              paragraph: "t.me/kleros_turkey",
              paragraphHref: "https://t.me/kleros_turkey",
              title: "Türkçe",
            }}
          />
          <VerticalCard
            content={{
              icon: Spain,
              paragraph: "t.me/kleros_espanol",
              paragraphHref: "https://t.me/kleros_espanol",
              title: "Español",
            }}
          />
          <VerticalCard
            content={{
              icon: Portuguese,
              paragraph: "t.me/klerosportuguese",
              paragraphHref: "https://t.me/klerosportuguese",
              title: "Português",
            }}
          />
          <VerticalCard
            content={{
              icon: SouthKorea,
              paragraph: "t.me/kleros_kor",

              paragraphHref: "https://t.me/kleros_kor",
              title: "한국어",
            }}
          />
          <VerticalCard
            content={{
              icon: France,
              paragraph: "t.me/klerosenfrancais",
              paragraphHref: "https://t.me/klerosenfrancais",
              title: "Français",
            }}
          />
        </div>
        <hr style={{ marginTop: "5rem" }} />
        <div className={styles.singleCard}>
          <VerticalCard
            content={{
              icon: PoH,
              paragraph: "t.me/proofhumanity",
              paragraphHref: "https://t.me/proofhumanity",
              title: intl.formatMessage({ id: "community.section-groups.title-poh" }),
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

        <Container className="p-0" fluid>
          <Row>
            <Col className="mt-5" md>
              <VerticalCard
                content={{
                  button: {
                    href: "https://blog.kleros.io/announcing-the-kleros-guild-of-justice/",
                    text: intl.formatMessage({
                      id: "community.section-guild.envoy.button",
                    }),
                    variant: "primary",
                  },
                  icon: Envoy,
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
                  listTitle: intl.formatMessage({
                    id: "community.section-guild.envoy.activities.title",
                  }),
                  paragraph: intl.formatMessage({
                    id: "community.section-guild.envoy.paragraph",
                  }),

                  title: intl.formatMessage({
                    id: "community.section-guild.envoy.title",
                  }),
                }}
              />
            </Col>
            <Col className="mt-5" md>
              <VerticalCard
                content={{
                  button: {
                    href: "https://blog.kleros.io/announcing-the-kleros-guild-of-justice/",
                    text: intl.formatMessage({
                      id: "community.section-guild.herald.button",
                    }),
                    variant: "secondary",
                  },
                  icon: Herald,
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

                  listTitle: intl.formatMessage({
                    id: "community.section-guild.herald.activities.title",
                  }),
                  paragraph: intl.formatMessage({
                    id: "community.section-guild.herald.paragraph",
                  }),

                  title: intl.formatMessage({
                    id: "community.section-guild.herald.title",
                  }),
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
