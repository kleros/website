import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Reward from "src/assets/svgs/reward.svg";
import Scales from "src/assets/svgs/scales.svg";
import Info from "src/assets/svgs/info.svg";
import RightArrow from "src/assets/svgs/right-arrow.svg";

import styles from "./styles/position-card.module.css";
import Countdown from "react-countdown-now";
import { Card } from "react-bootstrap";

const PositionCard = ({ intl, content }) => (
  <div className={styles.positionCard}>
    <a href={content.href} rel="noopener noreferrer" target="_blank">
      <div className={styles.header}>
        <span className={styles.department}>{content.department}</span>
        <RightArrow />
      </div>
      <div className="big bold">{content.role}</div>
      <div className={styles.location}>{content.location}</div>
    </a>
  </div>
);

export default injectIntl(PositionCard);
