import React from "react";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import Dropdown from "./dropdown";

export default injectIntl(function(menu) {
  return (
    <header className="ca_header">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2">
            <Link to="/">
              <img src="/img/logo-s.svg" alt="Kleros" />
            </Link>
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
                  dropdownOptions: [
                    { text: "English", url: "/onepager_en.pdf" },
                    { text: "Español", url: "/onepager_es.pdf" },
                    { text: "한국인", url: "/onepager_ko.pdf" },
                    { text: "Français", url: "/onepager_fr.pdf" },
                    { text: "Русский", url: "/onepager_ru.pdf" },
                    { text: "Portugués", url: "/onepager_pt.pdf" },
                    { text: "中文", url: "/onepager_zh.pdf" },
                    { text: "Türkçe", url: "/onepager_tr.pdf" }
                  ]
                }}
              />
              <Dropdown
                data={{
                  text: <FormattedMessage id="header.button-white-paper" />,
                  dropdownOptions: [
                    { text: "English White Paper", url: "/whitepaper_en.pdf" },
                    {
                      text: "English Yellow Paper",
                      url: "/whitepaper_long_en.pdf"
                    },
                    {
                      text: "Español White Paper",
                      url: "/whitepaper_es.pdf"
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
                    {
                      text: "Dispute Resolver",
                      url: "https://resolve.kleros.io"
                    },
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
                  ],
                  intl: true
                }}
              />
              <li key={4}>
                <a href="https://blog.kleros.io" className="hamburger-a">
                  <FormattedMessage id="header.button-blog" />
                </a>
              </li>
              <li key={7}>
                <Link to="/about" className="hamburger-a">
                  <FormattedMessage id="header.button-about" />
                </Link>
              </li>
              <Dropdown
                data={{
                  text: <FormattedMessage id="header.button-language" />,
                  dropdownOptions: [
                    { text: "English", url: "/en" },
                    { text: "Español", url: "/es" },
                    { text: "한국인", url: "/ko" },
                    { text: "Français", url: "/fr" },
                    { text: "Русский", url: "/ru" },
                    { text: "Portugués", url: "/pt" },
                    { text: "中文", url: "/zh" },
                    { text: "Türkçe", url: "/tr" }
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
