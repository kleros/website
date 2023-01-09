import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sash from "../components/sash";
import OnePager from "src/assets/svgs/icon-onepager.svg";
import YellowPaper from "src/assets/svgs/icon-yellowpaper.svg";
import WhitePaper from "src/assets/svgs/icon-whitepaper.svg";
import { Container } from "react-bootstrap";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/about.module.css";

import OnePagerEN from "../assets/books-papers-flyers/onepager_en.pdf";
import OnePagerTR from "../assets/books-papers-flyers/onepager_tr.pdf";
import OnePagerFR from "../assets/books-papers-flyers/onepager_fr.pdf";
import OnePagerES from "../assets/books-papers-flyers/onepager_es.pdf";
import OnePagerKO from "../assets/books-papers-flyers/onepager_ko.pdf";
import OnePagerPT from "../assets/books-papers-flyers/onepager_pt.pdf";
import OnePagerRU from "../assets/books-papers-flyers/onepager_ru.pdf";
import OnePagerZH from "../assets/books-papers-flyers/onepager_zh.pdf";
import WhitePaperEN from "../assets/books-papers-flyers/whitepaper_en.pdf";
import WhitePaperES from "../assets/books-papers-flyers/whitepaper_es.pdf";
import YellowPaperEN from "../assets/books-papers-flyers/yellowpaper_en.pdf";
import YellowPaperZH from "../assets/books-papers-flyers/yellowpaper_zh.pdf";

const ONEPAGERS = {
  en: OnePagerEN,
  es: OnePagerES,
  fr: OnePagerFR,
  ko: OnePagerKO,
  pt: OnePagerPT,
  ru: OnePagerRU,
  tr: OnePagerTR,
  zh: OnePagerZH,
};

const WHITE_PAPERS = {
  en: WhitePaperEN,
  es: WhitePaperES,
};

const YELLOW_PAPERS = {
  en: YellowPaperEN,
  zh: YellowPaperZH,
};

const Anchor = (intl) => ((children) => (
  <a href={WHITE_PAPERS[intl.locale] || WHITE_PAPERS[intl.defaultLocale]} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
));

const About = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "about.seo-title" })} />
    <Container className={styles.about} fluid>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="about.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage
            id="about.section-hero.h2"
            values={{
              anchor: Anchor(intl)
            }}
          />
        </h2>
      </section>
      <hr />
      <section>
        <h1>
          <FormattedMessage id="about.section-2" />
        </h1>
        <div className="iframe-container">
          <iframe title="How It Works" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0" height="315" src="https://www.youtube.com/embed/IMDLJgTKDNw" width="560" />
        </div>
      </section>
      <section className="light">
        <Sash
          as="div"
          figures={[
            {
              button: {
                href: ONEPAGERS[intl.locale] || ONEPAGERS[intl.defaultLocale],
                text: intl.formatMessage({
                  id: "about.sash.first.button",
                }),
              },
              icon: OnePager,
              title: intl.formatMessage({
                id: "about.sash.first.title",
              }),
            },
            {
              button: {
                href: WHITE_PAPERS[intl.locale] || WHITE_PAPERS[intl.defaultLocale],
                text: intl.formatMessage({
                  id: "about.sash.first.button",
                }),
              },
              icon: WhitePaper,
              title: intl.formatMessage({
                id: "about.sash.second.title",
              }),
            },
            {
              button: {
                href: YELLOW_PAPERS[intl.locale] || YELLOW_PAPERS[intl.defaultLocale],
                text: intl.formatMessage({
                  id: "about.sash.first.button",
                }),
              },
              icon: YellowPaper,
              title: intl.formatMessage({
                id: "about.sash.third.title",
              }),
            },
          ]}
          separator
        />
      </section>
      <section className="masked">
        <h1>
          <FormattedMessage id="about.section-3.h1" />
        </h1>
        <h2>
          <FormattedMessage id="about.section-3.h2" />
        </h2>
      </section>
      <section>
        <h1>
          <FormattedMessage id="about.section-4.h1" />
        </h1>
        <h2>
          <FormattedMessage id="about.section-4.h2" />
        </h2>
      </section>
    </Container>
  </Layout>
);

export default injectIntl(About);
