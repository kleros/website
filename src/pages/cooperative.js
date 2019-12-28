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
    const data = get(this, "props.data.allContentfulCooperativePage.edges")[0]
      .node;
    const header = data.header;
    const steps = data.steps;
    const bottom = data.bottom;

    return (
      <Template location={this.props.location}>
        <Helmet>
          <html lang="en" />
          <title>{siteTitle}</title>
        </Helmet>
        <section className="ca_juror_buy ca_cooperative_content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8">
                <h2>
                  {" "}
                  <FormattedMessage id="cooperative.title" />
                </h2>
                <span className="ca_underlined">
                  <p>
                    <FormattedMessage
                      id="cooperative.paragraph"
                      values={{
                        anchor: children => (
                          <a
                            href="https://medium.com/kleros/kleros-the-legal-structure-9cd8fca40b1c"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        )
                      }}
                    />
                  </p>
                </span>
              </div>
              <div className="col-12 col-md-2"></div>
            </div>

            <div key={0} className="row ca_left">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-4 ca_txt">
                <div className="ca_holder">
                  <p>
                    {" "}
                    <FormattedMessage id="cooperative.section-procedure.illustration-1" />
                  </p>
                  <a
                    className="ca_button ca_solid_blue"
                    href="/assets/form.pdf"
                  >
                    <FormattedMessage id="cooperative.section-procedure.button-1" />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 ca_img">
                <img
                  src="/img/cooperative/1.png"
                  alt="Download the subscription form."
                />
              </div>
              <div className="col-12 col-md-2"></div>
            </div>

            <div key={1} className="row ca_right">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-4 ca_txt">
                <div className="ca_holder">
                  <p>
                    <ul>
                      {this.props.intl
                        .formatMessage({
                          id: "cooperative.section-procedure.illustration-2"
                        })
                        .split(";")
                        .filter(str => str.length > 0)
                        .map(item => (
                          <li>{item}</li>
                        ))}
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 ca_img">
                <img
                  src="/img/cooperative/2.png"
                  alt="Download the subscription form."
                />
              </div>
              <div className="col-12 col-md-2"></div>
            </div>

            <div key={2} className="row ca_left">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-4 ca_txt">
                <div className="ca_holder">
                  <p>
                    {" "}
                    <FormattedMessage
                      id="cooperative.section-procedure.illustration-3"
                      values={{
                        email: children => (
                          <a
                            href="mailto:contact@kleros.io"
                            title="contact@kleros.io"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        )
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 ca_img">
                <img
                  src="/img/cooperative/3.png"
                  alt="Download the subscription form."
                />
              </div>
              <div className="col-12 col-md-2"></div>
            </div>

            <div className="row ca_cooperative_buttons">
              <div className="col-12">
                <a
                  href="/assets/form.pdf"
                  target={"_" + bottom[0].target}
                  className="ca_button ca_solid_blue"
                >
                  <FormattedMessage id="cooperative.section-procedure.button-primary" />
                </a>
                <a
                  href={bottom[1].url}
                  target={"_" + bottom[1].target}
                  className="ca_button ca_transparent_blue"
                >
                  <FormattedMessage id="cooperative.section-procedure.button-secondary" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Template>
    );
  }
}

export default injectIntl(RootIndex);

export const pageQuery = graphql`
  query cooperativeQuery {
    allContentfulCooperativePage(sort: { fields: [id], order: DESC }) {
      edges {
        node {
          header {
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
          bottom {
            text {
              text
              childMarkdownRemark {
                html
              }
            }
            url
            target
            extraClass
          }
          steps {
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
            link {
              text {
                text
              }
              url
              target
              extraClass
            }
          }
        }
      }
    }
  }
`;
