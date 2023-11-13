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
  </div>
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
          secondButton: {
            href: "https://docs.google.com/forms/d/e/1FAIpQLSchZ5RBd1Y8RNpGCUGY9tZyQZSBgnN_4B9oLfKeKuer9oxGnA/viewform",
            text: <FormattedMessage id="scout.community-curation.second-button-text" />,
          },
        },
        {
          text: <FormattedMessage id="scout.community-curation.registries.address-tags.description" />,
          title: <FormattedMessage id="scout.community-curation.registries.address-tags.title" />,
          button: {
            href: "https://curate.kleros.io/tcr/100/0x66260C69d03837016d88c9877e61e08Ef74C59F2",
            text: <FormattedMessage id="scout.community-curation.button-text" />,
          },
          secondButton: {
            href: "https://docs.google.com/forms/d/e/1FAIpQLSdTwlrcbbPOkSCMKuUj42d_koSAEkWjMLz5hhTc5lB6aGCO9w/viewform",
            text: <FormattedMessage id="scout.community-curation.second-button-text" />,
          },
        },
        {
          text: <FormattedMessage id="scout.community-curation.registries.contract-domain-name.description" />,
          title: <FormattedMessage id="scout.community-curation.registries.contract-domain-name.title" />,
          button: {
            href: "https://curate.kleros.io/tcr/100/0x957A53A994860BE4750810131d9c876b2f52d6E1",
            text: <FormattedMessage id="scout.community-curation.button-text" />,
          },
          secondButton: {
            href: "https://docs.google.com/forms/d/e/1FAIpQLSeO32UBCpIYu3XIKGM-hLqWu51XcsSG1QRxtuycZPyS9mMtVg/viewform",
            text: <FormattedMessage id="scout.community-curation.second-button-text" />,
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
