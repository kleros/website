import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'

import { Container } from 'react-bootstrap'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import UseCasesHero from 'src/components/usecases-hero.js';
import EducationHero from 'src/assets/svgs/education-hero.svg';
import Sash from 'src/components/sash';
import Professor from 'src/assets/svgs/professor.svg';
import University from 'src/assets/svgs/university.svg';
import Gavel from 'src/assets/svgs/icon-gavel.svg';
import Community from 'src/assets/svgs/icon-community.svg';
import Balance from 'src/assets/svgs/hex-icon-balance.svg'
import Search from 'src/assets/svgs/search.svg'
import Speaker from 'src/assets/svgs/speaker.svg';
import Court from "src/assets/svgs/court.svg"
import DisputeResolver from "src/assets/svgs/dispute-resolver-page.svg"
import styles from './styles/education.module.css'

import Contact from '../components/contact';

const Education = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({id: 'education.seo-title'})} />
    <Container className={styles.education} fluid>
      <UseCasesHero
        titleID="education.section-hero.h1"
        subtitleID="education.section-hero.h2"
        BackgroundSVG={EducationHero}
      />

      <section className='grey'>
        <Sash
        className={styles.list}
          as='div'
          figures={[
            {
              icon: Community,
              text: intl.formatMessage({
                id: 'education.sash.first.paragraph'
              }),
              title: intl.formatMessage({
                id: 'education.sash.first.title'
              })
            },
            {
              icon: University,
              text: intl.formatMessage({
                id: 'education.sash.second.paragraph'
              }),
              title: intl.formatMessage({
                id: 'education.sash.second.title'
              })
            },
            {
              icon: Professor,
              text: intl.formatMessage({
                id: 'education.sash.third.paragraph'
              }),
              title: intl.formatMessage({
                id: 'education.sash.third.title'
              })
            }
          ]}
        />
      </section>

      <section className={`grey ${styles.dappImage}`}>
        <Court />
      </section>
      <section className={`grey ${styles.dappImage}`}>
       <DisputeResolver />
      </section>



      <section className={styles.benefits}>
        <h1>
          <FormattedMessage id='education.section-3.h1' />
        </h1>
        <h2>
          <FormattedMessage id='education.section-3.h2' />
        </h2>
       
      </section>
      <span className="trapezium"/>

      <section className='light'>
        <h1 className={styles.instances}>
          <FormattedMessage id='education.instances.h1' />
          <span className={styles.bold}><FormattedMessage id="education.instances.h2" /></span>
        </h1>
        
                    
        <Sash
          as='div'
          figures={[
            {
              icon: Search,
              text: intl.formatMessage({
                id: 'education.instances.card-1-text'
              }),
              title: intl.formatMessage({
                id: 'education.instances.card-1-title'
              }),
              
            },
            {
              icon: Balance,
              text: intl.formatMessage({
                id: 'education.instances.card-2-text'
              }),
              title: intl.formatMessage({
                id: 'education.instances.card-2-title'
              }),
             
            }
          ]}
        />
        <Sash
          as='div'
          style={{ paddingTop: 0 }}
          figures={[
            
            {
              icon: Speaker,
              text: intl.formatMessage({
                id: 'education.instances.card-3-text'
              }),
              title: intl.formatMessage({
                id: 'education.instances.card-3-title'
              }),
              
            },
            {
              icon: Gavel,
              text: intl.formatMessage({
                id: 'education.instances.card-4-text'
              }),
              title: intl.formatMessage({
                id: 'education.instances.card-4-title'
              }),
              
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

export default injectIntl(Education)
