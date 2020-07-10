import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Reward from 'src/assets/svgs/reward.svg'
import Scales from 'src/assets/svgs/scales.svg'
import Info from 'src/assets/svgs/info.svg'

import styles from './styles/dispute-card.module.css'
import Countdown from 'react-countdown-now'
import { Card } from 'react-bootstrap'

const Completionist = () => <span>You are good to go!</span>
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } else {
    // Render a countdown
    return (
      <span>
        {days * 24 + hours}h:{minutes}m
      </span>
    )
  }
}

const DisputeCard = ({ intl, content }) => (
  <div className={styles.disputeCard}>
    <Card>
      <Card.Header className={styles.header}>
        <div>
          <Scales />
          <span>{content.court}</span>
        </div>
        <span>Case #{content.id}</span>
      </Card.Header>
      <Card.Body className={styles.body}>
        <Card.Title title={content.title} className={styles.title}>{content.title}</Card.Title>
        <Card className={styles.innerCard}>
          <Reward />
          <div>
            <span>Coherence Reward</span>
            <span>{content.reward} ETH +</span>
          </div>
        </Card>
        <div className={styles.stake}>
          Stake locked: {content.stake} PNK{' '}
          <div style={{ display: 'inline' }} title='Stakes and rewards are per vote.'>
            <Info />
          </div>
        </div>
      </Card.Body>
      <Card.Footer className={styles.footer}>
        <div className={styles.countdown}>
          <span>{content.period} deadline </span>
          <Countdown date={content.deadline} daysInHours renderer={renderer} />
        </div>
        <a href={`https://court.kleros.io/cases/${content.id}`} className='btn btn-primary' target='blank' rel='noopener noreferrer'>
          See details
        </a>
      </Card.Footer>
    </Card>
  </div>
)

export default injectIntl(DisputeCard)
