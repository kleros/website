import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "react-bootstrap";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/treasury.module.css";
import NewWindowIcon from "src/assets/svgs/new-window-icon.svg";

const MONTHS = [
  {
    month: "January",
    year: "2024",
    treasuryReport: "QmYkhtzmTTJBS4XsCC6FMALVHYSPkunbcnhW1RLmFAUmQM/Jan%2031%20_%20Monthly%20Portfolio%20_Snapshot_%202024%20-%20January%20%2031,%202024.pdf",
    riskReport: "QmcGNfZXh4VVwTGiYcmm6fFNb8aWPZobLgogHArcYkRXFD/31%20Jan%20Redefine%20-%20Risk%20Center.01-31-2024.pdf",
  },
  {
    month: "December",
    year: "2023",
    treasuryReport: "QmPJCf9oF13xm45RqyWCFVcx8ptJFrN22Vu4z7x7ueChkj/December 2023.pdf",
  },
  {
    month: "November",
    year: "2023",
    treasuryReport: "QmRQAJmnSXPzcG2ezt8yaFTntfNJ7iTm9jWMS17dsJKni8/November 2023.pdf",
    riskReport: "QmSudXskv9PBtqrYs5cXPZBHvni1ukfKeTqQfoQ4WYsfCn/Kleros%20Risk%20Report%20.12-01-2023.pdf",
  },
  {
    month: "October",
    year: "2023",
    treasuryReport: "QmPtsbwsgK7wAWYwPz4doeiWy28opgMqfUgzj6oEp1uiXx/October%202023.pdf",
  },
  {
    month: "September",
    year: "2023",
    treasuryReport: "QmRhKnuDq8Ej8vnzazurM4PadoaNafpZn6H3GG4VFwt4vM/September%202023.pdf",
  },
  {
    month: "August",
    year: "2023",
    treasuryReport: "QmWW6S3DbdZA6rqhZKSsv51Vfgr3Fxj85pXV6mKhE7Tkjf/August%202023.pdf",
  },
  {
    month: "July",
    year: "2023",
    treasuryReport: "QmaB1aSqw2dNRvGHBQzbepPAbyvupevyVgiSfcUfveGmB4/July%202023.pdf",
  },
  {
    month: "June",
    year: "2023",
    treasuryReport: "QmVo1zyDiSxD5Lb6oQmmt93KDrab6YQ7vRjQgfGgxjY5YT/June%202023.pdf",
  },
  {
    month: "May",
    year: "2023",
    treasuryReport: "Qmb4ghhMVYhSQLVXfPXJs5awfdimszE9ipamdjaqSeGBc4/May%202023.pdf",
  },
  {
    month: "April",
    year: "2023",
    treasuryReport: "QmXZiEadx9NXWzYk3Z7Y8fjE5Ne1bpj127hvRaQYjArxp3/April%202023.pdf",
  },
  {
    month: "March",
    year: "2023",
    treasuryReport: "Qmb727hJXVU2qmrzHswUjNvVHEgifWj2MQDNidLwuoqakR/March%202023.pdf",
  },
  {
    month: "February",
    year: "2023",
    treasuryReport: "QmU1PqhNnMr5QAdq4KCfab6NsHHJKyEvXzhzuTfznvGesj/February%202023.pdf",
  },
  {
    month: "January",
    year: "2023",
    treasuryReport: "QmPRevWakX4WYi2ghS63UApoXxbpyoAu3M5wBmY2ZPfG9R/January%202023.pdf",
  },
];

const Header = () => (
  <div className={styles.header}>
    <FormattedMessage id="treasury-reports.seo-title" />
  </div>
);

const MonthReport = ({ month, year, treasuryReport, riskReport }) => (
  <div className={styles.reportCard}>
    <div className={styles.reportHeader}>{`${month} ${year}`}</div>
    <div className={styles.reportBody}>
      {treasuryReport ? (
        <a className={styles.anchor} href={`https://ipfs.kleros.io/ipfs/${treasuryReport}`} target="_blank" rel="noopener noreferrer">
          Treasury Report <NewWindowIcon className={styles.newWindowSvg} />
        </a>
      ) : null}
      {riskReport ? (
        <a className={styles.anchor} href={`https://ipfs.kleros.io/ipfs/${riskReport}`} target="_blank" rel="noopener noreferrer">
          Risk Report <NewWindowIcon className={styles.newWindowSvg} />
        </a>
      ) : null}
    </div>
  </div>
);

const TreasuryReports = ({ intl }) => {
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "treasury-reports.seo-title" })} />
      <Container className={styles.treasury} fluid>
        <Header />
        <p className={styles.paragraph}>
          Any questions? Please reach out on our{" "}
          <a href="https://t.me/kleros" target="_blank" rel="noopener noreferrer">
            Telegram group
          </a>{" "}
          or by DM on X or Telegram to{" "}
          <a href="https://x.com/JuanSamitier" target="_blank" rel="noopener noreferrer">
            @JuanSamitier
          </a>
          .
        </p>
        {MONTHS.map(({ month, year, treasuryReport, riskReport }, index) => (
          <MonthReport key={index} month={month} year={year} treasuryReport={treasuryReport} riskReport={riskReport} />
        ))}
      </Container>
    </Layout>
  );
};

export default injectIntl(TreasuryReports);
