import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "react-bootstrap";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/treasury.module.css";
import TreasuryReportsImage from "src/assets/svgs/treasury-reports.svg";

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
    <h1 className={styles.title}>
      <FormattedMessage id="treasury-reports.seo-title" />
    </h1>
    <TreasuryReportsImage className={styles.treasuryReportsImage} />
  </div>
);

const AnyQuestions = () => {
  return (
    <div className={styles.anyQuestions}>
      <h1>Any questions?</h1>
      <p className={styles.paragraph}>
        Please reach out on our{" "}
        <a className={styles.anchor} href="https://t.me/kleros" target="_blank" rel="noopener noreferrer">
          Telegram group
        </a>{" "}
        or by DM on X or Telegram to{" "}
        <a className={styles.anchor} href="https://x.com/JuanSamitier" target="_blank" rel="noopener noreferrer">
          @JuanSamitier
        </a>
        .
      </p>
    </div>
  );
};

const TreasuryReportSelection = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("January");

  const availableYears = [...new Set(MONTHS.map((m) => m.year))].sort().reverse();
  const availableMonths = MONTHS.filter((m) => m.year === selectedYear).map((m) => m.month);

  useEffect(() => {
    if (!availableMonths.includes(selectedMonth)) {
      setSelectedMonth(availableMonths[0] || "");
    }
  }, [selectedYear, availableMonths, selectedMonth]);

  const getReportLink = () => {
    const report = MONTHS.find((m) => m.month === selectedMonth && m.year === selectedYear);
    return report ? `https://ipfs.kleros.io/ipfs/${report.treasuryReport}` : "#";
  };

  return (
    <section className={styles.treasuryReport}>
      <h1 className={styles.selectHeader}>
        <FormattedMessage id="treasury-reports.treasury-report.title" />
      </h1>
      <p>
        <FormattedMessage id="treasury-reports.treasury-report.description" />
      </p>
      <div className={styles.labelsContainer}>
        <label htmlFor="yearSelect">
          <FormattedMessage id="treasury-reports.select-year-label" />
          <select id="yearSelect" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {availableYears.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="monthSelect">
          <FormattedMessage id="treasury-reports.select-month-label" />
          <select id="monthSelect" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            {availableMonths.map((month) => (
              <option value={month} key={month}>
                {month}
              </option>
            ))}
          </select>
        </label>
      </div>

      <a className={`btn btn-primary mt-8 ${styles.button}`} href={getReportLink()} rel="noopener noreferrer" target="_blank">
        Download
      </a>
    </section>
  );
};

const RiskReportSelection = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("January");

  const availableYears = [...new Set(MONTHS.filter((m) => m.riskReport).map((m) => m.year))].sort().reverse();

  const availableMonths = MONTHS.filter((m) => m.year === selectedYear && m.riskReport).map((m) => m.month);

  useEffect(() => {
    if (!availableMonths.includes(selectedMonth)) {
      setSelectedMonth(availableMonths[0] || "");
    }
  }, [selectedYear, availableMonths, selectedMonth]);

  const getReportLink = () => {
    const report = MONTHS.find((m) => m.month === selectedMonth && m.year === selectedYear && m.riskReport);
    return report ? `https://ipfs.kleros.io/ipfs/${report.riskReport}` : "#";
  };

  return (
    <section className={styles.riskReport}>
      <h1 className={styles.selectHeader}>
        <FormattedMessage id="treasury-reports.risk-report.title" />
      </h1>
      <p>
        <FormattedMessage id="treasury-reports.risk-report.description" />
      </p>
      <div className={styles.labelsContainer}>
        <label htmlFor="riskYearSelect">
          <FormattedMessage id="treasury-reports.select-year-label" />
          <select id="riskYearSelect" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {availableYears.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="riskMonthSelect">
          <FormattedMessage id="treasury-reports.select-month-label" />
          <select id="riskMonthSelect" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            {availableMonths.map((month) => (
              <option value={month} key={month}>
                {month}
              </option>
            ))}
          </select>
        </label>
      </div>

      <a className={`btn btn-primary mt-8 ${styles.button}`} href={getReportLink()} rel="noopener noreferrer" target="_blank">
        Download
      </a>
    </section>
  );
};

const TreasuryReports = ({ intl }) => {
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "treasury-reports.seo-title" })} />
      <Container className={styles.container} fluid>
        <Header />
        <TreasuryReportSelection />
        <RiskReportSelection />
        <AnyQuestions />
      </Container>
    </Layout>
  );
};

export default injectIntl(TreasuryReports);
