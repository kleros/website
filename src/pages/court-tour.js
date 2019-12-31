import React from "react";
import Helmet from "react-helmet";
import Modal from "react-responsive-modal";
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

  embedLinks = {
    en:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOWLtvy6EdqqIEKxRLqQ7XF%2FKleros-2%3Fnode-id%3D14%253A4486%26viewport%3D319%252C405%252C0.015625%26scaling%3Dscale-down-width",
    es:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOWLtvy6EdqqIEKxRLqQ7XF%2FKleros-2%3Fnode-id%3D914%253A11419%26viewport%3D249%252C404%252C0.015625%26scaling%3Dscale-down-width"
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
    const { open } = this.state;

    const siteTitle = "Kleros - Court Tour Page";

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
              <div className="col-12 ">
                <h1>
                  {" "}
                  <FormattedMessage id="court-tour.title" />
                </h1>
                <div
                  style={{ color: "#fff", fontSize: "2em", paddingTop: "2em" }}
                />
              </div>
            </div>
            <div className="row ca_txt">
              <div
                className="col-12 col-md-12 one"
                style={{ position: "relative", paddingTop: "56.25%" }}
              >
                <iframe
                  title="court-tour"
                  style={{
                    border: "none",
                    width: "inherit",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0"
                  }}
                  src={
                    this.embedLinks[this.props.intl.locale] ||
                    this.embedLinks.en
                  }
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="ca_escrow_content ca_wave_top_inverted">
          <div className="container">
            <div className="row ca_left">
              <div className="col-12 col-md-12  text-center">
                <p>
                  <FormattedMessage id="court-tour.paragraph" />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12  text-center">
                <a
                  href="https://metamask.zendesk.com"
                  className="ca_button ca_solid_blue"
                >
                  <FormattedMessage id="court-tour.button-primary" />
                </a>
              </div>
            </div>
          </div>
          );
        </section>
      </Template>
    );
  }
}

export default injectIntl(RootIndex);
