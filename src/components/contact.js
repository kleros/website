import React from "react";

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";

import Logo from "../assets/svgs/kleros-white.svg";

import telegram from "src/assets/icons/telegram.png";
import email from "src/assets/icons/email.png";

import styles from "./styles/contact.module.css";

const Contact = ({ intl }) => (
  <div className={styles.contact}>
    <Logo />
    <div className={styles.rest}>
      <span className="text">
        <FormattedMessage id="contact.title" />
      </span>
      <div className={styles.icons}>
        <a href="https://t.me/kleros" target="blank" rel="noopener noreferrer">
          <img src={telegram} alt="telegram icon" />
        </a>
        <a href="mailto:contract@kleros.io" target="blank" rel="noopener noreferrer">
          <img src={email} alt="email icon" />
        </a>
      </div>
    </div>
  </div>
);

export default injectIntl(Contact);
