import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import theMeta from "../js/helpers.js";
import { graphql } from "gatsby";
import Template from "../components/layout";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

class RootIndex extends React.Component {
  render() {
    const siteTitle = "Kleros";
    const data = get(this, "props.data.allContentfulJurorPage.edges")[0].node;
    const top = data.topBlock;
    const benefits = data.benefitsBlock;
    const benefitsCards = [
      {
        title: this.props.intl.formatMessage({
          id: "juror.section-benefits.subtitle-1"
        }),
        text: this.props.intl.formatMessage({
          id: "juror.section-benefits.paragraph-1"
        }),
        image: { file: { url: "/img/juror/benefit-1.png" } }
      },
      {
        title: this.props.intl.formatMessage({
          id: "juror.section-benefits.subtitle-2"
        }),
        text: this.props.intl.formatMessage({
          id: "juror.section-benefits.paragraph-2"
        }),
        image: { file: { url: "/img/juror/benefit-2.png" } }
      },
      {
        title: this.props.intl.formatMessage({
          id: "juror.section-benefits.subtitle-3"
        }),
        text: this.props.intl.formatMessage({
          id: "juror.section-benefits.paragraph-3"
        }),
        image: { file: { url: "/img/juror/benefit-3.png" } }
      },
      {
        title: this.props.intl.formatMessage({
          id: "juror.section-benefits.subtitle-4"
        }),
        text: this.props.intl.formatMessage({
          id: "juror.section-benefits.paragraph-4"
        }),
        image: { file: { url: "/img/juror/benefit-4.png" } }
      },
      {
        title: this.props.intl.formatMessage({
          id: "juror.section-benefits.subtitle-5"
        }),
        text: this.props.intl.formatMessage({
          id: "juror.section-benefits.paragraph-5"
        }),
        image: { file: { url: "/img/juror/benefit-5.png" } }
      },
      {
        title: this.props.intl.formatMessage({
          id: "juror.section-benefits.subtitle-6"
        }),
        text: this.props.intl.formatMessage({
          id: "juror.section-benefits.paragraph-6"
        }),
        image: { file: { url: "/img/juror/benefit-6.png" } }
      }
    ];
    const howCards = [
      {
        text: this.props.intl.formatMessage({
          id: "juror.section-how.illustration-1"
        }),
        image: { file: { url: "/img/juror/how-1.png" } }
      },
      {
        text: this.props.intl.formatMessage({
          id: "juror.section-how.illustration-2"
        }),
        image: { file: { url: "/img/juror/how-2.png" } }
      },
      {
        text: this.props.intl.formatMessage({
          id: "juror.section-how.illustration-3"
        }),
        image: { file: { url: "/img/juror/how-3.png" } }
      },
      {
        text: this.props.intl.formatMessage({
          id: "juror.section-how.illustration-4"
        }),
        image: { file: { url: "/img/juror/how-4.png" } }
      }
    ];
    const how = data.howBlock;
    const getStarted = data.getStartedBlock;
    const beJuror = data.beJurorBlock;
    console.log(howCards);
    return (
      <Template location={this.props.location}>
        <Helmet>
          <html lang="en" />
          <title>{siteTitle}</title>
        </Helmet>
        <div className="ca_paralax_background_illustration">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <section className="ca_juror_top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3"></div>
              <div className="col-12 col-md-6">
                <h1>
                  <FormattedMessage id="juror.title" />
                </h1>
                <h6>
                  <FormattedMessage id="juror.subtitle" />
                </h6>
                <a
                  href="https://blog.kleros.io/become-a-juror-blockchain-dispute-resolution-on-ethereum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ca_button ca_solid_blue"
                >
                  <FormattedMessage id="juror.button-primary" />
                </a>
              </div>
              <div className="col-12 col-md-3"></div>
            </div>
          </div>
        </section>
        <section className="ca_juror_benefit ca_wave_bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="ca_underlined">
                  <FormattedMessage id="juror.section-benefits.title" />
                </h2>
              </div>
            </div>
            {benefitsCards
              .filter((el, num) => {
                return !((num + 3) % 3);
              })
              .map((el, index) => {
                return (
                  <div className="row" key={index}>
                    <div className="col-12 col-md-1"></div>
                    {benefitsCards.map((el, num) => {
                      if (num >= index * 3 && num <= index * 3 + 2)
                        if (!((num + 2) % 3)) {
                          return (
                            <div key={num} className="col-12 col-md-4">
                              <div className="ca_img">
                                <img src={el.image.file.url} alt={el.title} />
                              </div>
                              <div className="ca_txt">
                                <h6>{el.title}</h6>
                                <p>{el.text}</p>
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <div key={num} className="col-12 col-md-3">
                              <div className="ca_img">
                                <img src={el.image.file.url} alt={el.title} />
                              </div>
                              <div className="ca_txt">
                                <h6>{el.title}</h6>
                                <p>{el.text}</p>
                              </div>
                            </div>
                          );
                        }
                    })}
                    <div className="col-12 col-md-1"></div>
                  </div>
                );
              })}
          </div>
        </section>
        <section className="ca_juror_how">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="ca_underlined">
                  <FormattedMessage id="juror.section-how.title" />
                </h2>
              </div>
            </div>
            {howCards.map((el, num) => (
              <div
                key={num}
                className={"row " + ((num + 1) % 2 ? "ca_left" : "ca_right")}
              >
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-4 ca_img">
                  <img
                    src={el.image.file.url}
                    alt={theMeta(how, "Juror > How > Title").data.data}
                  />
                </div>
                <div className="col-12 col-md-4 ca_txt">
                  <p>{el.text}</p>
                </div>
                <div className="col-12 col-md-2"></div>
              </div>
            ))}
          </div>
        </section>
        <section className="ca_juror_buy">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="ca_underlined">
                  <FormattedMessage id="juror.section-start.title" />
                </h2>
              </div>
            </div>
            <div className="row ca_right">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-4 ca_txt">
                <h6>
                  <FormattedMessage id="juror.section-start.subtitle-1" />
                </h6>
                <a
                  href="https://uniswap.ninja/"
                  target="_blank"
                  className="ca_button ca_transparent_blue"
                >
                  <FormattedMessage id="juror.section-start.button-1" />
                </a>
              </div>
              <div className="col-12 col-md-4 ca_img">
                <img
                  src="/img/juror/buy-1.png"
                  alt={
                    theMeta(getStarted, "Juror > Get Started > First > Title")
                      .data.data
                  }
                />
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
            <div className="row ca_left">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-4 ca_txt">
                <h6>
                  <FormattedMessage id="juror.section-start.subtitle-2" />
                </h6>
                <a
                  href="https://court.kleros.io/courts"
                  target="_blank"
                  className="ca_button ca_transparent_blue"
                >
                  <FormattedMessage id="juror.section-start.button-2" />
                </a>
              </div>
              <div className="col-12 col-md-4 ca_img">
                <img
                  src="/img/juror/buy-2.png"
                  alt={
                    theMeta(getStarted, "Juror > Get Started > Second > Title")
                      .data.data
                  }
                />
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
            <div className="row ca_right">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-4 ca_txt">
                <h6>
                  <FormattedMessage id="juror.section-start.subtitle-3" />{" "}
                </h6>
                <a
                  href="https://court.kleros.io/cases"
                  target="_blank"
                  className="ca_button ca_transparent_blue"
                >
                  <FormattedMessage id="juror.section-start.button-3" />{" "}
                </a>
              </div>
              <div className="col-12 col-md-4 ca_img">
                <img
                  src="/img/juror/buy-3.png"
                  alt={
                    theMeta(getStarted, "Juror > Get Started > Third > Title")
                      .data.data
                  }
                />
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
          </div>
        </section>
        <section className="ca_juror_now ca_wave_bottom ca_no_padding_top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-10">
                <h2 className="ca_underlined">
                  <FormattedMessage id="juror.section-join.title" />
                </h2>
                <a
                  target="_blank"
                  href="https://blog.kleros.io/become-a-juror-blockchain-dispute-resolution-on-ethereum/"
                  className="ca_button ca_solid_blue"
                >
                  <FormattedMessage id="juror.section-join.button-primary" />
                </a>
              </div>
              <div className="col-12 col-md-1"></div>
            </div>
          </div>
        </section>
      </Template>
    );
  }
}

export default injectIntl(RootIndex);

export const pageQuery = graphql`
  query jurorQuery {
    allContentfulJurorPage(sort: { fields: [id], order: DESC }) {
      edges {
        node {
          topBlock {
            title
            data {
              data
              childMarkdownRemark {
                html
              }
            }
            mediaData {
              file {
                url
              }
            }
            referenceData {
              __typename
              ... on Node {
                ... on ContentfulLink {
                  text {
                    text
                  }
                  url
                  extraClass
                  target
                }
                ... on ContentfulHomepageHowSteps {
                  title {
                    title
                  }
                  text {
                    text
                  }
                  image {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
          benefitsBlock {
            title
            data {
              data
              childMarkdownRemark {
                html
              }
            }
            mediaData {
              file {
                url
              }
            }
            referenceData {
              __typename
              ... on Node {
                ... on ContentfulLink {
                  text {
                    text
                  }
                  url
                  extraClass
                  target
                }
                ... on ContentfulHomepageHowSteps {
                  title {
                    title
                  }
                  text {
                    text
                  }
                  image {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
          benefitsBlockCards {
            title {
              title
            }
            text {
              text
              childMarkdownRemark {
                html
              }
            }
            image {
              file {
                url
              }
            }
          }
          howBlock {
            title
            data {
              data
              childMarkdownRemark {
                html
              }
            }
            mediaData {
              file {
                url
              }
            }
            referenceData {
              __typename
              ... on Node {
                ... on ContentfulLink {
                  text {
                    text
                  }
                  url
                  extraClass
                  target
                }
                ... on ContentfulHomepageHowSteps {
                  title {
                    title
                  }
                  text {
                    text
                  }
                  image {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
          howBlockCards {
            title {
              title
            }
            text {
              text
              childMarkdownRemark {
                html
              }
            }
            image {
              file {
                url
              }
            }
          }
          getStartedBlock {
            title
            data {
              data
              childMarkdownRemark {
                html
              }
            }
            mediaData {
              file {
                url
              }
            }
            referenceData {
              __typename
              ... on Node {
                ... on ContentfulLink {
                  text {
                    text
                  }
                  url
                  extraClass
                  target
                }
                ... on ContentfulHomepageHowSteps {
                  title {
                    title
                  }
                  text {
                    text
                  }
                  image {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
          beJurorBlock {
            title
            data {
              data
              childMarkdownRemark {
                html
              }
            }
            mediaData {
              file {
                url
              }
            }
            referenceData {
              __typename
              ... on Node {
                ... on ContentfulLink {
                  text {
                    text
                  }
                  url
                  extraClass
                  target
                }
                ... on ContentfulHomepageHowSteps {
                  title {
                    title
                  }
                  text {
                    text
                  }
                  image {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
