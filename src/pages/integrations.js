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
import Deversifi from "src/assets/images/deversifi.png";
import Omen from "src/assets/images/omen.png";
import WindingTree from "src/assets/images/winding-tree-colored.png";
import CryptoUnlocked from "src/assets/images/crypto-unlocked.png";
import Realitio from "src/assets/images/realitio.png";
import DutchX from "src/assets/images/dutchx.png";
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
        <a className="btn btn-primary" href="mailto:contact@kleros.io" rel="noopener noreferrer" target="blank">
          <FormattedMessage id="integrations.section-hero.button" />
        </a>
      </section>
      <section className="integrations" />
      <section className={styles.items}>
        <div aria-orientation="vertical" className={`nav ${styles.nav}`} id="v-pills-tab" role="tablist">
          <p className="purple-light">
            {" "}
            <FormattedMessage id="integrations.section-main.usecases-title" />
          </p>
          {Object.keys(Categories.integrations["section-main"].usecases).map((category, index) => (
            <a aria-controls={`#v-pills-${category}`} aria-selected="true" className={`nav-link ${!index && "active"}`} data-toggle="pill" href={`#v-pills-${category}`} id="v-pills-${category}-tab" key={category} role="tab">
              <FormattedMessage id={`integrations.section-main.usecases.${category}.nav-title`} />
            </a>
          ))}
          <p className="purple-light">
            <FormattedMessage id="integrations.section-main.getstarted-title" />
          </p>
          {Object.keys(Categories.integrations["section-main"].getstarted).map((category, index) => (
            <a aria-controls={`#v-pills-${category}`} aria-selected="true" className={`nav-link ${category == null && "active"}`} data-toggle="pill" href={`#v-pills-${category}`} id="v-pills-${category}-tab" key={category} role="tab">
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
                    <Badge as="a" className={styles.badge} href="https://uniswap.ninja/" rel="noopener noreferrer" target="blank">
                      <Ninja />
                    </Badge>

                    <Badge as="a" className={styles.badge} href="https://app.deversifi.com/" rel="noopener noreferrer" target="blank">
                      <span className={styles.helper}></span>
                      <img src={Deversifi} alt="Deversifi" />
                    </Badge>
                    <Badge as="a" className={styles.badge} href="https://app.deversifi.com/" rel="noopener noreferrer" target="blank">
                      <span className={styles.helper}></span>
                      <img src={DutchX} alt="DutchX" />
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
      <section className={`${styles.trustedBy} light`}>
        <h2 className="text-center purple">
          <FormattedMessage id="integrations.section-trusted-by" />
        </h2>
        <div>
          <Badge as="a" className={styles.badge} href="https://app.deversifi.com/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <img src={Deversifi} alt="Deversifi" />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://gateway.ipfs.io/ipfs/QmbB3wA5R2PR8s87pJRSUCcBHRxAtfFtkSWmVWEcHsaFeV/#/0x592af74865799e1ed509afef002a6eca26e1caa2" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <img src={Omen} alt="Omen" />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://fairdex.net/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <img src={DutchX} alt="DutchX" />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://windingtree.com/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <img src={WindingTree} alt="WindingTree" />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://realit.io/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <img src={Realitio} alt="Realitio" />
          </Badge>
          <Badge as="a" className={styles.badge} href="https://cryptounlocked.wetrust.io/" rel="noopener noreferrer" target="blank">
            <span className={styles.helper}></span>
            <img src={CryptoUnlocked} alt="CryptoUnlocked" />
          </Badge>
        </div>
      </section>
    </div>
  </Layout>
);

export default injectIntl(Integrations);
