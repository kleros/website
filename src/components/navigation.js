import React from 'react'
import Link from 'gatsby-link'

import Dropdown from './dropdown'

export default function(menu) {
  const data = menu.menu.top;
  const settings = menu.menu.settings[0].node;
  return (
    <header className="ca_header">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2">
            <a href="/" className="ca_logo"><img src={settings.logoTop.file.url} alt="Kleros" /></a>
          </div>
          <nav className="col-6 col-md-10">
            <a href="#" className="ca_hamburger"><span></span><span></span><span></span></a>
            <ul>
              {
                data.map(function(edge, num) {
                  if (edge.node.dropdownOptions) {
                    return <Dropdown data={edge.node} />
                  }
                  return <li key={num}><a href={edge.node.url} className="hamburger-a">{edge.node.text}</a></li>
                })
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
