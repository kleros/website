import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sash from "../components/sash";
import Form from "src/assets/form.pdf";
import Statutes from "src/assets/statutes.pdf";
import Subscription from "src/assets/svgs/icon-pen.svg";
import Book from "src/assets/svgs/icon-book.svg";
import styles from "./styles/coop.module.css";
import Map from "src/assets/svgs/map.svg";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

const ANNUAL_REPORTS = {
  "2023": "/ipfs/QmcZC1yH3ggYZuUtRJNh1e1WS987LFM6JUeB5HbiTDMSiU/Cooperative Kleros Annual Report 2023.pdf",
  "2022": "/ipfs/QmXyf7FHT3jwK6gyP8oAYfnJiLrZcTWGLCZ7h4XtGHhyt7/Cooperative Kleros Annual Report - 2022.pdf",
  "2021": "/ipfs/QmaWMYTR4zTQvENdteDZidDMGP7Qp5JS5XoSxFwyup5GhK/Cooperative Kleros Annual Report - 2021.pdf",
  "2020": "/ipfs/QmXzm8X55fw1UmDhwG7mxN5WSBm1XqrjyWwoPEo6n4F6Qj/Cooperative Kleros - Annual Report 2020.pdf",
  "2019": "/ipfs/QmTiR3N137Rdj9tcob75Cc1veuDu66YBhkF5hcVAJZbh8h/Cooperative Kleros - Annual Report - 2019.pdf",
};

const Coop = ({ intl }) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "coop.seo-title" })} />

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
                  <a href="https://medium.com/kleros/kleros-the-legal-structure-9cd8fca40b1c" rel="noopener noreferrer" target="_blank">
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
            figures={[
              {
                button: {
                  href: Form,
                  text: intl.formatMessage({
                    id: "coop.sash.first.button",
                  }),
                },
                icon: Subscription,
                title: intl.formatMessage({
                  id: "coop.sash.first.title",
                }),
              },
              {
                button: {
                  href: Statutes,
                  text: intl.formatMessage({
                    id: "coop.sash.first.button",
                  }),
                },
                icon: Book,
                title: intl.formatMessage({
                  id: "coop.sash.second.title",
                }),
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
                    <a href={`mailto:${children}`} rel="noopener noreferrer" target="_blank">
                      {children}
                    </a>
                  ),
                }}
              />
            </h2>
          </div>
        </section>
        <section className={`light ${styles.reports}`}>
          <h1>
            <FormattedMessage id="coop.section-reports.title" />
          </h1>
          <label htmlFor="yearSelect">
            <FormattedMessage id="coop.section-reports.select-label" />
            <select id="yearSelect" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              {Object.keys(ANNUAL_REPORTS).sort((a, b) => parseInt(b) - parseInt(a)).map((optionTitle) => 
                <option value={optionTitle} key={optionTitle}>{optionTitle}</option>
              )}
            </select>
          </label>
          <a className={`btn btn-primary mt-8 ${styles.button}`} href={`https://cdn.kleros.link${ANNUAL_REPORTS[selectedYear]}`} rel="noopener noreferrer" target="blank">
            <FormattedMessage id="coop.section-reports.download" />
          </a>
        </section>
      </div>
    </Layout>
  );
}

export default injectIntl(Coop);
