import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact";
import { Col, Container, Row } from "react-bootstrap";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/career.module.css";

const Career = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "community.seo-title" })} />
    <div className={styles.careers}>
      <section className={`{styles.hero}`}>
        <h1>
          <FormattedMessage id="career.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="career.section-hero.h2" />
        </h2>
      </section>
      <section className={`light {styles.mission}`}>
        <h1>
          <FormattedMessage id="career.section-mission.h1" />
        </h1>
        <h2>
          <FormattedMessage id="career.section-mission.h2" />
        </h2>
      </section>
      <section className={styles.culture}>
        <h1>
          <FormattedMessage id="career.section-culture.h1" />
        </h1>
        <h2>
          <FormattedMessage id="career.section-culture.h2" />
        </h2>
      </section>
      <section className={`light {styles.positions} `}>
        <h1>
          <FormattedMessage id="career.section-positions.h1" />
        </h1>
        <h2>
          <FormattedMessage id="career.section-positions.h2" />
        </h2>
      </section>

      <section>
        <Contact
          content={{
            title: intl.formatMessage({
              id: "contact.title",
            }),
          }}
        />
      </section>
    </div>
  </Layout>
);

export default injectIntl(Career);
