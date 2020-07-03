import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Sash from "../components/sash";

import Form from "src/assets/form.pdf";
import Statutes from "src/assets/statutes.pdf";

import Subscription from "src/assets/svgs/icon-pen.svg";
import Book from "src/assets/svgs/icon-book.svg";

import styles from "./styles/coop.module.css";
import Map from "src/assets/svgs/map.svg";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

const Coop = ({ intl }) => (
  <Layout>
    <SEO title="Cooperative" />

    <div className={styles.coop}>
      <section>
        <h1>
          <FormattedMessage id="coop.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage
            id="coop.section-hero.h2"
            values={{
              anchor: (children) => (
                <a href="https://medium.com/kleros/kleros-the-legal-structure-9cd8fca40b1c" target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          />
        </h2>
        <Map />
      </section>
      <hr />
      <section>
        <h1>
          <FormattedMessage id="coop.section-2.h1" />
        </h1>
        <h2>
          <FormattedMessage id="coop.section-2.h2" />
        </h2>
      </section>
      <section className="light">
        <Sash
          as="div"
          separator={true}
          figures={[
            {
              title: intl.formatMessage({
                id: "coop.sash.first.title",
              }),
              button: {
                text: intl.formatMessage({
                  id: "coop.sash.first.button",
                }),
                href: Form,
              },
              icon: Subscription,
            },
            {
              title: intl.formatMessage({
                id: "coop.sash.second.title",
              }),
              button: {
                text: intl.formatMessage({
                  id: "coop.sash.first.button",
                }),
                href: Statutes,
              },
              icon: Book,
            },
          ]}
        />
      </section>
      <section className={styles.steps}>
        <h1>
          <FormattedMessage id="coop.section-steps.heading" />
        </h1>
        <div>
          <h1>
            <FormattedMessage id="coop.section-steps.title-1" />
          </h1>
          <h2>
            <FormattedMessage id="coop.section-steps.text-1" />
          </h2>
        </div>
        <hr />
        <div>
          <h1>
            <FormattedMessage id="coop.section-steps.title-2" />
          </h1>
          <h2>
            <FormattedMessage id="coop.section-steps.text-2" />
          </h2>
        </div>
        <hr />

        <div>
          <h1>
            <FormattedMessage id="coop.section-steps.title-3" />
          </h1>
          <h2>
            <FormattedMessage
              id="coop.section-steps.text-3"
              values={{
                mail: (children) => (
                  <a href={`mailto:${children}`} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              }}
            />
          </h2>
        </div>
      </section>
    </div>
  </Layout>
);

export default injectIntl(Coop);
