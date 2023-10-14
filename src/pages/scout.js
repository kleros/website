import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { Container } from "react-bootstrap";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import Sash from "src/components/sash";
import ScoutBackground from "src/assets/svgs/scout-background.svg";
import MetamaskLogo from "src/assets/svgs/metamask-logo.svg";
import ScoutHexagonalImage from "src/assets/images/scout-hexagonal-image.png";
import SecuredByKleros from "src/assets/svgs/secured-by-kleros.svg";
import AuditedByVeridise from "src/assets/svgs/audited-by-veridise.svg";
import CurateLogo from "src/assets/svgs/curate.svg";
import StarRewards from "src/assets/svgs/star-rewards.svg";
import Lightbulb from "src/assets/svgs/lightbulb.svg";
import RightArrow from "src/assets/svgs/right-arrow.svg";
import MetamaskPopupImage from "src/assets/images/metamask-scout.png";
import styles from "./styles/scout.module.css";
import Contact from "../components/contact";

const installSnap = async () => {
  try {
    const result = await window.ethereum.request({
      method: "wallet_requestSnaps",
      params: {
        "npm:@kleros/scout-snap": { version: "1.1.0" },
      },
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const Header = () => (
  <div className={styles.header}>
    <div className={styles.headerBackground}>
      <ScoutBackground />
    </div>
    <div className={styles.headerContent}>
      <div className={styles.leftSide}>
        <p className={styles.headerIntro}>
          <FormattedMessage id="scout.section-hero.intro" />
        </p>
        <p className={styles.headerTitle}>
          <FormattedMessage id="scout.section-hero.title" />
        </p>
        <p className={styles.headerDescription}>
          <FormattedMessage id="scout.section-hero.description" />
        </p>
        <div className={styles.buttonsContainer}>
          <a onClick={installSnap} className="btn btn-primary">
            <div className={styles.blueButtonContent}>
              <MetamaskLogo />
              <FormattedMessage id="scout.section-hero.button-blue" />
            </div>
          </a>
          <a className="btn btn-secondary" href="https://snaps.metamask.io/snap/npm/kleros/scout-snap/" rel="noopener noreferrer" target="blank">
            <div className={styles.purpleButtonContent}>
              <FormattedMessage id="scout.section-hero.button-purple" />
            </div>
          </a>
        </div>
        <div className={styles.headerCreditsContainer}>
          <SecuredByKleros className={styles.headerSecuredByKlerosSvg} />
          <a href="https://f8t2x8b2.rocketcdn.me/wp-content/uploads/2023/06/VAR-Kleros-Scout.pdf" rel="noopener noreferrer" target="blank">
            <AuditedByVeridise className={styles.headerAuditedByVeridiseSvg} />
          </a>
        </div>
      </div>
      <div className={styles.rightSide}>
        <img src={ScoutHexagonalImage} />
      </div>
    </div>
    <SuggestionCarousel />
  </div>
);

const SuggestionCarousel = () => (
  <a href="https://t.me/kleros" rel="noopener noreferrer" target="blank">
    <div className={styles.carouselContainer}>
      <div className={styles.lightbulbAndTitleContainer}>
        <Lightbulb className={styles.lightbulb} />
        <div className={styles.carouselTitle}>
          <FormattedMessage id="scout.carousel.title" />
        </div>
      </div>

      <div className={styles.carouselDescription}>
        <FormattedMessage id="scout.carousel.description" />
      </div>
      <div className={styles.rightArrowContainer}>
        <RightArrow className={styles.rightArrowIcon} />
      </div>
    </div>
  </a>
);

const CommunityCurationSection = () => (
  <section className={styles.communityCurationSection}>
    <h1>
      <FormattedMessage id="scout.community-curation.title" />
    </h1>
    <div className={styles.communityCurationDescription}>
      <h2>
        <FormattedMessage id="scout.community-curation.description" />
      </h2>
    </div>
    <div className={styles.curateLogoContainer}>
      <CurateLogo />
    </div>
  </section>
);

const MetamaskPopup = () => (
  <div className={styles.metamaskPopup}>
    <img src={MetamaskPopupImage} />
  </div>
);

const CurateLists = () => (
  <section className="light">
    <h1 className={styles.sectionHeader}>
      <FormattedMessage id="scout.community-curation.curate-lists-header" />
    </h1>
    <Sash
      as="div"
      className={styles.sashContainer}
      figures={[
        {
          text: <FormattedMessage id="scout.community-curation.registries.tokens.description" />,
          title: <FormattedMessage id="scout.community-curation.registries.tokens.title" />,
          button: {
            href: "https://curate.kleros.io/tcr/100/0xeE1502e29795Ef6C2D60F8D7120596abE3baD990",
            text: <FormattedMessage id="scout.community-curation.button-text" />,
          },
        },
        {
          text: <FormattedMessage id="scout.community-curation.registries.address-tags.description" />,
          title: <FormattedMessage id="scout.community-curation.registries.address-tags.title" />,
          button: {
            href: "https://curate.kleros.io/tcr/100/0x66260C69d03837016d88c9877e61e08Ef74C59F2",
            text: <FormattedMessage id="scout.community-curation.button-text" />,
          },
        },
        {
          text: <FormattedMessage id="scout.community-curation.registries.contract-domain-name.description" />,
          title: <FormattedMessage id="scout.community-curation.registries.contract-domain-name.title" />,
          button: {
            href: "https://curate.kleros.io/tcr/100/0x957A53A994860BE4750810131d9c876b2f52d6E1",
            text: <FormattedMessage id="scout.community-curation.button-text" />,
          },
        },
      ]}
    />
  </section>
);

const AnchorLinks = () => (
  <div className={styles.anchorsContainer}>
    <a href="https://docs.kleros.io/products/curate/kleros-scout-metamask-snaps/faqs" rel="noopener noreferrer" target="blank">
      FAQ
    </a>
    <a href="https://docs.kleros.io/products/curate/kleros-scout-metamask-snaps/knowledge-base" rel="noopener noreferrer" target="blank">
      Knowledge Base
    </a>
    <a href="https://t.me/KlerosCurate" rel="noopener noreferrer" target="blank">
      Support
    </a>
  </div>
);

const Rewards = () => (
  <section className={styles.rewardsContainer}>
    <StarRewards className={styles.starRewardsLogo} />
    <h1 className={styles.sectionHeader}>
      <FormattedMessage id="scout.community-curation.receive-rewards.title" />
    </h1>
    <h2>
      <FormattedMessage id="scout.community-curation.receive-rewards.description" />
    </h2>
    <a href="https://blog.kleros.io/how-to-submitting-to-the-security-metadata-registries-on-kleros-curate/" rel="noopener noreferrer" target="blank" className="btn btn-secondary">
      <FormattedMessage id="scout.community-curation.receive-rewards.button-text" />
    </a>
  </section>
);

const ContactUs = () => (
  <section className="light">
    <Contact
      content={{
        title: <FormattedMessage id="contact.title" />,
      }}
    />
  </section>
);

const Scout = ({ intl }) => {
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "scout.seo-title" })} />
      <Container className={styles.scout} fluid>
        <Header />
        <CommunityCurationSection />
        <MetamaskPopup />
        <CurateLists />
        <AnchorLinks />
        <Rewards />
        <ContactUs />
      </Container>
    </Layout>
  );
};

export default injectIntl(Scout);
