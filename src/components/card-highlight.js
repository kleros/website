import React from "react";
import styles from "./styles/card-highlight.module.css";
import { Col, Container } from "react-bootstrap";
import { injectIntl } from "gatsby-plugin-intl";

const CardHightlight = ({ intl, content }) => (
  <div className={`d-flex ${styles.cardHighlight}`}>
    <content.icon />
    <content.titleTag>{content.title}</content.titleTag>
    <p>{content.description}</p>
  </div>
);

export default injectIntl(CardHightlight);
