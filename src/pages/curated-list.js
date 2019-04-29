import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Modal from 'react-responsive-modal'

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
		open: false
	}

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
			.then(() => this.setState(
				{
					firstname: "",
					lastname: "",
					companyEmail: "",
					companyName: "",
					message: "",
					open: true
				}
			))
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
		
		const siteTitle = "Kleros"
		const data = get(this, 'props.data.allContentfulCuratedListPage.edges')[0].node;
		const contentMain = data.contentMain;
		const descriptionTitle = data.descriptionTitle;
		const description = data.description;
		const whyTitle = data.whyTitle;
		const why = data.why;
		const trustlessTitle = data.trustlessTitle;
		const trustlessSubtitle = data.trustlessSubTitle;
		const howWorkTitle = data.howWorkTitle;
		const howWork = data.howWork;
		const disputeTitle = data.disputeTitle;
		const dispute = data.dispute;
		const whyMattersTitle = data.whyMattersTitle;
		const whyMatters = data.whyMatters;
		const contactUsTitle = data.contactUsTitle;
		const contactUs = data.contactUs;

		return (
			<div>
				<Helmet><html lang="en" /><title>{siteTitle}</title></Helmet>
				<section className="ca_home_top ca_escrow_top">
					<div className="container">
						<div className="row ca_txt">
							<div className="col-12 col-md-6">
								<h1>{contentMain[0].title}</h1>
								<div style={{color: '#fff', fontSize: '2em', padding: '2em'}} dangerouslySetInnerHTML={{
									__html: contentMain[0].data.childMarkdownRemark.html
								}}></div>
							</div>
							<div className="col-12 col-md-6">
								<img src={contentMain[0].mediaData[0].file.url} className="illustration_escrow" alt="Curated List" />
							</div>
						</div>
					</div>
				</section>
				<section className="ca_escrow_description ca_wave_top_inverted">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-4">
								<h2>{descriptionTitle}</h2>
								<div style={{color: '#fff'}}>
									<div dangerouslySetInnerHTML={{
										__html: description.childMarkdownRemark.html
									}}></div>
								</div>
							</div>
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-5">
								<img src={contentMain[0].mediaData[1].file.url} alt="Kleros Curated List" />
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
								<img src={contentMain[0].mediaData[2].file.url} alt="Why Kleros Curated List" />
							</div>
							<div className="col-12 col-md-5">
								<h2>{whyTitle}</h2>
								<div color={{color:'#fff'}} dangerouslySetInnerHTML={{
										__html: why.childMarkdownRemark.html
									}}>
								</div>
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
								<h2>{trustlessTitle}</h2>
								<h6>{trustlessSubtitle}</h6>
								<img src={contentMain[0].mediaData[3].file.url} alt="Kleros" />
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
						<div className="row ca_left">
							<div className="col-12 col-md-1 one"></div>
							<div className="col-12 col-md-5 two">
								<h6>{howWorkTitle}</h6>
								<div color={{color:'#fff'}} dangerouslySetInnerHTML={{
										__html: howWork.childMarkdownRemark.html
									}}>
								</div>
							</div>
							<div className="col-12 col-md-5 three">
								<img src={contentMain[0].mediaData[3].file.url} alt="Kleros" />
							</div>
							<div className="col-12 col-md-1 four"></div>
						</div>
						<div className="row ca_right">
							<div className="col-12 col-md-1 one"></div>
							<div className="col-12 col-md-5 two">
								<h6>{disputeTitle}</h6>
								<div color={{color:'#fff'}} dangerouslySetInnerHTML={{
										__html: dispute.childMarkdownRemark.html
									}}>
								</div>
							</div>
							<div className="col-12 col-md-5 three">
								<img src={contentMain[0].mediaData[3].file.url} alt="Kleros" />
							</div>
							<div className="col-12 col-md-1 four"></div>
						</div>
						<div className="row ca_left">
							<div className="col-12 col-md-1 one"></div>
							<div className="col-12 col-md-5 two">
								<h6>{whyMattersTitle}</h6>
								<div color={{color:'#fff'}} dangerouslySetInnerHTML={{
										__html: whyMatters.childMarkdownRemark.html
									}}>
								</div>
							</div>
							<div className="col-12 col-md-5 three">
								<img src={contentMain[0].mediaData[3].file.url} alt="Kleros" />
							</div>
							<div className="col-12 col-md-1 four"></div>
						</div>
					</div>
				</section>
				<section className="ca_escrow_contact">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-8">
								<h2>{contactUsTitle}</h2>
								<h6 dangerouslySetInnerHTML={{
										__html: contactUs.childMarkdownRemark.html
								}}></h6>
								<div className="ca_form">
									<form name="curatedList" method="post" data-netlify="true" onSubmit={this.handleSubmit}>
										{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
										<input type="hidden" name="form-name" value="curatedList" />
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
query curatedListQuery {
	allContentfulCuratedListPage(sort: {fields: [id], order: DESC}) {
		edges {
			node {
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
				descriptionTitle
				description {
					childMarkdownRemark {
						html
					}
				}
				whyTitle
				why {
					childMarkdownRemark {
						html
					}
				}
				trustlessTitle
				trustlessSubtitle
				howWorkTitle
				howWork {
					childMarkdownRemark {
						html
					}
				}
				disputeTitle
				dispute {
					childMarkdownRemark {
						html
					}
				}
				whyMattersTitle
				whyMatters {
					childMarkdownRemark {
						html
					}
				}
				contactUsTitle
				contactUs {
					childMarkdownRemark {
						html
					}
				}
      }
    }
	}
}
`