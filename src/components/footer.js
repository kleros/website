import React from "react";
import Modal from "react-responsive-modal";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

export default injectIntl(function({ menu, onCloseModal, onOpenModal, open }) {
  return (
    <footer className="ca_footer">
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: "customModal"
        }}
      >
        <h2>Download Book</h2>
        <div className="ca_book">
          <a href="/book/Dispute-Resolution-Kleros.epub" target="_blank">
            EPUB FORMAT
          </a>
          <a
            href="https://ipfs.kleros.io/ipfs/QmZeV32S2VoyUnqJsRRCh75F1fP2AeomVq2Ury2fTt9V4z/Dispute-Resolution-Kleros.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF FORMAT
          </a>
          <a href="/book/Dispute-Resolution-Kleros.mobi" target="_blank">
            MOBI FORMAT
          </a>
        </div>
      </Modal>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-1">
            <a href="/" className="ca_logo">
              <img src="/img/logo.png" alt="Kleros" />
            </a>
          </div>
          <div className="col-6 col-md-2">
            <nav className="ca_left">
              <ul>
                <li key={0}>
                  <Link to="/about">
                    <FormattedMessage id="footer.about" />
                  </Link>
                </li>
                <li key={1}>
                  <a href="https://governance.kleros.io">
                    <FormattedMessage id="footer.governance" />
                  </a>
                </li>
                <li key={2}>
                  <Link to="/about#join">
                    <FormattedMessage id="footer.join" />
                  </Link>
                </li>
                <li key={3}>
                  <Link to="/faq">
                    <FormattedMessage id="footer.faq" />
                  </Link>
                </li>
                <li key={4}>
                  <Link to="/media">
                    <FormattedMessage id="footer.media" />
                  </Link>
                </li>
                <li key={5}>
                  <a href="https://blog.kleros.io">
                    <FormattedMessage id="footer.blog" />
                  </a>
                </li>
                <li key={6}>
                  <Link to="/assets">
                    <FormattedMessage id="footer.assets" />
                  </Link>
                </li>
                <li key={7}>
                  <a href="/whitepaper_en.pdf">
                    {" "}
                    <FormattedMessage id="footer.white-paper" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-6 col-md-2">
            <nav className="ca_right">
              <ul>
                <li key={0}>
                  <Link to="/escrow">
                    <FormattedMessage id="footer.escrow" />
                  </Link>
                </li>
                <li key={1}>
                  <Link to="/curated-list">
                    <FormattedMessage id="footer.curated-list" />
                  </Link>
                </li>
                <li key={2}>
                  <Link to="/oracle">
                    <FormattedMessage id="footer.oracle" />
                  </Link>
                </li>
                <li key={3}>
                  <Link to="/cooperative">
                    <FormattedMessage id="footer.cooperative" />
                  </Link>
                </li>
                <li key={4}>
                  <Link to="/court-tour">
                    <FormattedMessage id="footer.court-tour" />
                  </Link>
                </li>
                <li key={5}>
                  <Link to="/token">
                    <FormattedMessage id="footer.token" />
                  </Link>
                </li>
                <li key={6}>
                  <a href="https://developer.kleros.io">
                    {" "}
                    <FormattedMessage id="footer.developer" />
                  </a>
                </li>

                <li>
                  <button className="ca_link_book" onClick={onOpenModal}>
                    <FormattedMessage id="footer.book" />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/juror" className="ca_button ca_transparent_gray-solid">
              <FormattedMessage id="footer.button-juror" />
            </Link>
            <Link to="/partner" className="ca_button ca_transparent_gray">
              <FormattedMessage id="footer.button-partner" />
            </Link>
          </div>
          <div
            className="col-12 col-md-3"
            style={{ textAlign: "-webkit-center" }}
          >
            <div className="ca_social">
              <a
                key={0}
                href="https://github/kleros"
                className={"fab fa-github"}
              ></a>
              <a
                key={1}
                href="https://slack.com/kleros"
                className={"fab fa-slack"}
              ></a>
              <a
                key={2}
                href="https://www.reddit.com/r/Kleros/"
                className={"fab fa-reddit"}
              ></a>
              <a
                key={3}
                href="https://twitter.com/kleros_io"
                className={"fab fa-twitter"}
              ></a>
              <a
                key={4}
                href="https://t.me/kleros"
                className={"fab fa-telegram"}
              ></a>
              <a
                key={5}
                href="https://www.linkedin.com/company/kleros"
                className={"fab fa-linkedin"}
              ></a>

              <a
                key={7}
                href="https://www.facebook.com/kleros.io"
                className={"fab fa-facebook"}
              ></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ca_copyright">
            <nav>
              <ul>
                <li key={0}>
                  <a href=""></a>
                </li>
              </ul>
              <span>
                {" "}
                <FormattedMessage id="footer.copyright" />{' '}
                {new Date().getFullYear()}{' '}© Kleros.io
              </span>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
});
