import React from "react";
import Modal from "react-responsive-modal";

export default function({ menu, onCloseModal, onOpenModal, open }) {
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
                  <a href="/about">About</a>
                </li>
                <li key={1}>
                  <a href="https://governance.kleros.io">Governance</a>
                </li>
                <li key={2}>
                  <a href="/about#join">Join Us</a>
                </li>
                <li key={3}>
                  <a href="/faq">FAQ</a>
                </li>
                <li key={4}>
                  <a href="/media">Media</a>
                </li>
                <li key={5}>
                  <a href="https://blog.kleros.io">Blog</a>
                </li>
                <li key={6}>
                  <a href="/assets">Assets</a>
                </li>
                <li key={7}>
                  <a href="/whitepaper_en.pdf">Whitepaper</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-6 col-md-2">
            <nav className="ca_right">
              <ul>
                <li key={0}>
                  <a href="/escrow">Escrow</a>
                </li>
                <li key={1}>
                  <a href="/curated-list">Curated List</a>
                </li>
                <li key={2}>
                  <a href="/oracle">Oracle</a>
                </li>
                <li key={3}>
                  <a href="/cooperative">Cooperative</a>
                </li>
                <li key={4}>
                  <a href="/court-tour">Court Tour</a>
                </li>
                <li key={5}>
                  <a href="/token">Token</a>
                </li>
                <li key={6}>
                  <a href="https://developer.kleros.io">Developer</a>
                </li>

                <li>
                  <button className="ca_link_book" onClick={onOpenModal}>
                    Book
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-md-4">
            <a href="/juror" className="ca_button ca_transparent_gray-solid">
              Join as a Juror
            </a>
            <a href="/partner" className="ca_button ca_transparent_gray">
              Become a Partner
            </a>
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
              <span>Copyright 2019 © Kleros.io</span>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
