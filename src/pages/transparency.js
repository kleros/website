import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "react-bootstrap";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/transparency.module.css";
import NewWindowIcon from "src/assets/svgs/new-window-icon.svg";

const MONTHS = [
  {
    month: "January",
    year: "2024",
    treasuryReport: "https://ipfs.kleros.io/ipfs/QmYkhtzmTTJBS4XsCC6FMALVHYSPkunbcnhW1RLmFAUmQM/Jan%2031%20_%20Monthly%20Portfolio%20_Snapshot_%202024%20-%20January%20%2031,%202024.pdf",
    riskReport: "https://ipfs.kleros.io/ipfs/QmcGNfZXh4VVwTGiYcmm6fFNb8aWPZobLgogHArcYkRXFD/31%20Jan%20Redefine%20-%20Risk%20Center.01-31-2024.pdf",
  },
  { month: "February", year: "2024", treasuryReport: "ipfs://...", riskReport: "ipfs://..." },
];

const Header = () => <div className={styles.header}><FormattedMessage id="transparency.seo-title" /></div>;

const MonthReport = ({ month, year, treasuryReport, riskReport }) => (
  <div className={styles.reportCard}>
    <div className={styles.reportHeader}>{`${month} ${year}`}</div>
    <div className={styles.reportBody}>
      <a className={styles.anchor} href={treasuryReport} target="_blank" rel="noopener noreferrer">
        Treasury Report <NewWindowIcon className={styles.newWindowSvg} />
      </a>
      <a className={styles.anchor} href={riskReport} target="_blank" rel="noopener noreferrer">
        Risk Report <NewWindowIcon className={styles.newWindowSvg} />
      </a>
    </div>
  </div>
);

const Transparency = ({ intl }) => {
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "transparency.seo-title" })} />
      <Container className={styles.transparency} fluid>
        <Header />
        {MONTHS.map(({ month, year, treasuryReport, riskReport }, index) => (
          <MonthReport key={index} month={month} year={year} treasuryReport={treasuryReport} riskReport={riskReport} />
        ))}
      </Container>
    </Layout>
  );
};

export default injectIntl(Transparency);
