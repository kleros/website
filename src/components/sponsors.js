import React from "react";
import ThomsonReuters from "src/assets/images/third-party-logos/hosted-thomson-colored.png";
import EU from "src/assets/svgs/eu-winner-dark.svg";
import BPI from "src/assets/svgs/third-party-logos/bpi/logo-footer.svg";
import BlockchainGov from "src/assets/svgs/third-party-logos/blockchain-gov/blockchain-gov.svg";

import styles from "./styles/sponsors.module.css";

export default ({ extraClass, variant }) => (
  <section className={`light  ${extraClass} ${styles.sponsors}`}>
    <div className={`mb-6 ${styles.euContainer}`}>
      <a href="https://ec.europa.eu/research/eic/index.cfm?pg=prizes_blockchains" target="blank" rel="noopener noreferrer">
        <EU className={styles.eu} />
      </a>
    </div>
    <div className={`mb-6 ${styles.blockchainGovContainer}`}>
      <a href="https://blockchaingov.eu/" target="blank" rel="noopener noreferrer">
        <BlockchainGov className={styles.blockchain} />
      </a>
    </div>
    <div className={styles.reutersContainer}>
      <a href="https://innovation.thomsonreuters.com/en/labs/incubator.html" target="blank" rel="noopener noreferrer">
        <img src={ThomsonReuters} className={styles.reuters} />
      </a>
    </div>
    <div className={styles.bpiContainer}>
      <a href="https://blog.kleros.io/french-bank-grants-subsidy-to-kleros/" target="blank" rel="noopener noreferrer">
        <BPI />
      </a>
    </div>
  </section>
);
