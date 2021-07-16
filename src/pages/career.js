import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact";
import PositionCard from "../components/position-card";

import { Col, Container, Row, Button } from "react-bootstrap";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/career.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookLaunch from "src/assets/images/career/ethcc2-book-launch.jpeg";
import Osaka1 from "src/assets/images/career/osaka-1.png";
import Osaka2 from "src/assets/images/career/osaka-2.png";
import Osaka3 from "src/assets/images/career/osaka-3.png";
import Osaka4 from "src/assets/images/career/osaka-4.png";
import Osaka5 from "src/assets/images/career/osaka-5.png";
import Osaka6 from "src/assets/images/career/osaka-6.jpg";
import Assembly21 from "src/assets/images/career/assembly2-1.png";
import Assembly22 from "src/assets/images/career/assembly2-2.jpg";
import Bushido1 from "src/assets/images/career/bushido-1.png";
import Bushido2 from "src/assets/images/career/bushido-2.png";
import Bushido3 from "src/assets/images/career/bushido-3.png";
import Devcon41 from "src/assets/images/career/devcon4-1.jpg";
import Devcon42 from "src/assets/images/career/devcon4-2.jpg";
import Devcon5 from "src/assets/images/career/devcon5.png";
import EthCC21 from "src/assets/images/career/ethcc2-1.png";
import EthCC2BookLaunch from "src/assets/images/career/ethcc2-book-launch.jpeg";
import Fede1 from "src/assets/images/career/fede-1.png";
import Fede2 from "src/assets/images/career/fede-2.png";
import Icosahedron1 from "src/assets/images/career/icosahedron-1.png";
import Icosahedron2 from "src/assets/images/career/icosahedron-2.png";
import KlerosConference1 from "src/assets/images/career/kleros-conference-1.jpg";
import Talk1 from "src/assets/images/career/talk-1.png";
import Talk2 from "src/assets/images/career/talk-2.png";
import Talk3 from "src/assets/images/career/talk-3.png";
import Talk4 from "src/assets/images/career/talk-4.png";
import Talk5 from "src/assets/images/career/talk-5.png";
import Talk6 from "src/assets/images/career/talk-6.png";
import Talk7 from "src/assets/images/career/talk-7.png";
import Talk8 from "src/assets/images/career/talk-8.png";
import Talk9 from "src/assets/images/career/talk-9.png";
import Team1 from "src/assets/images/career/team-1.png";
import William1 from "src/assets/images/career/william-1.png";
import William2 from "src/assets/images/career/william-2.png";

import Play from "src/assets/svgs/play.svg";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 5000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
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
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
  ],
};

const positionsSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 7000,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
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
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Career = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "career.seo-title" })} />
    <div className={styles.career}>
      <section className={`${styles.hero}`}>
        <h1>
          <FormattedMessage id="career.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="career.section-hero.h2" />
        </h2>
        <Button href="#positions">
          <FormattedMessage id="career.section-hero.button-primary" />
        </Button>
        <div className={styles.sliders}>
          <Slider className={styles.topslider} {...sliderSettings}>
            <div>
              <img className="rounded" src={Osaka4} />
            </div>
            <div>
              <img className="rounded" src={KlerosConference1} />
            </div>
            <div>
              <img className="rounded" src={Bushido2} />
            </div>
            <div>
              <img className="rounded" src={Bushido3} />
            </div>
            <div>
              <img className="rounded" src={Osaka1} />
            </div>
            <div>
              <img className="rounded" src={Osaka2} />
            </div>
            <div>
              <img className="rounded" src={Osaka3} />
            </div>

            <div>
              <img className="rounded" src={Osaka5} />
            </div>
            <div>
              <img className="rounded" src={Osaka6} />
            </div>
            <div>
              <img className="rounded" src={Assembly22} />
            </div>
            <div>
              <img className="rounded" src={Devcon41} />
            </div>
            <div>
              <img className="rounded" src={Devcon42} />
            </div>
            <div>
              <img className="rounded" src={Devcon5} />
            </div>
          </Slider>
          <Slider className={styles.bottomslider} {...sliderSettings}>
            <div>
              <img className="rounded" src={Talk1} />
            </div>
            <div>
              <img className="rounded" src={Talk2} />
            </div>
            <div>
              <img className="rounded" src={William1} />
            </div>
            <div>
              <img className="rounded" src={William2} />
            </div>
            <div>
              <img className="rounded" src={Talk4} />
            </div>
            <div>
              <img className="rounded" src={Talk5} />
            </div>
            <div>
              <img className="rounded" src={Talk6} />
            </div>
            <div>
              <img className="rounded" src={Talk7} />
            </div>
            <div>
              <img className="rounded" src={Talk8} />
            </div>
            <div>
              <img className="rounded" src={Talk9} />
            </div>
            <div>
              <img className="rounded" src={EthCC2BookLaunch} />
            </div>
          </Slider>
        </div>
      </section>
      <section className={`light ${styles.mission}`}>
        <h1>
          <FormattedMessage id="career.section-mission.h1" />
        </h1>
        <h2>
          <FormattedMessage id="career.section-mission.h2" />
        </h2>
      </section>
      <section className={styles.culture}>
        <h1>
          <FormattedMessage id="career.section-culture.h1" />
        </h1>
        <h2>
          <FormattedMessage id="career.section-culture.h2" />
        </h2>
        <div className={styles.images}>
          <div className={styles.left}>
            <img className="rounded" src={Osaka6} />
            <img className="rounded" src={Talk2} />
            <img className="rounded" src={Talk7} />
          </div>
          <div className={styles.right}>
            <img className="rounded" src={Osaka3} />
            <img className="rounded" src={Devcon42} />
            <img className="rounded" src={Osaka4} />
          </div>
          <div className={styles.values}>
            <div className={styles.valueContainer}>
              <span className={styles.top}>
                <FormattedMessage id="career.section-culture.illustration.top" />
              </span>
            </div>

            <div className={styles.valueContainer}>
              <span className={styles.topLeft}>
                <FormattedMessage id="career.section-culture.illustration.top-left" />
              </span>
            </div>

            <div className={styles.valueContainer}>
              <span className={styles.topRight}>
                <FormattedMessage id="career.section-culture.illustration.top-right" />
              </span>
            </div>

            <div className={styles.valueContainer}>
              <span className={styles.bottom}>
                <FormattedMessage id="career.section-culture.illustration.bottom" />
              </span>
            </div>

            <div className={styles.valueContainer}>
              <span className={styles.bottomLeft}>
                <FormattedMessage id="career.section-culture.illustration.bottom-left" />
              </span>
            </div>

            <div className={styles.valueContainer}>
              <span className={styles.bottomRight}>
                <FormattedMessage id="career.section-culture.illustration.bottom-right" />
              </span>
            </div>
            <div className={styles.playContainer}>
              <a href="https://www.youtube.com/watch?v=wZZ2ipS-jZw" target="_blank" rel="noopener noreferrer">
                <Play />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.team}>
        <div>
          <img className="rounded" src={EthCC2BookLaunch} />
        </div>
      </section>
      <section className={`light ${styles.positions}`} id="positions">
        <h1>
          <FormattedMessage id="career.section-positions.h1" />
        </h1>
        <h2>
          <FormattedMessage id="career.section-positions.h2" />
        </h2>
        <Slider className={styles.positionsSlider} {...positionsSliderSettings}>
          <div>
            <PositionCard content={{ department: "Engineering", role: "Full Stack Developer", location: "France • Lisbon • Remote", href: "https://angel.co/company/kleros/jobs/538779-full-stack-developer-blockchain-legaltech-fintech" }} />
          </div>
          <div>
            <PositionCard content={{ department: "Engineering", role: "Frontend Developer", location: "France • Lisbon • Remote", href: "https://angel.co/company/kleros/jobs/1126483-frontend-developer-blockchain-legaltech-fintech" }} />
          </div>
          <div>
            <PositionCard content={{ department: "Marketing", role: "Communications Manager", location: "France • Lisbon • Remote", href: "https://angel.co/company/kleros/jobs/1033811-communications-manager" }} />
          </div>
          <div>
            <PositionCard content={{ department: "Product", role: "Product Manager", location: "France • Lisbon • Remote", href: "https://angel.co/company/kleros/jobs/1279076-product-manager" }} />
          </div>
        </Slider>
      </section>

      <section>
        <Contact
          content={{
            title: intl.formatMessage({
              id: "contact.title",
            }),
          }}
        />
      </section>
    </div>
  </Layout>
);

export default injectIntl(Career);
