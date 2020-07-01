/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import styles from "./styles/media-card.module.css";

import escrow from "src/assets/icons/escrow.png";
import epsilon from "src/assets/icons/epsilon.png";
import kleros from "src/assets/icons/kleros.png";
import list from "src/assets/icons/list.png";
import onepager from "src/assets/icons/onepager.png";
import yellowpaper from "src/assets/icons/yellowpaper.png";
import whitepaper from "src/assets/icons/whitepaper.png";
import t2cr from "src/assets/icons/t2cr.png";
import scales from "src/assets/icons/scales.png";
import risks from "src/assets/icons/risks.png";
import gavel from "src/assets/icons/gavel.png";
import handshake from "src/assets/icons/handshake.png";

import { Button, Row, Col, Container } from "react-bootstrap";

import { injectIntl, Link } from "gatsby-plugin-intl";

const ICONS = {
  escrow,
  epsilon,
  kleros,
  list,
  onepager,
  yellowpaper,
  whitepaper,
  t2cr,
  scales,
  risks,
  gavel,
  handshake,
};

const MediaCard = ({ content, intl }) => (
  <Container fluid className={styles.mediaCard}>
    <Row className="h-100 d-flex">
      <Col sm className="h-100 d-flex flex-column">
        <div className={styles.logoWrapper}>
          <img src={content.icon} />
        </div>
        <hr />
        <div className={styles.main}>
          <span className="pb-5">{content.text}</span>
          <a href={content.href} target="blank" rel="noopener noreferrer">
            Read More →
          </a>
        </div>
      </Col>
    </Row>
  </Container>
);

export default injectIntl(MediaCard);
