import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'

import UseCasesHero from 'src/components/usecases-hero.js';
import CurationHero from 'src/assets/svgs/curation-hero.svg';
import Sash from '../components/sash'
import HexIconList from 'src/assets/svgs/hex-icon-list.svg';
import HexIconCurate from 'src/assets/svgs/hex-icon-curate.svg';
import HexIconBalance from 'src/assets/svgs/hex-icon-balance.svg';
import HexIconHandshake from '../assets/svgs/hex-icon-handshake.svg';
import IconLogoCurate from '../assets/svgs/icon-logo-curate.svg';
import IconCurate from '../assets/svgs/icon-curate.svg';
import CurationExample from 'src/assets/svgs/curation-example.svg';
import UseCases from 'src/components/usecases-usecases.js';
import CircleIconToken from '../assets/icons/token.png';
import CircleIconSpeech from '../assets/icons/moderation.png';
import CircleIconCharity from '../assets/svgs/circle-icon-charity.svg';
import CircleIconRestaurant from '../assets/icons/restaurant.png';
import CircleIconInsurance from '../assets/icons/insurance.png';
import CircleIconECommerce from '../assets/icons/e-commerce.png';
import CircleIconMegaphone from '../assets/icons/social.png';
import CircleIconAntiSpam from '../assets/icons/spam.png';
import CircleIconPlus from '../assets/icons/plus.png';
import { Container } from 'react-bootstrap'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import styles from './styles/curation.module.css'
import TrustedBy from '../components/trusted-by';
import Ledger from "../assets/images/third-party-logos/ledger-horizontal.png";
import Etherscan from "../assets/images/third-party-logos/etherscan-horizontal.png";
import OmenSVG from "src/assets/svgs/third-party-logos/omen/omen.svg";
import Uniswap from "src/assets/svgs/third-party-logos/uniswap/Uniswap_Lockup_Large_Black-1.svg";
import Sushi from "src/assets/images/third-party-logos/sushi-horizontal.png";
import Zerion from "../assets/images/third-party-logos/zerion/png/blue-logo-and-text-transparent.png";
import Paraswap from "src/assets/images/third-party-logos/paraswap-horizontal.png";
import Contact from '../components/contact';

const Curation = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({id: 'curation.seo-title'})} />
    <Container className={styles.curation} fluid>
      <UseCasesHero
        titleID="curation.section-hero.h1"
        subtitleID="curation.section-hero.h2"
        BackgroundSVG={CurationHero}
      />

      <section className='grey'>
        <Sash
          as='div'
          figures={[
            {
              icon: HexIconList,
              text: intl.formatMessage({
                id: 'curation.sash.first.paragraph'
              }),
              title: intl.formatMessage({
                id: 'curation.sash.first.title'
              })
            },
            {
              icon: HexIconCurate,
              text: intl.formatMessage({
                id: 'curation.sash.second.paragraph'
              }),
              title: intl.formatMessage({
                id: 'curation.sash.second.title'
              })
            },
            {
              icon: HexIconBalance,
              text: intl.formatMessage({
                id: 'curation.sash.third.paragraph'
              }),
              title: intl.formatMessage({
                id: 'curation.sash.third.title'
              })
            }
          ]}
        />
      </section>

      <TrustedBy
        className="grey"
        partners={[
          {
            href: "https://etherscan.io",
            icon: Etherscan,
            name: "Etherscan",
            mobile: true,
          },
          {
            href: "https://ledger.com",
            icon: Ledger,
            name: "Ledger",
            mobile: true,
          },
          {
            href: "https://omen.eth.link/",
            icon: OmenSVG,
            name: "Omen"
          },
          {
            href: "https://uniswap.org/",
            icon: Uniswap,
            name: "Uniswap",
            mobile: true,
          },
          {
            href: "https://sushi.com/",
            icon: Sushi,
            name: "Sushi",
            mobile: true,
          },
          {
            href: "https://zerion.io/",
            icon: Zerion,
            name: "Zerion"
          },
          {
            href: "https://www.paraswap.io/",
            icon: Paraswap,
            name: "Paraswap",
            mobile: true,
          }
          
        ]}
      />

      <section className={`grey ${styles.dappImage}`}>
        <CurationExample />
      </section>

      <UseCases
        className="grey"
        titleID="curation.section-use-case.h1"
        figures={[
          {
            icon: CircleIconToken,
            textID: 'curation.section-use-case.cards.1'
          },
          {
            icon: CircleIconSpeech,
            textID: 'curation.section-use-case.cards.2'
          },
          {
            icon: CircleIconCharity,
            textID: 'curation.section-use-case.cards.3'
          },
          {
            icon: CircleIconRestaurant,
            textID: 'curation.section-use-case.cards.4'
          },
          {
            icon: CircleIconInsurance,
            textID: 'curation.section-use-case.cards.5'
          },
          {
            icon: CircleIconECommerce,
            textID: 'curation.section-use-case.cards.6'
          },
          {
            icon: CircleIconMegaphone,
            textID: 'curation.section-use-case.cards.7'
          },
          {
            icon: CircleIconAntiSpam,
            textID: 'curation.section-use-case.cards.8'
          },
          {
            icon: CircleIconPlus,
            textID: 'curation.section-use-case.cards.9'
          ,}
        ]}
      />

      <section className="grey">
        <h1>
          <FormattedMessage id='curation.section-3.h1' />
        </h1>
        <h2>
          <FormattedMessage id='curation.section-3.h2' />
        </h2>
        <a
          href='https://kleros.gitbook.io/docs/products/curate'
          rel="noopener noreferrer"
          target="blank"
          className='btn btn-secondary'
        >
          <FormattedMessage id='curation.section-3.button' />
        </a>
      </section>
      <span className="trapezium"/>

      <section className='light'>
        <h1>
          <FormattedMessage id='curation.start-now.h1' />
        </h1>
        <Sash
          as='div'
          figures={[
            {
              icon: HexIconHandshake,
              text: intl.formatMessage({
                id: 'curation.start-now.card-1-text'
              }),
              title: intl.formatMessage({
                id: 'curation.start-now.card-1-title'
              }),
              button: {
                href: "mailto:contact@kleros.io",
                text: intl.formatMessage(
                  { id: 'curation.start-now.card-1-button' }
                ),
              }
            }
          ]}
        />
        <Sash
          as='div'
          style={{paddingTop: 0}}
          figures={[
            {
              icon: IconLogoCurate,
              text: intl.formatMessage({
                id: 'curation.start-now.card-2-text'
              }),
              title: intl.formatMessage({
                id: 'curation.start-now.card-2-title'
              }),
              button: {
                href: "https://curate.kleros.io/",
                text: intl.formatMessage(
                  { id: 'curation.start-now.card-2-button' }
                ),
              }
            },
            {
              icon: IconCurate,
              text: intl.formatMessage({
                id: 'curation.start-now.card-3-text'
              }),
              title: intl.formatMessage({
                id: 'curation.start-now.card-3-title'
              }),
              button: {
                href: 'https://tokens.kleros.io',
                text: intl.formatMessage(
                  { id: 'curation.start-now.card-3-button' }
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

export default injectIntl(Curation);
