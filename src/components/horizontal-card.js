/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import styles from "./styles/horizontal-card.module.css";

import copyright from "src/assets/icons/copyright.png";
import eCommerce from "src/assets/icons/e-commerce.png";
import finance from "src/assets/icons/finance.png";
import freelancing from "src/assets/icons/freelancing.png";
import insurance from "src/assets/icons/insurance.png";
import moderation from "src/assets/icons/moderation.png";
import plus from "src/assets/icons/plus.png";
import smallClaims from "src/assets/icons/small-claims.png";
import token from "src/assets/icons/token.png";
import restaurant from "src/assets/icons/restaurant.png";
import hotel from "src/assets/icons/hotel.png";
import spam from "src/assets/icons/spam.png";
import social from "src/assets/icons/social.png";
import bounty from "src/assets/icons/bounty.png";
import otc from "src/assets/icons/otc.png";
import crowdfunding from "src/assets/icons/crowdfunding.png";
import payroll from "src/assets/icons/payroll.png";
import www from "src/assets/icons/www.png";

import { Container } from "react-bootstrap";

import { injectIntl } from "gatsby-plugin-intl";

const ICONS = {
  copyright,
  eCommerce,
  finance,
  freelancing,
  insurance,
  moderation,
  plus,
  smallClaims,
  token,
  restaurant,
  hotel,
  spam,
  social,
  bounty,
  crowdfunding,
  otc,
  payroll,
  www,
};

const HorizontalCard = ({ content, intl }) => (
  <Container fluid className={styles.horizontalCard}>
    <img src={ICONS[content.icon]} alt={content.icon} />
    <span>{content.text}</span>
  </Container>
);

export default injectIntl(HorizontalCard);
