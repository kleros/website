import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import MediaCard from "../components/media-card";
import Contact from "../components/contact";

import Magnifier from "src/assets/svgs/icon-magnifier.svg";

import styles from "./styles/integrations.module.css";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import copyright from "src/assets/svgs/icon-copyright.svg";
import eCommerce from "src/assets/svgs/icon-e-commerce.svg";
import finance from "src/assets/svgs/icon-finance.svg";
import freelancing from "src/assets/svgs/icon-freelance.svg";
import insurance from "src/assets/svgs/icon-shield.svg";
import moderation from "src/assets/svgs/icon-moderation.svg";
import plus from "src/assets/svgs/icon-plus.svg";
import smallClaims from "src/assets/svgs/icon-gavel.svg";
import token from "src/assets/svgs/icon-token.svg";
import restaurant from "src/assets/svgs/icon-fork-n-knife.svg";
import hotel from "src/assets/svgs/icon-hotel.svg";
import spam from "src/assets/svgs/icon-spam.svg";
import Github from "src/assets/svgs/github.svg";
import bounty from "src/assets/svgs/icon-bounty.svg";
import otc from "src/assets/svgs/icon-otc.svg";
import crowdfunding from "src/assets/svgs/icon-crowdfunding.svg";
import payroll from "src/assets/svgs/icon-payroll.svg";
import www from "src/assets/svgs/icon-www.svg";

import Trade from "src/assets/svgs/icon-trade.svg";
import ECommerce from "src/assets/svgs/icon-e-commerce.svg";
import Freelancing from "src/assets/svgs/icon-freelance.svg";
import Moderation from "src/assets/svgs/icon-moderation.svg";

import ERC792 from "src/assets/svgs/illustration-erc792.svg";
import ERC1497 from "src/assets/svgs/illustration-erc1497.svg";
import Archon from "src/assets/svgs/archon.svg";

import Scales from "src/assets/svgs/icon-scales.svg";
import Epsilon from "src/assets/svgs/icon-epsilon.svg";
import Kleros from "src/assets/svgs/icon-kleros.svg";
import Photo from "src/assets/svgs/icon-photo.svg";
import Box from "src/assets/svgs/icon-box.svg";

import Deversifi from "src/assets/images/deversifi.png";
import WindingTree from "src/assets/images/winding-tree-colored.png";

import Uniswap from "src/assets/svgs/uniswap.svg";

import IDEX from "src/assets/images/idex.png";
import CryptoUnlocked from "src/assets/images/crypto-unlocked.png";
import Realitio from "src/assets/images/realitio.png";
import DutchX from "src/assets/images/dutchx.png";

import ExchangeIllustration from "src/assets/svgs/exchange.svg";
import MarketplaceIllustration from "src/assets/svgs/marketplace.svg";
import BountiesIllustration from "src/assets/svgs/bounties.svg";
import CurationIllustration from "src/assets/svgs/curation.svg";

import Ninja from "src/assets/svgs/ninja-black-text.svg";
import Transak from "src/assets/images/transak.png";

import { Badge, Container, Row, Col, InputGroup, FormControl, Accordion, Card } from "react-bootstrap";
import Categories from "src/intl/en.json";

import ThomsonReuters from "src/assets/svgs/thomson-reuters-2.svg";
import DefiPrime from "src/assets/svgs/defiprime.svg";
import CardRates from "src/assets/svgs/cr-logo.svg";
import BitcoinDotCom from "../assets/svgs/bitcoindotcom.svg";
import VentureBeat from "src/assets/svgs/venture-beat.svg";
import Token2049 from "src/assets/svgs/token2049.svg";
import Consensus from "src/assets/svgs/consensus.svg";
import EthCC from "src/assets/svgs/ethcc.svg";

import VerticalCard from "../components/vertical-card";

const CONTENT = {
  featured: [
    { icon: DefiPrime, text: "media.section-media.featured.items.defiprime", href: "/" },
    { icon: ThomsonReuters, text: "media.section-media.featured.items.thomsonreuters", href: "/" },
    { icon: CardRates, text: "media.section-media.featured.items.cardrates", href: "/" },
    { icon: Consensus, text: "media.section-media.featured.items.consensus", href: "/" },
    { icon: VentureBeat, text: "media.section-media.featured.items.venturebeat", href: "/" },
    { icon: Token2049, text: "media.section-media.featured.items.token2049", href: "/" },
    { icon: BitcoinDotCom, text: "media.section-media.featured.items.bitcoindotcom", href: "/" },
    { icon: EthCC, text: "media.section-media.featured.items.ethcc", href: "/" },
  ],
  presentations: [
    { link: "https://www.youtube.com/embed/m-NGxJfS0mw?start=12", text: "media.section-media.presentations.items.1" },
    { link: "https://www.youtube.com/embed/lPeca1h4auI?start=11", text: "media.section-media.presentations.items.2" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.presentations.items.3" },
    { link: "https://www.youtube.com/embed/PRFn3599CY0?start=23", text: "media.section-media.presentations.items.4" },
    { link: "https://www.youtube.com/embed/keQKNiyzVGs?start=316", text: "media.section-media.presentations.items.5" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.presentations.items.6" },
    { link: "https://www.youtube.com/embed/8CAL-Vyc-wc", text: "media.section-media.presentations.items.7" },
    { link: "https://www.youtube.com/embed/DVCzEuEwQGg", text: "media.section-media.presentations.items.8" },
    { link: "https://www.youtube.com/embed/YmA0E5EE3OY", text: "media.section-media.presentations.items.9" },
  ],
  promo: [
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.1" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.2" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.3" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.4" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.5" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.6" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.7" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.8" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.promo.items.9" },
  ],

  conference: [
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.1" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.2" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.3" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.4" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.5" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.6" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.7" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.8" },
    { link: "https://www.youtube.com/watch?v=CGjivHpfOl", text: "media.section-media.conference.items.9" },
  ],
};

const Integrations = ({ intl }) => {
  return (
    <Layout>
      <SEO title="Integrations" />

      <div className={styles.integrations}>
        <section className={styles.sectionHeader}>
          <h1 className="text-center mb-5">
            <FormattedMessage id="integrations.section-hero.h1" />
          </h1>
          <h2 className="text-center mb-5">
            <FormattedMessage id="integrations.section-hero.h2" />
          </h2>
          <a href="mailto:contact@kleros.io" target="blank" rel="noopener noreferrer" className="btn btn-primary">
            <FormattedMessage id="integrations.section-hero.button" />
          </a>
        </section>
        <section className="integrations" />
        <section className={styles.items}>
          <div className={`nav ${styles.nav}`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <p className="purple-light">USECASES</p>
            {Object.keys(Categories.integrations["section-main"].usecases).map((category, index) => (
              <a key={category} className={`nav-link ${!index && "active"}`} id="v-pills-${category}-tab" data-toggle="pill" href={`#v-pills-${category}`} role="tab" aria-controls={`#v-pills-${category}`} aria-selected="true">
                <FormattedMessage id={`integrations.section-main.usecases.${category}.nav-title`} />
              </a>
            ))}
            <p className="purple-light">GET STARTED</p>
            {Object.keys(Categories.integrations["section-main"].getstarted).map((category, index) => (
              <a key={category} className={`nav-link ${category == null && "active"}`} id="v-pills-${category}-tab" data-toggle="pill" href={`#v-pills-${category}`} role="tab" aria-controls={`#v-pills-${category}`} aria-selected="true">
                <FormattedMessage id={`integrations.section-main.getstarted.${category}.nav-title`} />
              </a>
            ))}
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            {Object.entries(Categories.integrations["section-main"].usecases).map((category, index) => (
              <div key={category} className={`${styles.usecases} tab-pane fade ${!index && "show active"}`} id={`v-pills-${category[0]}`}>
                <h2>
                  <FormattedMessage id={`integrations.section-main.usecases.${category[0]}.title`} />
                </h2>

                {category[0] == "exchanges" && (
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
                    <ExchangeIllustration />
                    <small>Used by</small>
                    <div className={` ${styles.usedBy} mt-5 d-flex flex-wrap justify-content-around`}>
                      <Badge as="a" href="https://uniswap.ninja/" target="blank" rel="noopener noreferrer" className={styles.badge}>
                        <Ninja />
                      </Badge>

                      <Badge as="a" href="https://app.deversifi.com/" target="blank" rel="noopener noreferrer" className={styles.badge}>
                        <span className={styles.helper}></span>
                        <img src={Deversifi} />
                      </Badge>
                      <Badge as="a" href="https://app.deversifi.com/" target="blank" rel="noopener noreferrer" className={styles.badge}>
                        <span className={styles.helper}></span>
                        <img src={DutchX} />
                      </Badge>
                    </div>
                  </>
                )}
                {category[0] == "marketplaces" && (
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
                    <MarketplaceIllustration />
                  </>
                )}
                {category[0] == "bounties" && (
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
                    <BountiesIllustration />
                  </>
                )}
                {category[0] == "curation" && (
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
                    <CurationIllustration />
                  </>
                )}
              </div>
            ))}

            {Object.entries(Categories.integrations["section-main"].getstarted).map((category, index) => (
              <div key={category} className={`${styles.getstarted} tab-pane fade`} id={`v-pills-${category[0]}`}>
                <h2>
                  <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.title`} />
                </h2>
                {category[0] == "erc792" && (
                  <div className={styles.card}>
                    <h2>
                      <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.text-1`} />
                    </h2>
                    <ERC792 />
                    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "2rem" }}>
                      <a className="btn btn-primary" href="#">
                        <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.button-primary`} />
                      </a>
                      <a className="btn btn-secondary" href="#">
                        <Github style={{ height: "1.2em", width: "auto", marginRight: "0.6em" }} />
                        <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.button-secondary`} />
                      </a>
                    </div>
                  </div>
                )}
                {category[0] == "erc1497" && (
                  <>
                    <div className={styles.card}>
                      <h2>
                        <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.text-1`} />
                      </h2>
                      <ERC1497 />
                      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "2rem" }}>
                        <a className="btn btn-primary" href="#">
                          <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.button-primary`} />
                        </a>
                        <a className="btn btn-secondary" href="#">
                          <Github style={{ height: "1.2em", width: "auto", marginRight: "0.6em" }} />
                          <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.button-secondary`} />
                        </a>
                      </div>
                    </div>
                  </>
                )}
                {category[0] == "archon" && (
                  <>
                    <div className={styles.card}>
                      <h2>
                        <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.text-1`} />
                      </h2>
                      <div style={{ background: "white", borderRadius: "36px", padding: "7% 20%" }}>
                        <Archon />
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "2rem" }}>
                        <a className="btn btn-primary" href="#">
                          <FormattedMessage id={`integrations.section-main.getstarted.${category[0]}.button-primary`} />
                        </a>
                        <a className="btn btn-secondary" href="#">
                          <Github style={{ height: "1.2em", width: "auto", marginRight: "0.6em" }} />
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
            <FormattedMessage id={`integrations.section-trusted-by`} />
          </h2>
          <div>
            <Badge as="a" href="https://app.deversifi.com/" target="blank" rel="noopener noreferrer" className={styles.badge}>
              <span className={styles.helper}></span>
              <img src={Deversifi} />
            </Badge>
            <Badge as="a" href="https://app.deversifi.com/" target="blank" rel="noopener noreferrer" className={styles.badge}>
              <span className={styles.helper}></span>
              <img src={DutchX} />
            </Badge>
            <Badge as="a" href="https://app.deversifi.com/" target="blank" rel="noopener noreferrer" className={styles.badge}>
              <span className={styles.helper}></span>
              <img src={WindingTree} />
            </Badge>
            <Badge as="a" href="https://app.deversifi.com/" target="blank" rel="noopener noreferrer" className={styles.badge}>
              <span className={styles.helper}></span>
              <img src={Realitio} />
            </Badge>
            <Badge as="a" href="https://app.deversifi.com/" target="blank" rel="noopener noreferrer" className={styles.badge}>
              <span className={styles.helper}></span>
              <img src={CryptoUnlocked} />
            </Badge>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default injectIntl(Integrations);
