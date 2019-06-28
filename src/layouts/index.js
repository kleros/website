import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import '../css/bootstrap.min.css'
import '../css/slick.css'
import '../css/style.css'

class Template extends React.Component {
	state = {
		open: false
	}

	onCloseModal = () => {
    this.setState({ open: false });
	};

	onOpenModal = () => {
    this.setState({ open: true });
	};

	render() {
		var menu = get(this, 'props.data.allContentfulMenu.edges');
		const settings = get(this, 'props.data.allContentfulGeneralSettings.edges');

		var data = {
			top: menu.filter(({node}) => node.menuTag === 'Top menu'),
			left: menu.filter(({node}) => node.menuTag === 'Bottom left menu'),
			right: menu.filter(({node}) => node.menuTag === 'Bottom right menu'),
			social: menu.filter(({node}) => node.menuTag === 'Bottom social links'),
			copyright: menu.filter(({node}) => node.menuTag === 'Copyright menu'),
			settings: settings
		}

		const { location, children } = this.props
		let header

		let rootPath = `/`
		if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
			rootPath = __PATH_PREFIX__ + `/`
		}

		return (
			<div>
				<Helmet>
					<link rel="apple-touch-icon" sizes="120x120" href="/img/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
					<link rel="manifest" href="/img/site.webmanifest" />
					<link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#5bbad5" />
					<link rel="shortcut icon" href="/img/favicon.ico" />
					<meta name="msapplication-TileColor" content="#2b5797" />
					<meta name="msapplication-config" content="/img/browserconfig.xml" />
					<meta name="theme-color" content="#ffffff" />
				</Helmet>
				<Navigation menu={data} />
				{children()}
				<Footer menu={data} onCloseModal={this.onCloseModal} onOpenModal={this.onOpenModal} open={this.state.open} />
			</div>
		)
	}
}

export default Template

export const menuTopQuery = graphql`
	query MenuQuery {
		allContentfulMenu(sort: {fields: [menuTag, order], order: DESC}) {
			edges {
				node {
					order
					text
					url
					iconClass
					menuTag
					dropdownOptions {
						__typename
						... on Node {
							... on ContentfulMenu {
								text
								url
							}
						}
					}
				}
			}
		}
		allContentfulGeneralSettings(sort: {fields: [title], order: DESC}) {
			edges {
				node {
					logoTop {file {url}}
					logoBottom {file {url}}
					footerButtonsLeft {text{text} url}
					footerButtonsRight {text{text} url}
					footerCopyrightText {footerCopyrightText}
				}
			}
		}
	}
`
