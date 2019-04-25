import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { navigateTo } from "gatsby-link"
import Modal from 'react-responsive-modal'
import queryString from 'query-string'
import theMeta from '../js/helpers.js'

const encode = data => {
	return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
}

class RootIndex extends React.Component {
  state = {
		firstname: "",
		lastname: "",
		companyEmail: "",
		companyName: "",
		message: "",
		open: null
	}

	onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

	handleSubmit = e => {
		e.preventDefault();
		const form = e.target;

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ 
				"form-name": form.getAttribute("name"), 
				...this.state 
			})
		})
			.then(() => navigateTo(form.getAttribute("action")))
			.catch(error => alert(error));
	};

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const {
			firstname,
			lastname,
			companyEmail,
			companyName,
			message,
			open
		} = this.state;

		if(queryString.parse(
			this.props.location.search).isMsgSent !== undefined && this.state.open === null
		)
			this.onOpenModal()

		const siteTitle = "Kleros"
		const data = get(this, 'props.data.allContentfulEscrowPage.edges')[0].node;
		const top = data.top;
		const escrow = data.escrow;
		const why = data.why;
		const contentMain = data.contentMain;
		const contentCards = data.contentCards;
		const contentPath = data.contentPath;
		const contact = data.contact;

		return (
			<div>
				<Helmet><html lang="en" /><title>{siteTitle}</title></Helmet>
				<Modal open={open} onClose={this.onCloseModal} center classNames={{
            modal: 'customModal'
          }}
				>
						<h2 style={{color: '#000', fontSize: '30px'}}>Message sent!</h2>
						<p>
							We will answer you as soon as possible.
						</p>
						<p>
							While waiting for an answer you can join our{' '}
							<a href="https://t.me/kleros" target="_blank">Telegram</a>.
						</p>
					</Modal>
				<section className="ca_home_top ca_escrow_top">

					<div className="container">
						<div className="row ca_txt">
							<div className="col-12 col-md-6">
								<h1>{theMeta(top, 'Escrow Top Title').data.data}</h1>
								<h6>{theMeta(top, 'Escrow Top Sub Title').data.data}</h6>
								<a href={theMeta(top, 'Escrow Top Button').referenceData[0].url} target={'_' + theMeta(top, 'Escrow Top Button').referenceData[0].target} className="ca_button ca_solid_blue">{theMeta(top, 'Escrow Top Button').referenceData[0].text.text}</a>
							</div>
							<div className="col-12 col-md-6">
								<img src="/img/escrow/escrow.png" className="illustration_escrow" alt="Kleros" />
							</div>
						</div>
					</div>
				</section>
				<section className="ca_escrow_description ca_wave_top_inverted">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-4">
								<h2>{theMeta(escrow, 'Escrow Title').data.data}</h2>
								<div dangerouslySetInnerHTML={{
									__html: theMeta(escrow, 'Escrow Text').data.childMarkdownRemark.html
								}}></div>
								{
									[theMeta(escrow, 'Escrow Button').referenceData[0]].map((el, num) => {
										return <a key={num} href={el.url} target={"_"+el.target} className="ca_button ca_transparent_blue">{el.text.text}</a>
									})
								}
							</div>
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-5">
								<img src={theMeta(escrow, 'Escrow Image').mediaData[0].file.url} alt="Kleros" />
							</div>
							<div className="col-12 col-md-1"></div>
						</div>
					</div>
				</section>
				<section className="ca_escrow_why">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-5">
								<img src={theMeta(why, 'Escrow Why Image').mediaData[0].file.url} alt="Kleros" />
							</div>
							<div className="col-12 col-md-5">
								<h2>{theMeta(why, 'Escrow Why Title').data.data}</h2>
								<div dangerouslySetInnerHTML={{
									__html: theMeta(why, 'Escrow Why Text').data.childMarkdownRemark.html
								}}></div>
								{
									[theMeta(why, 'Escrow Why Button').referenceData[0]].map((el, num) => {
										return <a key={num} href={el.url} target={"_"+el.target} className="ca_button ca_transparent_blue">{el.text.text}</a>
									})
								}
							</div>
							<div className="col-12 col-md-1"></div>
						</div>
					</div>
				</section>
				<section className="ca_escrow_content ca_wave_bottom">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-2"></div>
							<div className="col-12 col-md-8">
								<h2>{theMeta(contentMain, 'Escrow Content Title').data.data}</h2>
								<h6>{theMeta(contentMain, 'Escrow Content Sub Title').data.data}</h6>
								<img src={theMeta(contentMain, 'Escrow Content Image').mediaData[0].file.url} alt="Kleros" />
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
						{contentCards.map((el, num) => {
							return (
								<div key={num} className={"row " + (num%2 == 0 ? 'ca_left' : 'ca_right')}>
									<div className="col-12 col-md-1 one"></div>
									<div className="col-12 col-md-5 two">
										<h6>{el.title.title}</h6>
										<div dangerouslySetInnerHTML={{
											__html: el.text.childMarkdownRemark.html
										}}></div>
									</div>
									<div className="col-12 col-md-5 three">
										<img src={el.image.file.url} alt="Kleros" />
									</div>
									<div className="col-12 col-md-1 four"></div>
								</div>
							)
						})}
						<div className="row ca_escrow_path">
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-3">
								{[contentPath[0]].map((el, num) => {
									return (
										<div key={num}>
											<div className="ca_img ca_underlined ca_stroke ca_stroke_1">
												<img src={el.image.file.url} alt="Illustration" />
											</div>
											<div className="ca_txt">
												<p>{el.text.text}</p>
											</div>
										</div>
									)
								})}
							</div>
							<div className="col-12 col-md-4">
								{[contentPath[1]].map((el, num) => {
									return (
										<div key={num}>
											<div className="ca_img ca_underlined ca_stroke ca_stroke_2">
												<img src={el.image.file.url} alt="Illustration" />
											</div>
											<div className="ca_txt">
												<p>{el.text.text}</p>
											</div>
										</div>
									)
								})}
							</div>
							<div className="col-12 col-md-3">
								{[contentPath[2]].map((el, num) => {
									return (
										<div key={num}>
											<div className="ca_img ca_underlined ca_stroke ca_stroke_3">
												<img src={el.image.file.url} alt="Illustration" />
											</div>
											<div className="ca_txt">
												<p>{el.text.text}</p>
											</div>
										</div>
									)
								})}
							</div>
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-2"></div>
							<div className="col-12 col-md-4">
								{[contentPath[3]].map((el, num) => {
									return (
										<div key={num}>
											<div className="ca_img ca_underlined ca_stroke ca_stroke_4">
												<img src={el.image.file.url} alt="Illustration" />
											</div>
											<div className="ca_txt">
												<p>{el.text.text}</p>
											</div>
										</div>
									)
								})}
							</div>
							<div className="col-12 col-md-4">
								{[contentPath[4]].map((el, num) => {
									return (
										<div key={num}>
											<div className="ca_img ca_underlined ca_stroke ca_stroke_5">
												<img src={el.image.file.url} alt="Illustration" />
											</div>
											<div className="ca_txt">
												<p>{el.text.text}</p>
											</div>
										</div>
									)
								})}
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
					</div>
				</section>
				<section className="ca_escrow_contact">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-8">
								<h2>{theMeta(contact, 'Escrow Contact Title').data.data}</h2>
								<h6>{theMeta(contact, 'Escrow Contact Sub Title').data.data}</h6>
								<div className="ca_form">
									<form 
										name="escrow"
										method="post"
										action="/escrow?isMsgSent=true"
										data-netlify="true"
										data-netlify-honeypot="bot-field"
										onSubmit={this.handleSubmit}>
										{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
										<input type="hidden" name="form-name" value="contact" />
										<p hidden>
											<label>
												Don’t fill this out:{" "}
												<input name="bot-field" onChange={this.handleChange} />
											</label>
										</p>
										<div className="ca_line">
											<div className="ca_half">
												<label htmlFor="ca_name">First Name</label>
												<input 
													type="text" 
													id="ca_name" 
													name="firstname" 
													value={firstname} 
													onChange={this.handleChange} 
												/>
											</div>
											<div className="ca_half">
												<label htmlFor="ca_lname">Last Name</label>
												<input 
													type="text" 
													id="ca_lname" 
													name="lastname" 
													value={lastname} 
													onChange={this.handleChange}
												/>
											</div>
										</div>
										<div className="ca_line">
											<div className="ca_half">
												<label htmlFor="ca_email">Company Email</label>
												<input 
													type="email" 
													id="ca_email" 
													name="companyEmail" 
													value={companyEmail} 
													onChange={this.handleChange}
												/>
											</div>
											<div className="ca_half">
												<label htmlFor="ca_company">Company Name</label>
												<input 
													type="text" 
													id="ca_company" 
													name="companyName" 
													value={companyName} 
													onChange={this.handleChange}
												/>
											</div>
										</div>
										<div className="ca_line">
											<div className="ca_full">
												<label htmlFor="ca_text">Write your message</label>
												<textarea 
													id="ca_text" 
													name="message"
													value={message} 
													onChange={this.handleChange}
												/>
											</div>
										</div>
										<div className="ca_line">
											<input type="submit" value="Send" className="ca_button ca_solid_blue" />
										</div>
									</form>
								</div>
							</div>
							<div className="col-12 col-md-3"></div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default RootIndex

export const pageQuery = graphql`
query escrowQuery {
	allContentfulEscrowPage(sort: {fields: [id], order: DESC}) {
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
				escrow {
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
				why {
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
				contentMain {
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
				contentCards {
					title {title}
					text {text childMarkdownRemark {html}}
					image {file{url}}
					link {
						text {text}
						url
						target
						extraClass
					}
				}
				contentPath {
					title {title}
					text {text childMarkdownRemark {html}}
					image {file{url}}
					link {
						text {text}
						url
						target
						extraClass
					}
				}
				contact {
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
			}
		}
	}
}
`