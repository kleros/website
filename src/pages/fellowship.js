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
import X from "src/assets/svgs/x.svg";
import Slack from "src/assets/svgs/slack.svg";
import Reddit from "src/assets/svgs/reddit.svg";
import Ghost from "src/assets/svgs/ghost.svg";
import FellowshipBadge from "src/assets/svgs/fellowship.svg";
import Narozhny from "src/assets/images/person/narozhny.png";
import Sharma from "src/assets/images/person/sharma.png";
import Deplano from "src/assets/images/person/deplano.png";
import Bergolla from "src/assets/images/person/bergolla.png";
import Scott from "src/assets/images/person/scott.png";
import Zhao from "src/assets/images/person/zhao.png";
import Gudkov from "src/assets/images/person/gudkov.png";
import Abad from "src/assets/images/person/abad.png";
import Goldstein from "src/assets/images/person/goldstein.png";
import Obafemi from "src/assets/images/person/obafemi.png";
import Tineo from "src/assets/images/person/tineo.png";
import Duarte from "src/assets/images/person/duarte.png";
import Archila from "src/assets/images/person/archila.png";
import Lowther from "src/assets/images/person/lowther.png";
import Comenale from "src/assets/images/person/comenale.png";
import Galindo from "src/assets/images/person/galindo.png";
import Vargas from "src/assets/images/person/vargas.png";
import Carrera from "src/assets/images/person/carrera.png";
import Mohammadi from "src/assets/images/person/mohammadi.png";
import Oladimeji from "src/assets/images/person/oladimeji.png";
import Lin from "src/assets/images/person/lin.png";
import Zeballos from "src/assets/images/person/zeballos.png";
import Gaspar from "src/assets/images/person/gaspar.png";
import Tewari from "src/assets/images/person/tewari.png";
import Poenicke from "src/assets/images/person/poenicke.png";
import Muñoz from "src/assets/images/person/muñoz.png";
import Fiorentini from "src/assets/images/person/fiorentini.png";
import Anand from "src/assets/images/person/anand.png";
import Felices from "src/assets/images/person/felices.png";
import Zhuk from "src/assets/images/person/zhuk.png";
import Tronca from "src/assets/images/person/tronca.png";
import Julio from "src/assets/images/person/julio.png";
import Gabriela from "src/assets/images/person/gabriela.png";
import Config from "../../gatsby-config.js";
import Questions from "src/intl/en.json";
import Slider from "react-slick";
import ArrowRight from "src/assets/svgs/arrow-button-right.svg";
import ArrowLeft from "src/assets/svgs/arrow-button-left.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PHOTOS = {
  Abad,
  Anand, 
  Archila,
  Bergolla,
  Carrera,
  Comenale,
  Deplano,
  Duarte,
  Felices,
  Fiorentini,
  Gabriela,
  Galindo,
  Gaspar,
  Goldstein,
  Gudkov,
  Julio,
  Lin,
  Lowther,
  Mohammadi,
  Muñoz,
  Narozhny,
  Obafemi,
  Oladimeji,
  Poenicke,
  Scott,
  Sharma,
  Tewari,
  Tineo,
  Tronca,
  Vargas,
  Zeballos,
  Zhao,
  Zhuk,
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
  {
    name: "Mauricio Duarte",
    videoID: "WGh0BfW89Yw"
  },
  {
    name: "Abeer Sharma",
    videoID: "8tjO-SdhZ6E"
  }
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
            <FormattedMessage
              id="fellowship.section-hero.conversion-phrase"
              values={{
                anchor: (children) => (
                  <a
                    href="https://blog.kleros.io/the-kleros-fellowship-of-justice-5th-generation-applications-open"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {children}
                  </a>
                ),
              }}
            />
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
              <a className="g-kleros_footer__anchor" href="https://x.com/kleros_io?" rel="noopener noreferrer" target="_blank">
                <X />
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
                              <a href="https://forms.gle/xJC4H5zSinyUeACp8" rel="noopener noreferrer" target="_blank">
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
