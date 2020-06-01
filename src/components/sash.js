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
      <Row className="d-block d-lg-flex">
        {figures.map((figure, index) => {
          const item = (
            <Col>
              <figure>
                <figure.icon className="text" />
                <figcaption>
                  <span>{figure.title}</span>
                  {figure.button && (
                    <button className={`btn btn-${index % 2 == 0 ? "primary" : "secondary"}`} href={figure.button.href}>
                      {figure.button.text}
                    </button>
                  )}
                  {figure.text && <span>{figure.text}</span>}
                </figcaption>
              </figure>
            </Col>
          );
          if (index != figures.length - 1 && separator)
            return (
              <>
                {item}
                <div style={{ borderLeft: "1px solid #570DAE" }}></div>
              </>
            );
          else return item;
        })}
      </Row>
    </Container>
  );
};

export default injectIntl(Sash);
