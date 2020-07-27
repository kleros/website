/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import styles from './styles/media-card.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { injectIntl } from 'gatsby-plugin-intl'

const MediaCard = ({ content, intl }) => (
  <Container className={styles.mediaCard} fluid>
    <Row className='h-100 d-flex'>
      <Col className='h-100 d-flex flex-column' sm>
        <div className={styles.logoWrapper}>
          <img src={content.icon} alt={content.text} />
        </div>
        <hr />
        <div className={styles.main}>
          <span className='pb-5'>{content.text}</span>
          <a href={content.href} rel='noopener noreferrer' target='blank'>
            Read More →
          </a>
        </div>
      </Col>
    </Row>
  </Container>
)

export default injectIntl(MediaCard)
