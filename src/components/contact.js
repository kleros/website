import React from "react"
import ThomsonReuters from "../assets/images/thomson-reuters.png"

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import Logo from "../assets/logos/kleros-white.svg"

import telegram from "src/assets/icons/telegram.png"
import email from "src/assets/icons/email.png"

import {
  Navbar,
  Nav,
  NavDropdown,
  Collapse,
  Button,
  Badge,
  Col,
  Row,
  Container,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap"

import styles from "./styles/contact.module.css"

const Contact = ({ intl }) => (
  <div className={styles.contact}>
    <Logo />
    <span className="text">
      <FormattedMessage id="contact.title" />
    </span>
    <div>
      <a href="https://t.me/kleros" target="blank" rel="noopener noreferrer">
        <img src={telegram} />
      </a>
      <a
        href="mailto:contract@kleros.io"
        target="blank"
        rel="noopener noreferrer"
      >
        <img src={email} />
      </a>
    </div>
  </div>
)

export default injectIntl(Contact)
