import PropTypes from "prop-types"
import React, { useState } from "react"

import Logo from "../assets/logos/brand_white.svg"
import Court from "../assets/logos/kleros.svg"
import Curate from "../assets/logos/curate.svg"
import Escrow from "../assets/logos/escrow.svg"
import T2CR from "../assets/logos/t2cr.svg"
import DisputeResolver from "../assets/logos/dispute-resolver.svg"
import Ninja from "../assets/logos/ninja.svg"
import Linguo from "../assets/logos/linguo.svg"
import CU from "../assets/logos/kleros.svg"
import Realitio from "../assets/logos/kleros.svg"

import OnePagerEN from "../assets/books-papers-flyers/onepager_en.pdf"
import OnePagerTR from "../assets/books-papers-flyers/onepager_tr.pdf"
import OnePagerFR from "../assets/books-papers-flyers/onepager_fr.pdf"
import OnePagerES from "../assets/books-papers-flyers/onepager_es.pdf"
import OnePagerKO from "../assets/books-papers-flyers/onepager_ko.pdf"
import OnePagerPT from "../assets/books-papers-flyers/onepager_pt.pdf"
import OnePagerRU from "../assets/books-papers-flyers/onepager_ru.pdf"
import OnePagerZH from "../assets/books-papers-flyers/onepager_zh.pdf"

import WhitePaperEN from "../assets/books-papers-flyers/whitepaper_en.pdf"
import WhitePaperES from "../assets/books-papers-flyers/whitepaper_es.pdf"

import YellowPaperEN from "../assets/books-papers-flyers/yellowpaper_en.pdf"

import styles from "./styles/footer.module.css"
import {
  Navbar,
  Nav,
  NavDropdown,
  Collapse,
  Card,
  Button,
  Badge,
  Col,
  Row,
  Container,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap"

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const ONEPAGERS = {
  en: OnePagerEN,
  tr: OnePagerTR,
  fr: OnePagerFR,
  es: OnePagerES,
  ko: OnePagerKO,
  ru: OnePagerRU,
  zh: OnePagerZH,
}

const WHITE_PAPERS = {
  en: WhitePaperEN,
  es: WhitePaperES,
}

const YELLOW_PAPERS = {
  en: YellowPaperEN,
}

const Footer = ({ intl }) => {
  return (
    <footer className={styles.footer}>
      <Container fluid className="p-0">
        <Row>
          <Col className="d-none d-lg-block">
            <Logo />
          </Col>
          <Col xs={12} lg={6} className={styles.links}>
            <Link className="mr-3" to="/about">
              <FormattedMessage id="footer.about" />
            </Link>
            <Link className="mr-3" to="/coop">
              <FormattedMessage id="footer.cooperative" />
            </Link>
            <a
              className="mr-3"
              href={
                WHITE_PAPERS[intl.locale] || WHITE_PAPERS[intl.defaultLocale]
              }
            >
              <FormattedMessage id="footer.whitepaper" />
            </a>
            <a
              className="mr-3"
              href={
                YELLOW_PAPERS[intl.locale] || YELLOW_PAPERS[intl.defaultLocale]
              }
            >
              <FormattedMessage id="footer.yellowpaper" />
            </a>
            <a
              className="mr-3"
              href={ONEPAGERS[intl.locale] || ONEPAGERS[intl.defaultLocale]}
            >
              <FormattedMessage id="footer.onepager" />
            </a>
            <Link className="mr-3" to="/research">
              <FormattedMessage id="footer.research" />
            </Link>
            <Link className="mr-3" to="/token">
              <FormattedMessage id="footer.pnktoken" />
            </Link>
            <a className="mr-3" href="https://developer.kleros.io">
              <FormattedMessage id="footer.developer" />
            </a>
            <Link className="mr-3" to="/integrations">
              <FormattedMessage id="footer.integrations" />
            </Link>
            <a className="mr-3" href="https://governance.kleros.io">
              <FormattedMessage id="footer.governance" />
            </a>
            <Link className="mr-3" to="/escrow">
              <FormattedMessage id="footer.escrow" />
            </Link>
            <Link className="mr-3" to="/curate">
              <FormattedMessage id="footer.curate" />
            </Link>
            <Link className="mr-3" to="/fellowship">
              <FormattedMessage id="footer.fellowship" />
            </Link>
            <Link className="mr-3" to="/community">
              <FormattedMessage id="footer.community" />
            </Link>
            <a className="mr-3" href="https://blog.kleros.io">
              <FormattedMessage id="footer.blog" />
            </a>
            <Link className="mr-3" to="/media">
              <FormattedMessage id="footer.media" />
            </Link>
            <Link className="mr-3" to="/book">
              <FormattedMessage id="footer.book" />
            </Link>
            <Link className="mr-3" to="/faq">
              <FormattedMessage id="footer.faq" />
            </Link>
          </Col>
          <Col className="d-none d-lg-block">
            <Button className="d-block mb-4" variant="primary">
              <FormattedMessage id="footer.button-primary" />
            </Button>
            <Button className="d-block" variant="secondary">
              <FormattedMessage id="footer.button-secondary" />
            </Button>
          </Col>
        </Row>
        <hr />
        <Container className={styles.bottomContainer}>
          <Row className={styles.social}>
            <a
              className="g-kleros_footer__anchor"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/kleros"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="g-kleros_footer__icon svg-inline--fa fa-github fa-w-16"
                role="img"
                viewBox="0 0 496 512"
              >
                <path
                  className="g-kleros_footer__icon--filled"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
            <a
              className="g-kleros_footer__anchor"
              href="https://slack.kleros.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="slack"
                className="g-kleros_footer__icon svg-inline--fa fa-slack fa-w-14"
                role="img"
                viewBox="0 0 448 512"
              >
                <path
                  className="g-kleros_footer__icon--filled"
                  d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"
                />
              </svg>
            </a>

            <a
              className="g-kleros_footer__anchor"
              href="https://reddit.com/r/Kleros/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="reddit-alien"
                className="g-kleros_footer__icon svg-inline--fa fa-reddit-alien fa-w-16"
                role="img"
                viewBox="0 0 512 512"
              >
                <path
                  className="g-kleros_footer__icon--filled"
                  d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"
                />
              </svg>
            </a>
            <a
              className="g-kleros_footer__anchor"
              href="https://twitter.com/kleros_io?"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                className="g-kleros_footer__icon svg-inline--fa fa-twitter fa-w-16"
                role="img"
                viewBox="0 0 512 512"
              >
                <path
                  className="g-kleros_footer__icon--filled"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </a>

            <a
              className="g-kleros_footer__anchor"
              href="https://blog.kleros.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="g-kleros_footer__icon"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.153076"
                  y="0.152344"
                  width="9.81887"
                  height="3.4366"
                  rx="1.5"
                  className="g-kleros_footer__icon--filled"
                ></rect>
                <rect
                  x="13.4084"
                  y="0.152344"
                  width="3.4366"
                  height="3.4366"
                  rx="1.5"
                  className="g-kleros_footer__icon--filled"
                ></rect>
                <rect
                  x="9.97168"
                  y="13.4082"
                  width="6.87321"
                  height="3.4366"
                  rx="1.5"
                  className="g-kleros_footer__icon--filled"
                ></rect>
                <rect
                  x="0.152832"
                  y="13.4082"
                  width="6.87321"
                  height="3.4366"
                  rx="1.5"
                  className="g-kleros_footer__icon--filled"
                ></rect>
                <rect
                  x="0.152832"
                  y="6.53516"
                  width="16.6921"
                  height="3.4366"
                  rx="1.5"
                  className="g-kleros_footer__icon--filled"
                ></rect>
              </svg>
            </a>

            <a
              className="g-kleros_footer__anchor"
              href="https://t.me/kleros"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="telegram-plane"
                className="g-kleros_footer__icon svg-inline--fa fa-telegram-plane fa-w-24"
                role="img"
                viewBox="0 0 448 512"
              >
                <path
                  className="g-kleros_footer__icon--filled"
                  d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                />
              </svg>
            </a>
            <a
              className="g-kleros_footer__anchor"
              href="https://www.linkedin.com/company/kleros/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="g-kleros_footer__icon svg-inline--fa fa-linkedin-in fa-w-14"
                role="img"
                viewBox="0 0 448 512"
              >
                <path
                  className="g-kleros_footer__icon--filled"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </a>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center text-white ">
              <FormattedMessage id="footer.subscribe-title" />
            </p>
          </Row>
          <Row className={styles.subscribe}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder={intl.formatMessage({
                  id: "footer.subscribe-placeholder",
                })}
                aria-label={intl.formatMessage({
                  id: "footer.subscribe-placeholder",
                })}
                aria-describedby="subscribe"
              />
              <InputGroup.Append>
                <Button variant="primary">
                  <FormattedMessage id="footer.subscribe-button" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Row>
        </Container>
      </Container>

      <p className="d-block text-center">
        <FormattedMessage id="footer.copyright" /> {new Date().getFullYear()} ©
        Kleros
      </p>

      <Button href="#gatsby-focus-wrapper" className={styles.scrollback}>
        ↑
      </Button>
    </footer>
  )
}

export default injectIntl(Footer)
