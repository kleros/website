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

  componentDidMount() {
    this.setState({
      biggerThan768px: window.matchMedia("(min-width: 768px)").matches
    });
    window
      .matchMedia("(min-width: 768px)")
      .addListener(e => this.setState({ biggerThan768px: e.matches }));
  }

  contentCards = [
    {
      title: this.props.intl.formatMessage({
        id: "token.section-token.subtitle-1"
      }),
      content: this.props.intl.formatMessage({
        id: "token.section-token.paragraph-1"
      }),
      src: "/img/token/w2b.png"
    },
    {
      title: this.props.intl.formatMessage({
        id: "token.section-token.subtitle-2"
      }),
      content: this.props.intl.formatMessage({
        id: "token.section-token.paragraph-2"
      }),
      src: "/img/token/w3.png"
    },
    {
      title: this.props.intl.formatMessage({
        id: "token.section-token.subtitle-3"
      }),
      content: this.props.intl.formatMessage({
        id: "token.section-token.paragraph-3"
      }),
      src: "/img/token/w4.png"
    },
    {
      title: this.props.intl.formatMessage({
        id: "token.section-token.subtitle-4"
      }),
      content: this.props.intl.formatMessage({
        id: "token.section-token.paragraph-4"
      }),
      src: "/img/token/w5b.png"
    }
  ];

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
    const { open } = this.state;

    const biggerThan768px = this.state.biggerThan768px || false;

    const siteTitle = "Kleros - Token Page";
    const data = get(this, "props.data.allContentfulTokenPage.edges")[0].node;
    const top = data.top;

    const contentCards = this.contentCards;

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
        <section
          className="ca_home_top ca_escrow_top"
          style={{ minHeight: "10vh" }}
        >
          <div className="container">
            <div className="row ca_txt">
              <div className="col-12 col-md-6 text-center">
                <h1 style={{ marginTop: "15%", fontSize: "420%" }}>
                  <FormattedMessage id="token.title" />
                </h1>
              </div>
              <div className="col-12 col-md-6">
                <img
                  src={theMeta(top, "Token Page Image").mediaData[0].file.url}
                  className="illustration_escrow"
                  alt="Kleros"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="ca_escrow_content ca_wave_top_inverted"
          style={{ paddingTop: "26rem" }}
        >
          <div className="container">
            {contentCards.map((el, num) => {
              return (
                <div
                  key={num}
                  className={"row " + (num % 2 == 0 ? "ca_left" : "ca_right")}
                >
                  <div className="col-12 col-md-1 one" />
                  <div className="col-12 col-md-5 two">
                    <h2>{el.title}</h2>
                    <p>{el.content}</p>
                  </div>
                  <div className="col-12 col-md-5 three">
                    <img
                      style={{ width: "100%", marginLeft: "0" }}
                      src={el.src}
                      alt="Kleros"
                    />
                  </div>
                  <div className="col-12 col-md-1 four" />
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div
            className="container"
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
            <div
              style={{
                borderRadius: "12px",
                background:
                  "linear-gradient(111.31deg, #4d00b4 19.55%, #6500b4 40.51%)",
                marginTop: "20px",
                padding: "10px",
                paddingLeft: "15px",
                paddingRight: "15px",
                marginBottom: "20px",
                display: "grid",
                grid: biggerThan768px
                  ? "1fr / 3fr [logo] 20fr [text] 7fr [button]"
                  : "2fr [text] 1fr [button] / 1fr",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  display: biggerThan768px ? "initial" : "none",
                  grid: "logo"
                }}
              >
                <img src="/img/stake_icon.svg" />
              </div>
              <div style={{ grid: "text", textAlign: "start" }}>
                <h3
                  className=""
                  style={{
                    lineHeight: "normal",
                    marginBottom: "0",
                    fontSize: biggerThan768px ? "2rem" : "4rem"
                  }}
                >
                  <FormattedMessage id="token.banner.title" />
                </h3>

                <p
                  className=""
                  style={{
                    fontSize: biggerThan768px ? "1.3rem" : "2.2rem",
                    color: "white"
                  }}
                >
                  <FormattedMessage id="token.banner.subtitle" />
                </p>
              </div>
              <div style={{ grid: "button", textAlign: "center" }}>
                <a
                  style={{
                    width: biggerThan768px ? "" : "-webkit-fill-available",
                    marginTop: biggerThan768px ? "" : "8px"
                  }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfQwhyI_IqerENalCO9GODaGQHeILproSkWkPcbv0hsSgXg4Q/viewform"
                  className="ca_button ca_solid_blue"
                >
                  <FormattedMessage id="token.banner.button-primary" />
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
  query tokenQuery {
    allContentfulTokenPage(sort: { fields: [id], order: DESC }) {
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
