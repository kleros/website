import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Logo from "../assets/svgs/kleros-white.svg";
import Telegram from "src/assets/svgs/icon-telegram.svg";
import Email from "src/assets/svgs/icon-envelope.svg";
import styles from "./styles/contact-2.module.css";

const Contact = ({ intl, content }) => (
  <div className={styles.contact2} style={{ backgroundColor: `${content.bgColor}` }}>
    {!content.icon && <Logo className={styles.brand} />}
    {content.icon && <content.icon className={styles.brand} />}
    <div className={styles.rest}>
      <span className="text">{content.title}</span>
    </div>
    <div className={styles.icons}>
      <a className="btn btn-primary mt-0" href={content.callToActionHref} rel="noopener noreferrer" target="blank">
        {content.callToActionText}
      </a>
    </div>
  </div>
);

export default injectIntl(Contact);
