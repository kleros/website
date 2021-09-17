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
import RealityModule from "src/assets/images/reality-module.png";
import TrustedBy from 'src/components/trusted-by';
import OmenSVG from "src/assets/svgs/third-party-logos/omen/omen.svg";
import Deversifi from "src/assets/images/third-party-logos/deversifi.png";
import Union from "src/assets/svgs/third-party-logos/union/logo.svg";
import DemocracyEarth from "src/assets/images/third-party-logos/democracy/vertical.png";
import Unslashed from "src/assets/svgs/third-party-logos/unslashed/dark.svg";
import Polkamarkets from "src/assets/svgs/third-party-logos/polkamarkets/dark.svg";
import Gnosis from "src/assets/svgs/gnosis-logo.svg";
import API3 from "src/assets/images/third-party-logos/api3/dark.png";
import Uniswap from "src/assets/svgs/third-party-logos/uniswap/Uniswap_Lockup_Large_Black-1.svg";
import Hats from "src/assets/svgs/third-party-logos/hats/hats_text.svg";
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
        href="https://governor.kleros.io"
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

      <TrustedBy
        partners={[
          {
            href: "https://omen.eth.link/",
            icon: OmenSVG,
            name: "Omen"
          },
          {
            href: "https://www.deversifi.com/",
            icon: Deversifi,
            name: "Deversifi"
          },
          {
            href: "https://uniswap.org/",
            icon: Uniswap,
            name: "Uniswap"
          },
          {
            href: "https://www.unn.finance/",
            icon: Union,
            name: "Union"
          },
          {
            href: "https://democracy.earth/",
            icon: DemocracyEarth,
            name: "DemocracyEarth"
          },
          {
            href: "https://gnosis.io/",
            icon: Gnosis,
            name: "Gnosis"
          },
          {
            href: "https://api3.org/",
            icon: API3,
            name: "API3"
          },
          {
            href: "https://unslashed.finance/",
            icon: Unslashed,
            name: "Unslashed"
          },
          {
            href: "https://www.polkamarkets.com/",
            icon: Polkamarkets,
            name: "Polkamarkets"
          },
          {
            href: "https://hats.finance/",
            icon: Hats,
            name: "Hats"
          }
        ]}
      />

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
          href='https://kleros.gitbook.io/docs/products/escrow'
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
                href: "https://governance.kleros.io/",
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
              icon: RealityModule,
              text: intl.formatMessage({
                id: 'governance.start-now.card-3-text'
              }),
              title: intl.formatMessage({
                id: 'governance.start-now.card-3-title'
              }),
              button: {
                href: 'https://kleros.gitbook.io/docs/integrations/integration-tools/escrow-sdk',
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
