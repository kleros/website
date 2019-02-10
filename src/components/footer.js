import React from 'react'
import Link from 'gatsby-link'

export default function(menu) {
	const leftMenu = menu.menu.left;
	const rightMenu = menu.menu.right;
	const socialMenu = menu.menu.social;
	const copyrightMenu = menu.menu.copyright;
	const settings = menu.menu.settings[0].node;

	return (
		<footer className="ca_footer">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-1">
						<a href="/" className="ca_logo"><img src={settings.logoBottom.file.url} alt="Kleros" /></a>
					</div>
					<div className="col-6 col-md-2">
						<nav className="ca_left">
							<ul>
								{
									leftMenu.map(function(edge, num) {
										return <li key={num}><a href={edge.node.url}>{edge.node.text}</a></li>
									})
								}
							</ul>
						</nav>
					</div>
					<div className="col-6 col-md-2">
						<nav className="ca_right">
							<ul>
								{
									rightMenu.map(function(edge, num) {
										return <li key={num}><a href={edge.node.url}>{edge.node.text}</a></li>
									})
								}
							</ul>
						</nav>
					</div>
					<div className="col-12 col-md-4">
						<a href={settings.footerButtonsLeft.url} className="ca_button ca_transparent_gray">{settings.footerButtonsLeft.text.text}</a>
						<a href={settings.footerButtonsRight.url} className="ca_button ca_transparent_gray">{settings.footerButtonsRight.text.text}</a>
					</div>
					<div className="col-12 col-md-3">
						<div className="ca_social">
							{
								socialMenu.map(function(edge, num) {
									return <a key={num} href={edge.node.url} className={"fab " + edge.node.iconClass}></a>
								})
							}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 ca_copyright">
						<nav>
							<ul>
								{
									copyrightMenu.map(function(edge, num) {
										return <li key={num}><a href={edge.node.url}>{edge.node.text}</a></li>
									})
								}
							</ul>
							<span>{settings.footerCopyrightText.footerCopyrightText}</span>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	)
}