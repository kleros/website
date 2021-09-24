import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'

import { Container } from 'react-bootstrap'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import UseCasesHero from 'src/components/usecases-hero.js';
import GovernanceHero from 'src/assets/svgs/governance-hero.svg';
import Sash from 'src/components/sash';
import Global from 'src/assets/svgs/icon-global.svg';
import Kleros from 'src/assets/svgs/icon-kleros.svg';
import KlerosPink from 'src/assets/svgs/kleros-pink.svg';
import Community from 'src/assets/svgs/icon-community.svg';
import Handshake from 'src/assets/svgs/icon-handshake.svg'
import Safesnap from 'src/assets/images/third-party-logos/gnosis-safesnap.png';
import GovernorExample from 'src/assets/svgs/governor-example.svg';
import UseCases from 'src/components/usecases-usecases.js';
import supremeCourt from 'src/assets/icons/supreme-court.png'
import www from 'src/assets/icons/www.png'
import finance from '../assets/icons/finance.png'
import insurance from 'src/assets/icons/insurance.png'
import plus from 'src/assets/icons/plus.png'
import daoToDao from 'src/assets/svgs/icon-dao-to-dao.svg'
import styles from './styles/governance.module.css'

import Contact from '../components/contact';

const Governance = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({id: 'governance.seo-title'})} />
    <Container className={styles.governance} fluid>
      <UseCasesHero
        titleID="governance.section-hero.h1"
        subtitleID="governance.section-hero.h2"
        BackgroundSVG={GovernanceHero}
        href="https://www.youtube.com/watch?v=HDSZsl1Zk4c"
      />

      <section className='light'>
        <Sash
          as='div'
          figures={[
            {
              icon: Global,
              text: intl.formatMessage({
                id: 'governance.sash.first.paragraph'
              }),
              title: intl.formatMessage({
                id: 'governance.sash.first.title'
              })
            },
            {
              icon: Kleros,
              text: intl.formatMessage({
                id: 'governance.sash.second.paragraph'
              }),
              title: intl.formatMessage({
                id: 'governance.sash.second.title'
              })
            },
            {
              icon: Community,
              text: intl.formatMessage({
                id: 'governance.sash.third.paragraph'
              }),
              title: intl.formatMessage({
                id: 'governance.sash.third.title'
              })
            }
          ]}
        />
      </section>

      <section className={`light ${styles.dappImage}`}>
        <GovernorExample />
      </section>

      <UseCases
        titleID='governance.section-use-case.h1'
        figures={
          [
            {
              icon: supremeCourt,
              textID: 'governance.section-use-case.cards.1'
            },
            {
              icon: www,
              textID: 'governance.section-use-case.cards.2'
            },
            {
              icon: finance,
              textID: 'governance.section-use-case.cards.3'
            },
            {
              icon: insurance,
              textID: 'governance.section-use-case.cards.4'
            },
            {
              icon: daoToDao,
              textID: 'governance.section-use-case.cards.5'
            },
            {
              icon: plus,
              textID: 'governance.section-use-case.cards.6'
            }
          ]
        }
      />

      <section className="light">
        <span className='trapezium' />
        <h1>
          <FormattedMessage id='governance.section-3.h1' />
        </h1>
        <h2>
          <FormattedMessage id='governance.section-3.h2' />
        </h2>
        <a
          href='https://kleros.gitbook.io/docs/integrations/types-of-integrations/how-to-use-reality.eth-+-kleros-as-an-oracle'
          rel="noopener noreferrer"
          target="blank"
          className='btn btn-secondary'
        >
          <FormattedMessage id='governance.section-3.button' />
        </a>
      </section>

      <section className='light'>
        <h1>
          <FormattedMessage id='governance.start-now.h1' />
        </h1>
        <Sash
          as='div'
          figures={[
            {
              icon: Handshake,
              text: intl.formatMessage({
                id: 'governance.start-now.card-1-text'
              }),
              title: intl.formatMessage({
                id: 'governance.start-now.card-1-title'
              }),
              button: {
                href: "https://kleros.gitbook.io/docs/integrations/integrations-faq",
                text: intl.formatMessage(
                  { id: 'governance.start-now.card-1-button' }
                ),
              }
            }
          ]}
        />
        <Sash
          as='div'
          style={{ paddingTop: 0 }}
          figures={[
            {
              icon: KlerosPink,
              text: intl.formatMessage({
                id: 'governance.start-now.card-2-text'
              }),
              title: intl.formatMessage({
                id: 'governance.start-now.card-2-title'
              }),
              button: {
                href: "https://governor.kleros.io/",
                text: intl.formatMessage(
                  { id: 'governance.start-now.card-2-button' }
                ),
              }
            },
            {
              icon: Safesnap,
              text: intl.formatMessage({
                id: 'governance.start-now.card-3-text'
              }),
              title: intl.formatMessage({
                id: 'governance.start-now.card-3-title'
              }),
              button: {
                href: 'https://gnosis-safe.io/app',
                text: intl.formatMessage(
                  { id: 'governance.start-now.card-3-button' }
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

export default injectIntl(Governance)
