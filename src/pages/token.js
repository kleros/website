import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Sash from "../components/sash";

import Deversifi from "src/assets/images/deversifi.png";
import Uniswap from "src/assets/svgs/uniswap.svg";

import IDEX from "src/assets/images/idex.png";

import Bitfinex from "src/assets/images/bitfinex.png";
import Kyber from "src/assets/images/kyber.png";

import Ninja from "src/assets/svgs/ninja-black-text.svg";
import Transak from "src/assets/images/transak.png";

import Kleros from "src/assets/svgs/icon-kleros.svg";
import Attack from "src/assets/svgs/icon-thug.svg";
import Governance from "src/assets/svgs/icon-gavel.svg";

import styles from "./styles/token.module.css";

import PNK from "src/assets/svgs/pnk-token.svg";

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import { Badge, Container, Row, Col } from "react-bootstrap";

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Token" />
    <div className={styles.token}>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="token.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="token.section-hero.h2" />
        </h2>
        <PNK style={{ width: "10rem", marginTop: "2rem" }} />
      </section>
      <section className="light">
        <h1 className="purple">
          <FormattedMessage id="token.sash.title" />
        </h1>
        <Sash
          as="div"
          separator={true}
          figures={[
            {
              title: intl.formatMessage({
                id: "token.sash.first.title",
              }),
              text: intl.formatMessage({
                id: "token.sash.first.paragraph",
              }),

              icon: Kleros,
            },
            {
              title: intl.formatMessage({
                id: "token.sash.second.title",
              }),
              text: intl.formatMessage({
                id: "token.sash.second.paragraph",
              }),

              icon: Attack,
            },
            {
              title: intl.formatMessage({
                id: "token.sash.third.title",
              }),
              text: intl.formatMessage({
                id: "token.sash.third.paragraph",
              }),

              icon: Governance,
            },
          ]}
        />
        <h2 className="purple bold">
          <FormattedMessage id="token.sash.learnMore.title" />
        </h2>
        <button className="btn btn-secondary">
          <FormattedMessage id="token.sash.learnMore.button" />
        </button>
        <hr />
        <h1 className="purple">
          <FormattedMessage id="token.section-buy" />
        </h1>

        <Container className="mt-5 d-flex flex-wrap justify-content-around">
          <Badge as="a" href="https://www.bitfinex.com/t/PNKETH" target="blank" rel="noopener noreferrer" className={styles.badge}>
            <span class={styles.helper}></span>
            <img src={Bitfinex} />
          </Badge>
          <Badge as="a" href="https://uniswap.ninja/" target="blank" rel="noopener noreferrer" className={styles.badge}>
            <Ninja />
          </Badge>
          <Badge as="a" href="https://uniswap.exchange/" target="blank" rel="noopener noreferrer" className={styles.badge}>
            <Uniswap />
          </Badge>

          <Badge as="a" href="https://idex.market/eth/pnk" target="blank" rel="noopener noreferrer" className={styles.badge}>
            <span class={styles.helper}></span>
            <img src={IDEX} />
          </Badge>
          <Badge as="a" href="https://kyberswap.com/swap" target="blank" rel="noopener noreferrer" className={styles.badge}>
            <span class={styles.helper}></span>
            <img src={Kyber} />
          </Badge>
          <Badge as="a" href="https://app.deversifi.com/" target="blank" rel="noopener noreferrer" className={styles.badge}>
            <span class={styles.helper}></span>
            <img src={Deversifi} />
          </Badge>
          <Badge as="a" href="https://transak.com/" target="blank" rel="noopener noreferrer" className={styles.badge}>
            <span class={styles.helper}></span>
            <img src={Transak} />
          </Badge>
        </Container>
      </section>
      <section className={styles.otc}>
        <div>
          <div className={styles.otcLogo}>
            <PNK />
          </div>
          <div className={styles.otcText}>
            <span className="bigger bold">If you are interested in acquiring PNK token OTC, get in&nbsp;touch</span>
            <p className="big bold pink">Note that in order to ensure fairness in token distribution, tokens are sold to buyers at prices reflected by the&nbsp;market.</p>
          </div>
          <div className={styles.otcButton}>
            <a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSfQwhyI_IqerENalCO9GODaGQHeILproSkWkPcbv0hsSgXg4Q/viewform">
              <FormattedMessage id="token.section-otc.button" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default injectIntl(IndexPage);
