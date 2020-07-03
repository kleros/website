/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import styles from "./styles/horizontal-card.module.css";

import { Container } from "react-bootstrap";

import { injectIntl } from "gatsby-plugin-intl";

const HorizontalCard = ({ content, intl }) => (
  <Container fluid className={styles.horizontalCard}>
    {content.icon && <content.icon />}
    {!content.href && <span>{content.text}</span>}
    {content.href && (
      <a href={content.href} target="blank" rel="noopener noreferrer">
        {content.text}
      </a>
    )}
  </Container>
);

export default injectIntl(HorizontalCard);
