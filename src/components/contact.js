import React from "react";

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";

import Logo from "../assets/svgs/kleros-white.svg";

import Telegram from "src/assets/svgs/icon-telegram.svg";
import Email from "src/assets/svgs/icon-envelope.svg";

import styles from "./styles/contact.module.css";

const Contact = ({ intl, content }) => (
  <div className={styles.contact}>
    {!content.icon && <Logo className={styles.brand} />}
    {content.icon && <content.icon className={styles.brand} />}

    <div className={styles.rest}>
      <span className="text">{content.title}</span>
    </div>
    <div className={styles.icons}>
      <a href="https://t.me/kleros" target="blank" rel="noopener noreferrer">
        <Telegram />
      </a>
      <a href="mailto:contact@kleros.io" target="blank" rel="noopener noreferrer">
        <Email />
      </a>
    </div>
  </div>
);

export default injectIntl(Contact);
