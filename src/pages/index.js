import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import theMeta from "../js/helpers.js";
import { graphql } from "gatsby";
import Template from "../components/layout";
import Slider from "react-slick";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

class RootIndex extends React.Component {
  render() {
    const siteTitle = "Kleros";
    const apiBlog = get(this, "props.data.allKlerosBlogPosts.edges")[0].node;
    const apiTwitter = get(
      this,
      "props.data.allTwitterSearchTweetsKleros.edges"
    )[0].node;
    console.log(apiTwitter);
    const apiGit = get(this, "props.data.allKlerosGitCommits.edges")[0].node;
    const apiForum = get(this, "props.data.allKlerosForumTopic.edges")[0].node;

    const data = get(this, "props.data.allContentfulHomepage.edges")[0].node;
    const top = data.topBlock;

    var theSubtitle = function(subTitle) {
      return subTitle.split("\n").map((el, num) => {
        return <h6 key={num}>{el}</h6>;
      });
    };
    return (
      <Template location={this.props.location}>
        <div>
          <Helmet>
            <html lang="en" />
            <title>{siteTitle}</title>
          </Helmet>
          <section className="ca_home_top">
            <div className="container">
              <div className="row ca_txt">
                <div className="col-12 col-md-6">
                  <h1>
                    <FormattedMessage id="index.title" />
                  </h1>
                  <h6>
                    <FormattedMessage id="index.subtitle" />
                  </h6>

                  <Link
                    to="/juror"
                    className="ca_button ca_solid_blue"
                    target="_self"
                  >
                    <FormattedMessage id="index.button-juror" />
                  </Link>

                  <Link
                    to="/partner"
                    className="ca_button ca_transparent_blue"
                    target="_self"
                  >
                    <FormattedMessage id="index.button-partner" />
                  </Link>
                  <a
                    href="https://blog.kleros.io/kleros-token-sale-announcement-january-11-2020/"
                    className="ca_button ca_transparent_blue"
                  >
                    <FormattedMessage id="index.button-token-sale" />
                  </a>
                </div>
                <div className="col-12 col-md-6 illustration_holder">
                  <img
                    src={
                      theMeta(top, "Homepage > Top > Title").mediaData[0].file
                        .url
                    }
                    className="illustration_holder_img"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="ca_home_social">
            <div className="container">
              <div className="row ca_social">
                <div className="col-12 col-md-3">
                  <div className="ca_social_holder">
                    <div className="card_header">
                      <div>
                        <img
                          src="/img/homepage/twt.png"
                          className="card_header_icon"
                          alt="Icon"
                        />
                      </div>
                      <div className="card_header_title">Twitter</div>
                      <div className="card_header_date">
                        {new Date(apiTwitter.created_at).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </div>
                    </div>
                    <p>
                      {apiTwitter.full_text
                        .replace(/<(?:.|\n)*?>/gm, "")
                        .trim()
                        .split(" ")
                        .slice(0, 7)
                        .join(" ") + "..."}
                    </p>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={
                        "https://twitter.com/Kleros_io/status/" +
                        apiTwitter.id_str
                      }
                    >
                      <FormattedMessage id="index.button-twitter" />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={
                        "https://twitter.com/Kleros_io/status/" +
                        apiTwitter.id_str
                      }
                    />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="ca_social_holder">
                    <div className="card_header">
                      <div>
                        <img
                          src="/img/homepage/blg.png"
                          className="card_header_icon"
                          alt="Icon"
                        />
                      </div>
                      <div className="card_header_title">Blog</div>
                      <div className="card_header_date">
                        {new Date(apiBlog.post_date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                          }
                        )}
                      </div>
                    </div>
                    <p>
                      {apiBlog.post_title
                        .replace(/<(?:.|\n)*?>/gm, "")
                        .trim()
                        .split(" ")
                        .slice(0, 7)
                        .join(" ") + "..."}
                    </p>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={"https://blog.kleros.io/" + apiBlog.post_url}
                    >
                      <FormattedMessage id="index.button-blog" />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={"https://blog.kleros.io/" + apiBlog.post_url}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="ca_social_holder">
                    <div className="card_header">
                      <div>
                        <img
                          src="/img/homepage/gth.png"
                          className="card_header_icon"
                          alt="Icon"
                        />
                      </div>
                      <div className="card_header_title">Github</div>
                      <div className="card_header_date">
                        {new Date(apiGit.commit_date).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </div>
                    </div>
                    <p>
                      {apiGit.commit_text
                        .replace(/<(?:.|\n)*?>/gm, "")
                        .trim()
                        .split(" ")
                        .slice(0, 7)
                        .join(" ") + "..."}
                    </p>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={apiGit.commit_url}
                    >
                      <FormattedMessage id="index.button-github" />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={apiGit.commit_url}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="ca_social_holder">
                    <div className="card_header">
                      <div>
                        <img
                          src="/img/homepage/frm.png"
                          className="card_header_icon"
                          alt="Icon"
                        />
                      </div>
                      <div className="card_header_title">Forum</div>
                      <div className="card_header_date">
                        {new Date(apiForum.created_at).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </div>
                    </div>
                    <p>
                      {apiForum.topic_title
                        .replace(/<(?:.|\n)*?>/gm, "")
                        .trim()
                        .split(" ")
                        .slice(0, 7)
                        .join(" ") + "..."}
                    </p>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={
                        "https://forum.kleros.io/t/" +
                        apiForum.topic_slug +
                        "/" +
                        apiForum.topic_id
                      }
                    >
                      <FormattedMessage id="index.button-forum" />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={
                        "https://forum.kleros.io/t/" +
                        apiForum.topic_slug +
                        "/" +
                        apiForum.topic_id
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ca_home_why">
            <div className="container">
              <div className="row ca_text">
                <div className="col-12 col-md-1" />
                <div className="col-12 col-md-10">
                  <h2>
                    <FormattedMessage id="index.section-example-dispute.title" />
                  </h2>
                </div>
                <div className="col-12 col-md-1" />
              </div>
              <div className="row ca_img">
                <div className="col-12 col-md-2" />
                <div className="col-12 col-md-8">
                  <div className="ca_why_block">
                    <img
                      src="/img/homepage/why1.png"
                      alt={
                        <FormattedMessage id="index.section-example-dispute.title" />
                      }
                    />
                    <div className="ca_txt">
                      <p>
                        <FormattedMessage id="index.section-example-dispute.paragraph-1" />
                      </p>
                    </div>
                    <div className="ca_txt">
                      <p>
                        <FormattedMessage id="index.section-example-dispute.paragraph-2" />
                      </p>
                    </div>
                    <div className="ca_txt">
                      <p>
                        <FormattedMessage id="index.section-example-dispute.paragraph-3" />
                      </p>
                    </div>
                  </div>
                  <div className="ca_why_block">
                    <img
                      src="/img/homepage/why2.png"
                      alt={
                        <FormattedMessage id="index.section-example-dispute.title" />
                      }
                    />
                    <div className="ca_txt">
                      <p>
                        <FormattedMessage id="index.section-example-dispute.paragraph-4" />
                      </p>
                    </div>
                    <div className="ca_txt">
                      <p>
                        <FormattedMessage id="index.section-example-dispute.paragraph-5" />
                      </p>
                    </div>
                    <div className="ca_txt">
                      <p>
                        <FormattedMessage id="index.section-example-dispute.paragraph-6" />
                      </p>
                    </div>
                  </div>
                  <div className="ca_why_block">
                    <a
                      href="https://www.youtube.com/watch?v=NuSps_2wMQ4&t=1s"
                      className="ca_button ca_solid_blue ca_open_video_popup"
                      data-video-url="https://www.youtube.com/watch?v=NuSps_2wMQ4&t=1s"
                    >
                      <FormattedMessage id="index.section-example-dispute.button-primary" />
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-2" />
              </div>
            </div>
          </section>
          <section className="ca_home_problem ca_wave_bottom">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-2" />
                <div className="col-12 col-md-8">
                  <h2 className="ca_underlined">
                    <FormattedMessage id="index.section-internet-economy.title" />
                  </h2>
                  <h6>
                    <FormattedMessage id="index.section-internet-economy.subtitle" />
                  </h6>
                </div>
                <div className="col-12 col-md-2" />
              </div>
            </div>
          </section>
          <section className="ca_home_solution">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="ca_underlined">
                    <FormattedMessage id="index.section-why-kleros.title" />
                  </h2>
                </div>
              </div>
              <div className="row ca_left">
                <div className="col-12 col-md-1" />
                <div className="col-12 col-md-6">
                  <Slider
                    className="ca_solution_slider ca_solution_slider_dots"
                    dots={true}
                    arrows={false}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={3000}
                    speed={300}
                    slidesToShow={1}
                    slidesToScroll={1}
                  >
                    <div key="1" className="ca_slide">
                      <img src="/img/homepage/welcome.png" alt="Why Kleros?" />
                    </div>
                    <div key="2" className="ca_slide">
                      <img
                        src="/img/homepage/athena_home.jpg"
                        alt={"Why Kleros?"}
                      />
                    </div>
                    <div key="3" className="ca_slide">
                      <img src="/img/homepage/Escrow.jpg" alt="Why Kleros?" />
                    </div>
                  </Slider>
                  <div className="ca_solution_slider_dots" />
                </div>
                <div className="col-12 col-md-4">
                  <h6>
                    <FormattedMessage id="index.section-why-kleros.subtitle-1" />
                  </h6>
                  <p>
                    <FormattedMessage id="index.section-why-kleros.paragraph-1" />
                  </p>
                </div>
                <div className="col-12 col-md-1" />
              </div>
              <div className="row ca_right">
                <div className="col-12 col-md-1" />
                <div className="col-12 col-md-6">
                  <img src="/img/homepage/solution1.png" alt="Why Kleros?" />
                </div>
                <div className="col-12 col-md-4">
                  <h6>
                    <FormattedMessage id="index.section-why-kleros.subtitle-2" />
                  </h6>
                  <p>
                    <FormattedMessage
                      id="index.section-why-kleros.paragraph-2"
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
                  <Link
                    to="/juror"
                    className="ca_button ca_solid_blue"
                    target="_self"
                  >
                    <FormattedMessage id="index.button-juror" />
                  </Link>

                  <Link
                    to="/partner"
                    className="ca_button ca_transparent_blue"
                    target="_self"
                  >
                    <FormattedMessage id="index.button-partner" />
                  </Link>
                </div>
                <div className="col-12 col-md-1" />
              </div>
              <div className="row ca_left">
                <div className="col-12 col-md-1" />
                <div className="col-12 col-md-6">
                  <img
                    src="/img/homepage/solution2.png"
                    alt="Why Does Kleros Need a Token?"
                  />
                </div>
                <div className="col-12 col-md-4">
                  <h6>
                    <FormattedMessage id="index.section-why-kleros.subtitle-3" />
                  </h6>
                  <p>
                    <FormattedMessage
                      id="index.section-why-kleros.paragraph-3"
                      values={{
                        anchor: children => (
                          <a
                            href="https://medium.com/kleros/why-kleros-needs-a-native-token-5c6c6e39cdfe"
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
                <div className="col-12 col-md-1" />
              </div>
            </div>
          </section>
          <section className="ca_home_solve ca_wave_top">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-2" />
                <div className="col-12 col-md-8">
                  <h2 className="ca_underlined">
                    <FormattedMessage id="index.section-how-does-it-work.title" />
                  </h2>
                </div>
                <div className="col-12 col-md-2" />
              </div>

              <div
                key={0}
                className={"row " + (0 % 2 ? "ca_right" : "ca_left")}
              >
                <div className="col-12 col-md-2" />
                <div className="col-12 col-md-4 ca_img">
                  <img src="/img/homepage/solve1.png" alt="Contract" />
                </div>
                <div className="col-12 col-md-4">
                  <h6>
                    {" "}
                    <FormattedMessage id="index.section-how-does-it-work.subtitle-1" />
                  </h6>
                  <p>
                    <FormattedMessage id="index.section-how-does-it-work.paragraph-1" />
                  </p>
                </div>
                <div className="col-12 col-md-2" />
              </div>
              <div
                key={1}
                className={"row " + (1 % 2 ? "ca_right" : "ca_left")}
              >
                <div className="col-12 col-md-2" />
                <div className="col-12 col-md-4 ca_img">
                  <img src="/img/homepage/solve2.png" alt="Dispute" />
                </div>
                <div className="col-12 col-md-4">
                  <h6>
                    {" "}
                    <FormattedMessage id="index.section-how-does-it-work.subtitle-2" />
                  </h6>
                  <p>
                    <FormattedMessage id="index.section-how-does-it-work.paragraph-2" />
                  </p>
                </div>
                <div className="col-12 col-md-2" />
              </div>
              <div
                key={2}
                className={"row " + (0 % 2 ? "ca_right" : "ca_left")}
              >
                <div className="col-12 col-md-2" />
                <div className="col-12 col-md-4 ca_img">
                  <img src="/img/homepage/solve3.png" alt="Selection" />
                </div>
                <div className="col-12 col-md-4">
                  <h6>
                    {" "}
                    <FormattedMessage id="index.section-how-does-it-work.subtitle-3" />
                  </h6>
                  <p>
                    {" "}
                    <FormattedMessage id="index.section-how-does-it-work.paragraph-3" />
                  </p>
                </div>
                <div className="col-12 col-md-2" />
              </div>
              <div
                key={3}
                className={"row " + (1 % 2 ? "ca_right" : "ca_left")}
              >
                <div className="col-12 col-md-2" />
                <div className="col-12 col-md-4 ca_img">
                  <img src="/img/homepage/solve4.png" alt="Enforcement" />
                </div>
                <div className="col-12 col-md-4">
                  <h6>
                    {" "}
                    <FormattedMessage id="index.section-how-does-it-work.subtitle-4" />
                  </h6>
                  <p>
                    <FormattedMessage id="index.section-how-does-it-work.paragraph-4" />
                  </p>
                </div>
                <div className="col-12 col-md-2" />
              </div>

              <div className="row ca_for_button">
                <div className="col-12">
                  <a
                    href="https://www.youtube.com/watch?v=NuSps_2wMQ4&t=1s"
                    className="ca_button ca_solid_blue ca_open_video_popup"
                    data-video-url="https://www.youtube.com/watch?v=NuSps_2wMQ4&t=1s"
                  >
                    <FormattedMessage id="index.section-how-does-it-work.button-primary" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="ca_home_join">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="ca_underlined">
                    {" "}
                    <FormattedMessage id="index.section-justice-revolution.title" />
                  </h2>
                </div>
                <div className="col-12 col-md-2" />
                <div className="col-12 col-md-4">
                  <div className="ca_img">
                    <img src="/img/homepage/join1.png" alt="Join as a Juror" />
                  </div>
                  <div className="ca_txt">
                    <h6>
                      <FormattedMessage id="index.section-justice-revolution.subtitle-1" />
                    </h6>
                    <p>
                      {" "}
                      <FormattedMessage id="index.section-justice-revolution.paragraph-1" />
                    </p>

                    <Link to="/juror" className="ca_button ca_transparent_blue">
                      <FormattedMessage id="index.section-justice-revolution.button-1" />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="ca_img">
                    <img src="/img/homepage/join2.png" alt="Become a Partner" />
                  </div>
                  <div className="ca_txt">
                    <h6>
                      {" "}
                      <FormattedMessage id="index.section-justice-revolution.subtitle-2" />
                    </h6>
                    <p>
                      <FormattedMessage id="index.section-justice-revolution.paragraph-2" />
                    </p>

                    <Link
                      to="/partner"
                      className="ca_button ca_transparent_blue"
                      target="_self"
                    >
                      <FormattedMessage id="index.section-justice-revolution.button-2" />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-2" />
              </div>
            </div>
          </section>
          <section className="ca_home_partners">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-2" />
                <div className="col-12 col-md-8">
                  <h2 className="ca_underlined">
                    {" "}
                    <FormattedMessage id="index.section-partners.title" />
                  </h2>
                  <h6>
                    <FormattedMessage id="index.section-partners.subtitle" />
                  </h6>
                  <div className="ca_logos">
                    <a href="https://innovation.thomsonreuters.com/en/labs/incubator.html">
                      <img
                        key={1}
                        src="/img/homepage/thomsonreuters.png"
                        alt="Thomson Reuters"
                      />
                    </a>
                  </div>
                  <div className="ca_logos">
                    <a href="https://www.blue-frontiers.com/en/">
                      <img
                        key={2}
                        src="/img/homepage/bluefrontiers.png"
                        alt="Blue Frontiers"
                      />
                    </a>
                    <a href="https://paywithink.com/">
                      <img
                        key={3}
                        src="/img/homepage/inkprotocol.png"
                        alt="Ink Protocol"
                      />
                    </a>
                    <a href="https://www.deversifi.com/">
                      <img
                        key={4}
                        src="/img/homepage/deversifi.png"
                        alt="DeversiFi"
                      />
                    </a>
                    <a href="https://marketprotocol.io/">
                      <img
                        key={5}
                        src="/img/homepage/marketprotocol.png"
                        alt="Market Protocol"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-2" />
              </div>
            </div>
          </section>

          <section className="ca_video_popup">
            <div className="ca_popup_holder">
              <a href="#" className="ca_close">
                <span />
                <span />
              </a>
              <div className="ca_video_holder">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/"
                  frameBorder="0"
                />
              </div>
            </div>
          </section>
        </div>
      </Template>
    );
  }
}

export default injectIntl(RootIndex);

export const pageQuery = graphql`
  query homeQuery {
    allTwitterSearchTweetsKleros {
      edges {
        node {
          created_at
          full_text
          id_str
          user {
            name
          }
        }
      }
    }
    allKlerosGitCommits(sort: { fields: [commit_date], order: DESC }) {
      edges {
        node {
          commit_text
          commit_date
          commit_url
        }
      }
    }
    allKlerosBlogPosts(sort: { fields: [post_date], order: DESC }) {
      edges {
        node {
          post_title
          post_date
          post_url
        }
      }
    }
    allKlerosForumTopic(sort: { fields: [created_at], order: DESC }) {
      edges {
        node {
          created_at
          topic_data
          topic_id
          topic_title
          topic_slug
        }
      }
    }
    allContentfulHomepage(sort: { fields: [title], order: DESC }) {
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
          whyBlock {
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
          problemBlock {
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
          solutionBlock {
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
          joinBlock {
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
          partnersBlock {
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
          contactBlock {
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
