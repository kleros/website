import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact";
import styles from "./styles/integrations.module.css";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import Github from "src/assets/svgs/github.svg";
import Trade from "src/assets/svgs/icon-trade.svg";
import ECommerce from "src/assets/svgs/icon-e-commerce.svg";
import Freelancing from "src/assets/svgs/icon-freelance.svg";
import Moderation from "src/assets/svgs/icon-moderation.svg";

import ERC792EN from "src/assets/svgs/illustration-erc792-en.svg";
import ERC792ES from "src/assets/svgs/illustration-erc792-es.svg";

import ERC1497EN from "src/assets/svgs/illustration-erc1497-en.svg";
import ERC1497ES from "src/assets/svgs/illustration-erc1497-es.svg";

import Archon from "src/assets/svgs/archon.svg";
import Deversifi from "src/assets/images/third-party-logos/deversifi.png";
import DutchX from "src/assets/images/third-party-logos/dutchx.png";
import Gnosis from "src/assets/svgs/gnosis-mono.svg";
import API3 from "src/assets/images/third-party-logos/api3_mono.png";
import Unslashed from "src/assets/images/third-party-logos/unslashed.png";
import Polkamarkets from "src/assets/images/third-party-logos/polkamarkets-mono.png";
import DeversifiMono from "src/assets/images/third-party-logos/deversifi-mono.png";
import OmenMono from "src/assets/images/third-party-logos/omen-mono.png";
import Omen from "src/assets/svgs/omen_logo.svg";
import WindingTreeMono from "src/assets/images/third-party-logos/winding-mono.png";
import CryptoUnlockedMono from "src/assets/images/third-party-logos/crypto-unlocked-mono.png";
import RealitioMono from "src/assets/images/third-party-logos/realitio-mono.png";
import DutchXMono from "src/assets/images/third-party-logos/dutch-mono.png";
import Uniswap from "src/assets/svgs/uniswap.svg";
import UniswapWhite from "src/assets/svgs/uniswap_logo.svg";

import Union from "src/assets/svgs/union.svg";
import DemocracyEarth from "src/assets/images/third-party-logos/democracy_earth_logo.png";

import ExchangeIllustrationEN from "src/assets/svgs/exchange-en.svg";
import ExchangeIllustrationES from "src/assets/svgs/exchange-es.svg";

import MarketplaceIllustrationEN from "src/assets/svgs/marketplace-en.svg";
import MarketplaceIllustrationES from "src/assets/svgs/marketplace-es.svg";

import BountiesIllustrationEN from "src/assets/svgs/bounties-en.svg";
import BountiesIllustrationES from "src/assets/svgs/bounties-es.svg";

import CurationIllustrationEN from "src/assets/svgs/curation-en.svg";
import CurationIllustrationES from "src/assets/svgs/curation-es.svg";

import Ninja from "src/assets/svgs/ninja-black-text.svg";
import { Badge } from "react-bootstrap";
import Categories from "src/intl/en.json";

const EXCHANGEILLUSTRATIONS = {
  en: <ExchangeIllustrationEN />,
  es: <ExchangeIllustrationES />,
};

const ERC792S = {
  en: <ERC792EN />,
  es: <ERC792ES />,
};

const ERC1497S = {
  en: <ERC1497EN />,
  es: <ERC1497ES />,
};

const BOUNTIES = {
  en: <BountiesIllustrationEN />,
  es: <BountiesIllustrationES />,
};

const CURATIONS = {
  en: <CurationIllustrationEN />,
  es: <CurationIllustrationES />,
};

const MARKETPLACES = {
  en: <MarketplaceIllustrationEN />,
  es: <MarketplaceIllustrationES />,
};

const Integrations = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "integrations.seo-title" })} />

    <div className={styles.integrations}>
      <section className={styles.sectionHeader}>
        <h1 className="text-center mb-5">
          <FormattedMessage id="integrations.section-hero.h1" />
        </h1>
        <h2 className="text-center mb-5">
          <FormattedMessage id="integrations.section-hero.h2" />
        </h2>
        <a className="btn btn-primary" href="mailto:integrations@kleros.io" rel="noopener noreferrer" target="blank">
          <FormattedMessage id="integrations.section-hero.button" />
        </a>
      </section>
      <section className={`${styles.trustedBy}`}>
        <h2 className="text-center">
          <FormattedMessage id="integrations.section-trusted-by" />
        </h2>
        <div>
          <Badge as="a" className={styles.badge} href="https://gateway.ipfs.io/ipfs/QmbB3wA5R2PR8s87pJRSUCcBHRxAtfFtkSWmVWEcHsaFeV" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <Omen />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://deversifi.com/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <img src={DeversifiMono} alt="Deversifi" />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://uniswap.org/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <UniswapWhite />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://www.unn.finance/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <Union />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://democracy.earth/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <img src={DemocracyEarth} alt="DemocracyEarth" />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://gnosis.io/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <Gnosis />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://api3.org/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <img src={API3} alt="API3" />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://unslashed.finance/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <img src={Unslashed} alt="Unslashed" />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://www.polkamarkets.com/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <img src={Polkamarkets} alt="Polkamarkets" />
          </Badge>
        </div>
      </section>
      <section className={styles.items}>
        <div aria-orientation="vertical" className={`nav ${styles.nav}`} id="v-pills-tab" role="tablist">
          <p className="purple-light">
            {" "}
            <FormattedMessage id="integrations.section-main.usecases-title" />
          </p>
          {Object.keys(Categories.integrations["section-main"].usecases).map((category, index) => (
            <a aria-controls={`#v-pills-${category}`} aria-selected="true" className={`nav-link ${!index && "active"}`} data-toggle="pill" href={`#v-pills-${category}`} id={`v-pills-${category}-tab`} key={category} role="tab">
              <FormattedMessage id={`integrations.section-main.usecases.${category}.nav-title`} />
            </a>
          ))}
          <p className="purple-light">
            <FormattedMessage id="integrations.section-main.getstarted-title" />
          </p>
          {Object.keys(Categories.integrations["section-main"].getstarted).map((category, index) => (
            <a aria-controls={`#v-pills-${category}`} aria-selected="true" className={`nav-link ${category == null && "active"}`} data-toggle="pill" href={`#v-pills-${category}`} id={`v-pills-${category}-tab`} key={category} role="tab">
              <FormattedMessage id={`integrations.section-main.getstarted.${category}.nav-title`} />
            </a>
          ))}
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          {Object.entries(Categories.integrations["section-main"].usecases).map((category, index) => (
            <div className={`${styles.usecases} tab-pane fade ${!index && "show active"}`} id={`v-pills-${category[0]}`} key={category}>
              <h2>
                <FormattedMessage id={`integrations.section-main.usecases.${category[0]}.title`} />
              </h2>

              {category[0] === "exchanges" && (
                <>
                  <div className={styles.card}>
                    <Trade />
                    <h2>
                      <FormattedMessage id={`integrations.section-main.usecases.${category[0]}.text-1`} />
                    </h2>
                    <h3>
                      <FormattedMessage id={`integrations.section-main.usecases.${category[0]}.text-2`} />
                    </h3>
                  </div>
                  {EXCHANGEILLUSTRATIONS[intl.locale]}
                  <small>
                    <FormattedMessage id={`integrations.section-main.usecases.${category[0]}.used-by`} />
                  </small>
                  <div className={` ${styles.usedBy} mt-5 d-flex flex-wrap justify-content-around`}>
                    <Badge as="a" className={styles.badge} href="https://tokenlists.org/token-list?url=t2crtokens.eth" rel="noopener noreferrer" target="blank">
                      <Uniswap />
                    </Badge>

                    <Badge as="a" className={styles.badge} href="https://app.deversifi.com/" rel="noopener noreferrer" target="blank">
                      <span className={styles.helper}></span>
                      <img src={Deversifi} alt="Deversifi" />
                    </Badge>
                  </div>
                </>
              )}
              {category[0] === "marketplaces" && (
                <>
                  <div className={styles.card}>
                    <ECommerce />
                    <h2>
                      <FormattedMessage id={`integrations.section-main.usecases.${category[0]}.text-1`} />
                    </h2>
                    <h3>
                      <FormattedMessage id={`integrations.section-main.usecases.${category[0]}.text-2`} />
                    </h3>
                  </div>
                  {MARKETPLACES[intl.locale]}
                </>
              )}
              {category[0] === "bounties" && (
                <>
                  <div className={styles.card}>
                    <Freelancing />
                    <h2>
                      <FormattedMessage id={`integrations.section-main.usecases.${category[0]}.text-1`} />
                    </h2>
                    <h3>
                      <FormattedMessage id={`integrations.section-main.usecases.${category[0]}.text-2`} />
                    </h3>
                  </div>
                  {BOUNTIES[intl.locale]}
                </>
              )}
              {category[0] === "curation" && (
                <>
                  <div className={styles.card}>
                    <Moderation />
                    <h2>
                      <FormattedMessage id={`integrations.section-main.usecases.${category[0]}.text-1`} />
                    </h2>
                    <h3>
                      <FormattedMessage id={`integrations.section-main.usecases.${category[0]}.text-2`} />
                    </h3>
                  </div>
                  {CURATIONS[intl.locale]}
                </>
              )}
            </div>
          ))}

          {Object.entries(Categories.integrations["section-main"].getstarted).map((category, index) => (
            <div className={`${styles.getstarted} tab-pane fade`} id={`v-pills-${category[0]}`} key={category}>
              <h2>
                <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.title`} />
              </h2>
              {category[0] === "erc792" && (
                <div className={styles.card}>
                  <h2>
                    <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.text-1`} />
                  </h2>
                  {ERC792S[intl.locale]}
                  <div style={{ display: "flex", flexWrap: "wrap", marginTop: "2rem" }}>
                    <a target="blank" rel="noopener noreferrer" className="btn btn-primary" href="https://developer.kleros.io/en/latest/introduction.html">
                      <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.button-primary`} />
                    </a>
                    <a target="blank" rel="noopener noreferrer" className="btn btn-secondary" href="https://github.com/kleros/erc-792">
                      <Github style={{ height: "1.2em", marginRight: "0.6em", width: "auto" }} />
                      <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.button-secondary`} />
                    </a>
                  </div>
                </div>
              )}
              {category[0] === "erc1497" && (
                <>
                  <div className={styles.card}>
                    <h2>
                      <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.text-1`} />
                    </h2>
                    {ERC1497S[intl.locale]}
                    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "2rem" }}>
                      <a target="blank" rel="noopener noreferrer" className="btn btn-primary" href="https://developer.kleros.io/en/latest/erc-1497.html">
                        <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.button-primary`} />
                      </a>
                      <a target="blank" rel="noopener noreferrer" className="btn btn-secondary" href="https://github.com/kleros/erc-792">
                        <Github style={{ height: "1.2em", marginRight: "0.6em", width: "auto" }} />
                        <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.button-secondary`} />
                      </a>
                    </div>
                  </div>
                </>
              )}
              {category[0] === "archon" && (
                <>
                  <div className={styles.card}>
                    <h2>
                      <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.text-1`} />
                    </h2>
                    <div style={{ background: "white", borderRadius: "36px", padding: "7% 20%" }}>
                      <Archon />
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "2rem" }}>
                      <a target="blank" rel="noopener noreferrer" className="btn btn-primary" href="https://archon.readthedocs.io/en/latest/index.html">
                        <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.button-primary`} />
                      </a>
                      <a target="blank" rel="noopener noreferrer" className="btn btn-secondary" href="https://github.com/kleros/archon">
                        <Github style={{ height: "1.2em", marginRight: "0.6em", width: "auto" }} />
                        <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.button-secondary`} />
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      <hr className="mt-5" />

      <section>
        <Contact
          content={{
            title: intl.formatMessage({
              id: "integrations.section-contact",
            }),
          }}
        />
      </section>
    </div>
  </Layout>
);

export default injectIntl(Integrations);
