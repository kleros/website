import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "../css/bootstrap.min.css";
import "../css/slick.css";
import "../css/style.css";
import { StaticQuery, graphql } from "gatsby";

class Template extends React.Component {
  state = {
    open: false
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  render() {
    console.log(this.props);

    const { children } = this.props;

    return (
      <div>
        <Helmet>
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/img/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/img/favicon-16x16.png"
          />
          <link rel="manifest" href="/img/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="msapplication-config" content="/img/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Navigation menu={this.props.allContentfulMenu} />
        {children}
        <Footer
          menu={this.props}
          onCloseModal={this.onCloseModal}
          onOpenModal={this.onOpenModal}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        allContentfulMenu(sort: { fields: [menuTag, order], order: DESC }) {
          edges {
            node {
              order
              text
              url
              iconClass
              menuTag
              dropdownOptions {
                __typename
                ... on Node {
                  ... on ContentfulMenu {
                    text
                    url
                  }
                }
              }
            }
          }
        }
        allContentfulGeneralSettings(sort: { fields: [title], order: DESC }) {
          edges {
            node {
              logoTop {
                file {
                  url
                }
              }
              logoBottom {
                file {
                  url
                }
              }
              footerButtonsLeft {
                text {
                  text
                }
                url
              }
              footerButtonsRight {
                text {
                  text
                }
                url
              }
              footerCopyrightText {
                footerCopyrightText
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulMenu, allContentfulGeneralSettings }) => (
      <Template
        allContentfulMenu={allContentfulMenu}
        allContentfulGeneralSettings={allContentfulGeneralSettings}
        {...props}
      />
    )}
  />
);
