import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import theMeta from "../js/helpers.js";
import { graphql } from "gatsby";
import Template from "../components/layout";

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
                <h2>{theMeta(header, "Cooperative Title").data.data}</h2>
                <span
                  className="ca_underlined"
                  dangerouslySetInnerHTML={{
                    __html: theMeta(header, "Cooperative Sub Title").data
                      .childMarkdownRemark.html
                  }}
                ></span>
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
            {steps.map((el, num) => {
              return (
                <div
                  key={num}
                  className={"row " + (num % 2 == 0 ? "ca_left" : "ca_right")}
                >
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-4 ca_txt">
                    <div
                      className="ca_holder"
                      dangerouslySetInnerHTML={{
                        __html:
                          el.text.childMarkdownRemark.html +
                          (el.link
                            ? '<a href="' +
                              el.link.url +
                              '" class="ca_button ca_solid_blue" target=_' +
                              el.link.target +
                              ">" +
                              el.link.text.text +
                              "</a>"
                            : "")
                      }}
                    ></div>
                  </div>
                  <div className="col-12 col-md-4 ca_img">
                    <img
                      src={el.image ? el.image.file.url : ""}
                      alt="Download the subscription form."
                    />
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
              );
            })}
            <div className="row ca_cooperative_buttons">
              <div className="col-12">
                <a
                  href={bottom[0].url}
                  target={"_" + bottom[0].target}
                  className="ca_button ca_solid_blue"
                >
                  {bottom[0].text.text}
                </a>
                <a
                  href={bottom[1].url}
                  target={"_" + bottom[1].target}
                  className="ca_button ca_transparent_blue"
                >
                  {bottom[1].text.text}
                </a>
              </div>
            </div>
          </div>
        </section>
      </Template>
    );
  }
}

export default RootIndex;

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
