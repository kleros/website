/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import styles from "./styles/sash.module.css";

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

import { Col, Row, Container } from "react-bootstrap";

import { injectIntl } from "gatsby-plugin-intl";

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
};

const Sash = ({ separator, figures, intl }) => {
  return (
    <Container fluid className={styles.sash}>
      <Row className="d-block d-lg-flex">
        {figures.map((figure, index) => {
          const item = (
            <Col>
              <figure>
                <img src={ICONS[figure.icon]} alt={figure.icon} />
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
