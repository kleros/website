import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Template from "../components/layout";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

class RootIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faqFilter: {
        value: props.intl.formatMessage({
          id: "faq.section-faq.category-general.name"
        }),
        key: Math.random()
      },
      faqSearch: {
        value: ""
      },
      openedQuestion: {
        value: 0
      }
    };
  }
  doSearch = (e = null) => {
    if (e) e.preventDefault();
    var txt = e.target.value;
    this.setState({
      faqSearch: {
        value: txt
      }
    });
  };
  questionChange = (num, e = null) => {
    if (e) e.preventDefault();
    num = num === this.state.openedQuestion.value ? (num = -1) : num;
    this.setState({
      openedQuestion: {
        value: num
      }
    });
  };
  categoryChange = (cat, e = null) => {
    if (e) e.preventDefault();
    this.setState({
      faqFilter: {
        value: cat,
        key: Math.random()
      },
      openedQuestion: {
        value: 0
      }
    });
  };
  render() {
    const { intl } = this.props;
    var siteTitle = "Kleros";
    var questions = get(this, "props.data.allContentfulFaqEntry.edges");
    var cats = get(this, "props.data.allContentfulFaqCategory.edges");
    if (this.state.faqFilter.value == "")
      this.categoryChange(cats[0].node.title.title);
    else {
      questions = questions.filter(({ node }) => {
        if (!node.category) return false;
        return (
          node.category.title.title === this.state.faqFilter.value &&
          node.question.question
            .toLowerCase()
            .indexOf(this.state.faqSearch.value.toLowerCase()) >= 0
        );
      });
    }
    return (
      <Template location={this.props.location}>
        <Helmet>
          <html lang="en" />
          <title>{siteTitle}</title>
        </Helmet>
        <section className="ca_juror_top ca_faq_top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <h1>
                  <FormattedMessage id="faq.title" />
                </h1>
                <form className="ca_search">
                  <input
                    type="text"
                    onChange={e => this.doSearch(e)}
                    placeholder={intl
                      .formatMessage({
                        id: "faq.placeholder-search-bar"
                      })
                      .toString()}
                  />
                </form>
              </div>
              <div className="col-12 col-md-5"></div>
            </div>
          </div>
        </section>
        <section className="ca_faq_content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-2">
                <ul>
                  <li key={0}>
                    <a
                      href="#"
                      className={
                        intl.formatMessage({
                          id: "faq.section-faq.category-general.name"
                        }) === this.state.faqFilter.value
                          ? "ca_selected"
                          : ""
                      }
                      onClick={e =>
                        this.categoryChange(
                          intl.formatMessage({
                            id: "faq.section-faq.category-general.name"
                          }),
                          e
                        )
                      }
                    >
                      {intl.formatMessage({
                        id: "faq.section-faq.category-general.name"
                      })}
                    </a>
                  </li>
                  <li key={1}>
                    <a
                      href="#"
                      className={
                        intl.formatMessage({
                          id:
                            "faq.section-faq.category-integration&partners.name"
                        }) === this.state.faqFilter.value
                          ? "ca_selected"
                          : ""
                      }
                      onClick={e =>
                        this.categoryChange(
                          intl.formatMessage({
                            id:
                              "faq.section-faq.category-integration&partners.name"
                          }),
                          e
                        )
                      }
                    >
                      {intl.formatMessage({
                        id: "faq.section-faq.category-integration&partners.name"
                      })}
                    </a>
                  </li>
                  <li key={2}>
                    <a
                      href="#"
                      className={
                        intl.formatMessage({
                          id: "faq.section-faq.category-jurors.name"
                        }) === this.state.faqFilter.value
                          ? "ca_selected"
                          : ""
                      }
                      onClick={e =>
                        this.categoryChange(
                          intl.formatMessage({
                            id: "faq.section-faq.category-jurors.name"
                          }),
                          e
                        )
                      }
                    >
                      {intl.formatMessage({
                        id: "faq.section-faq.category-jurors.name"
                      })}
                    </a>
                  </li>
                  <li key={3}>
                    <a
                      href="#"
                      className={
                        intl.formatMessage({
                          id: "faq.section-faq.category-legal.name"
                        }) === this.state.faqFilter.value
                          ? "ca_selected"
                          : ""
                      }
                      onClick={e =>
                        this.categoryChange(
                          intl.formatMessage({
                            id: "faq.section-faq.category-legal.name"
                          }),
                          e
                        )
                      }
                    >
                      {intl.formatMessage({
                        id: "faq.section-faq.category-legal.name"
                      })}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-10">
                <h2>{this.state.faqFilter.value}</h2>

                {intl.formatMessage({
                  id: "faq.section-faq.category-general.name"
                }) === this.state.faqFilter.value && (
                  <>
                    <div
                      key={0}
                      className={
                        "ca_question" +
                        (0 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-general.q-1" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(0, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-general.a-1" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={1}
                      className={
                        "ca_question" +
                        (1 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-general.q-2" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(1, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-general.a-2" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={2}
                      className={
                        "ca_question" +
                        (2 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-general.q-3" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(2, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-general.a-3" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={3}
                      className={
                        "ca_question" +
                        (3 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-general.q-4" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(3, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-general.a-4" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={4}
                      className={
                        "ca_question" +
                        (4 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-general.q-5" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(4, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-general.a-5" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={5}
                      className={
                        "ca_question" +
                        (5 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-general.q-6" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(5, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-general.a-6" />
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {intl.formatMessage({
                  id: "faq.section-faq.category-integration&partners.name"
                }) === this.state.faqFilter.value && (
                  <>
                    <div
                      key={6}
                      className={
                        "ca_question" +
                        (6 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-integration&partners.q-1" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(6, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-integration&partners.a-1" />
                        </p>
                      </div>
                    </div>{" "}
                  </>
                )}
                {intl.formatMessage({
                  id: "faq.section-faq.category-jurors.name"
                }) === this.state.faqFilter.value && (
                  <>
                    <div
                      key={7}
                      className={
                        "ca_question" +
                        (7 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-jurors.q-1" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(7, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-jurors.a-1" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={8}
                      className={
                        "ca_question" +
                        (8 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-jurors.q-2" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(8, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-jurors.a-2" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={9}
                      className={
                        "ca_question" +
                        (9 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-jurors.q-3" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(9, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-jurors.a-3" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={10}
                      className={
                        "ca_question" +
                        (10 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-jurors.q-4" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(10, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-jurors.a-4" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={11}
                      className={
                        "ca_question" +
                        (11 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-jurors.q-5" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(11, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-jurors.a-5" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={12}
                      className={
                        "ca_question" +
                        (12 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-jurors.q-6" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(12, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-jurors.a-6" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={13}
                      className={
                        "ca_question" +
                        (13 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-jurors.q-7" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(13, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-jurors.a-7" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={14}
                      className={
                        "ca_question" +
                        (14 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-jurors.q-8" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(14, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-jurors.a-8" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={15}
                      className={
                        "ca_question" +
                        (15 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-jurors.q-9" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(15, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-jurors.a-9" />
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {intl.formatMessage({
                  id: "faq.section-faq.category-legal.name"
                }) === this.state.faqFilter.value && (
                  <>
                    <div
                      key={16}
                      className={
                        "ca_question" +
                        (16 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-legal.q-1" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(16, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-legal.a-1" />
                        </p>
                      </div>
                    </div>

                    <div
                      key={17}
                      className={
                        "ca_question" +
                        (17 == this.state.openedQuestion.value
                          ? " ca_opened"
                          : "")
                      }
                    >
                      <div className="ca_toggle">
                        <h6>
                          <FormattedMessage id="faq.section-faq.category-legal.q-2" />
                        </h6>
                        <a
                          href="#"
                          onClick={e => this.questionChange(17, e)}
                        ></a>
                      </div>
                      <div className="ca_content">
                        <p>
                          <FormattedMessage id="faq.section-faq.category-legal.a-2" />
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </Template>
    );
  }
}

export default injectIntl(RootIndex);

export const faqQuery = graphql`
  query FAQQuery {
    allContentfulFaqEntry(
      sort: { fields: [question___id, updatedAt], order: DESC }
    ) {
      edges {
        node {
          question {
            question
          }
          answer {
            answer
            childMarkdownRemark {
              html
            }
          }
          category {
            title {
              title
            }
          }
        }
      }
    }
    allContentfulFaqCategory(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          title {
            title
          }
        }
      }
    }
  }
`;
