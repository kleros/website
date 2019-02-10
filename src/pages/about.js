import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import theMeta from '../js/helpers.js'

class RootIndex extends React.Component {
	render() {
		const siteTitle = "Kleros"
		const data = get(this, 'props.data.allContentfulAboutPage.edges')[0].node;
		const top = data.top;
		const description = data.description;
		const teamText = data.teamText;
		const teamMembers = data.teamMembers;
		const vacanciesText = data.vacanciesText;
		const vacanciesEntries = data.vacanciesEntries;

		return (
			<div>
				<Helmet><html lang="en" /><title>{siteTitle}</title></Helmet>
				<div className="ca_paralax_background_illustration"><span></span><span></span><span></span><span></span></div>
				<section className="ca_juror_top ca_about_top">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-7">
								<h1>{theMeta(top, 'About Top Title').data.data}</h1>
								<h6>{theMeta(top, 'About Top Sub Title').data.data}</h6>
							</div>
							<div className="col-12 col-md-5"></div>
						</div>
					</div>
				</section>
				<section className="ca_about_description ca_wave_bottom_mid">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-7">
								<h2>{theMeta(description, 'About Description Title').data.data}</h2>
								<div dangerouslySetInnerHTML={{
									__html: theMeta(description, 'About Description Sub Title').data.childMarkdownRemark.html
								}}></div>
							</div>
							<div className="col-12 col-md-5">
								<div className="ca_illustration_holder">
									<img src="/img/homepage/animation_placeholder.png" alt="Kleros" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="ca_about_team">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-8">
								<div className="ca_team_slider">
									{teamMembers.map((el, num) => {
										return (
											<div key={num} className="ca_slide">
												<div className="ca_holder">
													<div className="ca_img">
														<div className="ca_photo" style={{backgroundImage: "url('"+el.photo.file.url+"')"}}></div>
													</div>
													<div className="ca_txt">
														<h6>{el.name.name}</h6>
														<p>{el.position.position}</p>
														<div className="ca_social">
															{el.links.map((link, num) => {
																return <a key={num} href={link.url} target="_blank" className={link.extraClass}></a>
															})}
														</div>
													</div>
												</div>
											</div>
										)
									})}
								</div>
							</div>
							<div className="col-12 col-md-4">
								<h3>{theMeta(teamText, 'About Team Text Title').data.data}</h3>
								<p>{theMeta(teamText, 'About Team Text Text').data.data}</p>
								<div className="ca_team_slider_arrows"></div>
							</div>
						</div>
					</div>
				</section>
				<section className="ca_about_vacancies">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-2"></div>
							<div className="col-12 col-md-8">
								<h2 className="ca_underlined">{theMeta(vacanciesText, 'About Vacancies Title').data.data}</h2>
								<h6>{theMeta(vacanciesText, 'About Vacancies Sub Title').data.data}</h6>
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
						<div className="row">
							<div className="col-12">
								<ul>
									{vacanciesEntries.map((el, num) => {
										return <li key={num}><span>{el.title.title}</span><span>{el.location.location}</span><a href={el.url.url}></a></li>
									})}
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default RootIndex

export const pageQuery = graphql`
query aboutQuery {
	allContentfulAboutPage(sort: {fields: [id], order: DESC}) {
		edges {
			node {
				top {
					title
					data {data childMarkdownRemark {html}}
					mediaData {file{url}}
					referenceData {
						__typename
						... on Node {
							... on ContentfulLink {
								text {text}
								url
								extraClass
								target
							}
							... on ContentfulHomepageHowSteps {
								title {title}
								text {text}
								image {file{url}}
							}
						}
					}
				}
				description {
					title
					data {data childMarkdownRemark {html}}
					mediaData {file{url}}
					referenceData {
						__typename
						... on Node {
							... on ContentfulLink {
								text {text}
								url
								extraClass
								target
							}
							... on ContentfulHomepageHowSteps {
								title {title}
								text {text}
								image {file{url}}
							}
						}
					}
				}
				teamText {
					title
					data {data childMarkdownRemark {html}}
					mediaData {file{url}}
					referenceData {
						__typename
						... on Node {
							... on ContentfulLink {
								text {text}
								url
								extraClass
								target
							}
							... on ContentfulHomepageHowSteps {
								title {title}
								text {text}
								image {file{url}}
							}
						}
					}
				}
				teamMembers {
					name {name}
					position {position}
					photo {file {url}}
					links {
						text {text}
						url
						extraClass
						target
					}
				}
				vacanciesText {
					title
					data {data childMarkdownRemark {html}}
					mediaData {file{url}}
					referenceData {
						__typename
						... on Node {
							... on ContentfulLink {
								text {text}
								url
								extraClass
								target
							}
							... on ContentfulHomepageHowSteps {
								title {title}
								text {text}
								image {file{url}}
							}
						}
					}
				}
				vacanciesEntries {
					__typename
					... on Node {
						... on ContentfulVacancies {
							title {title}
							location {location}
							url {url}
						}
					}
				}
			}
		}
	}
}
`