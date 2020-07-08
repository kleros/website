import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import George from 'src/assets/images/george.png'
import HorizontalCard from '../components/horizontal-card'
import VerticalCard from '../components/vertical-card'
import Fellowship from 'src/assets/svgs/fellowship.svg'
import Book from 'src/assets/svgs/book-illustration.svg'
import styles from './styles/research.module.css'
import { Accordion, Badge, Card, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap'
import { FormattedMessage, Link, injectIntl } from 'gatsby-plugin-intl'
import Content from 'src/intl/en.json'
import Sash from '../components/sash'
import Aouidef from 'src/assets/images/aouidef.png'

const PAPERS = ['https://drops.dagstuhl.de/opus/volltexte/2019/11396/pdf/OASIcs-Tokenomics-2019-6.pdf', 'https://globalarbitrationreview.com/article/1226075/decentralised-justice-reinventing-arbitration-for-the-digital-age']

const MENTIONS = [
  'https://elibrary.ru/item.asp?id=39426452',
  'https://cyberleninka.ru/article/n/o-sposobah-razresheniya-sporov-voznikayuschih-iz-smart-kontraktov',
  'https://heinonline.org/hol-cgi-bin/get_pdf.cgi?handle=hein.journals/comnlrevi16&section=5',
  'https://www.cambridge.org/core/journals/european-journal-of-risk-regulation/article/how-to-make-sure-my-cryptokitties-are-here-forever-the-complementary-roles-of-blockchain-and-the-law-to-bring-trust/117DCBB31817F629091C06D956213908',
  'https://heinonline.org/hol-cgi-bin/get_pdf.cgi?handle=hein.journals/waynlr65&section=5',
  'https://heinonline.org/hol-cgi-bin/get_pdf.cgi?handle=hein.journals/umkc88&section=16',
  'https://heinonline.org/hol-cgi-bin/get_pdf.cgi?handle=hein.journals/jdisres2019&section=23',
  'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3423190',
  'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3605807',
  'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3334674',
  'https://heinonline.org/hol-cgi-bin/get_pdf.cgi?handle=hein.journals/jdisres2019&section=21',
  'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3525767',
  'https://heinonline.org/hol-cgi-bin/get_pdf.cgi?handle=hein.journals/macq19&section=8',
  'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3489893',
  'https://cyberleninka.ru/article/n/18359597',
  'https://cyberleninka.ru/article/n/18240402',
  'https://scholarship.law.missouri.edu/cgi/viewcontent.cgi?article=1853&context=jdr',
  'https://www.koreascience.or.kr/article/JAKO202010565090734.page',
  'https://osf.io/preprints/lawarxiv/kfjxa/',
  'https://ieeexplore.ieee.org/abstract/document/8951647/',
  'https://www.mdpi.com/2071-1050/12/7/2926'
]

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'research.seo-title' })} />
    <div className={styles.research}>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id='research.section-hero.h1' />
        </h1>
        <h2>
          <FormattedMessage id='research.section-hero.h2' />
        </h2>
      </section>
      <section className={styles.director}>
        <h1>
          <FormattedMessage id='research.section-director.title' />
        </h1>

        <Sash className='researchers'
          as='div'
          figures={[
            {
              icon: George,
              text: intl.formatMessage({
                id: 'research.section-director.paragraph'
              }),
              title: intl.formatMessage({
                id: 'research.section-director.subtitle'
              })
            }

          ]}
        />
        <hr className='' />
        <h1 className={styles.researchersTitle}>
          <FormattedMessage id='research.section-director.researchers.title' />
        </h1>
        <Sash className='researchers'
          as='div'
          figures={[
            {
              icon: Aouidef,
              text: intl.formatMessage({
                id: 'research.section-director.researchers.items.1.text'
              }),
              title: intl.formatMessage({
                id: 'research.section-director.researchers.items.1.title'
              })
            }

          ]}
          separator
        />
      </section>
      <section className={styles.papers}>
        <h1>
          <FormattedMessage id='research.section-papers.papers.title' />
        </h1>
        <div className={styles.cards}>
          {Object.keys(Content.research['section-papers'].papers.items).map((paper, index) => (
            <HorizontalCard
              content={{
                href: PAPERS[index],
                text: intl.formatMessage({ id: `research.section-papers.papers.items.${paper}` })
              }}
            />
          ))}
        </div>
      </section>
      <section className={styles.papers}>
        <h1>
          <FormattedMessage id='research.section-papers.mentions.title' />
        </h1>
        <div className={styles.cards}>
          {Object.keys(Content.research['section-papers'].mentions.items).map((mention, index) => (
            <HorizontalCard
              content={{
                href: MENTIONS[index],
                text: intl.formatMessage({ id: `research.section-papers.mentions.items.${mention}` })
              }}
            />
          ))}
        </div>
      </section>
      <section>
        <Container className='p-0' fluid>
          <Row>
            <Col className='mt-5' md>
              <VerticalCard
                content={{
                  button: {
                    href: '/fellowship',
                    text: intl.formatMessage({
                      id: 'research.section-cards.card-1.button'
                    }),
                    variant: 'primary'
                  },
                  icon: Fellowship,

                  title: intl.formatMessage({
                    id: 'research.section-cards.card-1.title'
                  })
                }}
              />
            </Col>
            <Col className='mt-5' md>
              <VerticalCard
                content={{
                  button: {
                    href: '/book',
                    text: intl.formatMessage({
                      id: 'research.section-cards.card-2.button'
                    }),
                    variant: 'secondary'
                  },
                  icon: Book,

                  title: intl.formatMessage({
                    id: 'research.section-cards.card-2.title'
                  })
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  </Layout>
)

export default injectIntl(IndexPage)
