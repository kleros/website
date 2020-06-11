/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import styles from "./styles/vertical-card.module.css";

import { Button, Row, Col, Container } from "react-bootstrap";

import { injectIntl, Link } from "gatsby-plugin-intl";

const isExternal = (href) => /^\/(?!\/)/.test(href);

const VerticalCard = ({ content, intl }) => (
  <Container fluid className={styles.verticalCard}>
    <Row className="h-100 d-flex">
      <Col sm className="h-100 d-flex flex-column">
        <content.icon />
        <span>{content.title}</span>
        <span>{content.paragraph}</span>
        {isExternal(content.button.href) && (
          <Link to={content.button.href}>
            <Button variant={content.button.variant}>{content.button.text}</Button>
          </Link>
        )}
        {!isExternal(content.button.href) && (
          <a href={content.button.href} target="blank" rel="noopener noreferrer" className="mt-auto">
            <Button variant={content.button.variant}>{content.button.text}</Button>
          </a>
        )}
      </Col>
    </Row>
  </Container>
);

export default injectIntl(VerticalCard);
