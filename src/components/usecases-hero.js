import React from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import styles from "./styles/usecases-hero.module.css";
import Play from "src/assets/svgs/play.svg";

const UseCasesHero = ({ titleID, subtitleID, BackgroundSVG, href }) => (
  <section
    className={styles.usecasesHero}
    style={
      href
        ? {}
        : { paddingBottom: "max(24px, min(64px, 4.4vw))", marginBottom: 0 }
    }
  >
    <h1>
      <FormattedMessage id={titleID} />
    </h1>
    {subtitleID &&
      <h2 className={styles.subtitle}>
        <FormattedMessage id={subtitleID} />
      </h2>
    }
    <BackgroundSVG />
    {href && (
      <a
        className={styles.playButton}
        href={href}
        rel="noopener noreferrer"
        target="blank"
      >
        <Play style={{ width: "100%", height: "100%" }} />
      </a>
    )}
  </section>
);

export default injectIntl(UseCasesHero);
