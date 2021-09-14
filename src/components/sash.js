import React from "react";
import styles from "./styles/sash.module.css";
import { Col, Container } from "react-bootstrap";
import { injectIntl } from "gatsby-plugin-intl";

const Sash = ({ separator, figures, intl }) => (
  <div className={`d-block d-xl-flex justify-content-center ${styles.sash}`}>
    {figures.map((figure, index) => {
      const item = (
        <Col className={`px-4 pb-6 pt-6 mx-auto mx-xl-2 my-4 my-xl-0 ${styles.column}`} key={index}>
          <figure>
            {typeof figure.icon === "function" && <figure.icon />}
            {typeof figure.icon === "string" && <img src={figure.icon} alt={figure.title} />}
            <figcaption>
              <span>{figure.title}</span>
            </figcaption>
            {figure.text && <span className={`mt-5 ${styles.text}`}>{figure.text}</span>}
            {figure.button && (
              <a className={`btn btn-${index % 2 === 0 ? "primary" : "secondary"} mt-8 ${styles.button}`} href={figure.button.href} rel="noopener noreferrer" target="blank">
                {figure.button.text}
              </a>
            )}
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
);

export default injectIntl(Sash);
