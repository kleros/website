import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'

import UseCasesHero from 'src/components/usecases-hero.js';
import EscrowShield from 'src/assets/svgs/escrow-shield.svg';
import Sash from '../components/sash'
import Warning from 'src/assets/svgs/icon-warning.svg'
import Kleros from 'src/assets/svgs/icon-kleros.svg'
import EscrowIcon from 'src/assets/svgs/icon-escrow.svg'
import UseCases from 'src/components/usecases-usecases.js';
import Contact from '../components/contact'
import EscrowCard from 'src/assets/svgs/escrow-card.svg';
import Handshake from 'src/assets/svgs/icon-handshake.svg'
import EscrowExample from 'src/assets/svgs/escrow-example.svg'
import nfts from 'src/assets/svgs/icon-nfts.svg'
import eCommerce from 'src/assets/svgs/icon-e-commerce.svg'
import freelancing from 'src/assets/svgs/icon-freelance.svg'
import plus from 'src/assets/svgs/icon-plus.svg'
import bounty from 'src/assets/svgs/icon-bounty.svg'
import otc from 'src/assets/svgs/icon-otc.svg'
import crowdfunding from 'src/assets/svgs/icon-crowdfunding.svg'
import payroll from 'src/assets/svgs/icon-payroll.svg'
import www from 'src/assets/svgs/icon-www.svg'
import { Container } from 'react-bootstrap'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import styles from './styles/escrow.module.css'

const Escrow = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({id: 'escrow.seo-title'})}
    />
    <Container className={styles.escrow} fluid>
      <UseCasesHero
        titleID="escrow.section-hero.h1"
        subtitleID="escrow.section-hero.h2"
        BackgroundSVG={EscrowShield}
      />

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
              icon: Kleros,
              text: intl.formatMessage({
                id: 'escrow.sash.second.paragraph'
              }),
              title: intl.formatMessage({
                id: 'escrow.sash.second.title'
              })
            },
            {
              icon: EscrowIcon,
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

      <section className={`light ${styles.dappImage}`}>
        <EscrowExample />
      </section>

      <UseCases
        titleID="escrow.section-use-case.h1"
        figures={[
          {
            icon: freelancing,
            textID: 'escrow.section-use-case.cards.1'
          },
          {
            icon: www,
            textID: 'escrow.section-use-case.cards.2'
          },
          {
            icon: bounty,
            textID: 'escrow.section-use-case.cards.3'
          },
          {
            icon: eCommerce,
            textID: 'escrow.section-use-case.cards.4'
          },
          {
            icon: payroll,
            textID: 'escrow.section-use-case.cards.5'
          },
          {
            icon: crowdfunding,
            textID: 'escrow.section-use-case.cards.6'
          },
          {
            icon: otc,
            textID: 'escrow.section-use-case.cards.7'
          },
          {
            icon: nfts,
            textID: 'escrow.section-use-case.cards.8'
          },
          {
            icon: plus,
            textID: 'escrow.section-use-case.cards.9'
          ,}
        ]}
      />

      <section className="light">
        <span className='trapezium' />
        <h1>
          <FormattedMessage id='escrow.section-3.h1' />
        </h1>
        <h2>
          <FormattedMessage id='escrow.section-3.h2' />
        </h2>
        <div className={styles.buttonWrapper}>
          <a
            href='https://kleros.gitbook.io/docs/products/escrow'
            rel="noopener noreferrer"
            target="blank"
            className='btn btn-secondary'
          >
            <FormattedMessage id='escrow.section-3.button-1' />
          </a>
          <a
            href={
              "https://kleros.gitbook.io/docs/products/escrow/" +
              "new-in-progress-kleros-escrow-tutorial"
            }
            rel="noopener noreferrer"
            target="blank"
            className='btn btn-secondary'
          >
            <FormattedMessage id='escrow.section-3.button-2' />
          </a>
        </div>
      </section>

      <section className='light'>
        <h1>
          <FormattedMessage id='escrow.start-now.h1' />
        </h1>
        <Sash
          as='div'
          figures={[
            {
              icon: EscrowCard,
              text: intl.formatMessage({
                id: 'escrow.start-now.card-1-text'
              }),
              title: intl.formatMessage({
                id: 'escrow.start-now.card-1-title'
              }),
              button: {
                href: "https://escrow.kleros.io/",
                text: intl.formatMessage(
                  { id: 'escrow.start-now.card-1-button' }
                ),
              }
            },
            {
              icon: Handshake,
              text: intl.formatMessage({
                id: 'escrow.start-now.card-2-text'
              }),
              title: intl.formatMessage({
                id: 'escrow.start-now.card-2-title'
              }),
              button: {
                href: 'mailto:contact@kleros.io',
                text: intl.formatMessage(
                  { id: 'escrow.start-now.card-2-button' }
                ),
              }
            }
          ]}
        />
      </section>

      <section className="light">
        <Contact
          content={{
            title: intl.formatMessage({
              id: "contact.title",
            }),
          }}
        />
      </section>

    </Container>
  </Layout>
)

export default injectIntl(Escrow)
