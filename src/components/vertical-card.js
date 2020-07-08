/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import styles from "./styles/vertical-card.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, injectIntl } from "gatsby-plugin-intl";

const isExternal = (href) => /^\/(?!\/)/.test(href);

const VerticalCard = ({ content, intl }) => (
  <Container className={styles.verticalCard} fluid>
    <Row className="h-100 d-flex">
      <Col className="h-100 d-flex flex-column" sm>
        {content.icon && (
          <span className={styles.icon}>
            <content.icon />
          </span>
        )}
        <span className={styles.title}>{content.title}</span>
        {content.paragraphHref && (
          <a className={styles.paragraph} href={content.paragraphHref}>
            {content.paragraph}
          </a>
        )}
        {!content.paragraphHref && <span className={styles.paragraph}>{content.paragraph}</span>}
        {content.listTitle && (
          <>
            <span className={styles.listTitle}>{content.listTitle}</span>
            <br />
          </>
        )}

        {content.listTitle && (
          <ul>
            {content.list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
        <div className="mt-auto pb-3">
          {content.button && isExternal(content.button.href) && (
            <Link className={`btn btn-${content.button.variant} ${content.button.disabled && "disabled"}`} to={content.button.href}>
              {content.button.text}
            </Link>
          )}
          {content.button && !isExternal(content.button.href) && (
            <a className={`btn btn-${content.button.variant} ${content.button.disabled && "disabled"}`} href={content.button.href} rel="noopener noreferrer" target="blank">
              {content.button.text}
            </a>
          )}
        </div>
      </Col>
    </Row>
  </Container>
);

export default injectIntl(VerticalCard);
