import React from "react";

import Dropdown from "./dropdown";

export default function(menu) {
  return (
    <header className="ca_header">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2">
            <a href="/" className="ca_logo">
              <img src="img/logo-s.svg" alt="Kleros" />
            </a>
          </div>
          <nav className="col-6 col-md-10">
            <a href="#" className="ca_hamburger">
              <span></span>
              <span></span>
              <span></span>
            </a>
            <ul>
              <li key={1}>
                <a href="/juror" className="hamburger-a">
                  Become a Juror
                </a>
              </li>
              <li key={2}>
                <a href="/partner" className="hamburger-a">
                  Become a Partner
                </a>
              </li>

              <li key={3}>
                <Dropdown
                  data={{
                    text: "DApps",
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
                      { text: "Realitio", url: "https://realitio.github.io" }
                    ]
                  }}
                />
              </li>
              <li key={4}>
                <a href="https://blog.kleros.io" className="hamburger-a">
                  Blog
                </a>
              </li>
              <li key={5}>
                <Dropdown
                  data={{
                    text: "White Paper",
                    dropdownOptions: [
                      { text: "English", url: "whitepaper_en.pdf" },
                      {
                        text: "Español",
                        url: "whitepaper_es.pdf"
                      }
                    ]
                  }}
                />
              </li>
              <li key={6}>
                <Dropdown
                  data={{
                    text: "Use Cases",
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
              </li>
              <li key={7}>
                <a href="/about" className="hamburger-a">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
