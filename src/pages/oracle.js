import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'

import { Container } from 'react-bootstrap'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import UseCasesHero from 'src/components/usecases-hero.js';
import OracleHero from 'src/assets/svgs/oracle-hero.svg';
import Sash from 'src/components/sash';
import HexIconList from 'src/assets/svgs/hex-icon-list.svg';
import HexIconTrendUp from 'src/assets/svgs/hex-icon-trend-up.svg';
import HexIconKleros from 'src/assets/svgs/icon-kleros.svg';
import OracleExample from 'src/assets/svgs/oracle-example.svg';
import HexIconHandshake from 'src/assets/svgs/icon-handshake.svg'
import IconOracle from "src/assets/svgs/icon-oracle.svg";
import TrustedBy from 'src/components/trusted-by';
import OmenSVG from "src/assets/svgs/third-party-logos/omen/omen.svg";
import Polkamarkets from "src/assets/svgs/third-party-logos/polkamarkets/dark.svg";
import Gnosis from "src/assets/images/third-party-logos/gnosis-safe-logo.png";
import UseCases from 'src/components/usecases-usecases.js';
import CircleIconTrendUp from 'src/assets/svgs/circle-icon-trend-up.svg';
import CircleIconDices from 'src/assets/svgs/circle-icon-dices.svg';
import CircleIconGaming from 'src/assets/svgs/circle-icon-gaming.svg';
import CircleIconFutarchy from 'src/assets/svgs/circle-icon-futarchy.svg';
import CircleIconInsurance from 'src/assets/icons/insurance.png'
import CircleIconPlus from 'src/assets/icons/plus.png'
import styles from './styles/oracle.module.css'

import Contact from '../components/contact';

const Oracle = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({id: 'oracle.seo-title'})} />
    <Container className={styles.oracle} fluid>
      <UseCasesHero
        titleID="oracle.section-hero.h1"
        subtitleID="oracle.section-hero.h2"
        BackgroundSVG={OracleHero}
      />

      <section className='grey'>
        <Sash
          as='div'
          figures={[
            {
              icon: HexIconList,
              text: intl.formatMessage({
                id: 'oracle.sash.first.paragraph'
              }),
              title: intl.formatMessage({
                id: 'oracle.sash.first.title'
              })
            },
            {
              icon: HexIconTrendUp,
              text: intl.formatMessage({
                id: 'oracle.sash.second.paragraph'
              }),
              title: intl.formatMessage({
                id: 'oracle.sash.second.title'
              })
            },
            {
              icon: HexIconKleros,
              text: intl.formatMessage({
                id: 'oracle.sash.third.paragraph'
              }),
              title: intl.formatMessage({
                id: 'oracle.sash.third.title'
              })
            }
          ]}
        />
      </section>

      <TrustedBy
        className="grey"
        partners={[
          {
            href: "https://omen.eth.link/",
            icon: OmenSVG,
            name: "Omen"
          },
          {
            href: "https://www.polkamarkets.com/",
            icon: Polkamarkets,
            name: "Polkamarkets"
          },
          {
            href: "https://gnosis.io/",
            icon: Gnosis,
            name: "Gnosis"
          }
        ]}
      />

      <section className={`grey ${styles.dappImage}`}>
        <OracleExample />
      </section>

      <UseCases
        className="grey"
        titleID='oracle.section-use-case.h1'
        figures={
          [
            {
              icon: CircleIconTrendUp,
              textID: 'oracle.section-use-case.cards.1'
            },
            {
              icon: CircleIconDices,
              textID: 'oracle.section-use-case.cards.2'
            },
            {
              icon: CircleIconGaming,
              textID: 'oracle.section-use-case.cards.3'
            },
            {
              icon: CircleIconFutarchy,
              textID: 'oracle.section-use-case.cards.4'
            },
            {
              icon: CircleIconInsurance,
              textID: 'oracle.section-use-case.cards.5'
            },
            {
              icon: CircleIconPlus,
              textID: 'oracle.section-use-case.cards.6'
            }
          ]
        }
      />

      <section className="grey">
        <h1>
          <FormattedMessage id='oracle.section-3.h1' />
        </h1>
        <h2>
          <FormattedMessage id='oracle.section-3.h2' />
        </h2>
        <a
          href='https://kleros.gitbook.io/docs/products/oracle'
          rel="noopener noreferrer"
          target="blank"
          className='btn btn-secondary'
        >
          <FormattedMessage id='oracle.section-3.button' />
        </a>
      </section>
      <span className="trapezium" />

      <section className='light'>
        <h1>
          <FormattedMessage id='oracle.start-now.h1' />
        </h1>
        <Sash
          as='div'
          figures={[
            {
              icon: IconOracle,
              text: intl.formatMessage({
                id: 'oracle.start-now.card-1-text'
              }),
              title: intl.formatMessage({
                id: 'oracle.start-now.card-1-title'
              }),
              button: {
                href: "https://reality.eth.link/app/",
                text: intl.formatMessage(
                  { id: 'oracle.start-now.card-1-button' }
                ),
              }
            },
            {
              icon: HexIconHandshake,
              text: intl.formatMessage({
                id: 'oracle.start-now.card-2-text'
              }),
              title: intl.formatMessage({
                id: 'oracle.start-now.card-2-title'
              }),
              button: {
                href: 'mailto:contact@kleros.io',
                text: intl.formatMessage(
                  { id: 'oracle.start-now.card-2-button' }
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

export default injectIntl(Oracle)
