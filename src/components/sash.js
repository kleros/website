import React from "react";
import styles from "./styles/sash.module.css";
import { Col, Container } from "react-bootstrap";
import { injectIntl } from "gatsby-plugin-intl";

const Sash = ({ separator, figures, intl }) => (
  <Container className={styles.sash} fluid>
    <div className="d-block d-lg-flex">
      {figures.map((figure, index) => {
        const item = (
          <Col className={styles.column} key={index}>
            <figure>
              {typeof figure.icon === "function" && <figure.icon />}
              {typeof figure.icon === "string" && <img src={figure.icon} alt={figure.title} />}
              <figcaption>
                <span>{figure.title}</span>
              </figcaption>
              {figure.button && (
                <a className={`btn btn-${index % 2 === 0 ? "primary" : "secondary"} ${styles.button}`} href={figure.button.href} rel="noopener noreferrer" target="blank">
                  {figure.button.text}
                </a>
              )}
              {figure.text && <span className={styles.text}>{figure.text}</span>}
            </figure>
          </Col>
        );

        if (index !== figures.length - 1 && separator) {
          return (
            <React.Fragment key={index}>
              {item}
              <div style={{ borderLeft: "1px solid #570DAE" }} />
            </React.Fragment>
          );
        } else return item;
      })}
    </div>
  </Container>
);

export default injectIntl(Sash);
