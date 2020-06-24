import React from "react";

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";

import Logo from "../assets/svgs/kleros-white.svg";

import Telegram from "src/assets/svgs/icon-telegram.svg";
import Email from "src/assets/svgs/icon-envelope.svg";

import styles from "./styles/contact.module.css";

const Contact = ({ intl, title }) => (
  <div className={styles.contact}>
    <Logo className={styles.brand} />
    <div className={styles.rest}>
      <span className="text">{title}</span>
    </div>
    <div className={styles.icons}>
      <a href="https://t.me/kleros" target="blank" rel="noopener noreferrer">
        <Telegram />
      </a>
      <a href="mailto:contract@kleros.io" target="blank" rel="noopener noreferrer">
        <Email />
      </a>
    </div>
  </div>
);

export default injectIntl(Contact);
