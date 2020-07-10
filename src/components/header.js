import React from 'react'
import Media from 'react-media'
import Logo from '../assets/svgs/brand_white.svg'
import Court from '../assets/images/kleros.png'
import Curate from '../assets/images/curate.png'
import Escrow from '../assets/images/escrow.png'
import T2CR from '../assets/images/t2cr.png'
import DisputeResolver from '../assets/images/dispute-resolver.png'
import Ninja from '../assets/images/ninja.png'
import Linguo from '../assets/images/linguo.png'
import CryptoUnlocked from 'src/assets/images/crypto-unlocked.png'
import Realitio from 'src/assets/images/realitio.png'
import Omen from 'src/assets/images/omen.png'
import styles from './styles/header.module.css'

import { Badge, Button, Card, Collapse, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { FormattedMessage, IntlContextConsumer, Link, changeLocale, injectIntl } from 'gatsby-plugin-intl'

const FLAGS = {
  en: '🇬🇧',
  es: '🇪🇸',
  fr: '🇫🇷',
  ko: '🇰🇷',
  pt: '🇵🇹',
  'pt-br': '🇧🇷',
  ru: '🇷🇺',
  tr: '🇹🇷',
  zh: '🇨🇳'
}

class Header extends React.Component {
  render () {
    return (
      <header className={styles.header}>
        <Navbar collapseOnSelect expand='md' variant='dark'>
          <Link className='navbar-brand' to='/'>
            <Logo className={styles.brand} />
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className={styles.responsiveNavbarNav} id='responsive-navbar-nav'>
            <Nav className='m-auto'>
              <Button aria-controls='collapse' aria-expanded='false' className='position-relative px-lg-2 pl-0 collapsed' data-target='#collapse' data-toggle='collapse' variant='outline-*'>
                <FormattedMessage id='header.dapps' />
              </Button>
              <Link className=' nav-link' to='/integrations'>
                <FormattedMessage id='header.integrations' />
              </Link>
              <Link className=' nav-link' to='/research'>
                <FormattedMessage id='header.research' />
              </Link>
              <Nav.Link className='' href='https://blog.kleros.io' rel='noopener noreferrer' target='_blank'>
                <FormattedMessage id='header.blog' />
              </Nav.Link>
              <Link className=' nav-link' to='/about'>
                <FormattedMessage id='header.about' />
              </Link>
            </Nav>
            <Media queries={{ notCollapsed: '(min-width: 768px)' }}>
              {(matches) =>
                matches.notCollapsed ? (
                  <Nav style={{ justifyContent: 'flex-end', width: '8rem' }}>
                    <IntlContextConsumer>
                      {({ languages, language: currentLocale }) => {
                        const items = languages
                          .filter((language) => language !== currentLocale)
                          .map((language) => (
                            <NavDropdown.Item
                              className='h3 text-right px-2 '
                              key={language}
                              onClick={() => {
                                changeLocale(language)
                              }}
                              title={language}
                            >
                              {FLAGS[language] || language}
                            </NavDropdown.Item>
                          ))

                        return (
                          <NavDropdown alignRight className='d-inline-flex h3' title={FLAGS[currentLocale]}>
                            {items}
                          </NavDropdown>
                        )
                      }}
                    </IntlContextConsumer>
                  </Nav>
                ) : (
                  <Nav>
                    <IntlContextConsumer>
                      {({ languages, language: currentLocale }) => {
                        const items = languages
                          .filter((language) => language !== currentLocale)
                          .map((language) => (
                            <NavDropdown.Item
                              className='h3 text-right px-2 '
                              key={language}
                              onClick={() => {
                                changeLocale(language)
                              }}
                              title={language}
                            >
                              {FLAGS[language] || language}
                            </NavDropdown.Item>
                          ))

                        return (
                          <NavDropdown alignRight className='d-inline-flex h3' title={FLAGS[currentLocale]}>
                            {items}
                          </NavDropdown>
                        )
                      }}
                    </IntlContextConsumer>
                  </Nav>
                )
              }
            </Media>
          </Navbar.Collapse>
        </Navbar>
        <Collapse as='section' className={`collapse ${styles.dapps}`} id='collapse'>
          <Card>
            <Card.Body className='px-5 py-3 text-center'>
              <div className='d-inline-block'>
                <a href='https://court.kleros.io' rel='noopener noreferrer' target='_blank'>
                  <Badge>
                    <span className={styles.helper} />
                    <img src={Court} alt='Court' />
                  </Badge>
                </a>
                <p className='text-center text-purple-darker '>Court</p>
              </div>
              <div className='d-inline-block'>
                <a href='https://escrow.kleros.io' rel='noopener noreferrer' target='_blank'>
                  <Badge>
                    <span className={styles.helper} />
                    <img src={Escrow} alt='Escrow' />
                  </Badge>
                </a>
                <p className='text-center text-purple-darker '>Escrow</p>
              </div>
              <div className='d-inline-block'>
                <a href='https://resolve.kleros.io' rel='noopener noreferrer' target='_blank'>
                  <Badge>
                    <span className={styles.helper} />
                    <img src={DisputeResolver} alt='DisputeResolver' />
                  </Badge>
                </a>
                <p className='text-center text-purple-darker '>Dispute Resolver</p>
              </div>

              <div className='d-inline-block'>
                <a href='https://tokens.kleros.io' rel='noopener noreferrer' target='_blank'>
                  <Badge>
                    <span className={styles.helper} />
                    <img src={T2CR} alt='T2CR' />
                  </Badge>
                </a>
                <p className='text-center text-purple-darker '>T2CR</p>
              </div>
              <div className='d-inline-block'>
                <a href='https://curate.kleros.io' rel='noopener noreferrer' target='_blank'>
                  <Badge>
                    <span className={styles.helper} />
                    <img src={Curate} alt='Curate' />
                  </Badge>
                </a>
                <p className='text-center text-purple-darker '>Curate</p>
              </div>
              <div className='d-inline-block'>
                <a href='https://uniswap.ninja' rel='noopener noreferrer' target='_blank'>
                  <Badge>
                    <span className={styles.helper} />

                    <img src={Ninja} alt='Ninja' />
                  </Badge>
                </a>
                <p className='text-center text-purple-darker '>Ninja</p>
              </div>
              <div className='d-inline-block'>
                <a href='https://linguo.kleros.io' rel='noopener noreferrer' target='_blank'>
                  <Badge>
                    <span className={styles.helper} />
                    <img src={Linguo} alt='Linguo' />
                  </Badge>
                </a>
                <p className='text-center text-purple-darker '>Linguo</p>
              </div>
              <div className='d-inline-block'>
                <a href='https://cryptounlocked.wetrust.io/' rel='noopener noreferrer' target='_blank'>
                  <Badge>
                    <span className={styles.helper} />
                    <img src={CryptoUnlocked} alt='CryptoUnlocked' />
                  </Badge>
                </a>
                <p className='text-center text-purple-darker '>Crypto Unlocked</p>
              </div>
              <div className='d-inline-block'>
                <a href='https://realit.io' rel='noopener noreferrer' target='_blank'>
                  <Badge>
                    <span className={styles.helper} />
                    <img src={Realitio} alt='Realitio' />
                  </Badge>
                </a>
                <p className='text-center text-purple-darker  '>Realitio</p>
              </div>
              <div className='d-inline-block'>
                <a href='https://gateway.ipfs.io/ipfs/QmbB3wA5R2PR8s87pJRSUCcBHRxAtfFtkSWmVWEcHsaFeV/#/0x592af74865799e1ed509afef002a6eca26e1caa2'>
                  <Badge>
                    <img className='p-2' src={Omen} alt='Omen' />
                  </Badge>
                </a>
                <p className='text-center text-purple-darker  '>Omen</p>
              </div>
            </Card.Body>
          </Card>
        </Collapse>
      </header>
    )
  }
}

export default injectIntl(Header)
