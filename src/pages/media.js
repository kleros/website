import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import Modal from "react-responsive-modal";
import theMeta from "../js/helpers.js";
import { graphql } from "gatsby";
import Template from "../components/layout";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

class RootIndex extends React.Component {
  categories = ["Featured", "Press", "Events", "Articles"];

  constructor(props) {
    super(props);
    this.state = {
      mediaFilter: {
        value: this.props.intl.formatMessage({
          id: "media.section-media.featured"
        }),
        key: "media.section-media.featured"
      },
      open: false
    };
  }
  categoryChange = (cat, e = null) => {
    if (e) e.preventDefault();
    this.setState({
      mediaFilter: {
        value: cat,
        key: Math.random()
      }
    });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  render() {
    console.log(this.state);
    var siteTitle = "Kleros";
    var media = get(this, "props.data.allContentfulMediaEntry.edges");
    var data = get(this, "props.data.allContentfulMediaPage.edges")[0].node;
    console.log(media);

    //if (this.state.mediaFilter.key == "")
    // this.categoryChange(this.categories[0]);
    // else
    //   media = media.filter(
    //     ({ node }) => this.categories.indexOf(this.state.mediaFilter.value) > -1
    //   );
    console.log(media);
    return (
      <Template location={this.props.location}>
        <Helmet>
          <html lang="en" />
          <title>{siteTitle}</title>
        </Helmet>
        <Modal
          open={this.state.open}
          onClose={this.onCloseModal}
          center
          classNames={{
            modal: "customModal"
          }}
        >
          <h2>Download Book</h2>
          <div className="ca_book">
            <a href="/book/Dispute-Resolution-Kleros.epub" target="_blank">
              EPUP FORMAT
            </a>
            <a href="/book/Dispute-Resolution-Kleros.pdf" target="_blank">
              PDF FORMAT
            </a>
            <a href="/book/Dispute-Resolution-Kleros.mobi" target="_blank">
              MOBI FORMAT
            </a>
          </div>
        </Modal>
        <section className="ca_juror_top ca_media_top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <h1>
                  <FormattedMessage id="media.title" />
                </h1>
                <h6>
                  <FormattedMessage
                    id="media.subtitle"
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
                </h6>
              </div>
              <div className="col-12 col-md-5" />
            </div>
          </div>
        </section>
        <section className="ca_media_content ca_wave_bottom_inverted">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
                <h3>
                  <h1>
                    <FormattedMessage id="media.categories" />
                  </h1>
                </h3>
                <ul>
                  <li key={0}>
                    <a
                      href="#"
                      className={
                        "media.section-media.featured" ==
                        this.state.mediaFilter.key
                          ? "ca_selected"
                          : ""
                      }
                      onClick={e =>
                        this.categoryChange(
                          this.props.intl.formatMessage({
                            id: "media.section-media.featured"
                          }),
                          e
                        )
                      }
                    >
                      {this.props.intl.formatMessage({
                        id: "media.section-media.featured"
                      })}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-9">
                <div className="row">
                  {media.map((el, num) => {
                    return (
                      <div key={num} className="col-12 col-md-4">
                        <div className="ca_img">
                          <img
                            src={
                              el.node.image === null
                                ? "/img/media/photo.png"
                                : el.node.image.file.url
                            }
                            alt="Kleros"
                          />
                        </div>
                        <div className="ca_txt">
                          <div className="ca_date">
                            {new Date(el.node.date).toLocaleDateString(
                              "en-US",
                              { month: "long", day: "numeric", year: "numeric" }
                            )}
                          </div>
                          <p>
                            {el.node.title.title
                              .split(" ")
                              .splice(0, 20)
                              .join(" ")}
                          </p>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={el.node.link}
                          >
                            {el.node.linkText}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ca_media_cta">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-1" />
              <div className="col-12 col-md-10">
                <h2 className="ca_underlined">
                  <FormattedMessage id="media.section-book.title" />
                </h2>
                <h6>
                  <FormattedMessage id="media.section-book.subtitle" />
                </h6>
                <a
                  target={
                    "_" +
                    theMeta(data.bottomBlock, "Media > Bottom > Buttons > Left")
                      .referenceData[0].target
                  }
                  href="/whitepaper_en.pdf"
                  className="ca_button ca_solid_blue"
                >
                  <FormattedMessage id="media.section-book.button-primary" />
                </a>
                <a
                  onClick={this.onOpenModal}
                  className="ca_button ca_transparent_blue ca_button_book"
                >
                  <FormattedMessage id="media.section-book.button-secondary" />
                </a>
              </div>
              <div className="col-12 col-md-1" />
            </div>
          </div>
        </section>
      </Template>
    );
  }
}

export default injectIntl(RootIndex);

export const pageQuery = graphql`
  query MediaQuery {
    allContentfulMediaEntry(sort: { fields: [date, title___id], order: DESC }) {
      edges {
        node {
          title {
            title
          }
          date
          link
          linkText
          image {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulMediaPage(sort: { fields: [id], order: DESC }) {
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
          bottomBlock {
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
