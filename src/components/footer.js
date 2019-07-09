import React, {useState} from 'react'
import Link from 'gatsby-link'
import Modal from 'react-responsive-modal'

export default function({menu, onCloseModal, onOpenModal, open}) {
	const leftMenu = menu.left;
	const rightMenu = menu.right;
	const socialMenu = menu.social;
	const copyrightMenu = menu.copyright;
	const settings = menu.settings[0].node;

	return (
		<footer className="ca_footer">
			<Modal open={open} onClose={onCloseModal} center classNames={{
					modal: 'customModal'
				}}
			>
				<h2>Download Book</h2>
				<div className="ca_book">
					<a href="/book/Dispute-Resolution-Kleros.epub" target="_blank">EPUB FORMAT</a>
					<a href="https://ipfs.kleros.io/ipfs/QmZeV32S2VoyUnqJsRRCh75F1fP2AeomVq2Ury2fTt9V4z/Dispute-Resolution-Kleros.pdf" target="_blank">PDF FORMAT</a>
					<a href="/book/Dispute-Resolution-Kleros.mobi" target="_blank">MOBI FORMAT</a>
				</div>
			</Modal>
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
								<li><button className="ca_link_book" onClick={onOpenModal}>Book</button></li>
							</ul>
						</nav>
					</div>
					<div className="col-12 col-md-4">
						<a href={settings.footerButtonsLeft.url} className="ca_button ca_transparent_gray-solid">{settings.footerButtonsLeft.text.text}</a>
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
