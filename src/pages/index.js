import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sash from "../components/sash";
import DisputeCard from "src/components/dispute-card";
import HorizontalCard from "../components/horizontal-card";
import VerticalCard from "../components/vertical-card";
import Sponsors from "../components/sponsors";
import Contact from "../components/contact";
import { Badge, Col, Container, Row, Card, Button, Spinner } from "react-bootstrap";
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/index.module.css";
import Court from "../assets/svgs/kleros.svg";
import Curate from "../assets/svgs/curate.svg";
import Escrow from "../assets/svgs/escrow.svg";
import T2CR from "../assets/svgs/t2cr.svg";
import Resolver from "../assets/svgs/dispute-resolver.svg";
import Ninja from "../assets/svgs/ninja.svg";
import Linguo from "../assets/svgs/linguo.svg";
import CU from "../assets/svgs/kleros.svg";
import CasesDisputes from "src/assets/svgs/illustration-home.svg";
import CryptoUnlocked from "src/assets/images/crypto-unlocked.png";
import Realitio from "src/assets/images/realitio.png";
import Omen from "src/assets/images/omen.png";
import Scales from "src/assets/svgs/icon-scales.svg";
import Epsilon from "src/assets/svgs/icon-epsilon.svg";
import Kleros from "src/assets/svgs/icon-kleros.svg";
import Gavel from "src/assets/svgs/icon-gavel.svg";
import Handshake from "src/assets/svgs/icon-handshake.svg";
import copyright from "src/assets/svgs/icon-copyright.svg";
import eCommerce from "src/assets/svgs/icon-e-commerce.svg";
import finance from "src/assets/svgs/icon-finance.svg";
import freelancing from "src/assets/svgs/icon-freelance.svg";
import insurance from "src/assets/svgs/icon-shield.svg";
import moderation from "src/assets/svgs/icon-moderation.svg";
import plus from "src/assets/svgs/icon-plus.svg";
import smallClaims from "src/assets/svgs/icon-gavel-2.svg";
import token from "src/assets/svgs/icon-token.svg";
import restaurant from "src/assets/svgs/icon-fork-n-knife.svg";
import hotel from "src/assets/svgs/icon-hotel.svg";
import spam from "src/assets/svgs/icon-spam.svg";
import social from "src/assets/svgs/icon-speaker.svg";
import bounty from "src/assets/svgs/icon-bounty.svg";
import otc from "src/assets/svgs/icon-otc.svg";
import crowdfunding from "src/assets/svgs/icon-crowdfunding.svg";
import payroll from "src/assets/svgs/icon-payroll.svg";
import www from "src/assets/svgs/icon-www.svg";
import IndexHero from "src/assets/svgs/court-hero.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Archon from "@kleros/archon";
import BigNumber from "bignumber.js";

import Web3 from "web3";
import * as EthereumInterface from "src/ethereum/interface";
import networkMap from "src/ethereum/network-contract-mapping";

const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
const KLEROS_LIQUID = "0x988b3a538b618c7a603e1c11ab82cd16dbe28069";
const IPFS_GATEWAY = "https://ipfs.kleros.io";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
};

const PERIODS = ["Evidence", "Commit", "Vote", "Appeal", "Execution"];

class IndexPage extends React.Component {
  constructor(props) {
    console.log(process.env.GATSBY_WEB3_PROVIDER_URL);
    super(props);
    this.state = { archon: new Archon(process.env.GATSBY_WEB3_PROVIDER_URL, IPFS_GATEWAY) };
  }

  getCourts = async (subcourtID) => EthereumInterface.call("KlerosLiquid", KLEROS_LIQUID, "courts", subcourtID);

  estimateGasOfGetSubcourt = (subcourtID) => EthereumInterface.estimateGas("KlerosLiquid", "0x988b3a538b618c7a603e1c11ab82cd16dbe28069", ADDRESS_ZERO, 0, "getSubcourt", subcourtID);
  getSubcourt = async (subcourtID) => EthereumInterface.call("KlerosLiquid", "0x988b3a538b618c7a603e1c11ab82cd16dbe28069", "getSubcourt", subcourtID);

  getSubCourtDetails = async (subcourtID) => EthereumInterface.call("PolicyRegistry", "0xCf1f07713d5193FaE5c1653C9f61953D048BECe4", "policies", subcourtID);

  getArbitratorDispute = async (arbitratorDisputeID) => EthereumInterface.call("KlerosLiquid", "0x988b3a538b618c7a603e1c11ab82cd16dbe28069", "disputes", arbitratorDisputeID);

  getMetaEvidence = (arbitrableAddress, arbitratorDisputeID) =>
    this.state.archon.arbitrable
      .getDispute(arbitrableAddress, "0x988b3a538b618c7a603e1c11ab82cd16dbe28069", arbitratorDisputeID)
      .then((response) => EthereumInterface.contractInstance("IEvidence", arbitrableAddress).getPastEvents("MetaEvidence", { fromBlock: 7303699, toBlock: "latest", filter: { _metaEvidenceID: response.metaEvidenceID } }))
      .then((metaevidence) => fetch("https://ipfs.kleros.io" + metaevidence[0].returnValues._evidence))
      .then((response) => response.json());

  getOpenDisputesOnCourt = async () => {
    const contractInstance = EthereumInterface.contractInstance("KlerosLiquid", "0x988b3a538b618c7a603e1c11ab82cd16dbe28069");

    const drawEvents = await contractInstance.getPastEvents("Draw", { fromBlock: 10400000, toBlock: "latest" });

    const openDisputeIDs = [...new Set(drawEvents.map((result) => result.returnValues._disputeID))];

    openDisputeIDs
      .sort()
      .slice(-9)
      .map((arbitratorDispute) => {
        this.getArbitratorDispute(arbitratorDispute).then(async (arbitratorDisputeDetails) => {
          this.setState((prevState) => ({ ...prevState, disputes: { ...prevState.disputes, [arbitratorDispute]: arbitratorDisputeDetails } }));
          this.getMetaEvidence(arbitratorDisputeDetails.arbitrated, arbitratorDispute)
            .then((metaevidence) => {
              console.log(metaevidence);
              this.setState((prevState) => ({ ...prevState, metaEvidences: { ...prevState.metaEvidences, [arbitratorDispute]: metaevidence } }));
            })
            .catch((error) => {
              console.error(error);
            });
        });
      });
  };

  getSubcourts = async () => {
    let counter = 0,
      subcourts = [],
      subcourtsExtra = [],
      subcourtDetails = [],
      subcourtURIs = [];

    while (true) {
      try {
        await this.estimateGasOfGetSubcourt(counter++);
      } catch (err) {
        break;
      }
    }

    for (var i = 0; i < counter - 1; i++) {
      subcourtURIs[i] = this.getSubCourtDetails(i);
      subcourts[i] = this.getSubcourt(i);
      subcourtsExtra[i] = this.getCourts(i);
    }

    await this.setState({
      subcourtDetails: await Promise.all(
        subcourtURIs.map((promise) =>
          promise.then((subcourtURI) => {
            if (subcourtURI.length > 0) {
              if (subcourtURI.includes("http")) {
                return fetch(subcourtURI).then((response) => response.json());
              } else {
                return fetch("https://ipfs.kleros.io" + subcourtURI).then((response) => response.json());
              }
            }
          })
        )
      ),
      subcourtsLoading: false,
      subcourts: await Promise.all(subcourts),
      subcourtsExtra: await Promise.all(subcourtsExtra),
    });
  };

  async componentDidMount() {
    this.getSubcourts();
    await this.getOpenDisputesOnCourt();
  }
  render() {
    const { intl } = this.props;

    const { subcourtDetails, metaEvidences, disputes, subcourtsExtra, subcourts, subcourtsLoading } = this.state;

    console.log(this.state);
    return (
      <Layout>
        <SEO lang={intl.locale} title="Home" />
        <Container className={styles.index} fluid>
          <section className={styles.hero}>
            <h1>
              <FormattedMessage id="index.section-hero.h1" />
            </h1>
            <h2>
              <FormattedMessage id="index.section-hero.h2" />
            </h2>

            <Container className={styles.buttonWrapper}>
              <a className="btn btn-primary" href="https://court.kleros.io" rel="noopener noreferrer" target="blank">
                <FormattedMessage id="index.section-hero.button-primary" />
              </a>
              <Link className="btn btn-secondary" to="/integrations">
                <FormattedMessage id="index.section-hero.button-secondary" />
              </Link>
            </Container>
            <IndexHero />
          </section>
          <section className="light">
            <Sash
              as="div"
              figures={[
                {
                  icon: Scales,
                  text: intl.formatMessage({
                    id: "index.sash.first.paragraph",
                  }),
                  title: intl.formatMessage({
                    id: "index.sash.first.title",
                  }),
                },
                {
                  icon: Epsilon,
                  text: intl.formatMessage({
                    id: "index.sash.second.paragraph",
                  }),
                  title: intl.formatMessage({
                    id: "index.sash.second.title",
                  }),
                },
                {
                  icon: Kleros,
                  text: intl.formatMessage({
                    id: "index.sash.third.paragraph",
                  }),
                  title: intl.formatMessage({
                    id: "index.sash.third.title",
                  }),
                },
              ]}
            />
          </section>
          <section className={styles.disputes}>
            <h1>
              <FormattedMessage id="index.section-disputes.title" />
            </h1>
            <h2>
              <FormattedMessage id="index.section-disputes.subtitle" />
            </h2>
            <div className={styles.disputesContent}>
              {!(subcourtDetails && Object.keys(disputes).length == Object.keys(metaEvidences).length) && (
                <>
                  <div className={styles.loading}><FormattedMessage id="index.section-disputes.loading" /></div>
                  <Spinner className={styles.spinner} animation="grow" />
                </>
              )}
              {subcourtDetails && Object.keys(disputes).length == Object.keys(metaEvidences).length && (
                <Slider {...sliderSettings}>
                  {Object.entries(this.state.disputes).map((d, i) => (
                    <div key={i}>
                      <DisputeCard
                        content={{
                          court: subcourtDetails[d[1].subcourtID].name,
                          id: d[0],
                          title: metaEvidences[d[0]] ? metaEvidences[d[0]].title : "asd",
                          reward: new BigNumber(subcourtsExtra[d[1].subcourtID].feeForJuror).div(new BigNumber("10").pow(new BigNumber("18"))).toString(),
                          stake: new BigNumber(subcourtsExtra[d[1].subcourtID].minStake)
                            .times(new BigNumber(subcourtsExtra[d[1].subcourtID].alpha))
                            .div("10000")
                            .div(new BigNumber("10").pow(new BigNumber("18")))
                            .toString(),
                          period: PERIODS[parseInt(d[1].period)],
                          deadline: new BigNumber("1000").times(new BigNumber(d[1].lastPeriodChange).plus(new BigNumber(subcourts[d[1].subcourtID].timesPerPeriod[d[1].period]))).toNumber(),
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </section>
          <section className={styles.usecases}>
            <div className="iframe-container">
              <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0" height="315" src="https://www.youtube.com/embed/NuSps_2wMQ4" width="560" />
            </div>
          </section>
          <hr />
          <section>
            <h1>{intl.formatMessage({ id: "index.section-use-case.h1" })}</h1>
            <h2>{intl.formatMessage({ id: "index.section-use-case.h2" })}</h2>
            <div className={styles.cards}>
              <HorizontalCard
                content={{
                  icon: smallClaims,
                  text: intl.formatMessage({ id: "index.section-use-case.cards.1" }),
                }}
              />
              <HorizontalCard
                content={{
                  icon: insurance,
                  text: intl.formatMessage({ id: "index.section-use-case.cards.2" }),
                }}
              />
              <HorizontalCard
                content={{
                  icon: eCommerce,
                  text: intl.formatMessage({ id: "index.section-use-case.cards.3" }),
                }}
              />
              <HorizontalCard
                content={{
                  icon: finance,
                  text: intl.formatMessage({ id: "index.section-use-case.cards.4" }),
                }}
              />
              <HorizontalCard
                content={{
                  icon: freelancing,
                  text: intl.formatMessage({ id: "index.section-use-case.cards.5" }),
                }}
              />
              <HorizontalCard
                content={{
                  icon: token,
                  text: intl.formatMessage({ id: "index.section-use-case.cards.6" }),
                }}
              />
              <HorizontalCard
                content={{
                  icon: moderation,
                  text: intl.formatMessage({ id: "index.section-use-case.cards.7" }),
                }}
              />
              <HorizontalCard
                content={{
                  icon: copyright,
                  text: intl.formatMessage({ id: "index.section-use-case.cards.8" }),
                }}
              />
              <HorizontalCard
                content={{
                  icon: plus,
                  text: intl.formatMessage({ id: "index.section-use-case.cards.9" }),
                }}
              />
            </div>
          </section>
          <section>
            <h1>{intl.formatMessage({ id: "index.section-3.h1" })}</h1>
            <h2>{intl.formatMessage({ id: "index.section-3.h2" })}</h2>
            <CasesDisputes />
          </section>
          <div className={styles.products}>
            <section>
              <div className="px-3 py-3 text-center">
                <h1 className={styles.productsTitle}>{intl.formatMessage({ id: "index.products.h1" })}</h1>
                <div className="d-inline-block">
                  <a href="https://court.kleros.io">
                    <Badge>
                      <Court />
                    </Badge>
                  </a>
                  <p className="text-center text-purple-darker ">Court</p>
                </div>
                <div className="d-inline-block">
                  <a href="https://escrow.kleros.io">
                    <Badge>
                      <Escrow />
                    </Badge>
                  </a>
                  <p className="text-center text-purple-darker ">Escrow</p>
                </div>

                <div className="d-inline-block">
                  <a href="https://tokens.kleros.io">
                    <Badge>
                      <T2CR />
                    </Badge>
                  </a>
                  <p className="text-center text-purple-darker ">T2CR</p>
                </div>
                <div className="d-inline-block">
                  <a href="https://curate.kleros.io">
                    <Badge>
                      <Curate />
                    </Badge>
                  </a>
                  <p className="text-center text-purple-darker ">Curate</p>
                </div>

                <div className="d-inline-block">
                  <a href="https://resolve.kleros.io">
                    <Badge>
                      <Resolver />
                    </Badge>
                  </a>
                  <p className="text-center text-purple-darker ">Dispute Resolver</p>
                </div>
                <div className="d-inline-block">
                  <a href="https://uniswap.ninja">
                    <Badge>
                      <Ninja />
                    </Badge>
                  </a>
                  <p className="text-center text-purple-darker ">Uniswap Ninja</p>
                </div>
                <div className="d-inline-block">
                  <a href="https://cryptounlocked.wetrust.io/">
                    <Badge>
                      <span className={styles.helper} />
                      <img className="p-1" src={CryptoUnlocked} />
                    </Badge>
                  </a>
                  <p className="text-center text-purple-darker ">Crypto Unlocked</p>
                </div>
                <div className="d-inline-block">
                  <a href="https://realit.io/">
                    <Badge>
                      <img className="p-2" src={Realitio} />
                    </Badge>
                  </a>
                  <p className="text-center text-purple-darker  ">Realitio</p>
                </div>
                <div className="d-inline-block">
                  <a href="https://gateway.ipfs.io/ipfs/QmbB3wA5R2PR8s87pJRSUCcBHRxAtfFtkSWmVWEcHsaFeV/#/0x592af74865799e1ed509afef002a6eca26e1caa2">
                    <Badge>
                      <img className="p-2" src={Omen} />
                    </Badge>
                  </a>
                  <p className="text-center text-purple-darker  ">Omen</p>
                </div>
                <div className="d-inline-block">
                  <a href="https://linguo.kleros.io">
                    <Badge>
                      <Linguo />
                    </Badge>
                  </a>
                  <p className="text-center text-purple-darker ">Linguo*</p>
                </div>
                <br />
                <small>
                  <FormattedMessage id="index.products.small" />
                </small>
              </div>
            </section>
          </div>
          <section>
            <h1 className="mb-5">Join the Justice Revolution</h1>
            <Container className="p-0" fluid>
              <Row>
                <Col className="mt-5" md>
                  <VerticalCard
                    content={{
                      button: {
                        href: "https://court.kleros.io",
                        text: intl.formatMessage({
                          id: "index.section-4.card-1.button",
                        }),
                        variant: "primary",
                      },
                      icon: Gavel,
                      paragraph: intl.formatMessage({
                        id: "index.section-4.card-1.paragraph",
                      }),
                      title: intl.formatMessage({
                        id: "index.section-4.card-1.title",
                      }),
                    }}
                  />
                </Col>
                <Col className="mt-5" md>
                  <VerticalCard
                    content={{
                      button: {
                        href: "/integrations",
                        text: intl.formatMessage({
                          id: "index.section-4.card-2.button",
                        }),
                        variant: "secondary",
                      },
                      icon: Handshake,
                      paragraph: intl.formatMessage({
                        id: "index.section-4.card-2.paragraph",
                      }),
                      title: intl.formatMessage({
                        id: "index.section-4.card-2.title",
                      }),
                    }}
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <hr />
          <section>
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
}

export default injectIntl(IndexPage);
