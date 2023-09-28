import React from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/trusted-by.module.css";

const TrustedBy = ({ partners, className="light" }) => (
  <section className={`${className} pt-0 ${styles.partners}`}>
    <h2>
      <FormattedMessage id="about.section-5" />
    </h2>
    {
      partners.map((partner) => (
        <a href={partner.href} rel="noopener noreferrer" target="blank" className={partner.mobile ? "" : styles.no_mobile}>
          {typeof partner.icon === "function" && <partner.icon />}
          {typeof partner.icon === "string" && <img src={partner.icon} alt={partner.name} />}
        </a>
      ))
    }
  </section>
);

export default injectIntl(TrustedBy);
