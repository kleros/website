import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import { navigateTo } from "gatsby-link";
import Modal from "react-responsive-modal";
import theMeta from "../js/helpers.js";

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

  contentCards = [
    {
      title: "Stake as a Juror",
      content:
        "First and foremost, PNK holders can stake their token in a Kleros court to indicate their availability to serve as jurors. The more they stake, the more chances they have of selection. Jurors stake their PNK in courts they have relevant skills for with a random number generator (RNG) selecting the final spots based on size of stake.",
      src:
        "https://images.ctfassets.net/di6jbl3521d8/2bU4jVrv9tC60LyKQVCkax/885925df1c04bf9eac9c3ec2f5ba9f76/w2b.png"
    },
    {
      title: "PNK Protects Against Sybil Attacks",
      content:
        "PNK is a protection against Sybil attacks. In order for an attacker to flood the juror pool, they need to buy enough PNK so that they are selected enough times to be a juror for the same case in order to change the outcome. Using a native token like PNK offers several key advantages for minimizing the risk of 51% attacks versus using an external cryptocurrency like ETH.",
      src:
        "https://images.ctfassets.net/di6jbl3521d8/4ayFRjrt8q7rzwyVlzgpwY/9e6636beb8dd884b4cce200be09386b0/w3.png"
    },
    {
      title: "PNK Makes an Attack Expensive",
      content:
        "Imagine that someone does buy 51% of the PNK in an effort to attack Kleros. Maybe their attack will be subtle and go unnoticed. However, it’s more likely the community will realize that it is under attack. In this case, Kleros would lose credibility as an arbitration platform and the value of PNK would decrease. Then the attacker would take a substantial loss on PNK bought, representing a high economic attack cost.",
      src:
        "https://images.ctfassets.net/di6jbl3521d8/2k8nvzKwHXw9IY3TWZdMVz/415a24a0ab04934795da0a13aef450ba/w4.png"
    },
    {
      title: "User Oriented",
      content:
        "Users have an interest in holding PNK tokens in order to gain voting rewards when taking part as jurors. They also have the opportunity to vote with their PNK on all Kleros Governance related proposals and votes creating an open and unbiased platform for all.",
      src:
        "https://images.ctfassets.net/di6jbl3521d8/Z3U68atBbDX6fGcxFqnWX/4a2ddcafeb24fd4d54bc38151aa0cace/w5b.png"
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
    const {
      firstname,
      lastname,
      companyEmail,
      companyName,
      message,
      open
    } = this.state;

    const siteTitle = "Kleros - Token Page";
    const data = get(this, "props.data.allContentfulTokenPage.edges")[0].node;
    console.log(data);
    const top = data.top;
    console.log(theMeta(top, "Token Page Top Button"));

    const escrow = data.escrow;
    const why = data.why;
    const contentCards = this.contentCards;
    const contentPath = data.contentPath;
    const contact = data.contact;

    return (
      <div>
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
            <a href="https://t.me/kleros" target="_blank">
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
                  {theMeta(top, "Token Page Top Title").data.data}
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

        <section className="ca_escrow_contact">
          <div className="container" style={{ height: "200px" }}>
            <div className="row d-flex justify-content-center">
              <div
                className="card w-100 "
                style={{
                  borderRadius: "12px",
                  background:
                    "linear-gradient(111.31deg, #4d00b4 19.55%, #6500b4 40.51%)",
                  marginTop: "4%"
                }}
              >
                <div className="card-body" style={{ color: "white" }}>
                  <div className="row" style={{ alignItems: "center" }}>
                    <div className="col-12 col-md-1">
                      <img src="/img/stake_icon.svg" />
                    </div>
                    <div className="col-12 col-md-8">
                      <h3
                        className="card-title"
                        style={{ lineHeight: "normal", marginBottom: "0" }}
                      >
                        If you are interested in acquiring PNK token OTC, get in
                        touch
                      </h3>

                      <p
                        className="card-text ca-text"
                        style={{ fontSize: "130%" }}
                      >
                        Note that in order to ensure fairness in token
                        distribution, tokens are sold to buyers at prices
                        reflected by the market.
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-center">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfQwhyI_IqerENalCO9GODaGQHeILproSkWkPcbv0hsSgXg4Q/viewform"
                        className="btn btn-lg btn-primary btn-lg"
                      >
                        Get in touch here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RootIndex;

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
