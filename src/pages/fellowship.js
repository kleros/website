import React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./styles/fellowship.module.css";
import Github from "src/assets/svgs/github.svg";
import Linkedin from "src/assets/svgs/linkedin.svg";
import Telegram from "src/assets/svgs/telegram.svg";
import Twitter from "src/assets/svgs/twitter.svg";
import Slack from "src/assets/svgs/slack.svg";
import Reddit from "src/assets/svgs/reddit.svg";
import Ghost from "src/assets/svgs/ghost.svg";
import FellowshipBadge from "src/assets/svgs/fellowship.svg";
import Narozhny from "src/assets/images/person/narozhny.png";
import Sharma from "src/assets/images/person/sharma.png";
import Deplano from "src/assets/images/person/deplano.png";
import Dagnillo from "src/assets/images/person/dagnillo.png";
import Bergolla from "src/assets/images/person/bergolla.png";
import Scott from "src/assets/images/person/scott.png";
import Zhao from "src/assets/images/person/zhao.png";
import Gudkov from "src/assets/images/person/gudkov.png";
import Abad from "src/assets/images/person/abad.png";
import Oguz from "src/assets/images/person/oguz.png";
import Goldstein from "src/assets/images/person/goldstein.png";
import Obafemi from "src/assets/images/person/obafemi.png";
import Gouvea from "src/assets/images/person/gouvea.png";
import Felicio from "src/assets/images/person/felicio.png";
import Tineo from "src/assets/images/person/tineo.png";
import Mota from "src/assets/images/person/mota.png";
import Duarte from "src/assets/images/person/duarte.png";
import Robertson from "src/assets/images/person/robertson.png";
import Aliyev from "src/assets/images/person/aliyev.png";
import Archila from "src/assets/images/person/archila.png";
import Bhalothia from "src/assets/images/person/bhalothia.png";
import Dean from "src/assets/images/person/dean.png";
import Bel from "src/assets/images/person/bel.png";
import Gray from "src/assets/images/person/gray.png";
import Huculak from "src/assets/images/person/huculak.png";
import Jara from "src/assets/images/person/jara.png";
import Lowther from "src/assets/images/person/lowther.png";
import Kulshreshtha from "src/assets/images/person/kulshreshtha.png";
import Mouclier from "src/assets/images/person/mouclier.png";
import Comenale from "src/assets/images/person/comenale.png";
import Galindo from "src/assets/images/person/galindo.png";
import Stanescu from "src/assets/images/person/stanescu.png";
import Tripathi from "src/assets/images/person/tripathi.png";
import Vargas from "src/assets/images/person/vargas.png";
import Carrera from "src/assets/images/person/carrera.png";
import Lewis from "src/assets/images/person/lewis.png";
import Config from "../../gatsby-config.js";
import Questions from "src/intl/en.json";
import Slider from "react-slick";
import ArrowRight from "src/assets/svgs/arrow-button-right.svg";
import ArrowLeft from "src/assets/svgs/arrow-button-left.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PHOTOS = {
  Abad,
  Aliyev,
  Archila,
  Bel,
  Bergolla,
  Bhalothia,
  Carrera,
  Comenale,
  Dagnillo,
  Dean,
  Deplano,
  Duarte,
  Felicio,
  Galindo,
  Goldstein,
  Gouvea,
  Gray,
  Gudkov,
  Huculak,
  Jara,
  Kulshreshtha,
  Lewis,
  Lowther,
  Mota,
  Mouclier,
  Narozhny,
  Obafemi,
  Oguz,
  Robertson,
  Scott,
  Sharma,
  Stanescu,
  Tineo,
  Tripathi,
  Vargas,
  Zhao,
};

const Arrow = ({ onClick, left, right }) => (
  <div
    className={right ? styles.arrowNext : styles.arrowPrev}
    onClick={onClick}
  >
    {left && <ArrowLeft />}
    {right && <ArrowRight />}
  </div>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  arrows: true,
  nextArrow: <Arrow right />,
  prevArrow: <Arrow left />,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]
};

const TESTIMONIALS = [
  {
    name: "Diana Itzel",
    videoID: "3Q2ZANpmh2A"
  },
  {
    name: "Jake Lowther",
    videoID: "P5kHvPzImY8"
  },
  {
    name: "Agustina Perez",
    videoID: "w6U8sKsRqhY"
  },
  {
    name: "Dmitry Narozhny",
    videoID: "FaMfSzUUMKs"
  },
  {
    name: "Esthefania Vargas",
    videoID: "4pWqT_qVqkI"
  },
  {
    name: "Elliot Talbert-Goldstein",
    videoID: "z8KY9WjVfMQ"
  },
  {
    name: "Tian Zhao",
    videoID: "SARq8fTM5l8"
  },
  {
    name: "Luis Bergolla",
    videoID: "ULKBM15Td3U"
  },
  {
    name: "Paolo Archila",
    videoID: "y68f3KEtKpc"
  },
  {
    name: "Jose Torres",
    videoID: "AjXU5S8ofbM"
  },
  {
    name: "Alexei Gudkov",
    videoID: "7l7KG2Nx71w"
  },
];

const Fellowship = ({ intl, data }) => {
  const [activeKey, setActiveKey] = useState(-1);

  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "fellowship.seo-title" })} />
      <div className={styles.fellowship}>
        <section className={`pb-0 ${styles.hero} `}>
          <FellowshipBadge />
          <h1>
            <FormattedMessage id="fellowship.section-hero.h1" />
          </h1>
          <h2>
            <FormattedMessage id="fellowship.section-hero.h2" />
          </h2>
          <hr className="my-5" />
          <h2 className="white bold">
            Testimonials
          </h2>
          <Slider {...sliderSettings}>
            {
              TESTIMONIALS.map(({ name, videoID }, i) => (
                <div className={styles.testimonials} key={i}>
                  <iframe
                    className={styles.video}
                    src={"https://www.youtube.com/embed/" + videoID}
                    title={name}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                  />
                </div>
              ))
            }
          </Slider>
          <hr className="my-5" />
          <h2 className="white bold">
            <FormattedMessage id="fellowship.section-hero.conversion-phrase" />
          </h2>
          <div className={`${styles.social}`}>
            <div>
              <a className="g-kleros_footer__anchor" href="https://github.com/kleros" rel="noopener noreferrer" target="_blank">
                <Github />
              </a>
              <a className="g-kleros_footer__anchor" href="https://slack.kleros.io/" rel="noopener noreferrer" target="_blank">
                <Slack />
              </a>

              <a className="g-kleros_footer__anchor" href="https://reddit.com/r/Kleros/" rel="noopener noreferrer" target="_blank">
                <Reddit />
              </a>
              <a className="g-kleros_footer__anchor" href="https://twitter.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                <Twitter />
              </a>

              <a className="g-kleros_footer__anchor" href="https://blog.kleros.io/" rel="noopener noreferrer" target="_blank">
                <Ghost />
              </a>

              <a className="g-kleros_footer__anchor" href="https://t.me/kleros" rel="noopener noreferrer" target="_blank">
                <Telegram />
              </a>
              <a className="g-kleros_footer__anchor" href="https://www.linkedin.com/company/kleros/" rel="noopener noreferrer" target="_blank">
                <Linkedin />
              </a>
            </div>
          </div>
          <hr style={{ marginTop: "4rem" }} />
          <h1 style={{ marginBottom: "4rem", marginTop: "6rem" }}>
            <FormattedMessage id="fellowship.section-fellows" />
          </h1>
        </section>

        <Container as="section" className={`no-gutters pt-0 px-0 ${styles.team}`} fluid>
          <Row className="no-gutters">
            {Config.siteMetadata.teamMembers
              .filter((member) => PHOTOS[member.name.split(" ").slice(-1)] != null)
              .map((member, index) => {
                if (data.allSitePage.edges.find((object) => object.node.path === `/${member.name.toLowerCase().split(/(\s)/).slice(-1)}/`))
                  return (
                    <Link className="no-gutters" key={index} style={{ display: "contents" }} to={`/${member.name.toLowerCase().split(" ").slice(-1)}`}>
                      <Col className={styles.portraitContainer} lg={3} md={4} sm={6} xl={2} xs={12}>
                        <img src={PHOTOS[member.name.split(" ").slice(-1)]} style={{ width: "100%" }} alt={member.name} />
                        <div className={styles.overlay}>
                          <span>{member.name} </span>
                          <span>{member.title}</span>
                          <span className="bold">{member.location}</span>
                          <br />
                          <span className="bold">Batch {member.batch}</span>
                        </div>
                      </Col>
                    </Link>
                  );
                return (
                  <Col className={styles.portraitContainer} lg={3} md={4} sm={6} xl={2} xs={12}>
                    <img src={PHOTOS[member.name.split(" ").slice(-1)]} style={{ width: "100%" }} alt={member.name} />
                    <div className={styles.overlay}>
                      <span>{member.name} </span>
                      <span>{member.title}</span>
                      <span className="bold">{member.location}</span>
                      <br />
                      <span className="bold">Batch {member.batch}</span>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>

        <section className={styles.questions}>
          <h1 className="text-left bigger">FAQ</h1>
          <div className="tab-content" id="v-pills-tabContent">
            <Accordion activeKey={activeKey} className={styles.accordion} onSelect={(e) => setActiveKey(e)}>
              {Object.entries(Questions.fellowship["section-faq"]).map((question, index) => (
                <React.Fragment key={index}>
                  <Card>
                    <Accordion.Toggle as={Card.Header} className={styles.cardHeader} eventKey={`key${index}`}>
                      <span className={`${activeKey == `key${index}` ? styles.closed : styles.open}`}>
                        <FormattedMessage id={`fellowship.section-faq.${index + 1}.q`} />
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={`key${index}`}>
                      <Card.Body className={styles.cardBody}>
                        <FormattedMessage
                          id={`fellowship.section-faq.${index + 1}.a`}
                          values={{
                            anchor: (children) => (
                              <a href="https://forms.gle/s6nND6jmKriNyDsR8" rel="noopener noreferrer" target="_blank">
                                {children}
                              </a>
                            ),
                          }}
                        />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <hr style={{ border: "1px solid rgba(255, 255, 255, 0.25)" }} />
                </React.Fragment>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;

export default injectIntl(Fellowship);
