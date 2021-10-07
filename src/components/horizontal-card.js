/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import styles from './styles/horizontal-card.module.css'
import { Container } from 'react-bootstrap'
import { injectIntl } from 'gatsby-plugin-intl'

const HorizontalCard = ({ content, intl }) => (
  <Container className={styles.horizontalCard} fluid>
    {typeof content.icon === "function" && <content.icon />}
    {typeof content.icon === "string" && <img src={content.icon} alt={content.text} />}
    {!content.href && <span className={styles.text}>{content.text}</span>}
    {content.href && (
      <a href={content.href} rel='noopener noreferrer' target='blank'>
        {content.text}
      </a>
    )}
  </Container>
)

export default injectIntl(HorizontalCard)
