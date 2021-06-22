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
import Play from "src/assets/svgs/play.svg";
// import Decorator from "src/assets/svgs/decorator.svg";

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
  autoplay: true,
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
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "community.seo-title" })} />
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
              <img className="rounded" src={Osaka1} />
            </div>
            <div>
              <img className="rounded" src={Osaka2} />
            </div>
            <div>
              <img className="rounded" src={Osaka3} />
            </div>
            <div>
              <img className="rounded" src={Osaka4} />
            </div>
            <div>
              <img className="rounded" src={Osaka5} />
            </div>
            <div>
              <img className="rounded" src={Osaka6} />
            </div>
          </Slider>
          <Slider className={styles.bottomslider} {...sliderSettings}>
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
              <img className="rounded" src={Osaka4} />
            </div>
            <div>
              <img className="rounded" src={Osaka5} />
            </div>
            <div>
              <img className="rounded" src={Osaka6} />
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
          <div>
            <img className="rounded" src={Osaka1} />
            <img className="rounded" src={Osaka2} />
            <img className="rounded" src={Osaka3} />
          </div>
          <div>
            <img className="rounded" src={Osaka4} />
            <img className="rounded" src={Osaka5} />
            <img className="rounded" src={Osaka6} />
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
              <a href="https://www.youtube.com/watch?v=wZZ2ipS-jZw&t=34s" target="_blank" rel="noopener noreferrer">
                <Play />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.team}>
        <div>
          <img className="rounded" src={Osaka1} />
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
            <PositionCard content={{ department: "Engineering", role: "Full-Stack Developer", location: "France • Lisbon • Remote", href: "https://google.com" }} />
          </div>
          <div>
            <PositionCard content={{ department: "Engineering", role: "Full-Stack Developer", location: "France • Lisbon • Remote", href: "https://google.com" }} />
          </div>
          <div>
            <PositionCard content={{ department: "Engineering", role: "Ethereum Developer", location: "France • Lisbon • Remote", href: "https://google.com" }} />
          </div>
          <div>
            <PositionCard content={{ department: "Engineering", role: "Back-End Developer", location: "France • Lisbon • Remote", href: "https://google.com" }} />
          </div>
          <div>
            <PositionCard content={{ department: "Engineering", role: "Product Manager", location: "France • Lisbon • Remote", href: "https://google.com" }} />
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
