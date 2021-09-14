import React from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import OmenSVG from "src/assets/svgs/third-party-logos/omen/omen.svg";
import Deversifi from "src/assets/images/third-party-logos/deversifi.png";
import Union from "src/assets/svgs/third-party-logos/union/logo.svg";
import DemocracyEarth from "src/assets/images/third-party-logos/democracy/vertical.png";
import Unslashed from "src/assets/svgs/third-party-logos/unslashed/dark.svg";
import Polkamarkets from "src/assets/svgs/third-party-logos/polkamarkets/dark.svg";
import Gnosis from "src/assets/svgs/gnosis-logo.svg";
import API3 from "src/assets/images/third-party-logos/api3/dark.png";
import Uniswap from "src/assets/svgs/third-party-logos/uniswap/Uniswap_Lockup_Large_Black-1.svg";
import Hats from "src/assets/svgs/third-party-logos/hats/hats_text.svg";
import styles from "./styles/trusted-by.module.css";

// <h2>
//   <FormattedMessage id="about.section-5" />
// </h2>

const TrustedBy = () => (
  <section className={`light pt-0 ${styles.partners}`}>
    <h2>
      <FormattedMessage id="about.section-5" />
    </h2>
    <a href="https://omen.eth.link/" rel="noopener noreferrer" target="blank">
      <OmenSVG />
    </a>
    <a href="https://www.deversifi.com/" rel="noopener noreferrer" target="blank">
      <img src={Deversifi} alt="Deversifi" />
    </a>

    <a href="https://uniswap.org/" rel="noopener noreferrer" target="blank">
      <Uniswap />
    </a>

    <a href="https://www.unn.finance/" rel="noopener noreferrer" target="blank">
      <Union />
    </a>

    <a href="https://democracy.earth/" rel="noopener noreferrer" target="blank">
      <img src={DemocracyEarth} alt="DemocracyEarth" style={{ maxHeight: "240px" }} />
    </a>
    <a href="https://gnosis.io/" rel="noopener noreferrer" target="blank">
      <Gnosis />
    </a>
    <a href="https://api3.org/" rel="noopener noreferrer" target="blank">
      <img src={API3} alt="API3" />
    </a>
    <a href="https://unslashed.finance/" rel="noopener noreferrer" target="blank">
      <Unslashed />
    </a>
    <a href="https://www.polkamarkets.com/" rel="noopener noreferrer" target="blank">
      <Polkamarkets />
    </a>
    <a href="https://hats.finance/" rel="noopener noreferrer" target="blank">
      <Hats />
    </a>
  </section>
);

export default injectIntl(TrustedBy);
