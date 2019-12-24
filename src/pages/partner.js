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
                <h1>
                  <FormattedMessage id="partner.title" />
                </h1>
                <h6>
                  <FormattedMessage id="partner.subtitle" />
                </h6>
                <p>
                  <FormattedMessage id="partner.paragraph" />
                </p>
                <a className="ca_button ca_solid_blue" href="">
                  <FormattedMessage id="partner.button-primary" />
                </a>
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
                  <FormattedMessage id="partner.section-benefits.title" />
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-3">
                <div className="ca_img">
                  <img src="/img/partner/benefit-1.png" alt="Earn" />
                </div>
                <div className="ca_txt">
                  <h6>
                    {" "}
                    <FormattedMessage id="partner.section-benefits.subtitle-1" />
                  </h6>
                  <p>
                    <FormattedMessage id="partner.section-benefits.paragraph-1" />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="ca_img">
                  <img src="/img/partner/benefit-2.png" alt="Resolve" />
                </div>
                <div className="ca_txt">
                  <h6>
                    <FormattedMessage id="partner.section-benefits.subtitle-2" />
                  </h6>
                  <p>
                    <FormattedMessage id="partner.section-benefits.paragraph-2" />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="ca_img">
                  <img src="/img/partner/benefit-3.png" alt="Expertise" />
                </div>
                <div className="ca_txt">
                  <h6>
                    <FormattedMessage id="partner.section-benefits.subtitle-3" />
                  </h6>
                  <p>
                    <FormattedMessage id="partner.section-benefits.paragraph-3" />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-1"></div>
            </div>
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-4">
                <div className="ca_img">
                  <img
                    src="/img/partner/benefit-4.png"
                    alt="Fit your Schedule"
                  />
                </div>
                <div className="ca_txt">
                  <h6>
                    <FormattedMessage id="partner.section-benefits.subtitle-4" />
                  </h6>
                  <p>
                    <FormattedMessage id="partner.section-benefits.paragraph-4" />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="ca_img">
                  <img src="/img/partner/benefit-5.png" alt="Private" />
                </div>
                <div className="ca_txt">
                  <h6>
                    <FormattedMessage id="partner.section-benefits.subtitle-5" />
                  </h6>
                  <p>
                    <FormattedMessage id="partner.section-benefits.paragraph-5" />
                  </p>
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
                  <FormattedMessage id="partner.section-integration.title" />
                </h2>
                <h6>
                  <FormattedMessage id="partner.section-integration.subtitle" />
                </h6>
                <a className="ca_button ca_solid_blue">
                  <FormattedMessage id="partner.section-integration.button-primary" />
                </a>
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
                  <FormattedMessage id="partner.section-partner.title" />
                </h2>
                <h6>
                  <FormattedMessage id="partner.section-partner.subtitle" />
                </h6>
                <a className="ca_button ca_solid_blue">
                  <FormattedMessage id="partner.section-partner.button-primary" />
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
