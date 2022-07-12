import React, { useState, useEffect } from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'

import { Container } from 'react-bootstrap'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import DiscordLogo from "src/assets/svgs/discord-colored.svg";
import TelegramLogo from "src/assets/svgs/telegramColored.svg";
import UseCasesHero from 'src/components/usecases-hero.js';
import ModerateHero from 'src/assets/svgs/moderate-hero.svg';
import Sash from 'src/components/sash';
import HexIconThug from "src/assets/svgs/icon-thug.svg";
import HexIconTrendUp from 'src/assets/svgs/hex-icon-trend-up.svg';
import HexIconCommunity from 'src/assets/svgs/icon-community.svg';
import HexIconKleros from 'src/assets/svgs/icon-kleros.svg';
import HexIconPhoto from "src/assets/svgs/icon-photo.svg";
import HexIconGavel from "src/assets/svgs/icon-gavel.svg";
import ModerateExample from 'src/assets/svgs/moderate-example.svg';
import ModerateExampleMobile from 'src/assets/svgs/moderate-example-mobile.svg';
import styles from './styles/moderate.module.css'

import Contact from '../components/contact';

const Moderate = ({ intl }) => {
  const [vw, setVW] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setVW(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({id: 'moderate.seo-title'})} />
      <Container className={styles.moderate} fluid>
        <UseCasesHero
          titleID="moderate.section-hero.h1"
          BackgroundSVG={ModerateHero}
        />

        <section className={`grey ${styles.dappImage}`}>
          {vw > 900 ? <ModerateExample /> : <ModerateExampleMobile />}
        </section>

        <section className="grey">
          <h1>
            <FormattedMessage id='moderate.solution.title' />
          </h1>
          <h2>
            <FormattedMessage id='moderate.solution.paragraph' />
          </h2>
        </section>
        <span className="trapezium" />

        <section className="light">
          <h2>Works with</h2>
          <div className={styles.worksWithLogos}>
            <TelegramLogo />
            <DiscordLogo />
          </div>
        </section>

        <section className='light'>
          <h1>{intl.formatMessage({id: "moderate.sash.title"})}</h1>
          <Sash
            as='div'
            figures={[
              {
                icon: HexIconThug,
                text: intl.formatMessage({
                  id: 'moderate.sash.first.paragraph'
                }),
                title: intl.formatMessage({
                  id: 'moderate.sash.first.title'
                })
              },
              {
                icon: HexIconTrendUp,
                text: intl.formatMessage({
                  id: 'moderate.sash.second.paragraph'
                }),
                title: intl.formatMessage({
                  id: 'moderate.sash.second.title'
                })
              },
              {
                icon: HexIconCommunity,
                text: intl.formatMessage({
                  id: 'moderate.sash.third.paragraph'
                }),
                title: intl.formatMessage({
                  id: 'moderate.sash.third.title'
                })
              },
            ]}
          />
          <Sash
            as="div"
            figures={[
              {
                icon: HexIconKleros,
                text: intl.formatMessage({
                  id: 'moderate.sash.fourth.paragraph'
                }),
                title: intl.formatMessage({
                  id: 'moderate.sash.fourth.title'
                })
              },
              {
                icon: HexIconPhoto,
                text: intl.formatMessage({
                  id: 'moderate.sash.fifth.paragraph'
                }),
                title: intl.formatMessage({
                  id: 'moderate.sash.fifth.title'
                })
              },
              {
                icon: HexIconGavel,
                text: intl.formatMessage({
                  id: 'moderate.sash.sixth.paragraph'
                }),
                title: intl.formatMessage({
                  id: 'moderate.sash.sixth.title'
                })
              }
            ]}
          />
        </section>

        <section className="light">
          <a
            href='https://kleros.gitbook.io/docs/products/oracle'
            rel="noopener noreferrer"
            target="blank"
            className='btn btn-secondary'
          >
            <FormattedMessage id='moderate.call-to-action' />
          </a>
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
  );
}

export default injectIntl(Moderate)
