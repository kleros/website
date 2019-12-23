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
    const data = get(this, "props.data.allContentfulPartnerPage.edges")[0].node;
    const top = data.top;
    const benefitsText = data.benefitsText;
    const benefitsCards = data.benefitsCards;
    const integration = data.integration;
    const partner = data.partner;

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
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8">
                <h1>{theMeta(top, "Partner > Top > Title").data.data}</h1>
                <h6>{theMeta(top, "Partner > Top > Sub Title").data.data}</h6>
                <p>{theMeta(top, "Partner > Top > Description").data.data}</p>
                {theMeta(top, "Partner > Top > Button").referenceData.map(
                  (el, num) => {
                    return (
                      <a
                        href={el.url}
                        key={num}
                        target={"_" + el.target}
                        className="ca_button ca_solid_blue"
                      >
                        {el.text.text}
                      </a>
                    );
                  }
                )}
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
          </div>
        </section>
        <section className="ca_juror_benefit ca_wave_bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="ca_underlined">
                  {
                    theMeta(benefitsText, "Partner > Benefits > Title").data
                      .data
                  }
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-3">
                <div className="ca_img">
                  <img src={benefitsCards[0].image.file.url} alt="Earn" />
                </div>
                <div className="ca_txt">
                  <h6>{benefitsCards[0].title.title}</h6>
                  <p>{benefitsCards[0].text.text}</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="ca_img">
                  <img src={benefitsCards[1].image.file.url} alt="Resolve" />
                </div>
                <div className="ca_txt">
                  <h6>{benefitsCards[1].title.title}</h6>
                  <p>{benefitsCards[1].text.text}</p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="ca_img">
                  <img src={benefitsCards[2].image.file.url} alt="Expertise" />
                </div>
                <div className="ca_txt">
                  <h6>{benefitsCards[2].title.title}</h6>
                  <p>{benefitsCards[2].text.text}</p>
                </div>
              </div>
              <div className="col-12 col-md-1"></div>
            </div>
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-4">
                <div className="ca_img">
                  <img
                    src={benefitsCards[3].image.file.url}
                    alt="Fit your Schedule"
                  />
                </div>
                <div className="ca_txt">
                  <h6>{benefitsCards[3].title.title}</h6>
                  <p>{benefitsCards[3].text.text}</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="ca_img">
                  <img src={benefitsCards[4].image.file.url} alt="Private" />
                </div>
                <div className="ca_txt">
                  <h6>{benefitsCards[4].title.title}</h6>
                  <p>{benefitsCards[4].text.text}</p>
                </div>
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
          </div>
        </section>
        <section className="ca_partner_integration">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8">
                <h2 className="ca_underlined">
                  {
                    theMeta(integration, "Partner > Integration > Title").data
                      .data
                  }
                </h2>
                <h6>
                  {
                    theMeta(integration, "Partner > Integration > Sub Title")
                      .data.data
                  }
                </h6>
                {theMeta(
                  integration,
                  "Partner > Integration > Button"
                ).referenceData.map((el, num) => {
                  return (
                    <a
                      href={el.url}
                      target={"_" + el.target}
                      key={num}
                      className="ca_button ca_solid_blue"
                    >
                      {el.text.text}
                    </a>
                  );
                })}
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
          </div>
        </section>
        <section className="ca_juror_now ca_partner_now ca_no_margin">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-10">
                <h2 className="ca_underlined">
                  {theMeta(partner, "Partner > Be partner > Title").data.data}
                </h2>
                <h6>
                  {
                    theMeta(partner, "Partner > Be partner > Description").data
                      .data
                  }
                </h6>
                {theMeta(
                  partner,
                  "Partner > Be partner > Button"
                ).referenceData.map((el, num) => {
                  return (
                    <a
                      href={el.url}
                      target={"_" + el.target}
                      key={num}
                      className="ca_button ca_solid_blue"
                    >
                      {el.text.text}
                    </a>
                  );
                })}
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
  query partnerQuery {
    allContentfulPartnerPage(sort: { fields: [id], order: DESC }) {
      edges {
        node {
          top {
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
          benefitsText {
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
          benefitsCards {
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
          integration {
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
          partner {
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
