/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import styles from "./styles/sash.module.css";

import { Col, Row, Container } from "react-bootstrap";

import { injectIntl } from "gatsby-plugin-intl";

const Sash = ({ separator, figures, intl }) => {
  return (
    <Container fluid className={styles.sash}>
      <div className="d-block d-lg-flex">
        {figures.map((figure, index) => {
          const item = (
            <Col className={styles.column} key={index}>
              <figure>
                <figure.icon className="text" />
                <figcaption>
                  <span>{figure.title}</span>
                </figcaption>
                {figure.button && (
                  <button className={`btn btn-${index % 2 == 0 ? "primary" : "secondary"} ${styles.button}`} href={figure.button.href}>
                    {figure.button.text}
                  </button>
                )}
                {figure.text && <span className={styles.text}>{figure.text}</span>}
              </figure>
            </Col>
          );
          if (index != figures.length - 1 && separator)
            return (
              <React.Fragment key={index}>
                {item}
                <div style={{ borderLeft: "1px solid #570DAE" }}></div>
              </React.Fragment>
            );
          else return item;
        })}
      </div>
    </Container>
  );
};

export default injectIntl(Sash);
