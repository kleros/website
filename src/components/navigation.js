import React from "react";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import Dropdown from "./dropdown";

export default injectIntl(function(menu) {
  return (
    <header className="ca_header">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2">
            <a href="/" className="ca_logo">
              <img src="/img/logo-s.svg" alt="Kleros" />
            </a>
          </div>
          <nav className="col-6 col-md-10">
            <a href="#" className="ca_hamburger">
              <span></span>
              <span></span>
              <span></span>
            </a>
            <ul>
              <Dropdown
                data={{
                  text: <FormattedMessage id="header.button-one-pager" />,
                  dropdownOptions: [{ text: "English", url: "onepager_en.pdf" }]
                }}
              />
              <Dropdown
                data={{
                  text: <FormattedMessage id="header.button-white-paper" />,
                  dropdownOptions: [
                    { text: "English", url: "whitepaper_en.pdf" },
                    {
                      text: "Español",
                      url: "whitepaper_es.pdf"
                    }
                  ]
                }}
              />
              <Dropdown
                data={{
                  text: <FormattedMessage id="header.button-dapps" />,
                  dropdownOptions: [
                    {
                      text: "Kleros Court",
                      url: "https://court.kleros.io"
                    },
                    {
                      text: "Kleros Governance",
                      url: "https://governance.kleros.io"
                    },
                    {
                      text: "Token² Curated Registry",
                      url: "https://tokens.kleros.io"
                    },
                    { text: "Escrow", url: "https://escrow.kleros.io" },
                    {
                      text: "CryptoUnlocked",
                      url: "https://cryptounlocked.wetrust.io"
                    },
                    { text: "Realitio", url: "https://realitio.github.io" },
                    { text: "Kleroscan", url: "http://kleroscan.com/" }
                  ]
                }}
              />

              <Dropdown
                data={{
                  text: <FormattedMessage id="header.button-use-cases" />,
                  dropdownOptions: [
                    { text: "Escrow", url: "/escrow" },
                    {
                      text: "Curated List",
                      url: "/curated-list"
                    },
                    {
                      text: "Oracle",
                      url: "/oracle"
                    }
                  ]
                }}
              />
              <li key={4}>
                <a href="https://blog.kleros.io" className="hamburger-a">
                  <FormattedMessage id="header.button-blog" />
                </a>
              </li>
              <li key={7}>
                <a href="/about" className="hamburger-a">
                  <FormattedMessage id="header.button-about" />
                </a>
              </li>
              <Dropdown
                data={{
                  text: "Language",
                  dropdownOptions: [
                    { text: "English", url: "/en" },
                    {
                      text: "한국어",
                      url: "/ko"
                    }
                  ]
                }}
              />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});
