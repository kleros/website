import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "react-bootstrap";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/treasury.module.css";
import TreasuryReportsImage from "src/assets/svgs/treasury-reports.svg";

const MONTHS = [
  {
    month: "July",
    year: "2024",
    treasuryReport: "QmPoVgMsXrwZYAtpafN2vQqw8kW44iDTJ6KzRXguNjbiAm/july-monthly-portfolio-snapshot-2024-july-2024.pdf",
    riskReport: "QmZmRczFzbGaHxKpALSq54FLT39aacSGR3oCEN2yNrLCFD/july-redefine-risk-center.pdf",
  },
  {
    month: "June",
    year: "2024",
    treasuryReport: "QmQMuDCBoyYMh3hvEiKiW6vKpz1mB4p535GvEhrkEmJr1o/june-24.-20-treasury-report.pdf",
    riskReport: "QmPfeTLgPJnsDEGTU5sKC2Zwm9LEHxqnasGdXsizw93cfx/june-risk-report-redefine-risk-center.-june07-01-2024.pdf",
  },
  {
    month: "May",
    year: "2024",
    treasuryReport: "Qmbjih1kNuvbfAJWs3EHZ11WCRmfZ7pbztPFAG1AL45QfR/may-treasury-report-monthly-portfolio-snapshot-2024-may-2024.pdf",
    riskReport: "QmcU89fMWFnWLYyDopBHh85qreB6GkJqhVR5G4sbk8sWAT/may-risk-report-redefine-risk-center.06-05-2024.pdf",
  },
  {
    month: "April",
    year: "2024",
    treasuryReport: "QmNrjnGicptR5X9T3KiLvRcHeanebrEWyycstZQ3WHc8Dy/report-treasury-2024-april.pdf",
    riskReport: "QmX9LCZrBJbKjJURiQatJm2gj3c7x8RcZfP7jt37zmGocM/may-risk-report-.pdf",
  },
  {
    month: "March",
    year: "2024",
    treasuryReport: "QmavHd6pFRYHUTvmkpasjWkk2Zzq54Fb9cuqT39k3KvZC6/monthly-portfolio-snapshot-2024-april-2-2024.pdf",
    riskReport: "Qmcpjc9M8iSNgiso7w9MRkQB9UVX4RiWkZXNU2RPREv3YK/march-risk-report-redefine-risk-center.04-02-2024.pdf",
  },
  {
    month: "February",
    year: "2024",
    treasuryReport: "QmXme5NEwQLtY6Dg3prc9mXZiMrAzc8wA9C6P5BNcTq4Vi/FEB%202024%20-%20February%2029,%202024.pdf",
    riskReport: "QmVcLbqveHp6v71yCNYadzwgKF1A8xHhdjJ49YxRkG8Ngj/FEBRUARY RISK REPORT Redefine - Risk Center.02-29-2024.pdf",
  },
  {
    month: "January",
    year: "2024",
    treasuryReport: "QmVkiXbvMzJmLas8f6CPtNcUbTjngWrNRnrYyp1XESE8eJ/Jan%2031%202024%20Treasury%20Report.pdf",
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
      <h1>
        <FormattedMessage id="treasury-reports.any-questions.header" />
      </h1>
      <p className={styles.paragraph}>
        <FormattedMessage id="treasury-reports.any-questions.content" />{" "}
        <a className={styles.anchor} href="https://t.me/kleros" target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="treasury-reports.any-questions.telegram-group" />
        </a>{" "}
        <FormattedMessage id="treasury-reports.any-questions.or-by-dm" />{" "}
        <a className={styles.anchor} href="https://x.com/JuanSamitier" target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="treasury-reports.any-questions.telegram-user" />
        </a>
        .
      </p>
    </div>
  );
};

const ReportSelection = ({ type }) => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("July");

  const availableYears = type === "treasuryReport"
    ? [...new Set(MONTHS.map((m) => m.year))].sort().reverse()
    : type === "riskReport"
      ? [...new Set(MONTHS.filter((m) => m.riskReport).map((m) => m.year))].sort().reverse()
      : [];

  const availableMonths = type === "treasuryReport"
    ? MONTHS.filter((m) => m.year === selectedYear).map((m) => m.month)
    : type === "riskReport"
      ? MONTHS
        .filter((m) => m.year === selectedYear && m.riskReport)
        .map((m) => m.month)
      : [];

  useEffect(() => {
    if (!availableMonths.includes(selectedMonth)) {
      setSelectedMonth(availableMonths[0] || "");
    }
  }, [selectedYear, availableMonths, selectedMonth]);

  const getReportLink = () => {
    const report = MONTHS.find((m) => m.month === selectedMonth && m.year === selectedYear && m[type]);
    return report ? `https://cdn.kleros.link/ipfs/${report[type]}` : "#";
  };

  return (
    <section className={styles[`${type}`]}>
      <h1 className={styles.selectHeader}>
        <FormattedMessage id={`treasury-reports.${type === "treasuryReport" ? "treasury-report" : "risk-report"}.title`} />
      </h1>
      <p>
        <FormattedMessage id={`treasury-reports.${type === "treasuryReport" ? "treasury-report" : "risk-report"}.description`} />
      </p>
      <div className={styles.labelsContainer}>
        <label htmlFor={`${type}YearSelect`}>
          <FormattedMessage id="treasury-reports.select-year-label" />
          <select id={`${type}YearSelect`} value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {availableYears.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor={`${type}MonthSelect`}>
          <FormattedMessage id="treasury-reports.select-month-label" />
          <select id={`${type}MonthSelect`} value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            {availableMonths.map((month) => (
              <option value={month} key={month}>
                {month}
              </option>
            ))}
          </select>
        </label>
      </div>

      <a className={`btn btn-primary mt-8 ${styles.button}`} href={getReportLink()} rel="noopener noreferrer" target="_blank">
        <FormattedMessage id="treasury-reports.download-label" />
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
        <ReportSelection type="treasuryReport" />
        <ReportSelection type="riskReport" />
        <AnyQuestions />
      </Container>
    </Layout>
  );
};

export default injectIntl(TreasuryReports);
