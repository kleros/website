import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sash from "../components/sash";
import Deversifi from "src/assets/images/third-party-logos/deversifi.png";
import Uniswap from "src/assets/svgs/uniswap.svg";
import Sushiswap from "src/assets/images/third-party-logos/sushiswap.png";
import OneInch from "src/assets/svgs/OneInch.svg";
import Paraswap from "src/assets/images/third-party-logos/paraswap.jpg";
import Balancer from "src/assets/svgs/balancer.svg";
import Bitfinex from "src/assets/images/third-party-logos/bitfinex.png";
import Kyber from "src/assets/images/third-party-logos/kyber.png";
import Loopring from "src/assets/svgs/loopring.svg";
import Transak from "src/assets/images/third-party-logos/transak.png";
import GateIO from "src/assets/svgs/gateio.svg";
import OKEX from "src/assets/svgs/okex.svg";
import Kleros from "src/assets/svgs/icon-kleros.svg";
import Attack from "src/assets/svgs/icon-thug.svg";
import Governance from "src/assets/svgs/icon-gavel.svg";
import styles from "./styles/token.module.css";
import PNK from "src/assets/svgs/pnk-token.svg";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import { Badge, Container } from "react-bootstrap";

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "token.seo-title" })} />
    <div className={styles.token}>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="token.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="token.section-hero.h2" />
        </h2>
        <PNK style={{ marginTop: "2rem", width: "10rem" }} />
      </section>
      <section className="light">
        <h1 className="purple">
          <FormattedMessage id="token.sash.title" />
        </h1>
        <Sash
          as="div"
          figures={[
            {
              icon: Kleros,
              text: intl.formatMessage({
                id: "token.sash.first.paragraph",
              }),

              title: intl.formatMessage({
                id: "token.sash.first.title",
              }),
            },
            {
              icon: Attack,
              text: intl.formatMessage({
                id: "token.sash.second.paragraph",
              }),

              title: intl.formatMessage({
                id: "token.sash.second.title",
              }),
            },
            {
              icon: Governance,
              text: intl.formatMessage({
                id: "token.sash.third.paragraph",
              }),

              title: intl.formatMessage({
                id: "token.sash.third.title",
              }),
            },
          ]}
        />
        <h2 className="purple bold">
          <FormattedMessage id="token.sash.learnMore.title" />
        </h2>
        <a className="btn btn-secondary" href="https://medium.com/kleros/why-kleros-needs-a-native-token-5c6c6e39cdfe">
          <FormattedMessage id="token.sash.learnMore.button" />
        </a>
        <hr />
        <h1 className="purple">
          <FormattedMessage id="token.section-buy" />
        </h1>

        <Container className="mt-5 d-flex flex-wrap justify-content-around">
          <Badge as="a" className={styles.badge} href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d" rel="noopener noreferrer" target="blank">
            <Uniswap />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://www.bitfinex.com/t/PNKETH" rel="noopener noreferrer" target="blank">
            <span class={styles.helper} />
            <img src={Bitfinex} alt={"Bitfinex"} />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d" rel="noopener noreferrer" target="blank">
            <img src={Sushiswap} alt={"Sushiswap"} />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://balancer.exchange/" rel="noopener noreferrer" target="blank">
            <Balancer />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://kyberswap.com/swap" rel="noopener noreferrer" target="blank">
            <span class={styles.helper} />
            <img src={Kyber} alt={"Kyber"} />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://app.deversifi.com/" rel="noopener noreferrer" target="blank">
            <span class={styles.helper} />
            <img src={Deversifi} alt={"Deversifi"} />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://loopring.org/" rel="noopener noreferrer" target="blank">
            <Loopring />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://paraswap.io/" rel="noopener noreferrer" target="blank">
            <span class={styles.helper} />
            <img src={Paraswap} alt={"Paraswap"} />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://1inch.exchange/" rel="noopener noreferrer" target="blank">
            <OneInch />
          </Badge>

          <Badge as="a" className={styles.badge} href="https://www.gate.io/trade/PNK_USDT" rel="noopener noreferrer" target="blank">
            <GateIO />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://www.okex.com/markets/spot-info/pnk-usdt" rel="noopener noreferrer" target="blank">
            <OKEX />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://transak.com/" rel="noopener noreferrer" target="blank">
            <span class={styles.helper} />
            <img src={Transak} alt={"Transak"} />
          </Badge>
        </Container>
      </section>
      <section className={styles.otc}>
        <div>
          <div className={styles.otcLogo}>
            <PNK />
          </div>
          <div className={styles.otcText}>
            <span className="bigger bold">
              <FormattedMessage id="token.section-otc.title" />
            </span>
            <p className="big bold pink">
              <FormattedMessage id="token.section-otc.subtitle" />
            </p>
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
