import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import theMeta from "../js/helpers.js";

class RootIndex extends React.Component {
  render() {
    const siteTitle = "Kleros";
    const apiTwitter = get(this, "props.data.allTweet.edges")[0].node;
    const apiBlog = get(this, "props.data.allKlerosBlogPosts.edges")[0].node;
    const apiGit = get(this, "props.data.allKlerosGitCommits.edges")[0].node;
    const apiForum = get(this, "props.data.allKlerosForumTopic.edges")[0].node;

    const data = get(this, "props.data.allContentfulHomepage.edges")[0].node;
    const top = data.topBlock;
    const why = data.whyBlock;
    const problem = data.problemBlock;
    const solution = data.solutionBlock;
    const how = data.howBlock;
    const join = data.joinBlock;
    const partners = data.partnersBlock;
    const contact = data.contactBlock;
    const twitter = "Twitter";
    const blog = "Blog";
    const github = "Github";
    const forum = "Forum";

    var theSubtitle = function(subTitle) {
      return subTitle.split("\n").map((el, num) => {
        return <h6 key={num}>{el}</h6>;
      });
    };
    var theBrs = function(text) {
      return text.split("\n").map(function(el, num) {
        return (
          <span key={num}>
            {el}
            <br />
          </span>
        );
      });
    };

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{siteTitle}</title>
        </Helmet>
        <section className="ca_home_top">
          <div className="container">
            <div className="row ca_txt">
              <div className="col-12 col-md-6">
                <h1>Decentralized Courts</h1>
                <h6>
                  The blockchain dispute resolution layer. Fast, open and
                  affordable justice for all.
                </h6>
                <a
                  href="
                    /juror
                  "
                  className="ca_button ca_solid_blue"
                  target="_self"
                >
                  Join as a Juror
                </a>
                <a
                  href="/partner"
                  className="ca_button ca_transparent_blue"
                  target="_self"
                >
                  Become a Partner
                </a>
                <a
                  href="https://blog.kleros.io/kleros-token-sale-announcement-january-11-2020/"
                  className="ca_button ca_transparent_blue"
                >
                  Token Sale
                </a>
              </div>
              <div className="col-12 col-md-6 illustration_holder">
                <img
                  src={
                    theMeta(top, "Homepage > Top > Title").mediaData[0].file.url
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
                        src="img/homepage/twt.png"
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
                    Go to Twitter
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
                        src="img/homepage/blg.png"
                        className="card_header_icon"
                        alt="Icon"
                      />
                    </div>
                    <div className="card_header_title">Blog</div>
                    <div className="card_header_date">
                      {new Date(apiBlog.post_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      })}
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
                    Go to Blog
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
                        src="img/homepage/gth.png"
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
                    Go to Github
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
                        src="img/homepage/frm.png"
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
                    Go to Forum
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
                <h2>A Common Dispute in the New Economy</h2>
              </div>
              <div className="col-12 col-md-1" />
            </div>
            <div className="row ca_img">
              <div className="col-12 col-md-2" />
              <div className="col-12 col-md-8">
                <div className="ca_why_block">
                  <img
                    src="/img/homepage/why1.png"
                    alt="A Common Dispute in the New Economy"
                  />
                  <div className="ca_txt">
                    <p>Alice hires Bob to build her a website.</p>
                  </div>
                  <div className="ca_txt">
                    <p>Alice pays Bob in advance.</p>
                  </div>
                  <div className="ca_txt">
                    <p>The site takes Bob longer than expected.</p>
                  </div>
                </div>
                <div className="ca_why_block">
                  <img
                    src="/img/homepage/why2.png"
                    alt="A Common Dispute in the New Economy"
                  />
                  <div className="ca_txt">
                    <p>
                      When he finally delivers the site, Alice is not satisfied.
                    </p>
                  </div>
                  <div className="ca_txt">
                    <p>
                      A debate starts. Alice requests a refund. Bob claims the
                      specifications weren't clear.
                    </p>
                  </div>
                  <div className="ca_txt">
                    <p>
                      Alice and Bob are both left at a loss with no clear
                      outcome of their dispute.
                    </p>
                  </div>
                </div>
                <div className="ca_why_block">
                  <a
                    href="https://www.youtube.com/watch?v=NuSps_2wMQ4&t=1s"
                    className="ca_button ca_solid_blue ca_open_video_popup"
                    data-video-url="https://www.youtube.com/watch?v=NuSps_2wMQ4&t=1s"
                  >
                    Watch Video
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
                <h2 className="ca_underlined">The Internet Economy</h2>
                {theSubtitle(
                  "As our lives move to global online platforms, disputes arise in areas that cannot be solved by traditional court systems."
                )}
              </div>
              <div className="col-12 col-md-2" />
            </div>
          </div>
        </section>
        <section className="ca_home_solution">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="ca_underlined">Why Kleros?</h2>
              </div>
            </div>
            <div className="row ca_left">
              <div className="col-12 col-md-1" />
              <div className="col-12 col-md-6">
                <div className="ca_solution_slider">
                  <div key="1" className="ca_slide">
                    <img src="/img/homepage/welcome.png" alt="Why Kleros?" />
                  </div>
                  <div key="2" className="ca_slide">
                    <img
                      src="/img/homepage/athena_home.jpg"
                      alt="Why Kleros?"
                    />
                  </div>
                  <div key="3" className="ca_slide">
                    <img src="/img/homepage/Escrow.jpg" alt="Why Kleros?" />
                  </div>
                </div>
                <div className="ca_solution_slider_dots" />
              </div>
              <div className="col-12 col-md-4">
                <h6>Peer-to-Peer Justice</h6>
                <p>
                  A peer to peer platform that uses crowdsourcing and blockchain
                  to put the dispute resolution process in the hands of the
                  community.
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
                <h6>What's the Secret Sauce?</h6>
                <p>
                  Kleros uses advanced cryptoeconomics coupled with a global
                  community of jurors to adjudicate disputes in a fast,
                  affordable and open way. Read the{" "}
                  <a href="https://kleros.io/whitepaper_en.pdf">white paper</a>.
                </p>
                <a
                  target="_self"
                  href="/juror"
                  className="ca_button ca_solid_blue"
                >
                  Join as a Juror
                </a>
                <a
                  target="_self"
                  href="/partner"
                  className="ca_button ca_transparent_blue"
                >
                  Become a Partner
                </a>
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
                <h6>Why Does Kleros Need a Token?</h6>
                <p>
                  The Pinakion (PNK) token protects the system from attacks,
                  while also providing jurors with a financial incentive to
                  resolve cases coherently. Learn more{" "}
                  <a href="https://medium.com/kleros/why-kleros-needs-a-native-token-5c6c6e39cdfe">
                    here
                  </a>
                  .
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
                <h2 className="ca_underlined">How Does It Work?</h2>
              </div>
              <div className="col-12 col-md-2" />
            </div>

            <div key={0} className={"row " + (0 % 2 ? "ca_right" : "ca_left")}>
              <div className="col-12 col-md-2" />
              <div className="col-12 col-md-4 ca_img">
                <img src="/img/homepage/solve1.png" alt="Contract" />
              </div>
              <div className="col-12 col-md-4">
                <h6>Contract</h6>
                <p>
                  Alice hires Bob to build a website for her. They agree to use
                  Kleros should a dispute occur.{" "}
                </p>
              </div>
              <div className="col-12 col-md-2" />
            </div>
            <div key={1} className={"row " + (1 % 2 ? "ca_right" : "ca_left")}>
              <div className="col-12 col-md-2" />
              <div className="col-12 col-md-4 ca_img">
                <img src="/img/homepage/solve2.png" alt="Dispute" />
              </div>
              <div className="col-12 col-md-4">
                <h6>Dispute</h6>
                <p>
                  Alice is not satisfied with Bob's work and raises a dispute.
                </p>
              </div>
              <div className="col-12 col-md-2" />
            </div>
            <div key={2} className={"row " + (0 % 2 ? "ca_right" : "ca_left")}>
              <div className="col-12 col-md-2" />
              <div className="col-12 col-md-4 ca_img">
                <img src="/img/homepage/solve3.png" alt="Selection" />
              </div>
              <div className="col-12 col-md-4">
                <h6>Selection</h6>
                <p>Users are randomly selected as jurors for the dispute. </p>
              </div>
              <div className="col-12 col-md-2" />
            </div>
            <div key={3} className={"row " + (1 % 2 ? "ca_right" : "ca_left")}>
              <div className="col-12 col-md-2" />
              <div className="col-12 col-md-4 ca_img">
                <img src="/img/homepage/solve4.png" alt="Enforcement" />
              </div>
              <div className="col-12 col-md-4">
                <h6>Enforcement</h6>
                <p>
                  Jurors evaluate the evidence and vote Alice as the winner. She
                  is reimbursed and honest jurors are compensated for their
                  work.
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
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="ca_home_join">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="ca_underlined">Join The Justice Revolution</h2>
              </div>
              <div className="col-12 col-md-2" />
              <div className="col-12 col-md-4">
                <div className="ca_img">
                  <img src="/img/homepage/join1.png" alt="Join as a Juror" />
                </div>
                <div className="ca_txt">
                  <h6>Join as a Juror</h6>
                  <p>Become a juror, earn and bring justice to the world.</p>
                  <a href="/juror" className="ca_button ca_transparent_blue">
                    Join as a Juror
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="ca_img">
                  <img src="/img/homepage/join2.png" alt="Become a Partner" />
                </div>
                <div className="ca_txt">
                  <h6>Become a Partner</h6>
                  <p>
                    Integrate Kleros powerful dispute resolution technology in
                    your platform. For free.
                  </p>
                  <a href="/partner" className="ca_button ca_transparent_blue">
                    Become a Partner
                  </a>
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
                <h2 className="ca_underlined">Our Partners</h2>
                <h6>
                  Collaboration makes Kleros. We can integrate with your
                  platform securely and at no cost. If this sounds like
                  something you could use in your blockchain project, just ask.
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
        <section className="ca_home_contancts">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-2" />
              <div className="col-12 col-md-8">
                <h2 className="ca_underlined">Get in touch</h2>
                <h6>
                  <p>
                    Looking to find out more? We’re open to all proposals,
                    suggestions and requests.
                  </p>
                  <p>
                    Message us via{" "}
                    <a
                      href="https://t.me/kleros"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Telegram
                    </a>{" "}
                    or{" "}
                    <a
                      href="mailto:contact@kleros.io"
                      title="contact@kleros.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      contact@kleros.io
                    </a>
                    .
                  </p>
                </h6>
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
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query homeQuery {
    allTweet {
      edges {
        node {
          full_text
          created_at
          id_str
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
