import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Sash from '../components/sash'
import HorizontalCard from '../components/horizontal-card'
import Contact from '../components/contact'
import EscrowTwoScreen from 'src/assets/svgs/escrow-twoscreens.svg'
import EscrowHero from 'src/assets/svgs/escrow-hero.svg'
import Warning from 'src/assets/svgs/icon-warning.svg'
import EscrowIcon from 'src/assets/svgs/icon-escrow.svg'
import Kleros from 'src/assets/svgs/icon-kleros.svg'
import copyright from 'src/assets/svgs/icon-copyright.svg'
import eCommerce from 'src/assets/svgs/icon-e-commerce.svg'
import freelancing from 'src/assets/svgs/icon-freelance.svg'
import plus from 'src/assets/svgs/icon-plus.svg'
import bounty from 'src/assets/svgs/icon-bounty.svg'
import otc from 'src/assets/svgs/icon-otc.svg'
import crowdfunding from 'src/assets/svgs/icon-crowdfunding.svg'
import payroll from 'src/assets/svgs/icon-payroll.svg'
import www from 'src/assets/svgs/icon-www.svg'
import { Container } from 'react-bootstrap'
import { FormattedMessage, Link, injectIntl } from 'gatsby-plugin-intl'
import styles from './styles/escrow.module.css'

const Escrow = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({id: 'escrow.seo-title'})} />
    <Container className={styles.escrow} fluid>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id='escrow.section-hero.h1' />
        </h1>
        <h2>
          <FormattedMessage id='escrow.section-hero.h2' />
        </h2>

        <Container className={styles.buttonWrapper}>
          <a className='btn btn-primary' href='https://escrow.kleros.io' rel='noopener noreferrer' target='blank'>
            <FormattedMessage id='escrow.section-hero.button-primary' />
          </a>
        </Container>
        <EscrowHero />
      </section>
      <section className='light'>
        <Sash
          as='div'
          figures={[
            {
              icon: Warning,
              text: intl.formatMessage({
                id: 'escrow.sash.first.paragraph'
              }),
              title: intl.formatMessage({
                id: 'escrow.sash.first.title'
              })
            },
            {
              icon: EscrowIcon,
              text: intl.formatMessage({
                id: 'escrow.sash.second.paragraph'
              }),
              title: intl.formatMessage({
                id: 'escrow.sash.second.title'
              })
            },
            {
              icon: Kleros,
              text: intl.formatMessage({
                id: 'escrow.sash.third.paragraph'
              }),
              title: intl.formatMessage({
                id: 'escrow.sash.third.title'
              })
            }
          ]}
        />
      </section>

      <section className={styles.usecases}>
        <h1>{intl.formatMessage({ id: 'escrow.section-use-case.h1' })}</h1>
        <div className={styles.cards}>
          <HorizontalCard
            content={{
              icon: freelancing,
              text: intl.formatMessage({ id: 'escrow.section-use-case.cards.1' })
            }}
          />
          <HorizontalCard
            content={{
              icon: www,
              text: intl.formatMessage({ id: 'escrow.section-use-case.cards.2' })
            }}
          />{' '}
          <HorizontalCard
            content={{
              icon: bounty,
              text: intl.formatMessage({ id: 'escrow.section-use-case.cards.3' })
            }}
          />{' '}
          <HorizontalCard
            content={{
              icon: eCommerce,
              text: intl.formatMessage({ id: 'escrow.section-use-case.cards.4' })
            }}
          />{' '}
          <HorizontalCard
            content={{
              icon: payroll,
              text: intl.formatMessage({ id: 'escrow.section-use-case.cards.5' })
            }}
          />{' '}
          <HorizontalCard
            content={{
              icon: crowdfunding,
              text: intl.formatMessage({ id: 'escrow.section-use-case.cards.6' })
            }}
          />{' '}
          <HorizontalCard
            content={{
              icon: otc,
              text: intl.formatMessage({ id: 'escrow.section-use-case.cards.7' })
            }}
          />{' '}
          <HorizontalCard
            content={{
              icon: copyright,
              text: intl.formatMessage({ id: 'escrow.section-use-case.cards.8' })
            }}
          />{' '}
          <HorizontalCard
            content={{
              icon: plus,
              text: intl.formatMessage({ id: 'escrow.section-use-case.cards.9' })
            }}
          />
        </div>
      </section>

      <section className='masked'>
        <span className='trapezium' />
        <h1>
          <FormattedMessage id='escrow.section-3.h1' />
        </h1>
        <h2>
          <FormattedMessage id='escrow.section-3.h2' />
        </h2>
        <a href='https://escrow.kleros.io' className='btn btn-secondary'>
          <FormattedMessage id='escrow.section-3.button' />
        </a>
      </section>
      <section>
        <h1>
          <FormattedMessage id='escrow.section-4.h1' />
        </h1>
        <h2>
          <FormattedMessage id='escrow.section-4.h2' />
        </h2>
        <Link to='/integrations' className='btn btn-primary'>
          <FormattedMessage id='escrow.section-4.button' />
        </Link>
      </section>
      <div />
      <section className='nopadding'>
        <EscrowTwoScreen />
      </section>
      <hr />
      <section>
        <Contact
          content={{
            title: intl.formatMessage({
              id: 'contact.title'
            })
          }}
        />
      </section>
    </Container>
  </Layout>
)

export default injectIntl(Escrow)
