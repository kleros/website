import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import Modal from "react-responsive-modal";
import theMeta from "../js/helpers.js";
import { graphql } from "gatsby";
import Template from "../components/layout";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class RootIndex extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    companyEmail: "",
    companyName: "",
    message: "",
    open: false
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() =>
        this.setState({
          firstname: "",
          lastname: "",
          companyEmail: "",
          companyName: "",
          message: "",
          open: true
        })
      )
      .catch(error => alert(error));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      firstname,
      lastname,
      companyEmail,
      companyName,
      message,
      open
    } = this.state;

    const siteTitle = "Kleros - Escrow Blockchain";
    const data = get(this, "props.data.allContentfulEscrowPage.edges")[0].node;
    const top = data.top;
    const escrow = data.escrow;
    const why = data.why;
    const contentMain = data.contentMain;
    const contentCards = data.contentCards;
    const contentPath = data.contentPath;
    const contact = data.contact;

    return (
      <Template location={this.props.location}>
        <Helmet>
          <html lang="en" />
          <title>{siteTitle}</title>
        </Helmet>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            modal: "customModal"
          }}
        >
          <h2>Message sent!</h2>
          <p>We will answer you as soon as possible.</p>
          <p>
            While waiting for an answer you can join our{" "}
            <a
              href="https://t.me/kleros"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            .
          </p>
        </Modal>
        <section className="ca_home_top ca_escrow_top">
          <div className="container">
            <div className="row ca_txt">
              <div className="col-12 col-md-6">
                <h1>
                  <FormattedMessage id="escrow.title" />
                </h1>
                <h6>
                  <FormattedMessage id="escrow.subtitle" />
                </h6>
                <a href="#more" className="ca_button ca_solid_blue">
                  <FormattedMessage id="escrow.button-primary" />
                </a>
              </div>
              <div className="col-12 col-md-6">
                <img
                  src="/img/escrow/escrow.png"
                  className="illustration_escrow"
                  alt="Kleros"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="more"
          className="ca_escrow_description ca_wave_top_inverted"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-4">
                <h2>
                  <FormattedMessage id="escrow.section-risks.title" />
                </h2>
                <div>
                  <p>
                    <FormattedMessage id="escrow.section-risks.paragraph" />
                  </p>
                  >
                </div>
              </div>
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-5">
                <img
                  src={theMeta(escrow, "Escrow Image").mediaData[0].file.url}
                  alt="Kleros"
                />
              </div>
              <div className="col-12 col-md-1"></div>
            </div>
          </div>
        </section>
        <section className="ca_escrow_why">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-5">
                <img
                  src={theMeta(why, "Escrow Why Image").mediaData[0].file.url}
                  alt="Kleros"
                />
              </div>
              <div className="col-12 col-md-5">
                <h2>
                  <FormattedMessage id="escrow.section-meet-escrow.title" />
                </h2>
                <div>
                  <p>
                    <FormattedMessage id="escrow.section-meet-escrow.paragraph" />
                  </p>
                </div>
                <a
                  href="https://escrow.kleros.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ca_button ca_transparent_blue"
                >
                  <FormattedMessage id="escrow.section-meet-escrow.button-primary" />
                </a>
              </div>
              <div className="col-12 col-md-1"></div>
            </div>
          </div>
        </section>
        <section className="ca_escrow_content ca_wave_bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8">
                <h2>
                  <FormattedMessage id="escrow.section-trustless-escrow.title" />
                </h2>
                <h6>
                  <FormattedMessage id="escrow.section-trustless-escrow.subtitle" />
                </h6>
                <img
                  src={
                    theMeta(contentMain, "Escrow Content Image").mediaData[0]
                      .file.url
                  }
                  alt="Kleros"
                />
              </div>
              <div className="col-12 col-md-2"></div>
            </div>

            <div key={0} className="row ca_left">
              <div className="col-12 col-md-1 one"></div>
              <div className="col-12 col-md-5 two">
                <h6>
                  <FormattedMessage id="escrow.section-trustless-escrow.subtitle-1" />
                </h6>
                <div>
                  <p>
                    <FormattedMessage id="escrow.section-trustless-escrow.paragraph-1" />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-5 three">
                <img src="/img/escrow/1.png" alt="Kleros" />
              </div>
              <div className="col-12 col-md-1 four"></div>
            </div>

            <div key={1} className="row ca_right">
              <div className="col-12 col-md-1 one"></div>
              <div className="col-12 col-md-5 two">
                <h6>
                  <FormattedMessage id="escrow.section-trustless-escrow.subtitle-2" />
                </h6>
                <div>
                  <p>
                    <FormattedMessage
                      id="escrow.section-trustless-escrow.paragraph-2"
                      values={{
                        anchor: children => (
                          <a
                            href="/whitepaper_en.pdf"
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

              <div className="col-12 col-md-5 three">
                <img src="/img/escrow/2.png" alt="Kleros" />
              </div>
              <div className="col-12 col-md-1 four"></div>
            </div>

            <div key={2} className="row ca_left">
              <div className="col-12 col-md-1 one"></div>
              <div className="col-12 col-md-5 two">
                <h6>
                  <FormattedMessage id="escrow.section-trustless-escrow.subtitle-3" />
                </h6>
                <div>
                  <p>
                    <FormattedMessage id="escrow.section-trustless-escrow.paragraph-3" />
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-5 three">
                <img src="/img/escrow/3.png" alt="Kleros" />
              </div>
              <div className="col-12 col-md-1 four"></div>
            </div>

            <div className="row ca_escrow_path">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-3">
                <div key={0}>
                  <div className="ca_img ca_underlined ca_stroke ca_stroke_1">
                    <img src="/img/escrow/step1.png" alt="Illustration" />
                  </div>
                  <div className="ca_txt">
                    <div>
                      <FormattedMessage id="escrow.section-trustless-escrow.illustration-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div key={1}>
                  <div className="ca_img ca_underlined ca_stroke ca_stroke_2">
                    <img src="/img/escrow/step2.png" alt="Illustration" />
                  </div>
                  <div className="ca_txt">
                    <div>
                      <FormattedMessage id="escrow.section-trustless-escrow.illustration-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div key={2}>
                  <div className="ca_img ca_underlined ca_stroke ca_stroke_3">
                    <img src="/img/escrow/step3.png" alt="Illustration" />
                  </div>
                  <div className="ca_txt">
                    <div>
                      <FormattedMessage id="escrow.section-trustless-escrow.illustration-3" />
                    </div>
                  </div>
                </div>
                ); })}
              </div>
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-4">
                <div key={3}>
                  <div className="ca_img ca_underlined ca_stroke ca_stroke_4">
                    <img src="/img/escrow/step4.png" alt="Illustration" />
                  </div>
                  <div className="ca_txt">
                    <div>
                      <FormattedMessage id="escrow.section-trustless-escrow.illustration-4" />
                    </div>
                  </div>
                </div>
                ); })}
              </div>
              <div className="col-12 col-md-4">
                <div key={4}>
                  <div className="ca_img ca_underlined ca_stroke ca_stroke_5">
                    <img src="/img/escrow/step5.png" alt="Illustration" />
                  </div>
                  <div className="ca_txt">
                    <div>
                      <FormattedMessage id="escrow.section-trustless-escrow.illustration-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
          </div>
        </section>
        <section className="ca_escrow_contact">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-8">
                <h2>
                  {" "}
                  <FormattedMessage id="oracle.section-contact-us.title" />
                </h2>
                <h6>
                  {" "}
                  <FormattedMessage id="oracle.section-contact-us.subtitle-1" />
                </h6>
                <h6>
                  {" "}
                  <FormattedMessage
                    id="oracle.section-contact-us.subtitle-2"
                    values={{
                      telegram: children => (
                        <a
                          href="https://t.me/kleros"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
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
              <div className="col-12 col-md-3"></div>
            </div>
          </div>
        </section>
      </Template>
    );
  }
}

export default injectIntl(RootIndex);

export const pageQuery = graphql`
  query escrowQuery {
    allContentfulEscrowPage(sort: { fields: [id], order: DESC }) {
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
          escrow {
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
          why {
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
          contentMain {
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
          contentCards {
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
          contentPath {
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
          contact {
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
