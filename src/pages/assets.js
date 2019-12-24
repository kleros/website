import React from "react";
import Helmet from "react-helmet";
import Modal from "react-responsive-modal";
import Template from "../components/layout";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

class RootIndex extends React.Component {
  categories = ["Kleros", "T2CR", "Escrow", "Oracle"];
  assets = {
    Kleros: [
      ["kleros-logo.png", "kleros-logo-white.png", "kleros-symbol.png"],
      ["kleros-logo-fullwhite.png", "kleros-symbol-white.png"],
      [
        "kleros-logo-vertical.png",
        "kleros-logo-vertical-white.png",
        "kleros-logo-vertical-fullwhite.png"
      ]
    ],
    T2CR: [["t2cr-logo.png", "t2cr-logo-white.png", "t2cr-symbol.png"], [], []],
    Escrow: [
      ["escrow-logo.png", "escrow-logo-white.png", "escrow-symbol.png"],
      [],
      []
    ],
    Oracle: [
      ["oracle-logo.png", "oracle-logo-white.png", "oracle-symbol.png"],
      [],
      []
    ]
  };

  constructor() {
    super();
    this.state = {
      mediaFilter: {
        value: "Kleros",
        key: Math.random()
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
    const { location, intl } = this.props;
    const { mediaFilter } = this.state;
    console.log(this.state);
    console.log(this.assets[mediaFilter.value]);
    var siteTitle = "Kleros";
    if (mediaFilter.value == "") this.categoryChange(this.categories[0]);

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
        <section className="ca_juror_top ca_media_top ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <h1>
                  <FormattedMessage id="assets.title" />
                </h1>
              </div>
              <div className="col-12 col-md-5" />
            </div>
          </div>
        </section>
        <section className="ca_media_content ca_wave_bottom_mid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
                <h3>
                  <FormattedMessage id="assets.categories" />
                </h3>
                <ul>
                  {this.categories.map((el, num) => {
                    return (
                      <li key={num}>
                        <a
                          href={`#${el}`}
                          className={
                            el === mediaFilter.value ? "ca_selected" : ""
                          }
                          onClick={e => this.categoryChange(el, e)}
                        >
                          {el}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-12 col-md-9">
                <h1>{mediaFilter.value}</h1>
                <hr style={{ borderColor: "#11b3ff", width: "20%" }} />
                <div className="row">
                  {this.assets[mediaFilter.value][0].map((el, num) => {
                    return (
                      <div key={num} className="col-12 col-md-4 my-5 pl-5">
                        <img
                          style={{ maxHeight: "70px" }}
                          src={`/kleros-brand-assets/${mediaFilter.value}/${el}`}
                          alt={el}
                        />
                      </div>
                    );
                  })}
                </div>
                {this.assets[mediaFilter.value][1].length != 0 && (
                  <hr style={{ borderColor: "#11b3ff1a" }} />
                )}
                <div className="row">
                  {this.assets[mediaFilter.value][1].map((el, num) => {
                    return (
                      <div key={num} className="col-12 col-md-4 my-5 pl-5">
                        <img
                          style={{ maxHeight: "80px" }}
                          src={`/kleros-brand-assets/${mediaFilter.value}/${el}`}
                          alt={el}
                        />
                      </div>
                    );
                  })}
                </div>

                {this.assets[mediaFilter.value][2].length != 0 && (
                  <hr style={{ borderColor: "#11b3ff1a" }} />
                )}
                <div className="row">
                  {this.assets[mediaFilter.value][2].map((el, num) => {
                    return (
                      <div key={num} className="col-12 col-md-4 pl-5">
                        <img
                          style={{ maxWidth: "100px" }}
                          src={`/kleros-brand-assets/${mediaFilter.value}/${el}`}
                          alt={el}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Template>
    );
  }
}

export default injectIntl(RootIndex);
