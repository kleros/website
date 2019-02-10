import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import theMeta from '../js/helpers.js'

class RootIndex extends React.Component {
	render() {
		const siteTitle = "Kleros"
		const data = get(this, 'props.data.allContentfulJurorPage.edges')[0].node;
		const top = data.topBlock;
		const benefits = data.benefitsBlock;
		const benefitsCards = data.benefitsBlockCards;
		const how = data.howBlock;
		const howCards = data.howBlockCards;
		const getStarted = data.getStartedBlock;
		const testimonials = data.testimonialsBlock;
		const testimonialsList = data.testimonialsBlockList;
		const beJuror = data.beJurorBlock;

		return (
			<div>
				<Helmet><html lang="en" /><title>{siteTitle}</title></Helmet>
				<div className="ca_paralax_background_illustration"><span></span><span></span><span></span><span></span></div>
				<section className="ca_juror_top">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-3"></div>
							<div className="col-12 col-md-6">
								<h1>{theMeta(top, 'Juror > Top > Title').data.data}</h1>
								<h6>{theMeta(top, 'Juror > Top > Sub Title').data.data}</h6>
								<p>{theMeta(top, 'Juror > Top > Description').data.data}</p>
								<a href={theMeta(top, 'Juror > Top > Button').referenceData[0].url} target={'_' + theMeta(top, 'Juror > Top > Button').referenceData[0].target} className="ca_button ca_solid_blue">{theMeta(top, 'Juror > Top > Button').referenceData[0].text.text}</a>
							</div>
							<div className="col-12 col-md-3"></div>
						</div>
					</div>
				</section>
				<section className="ca_juror_benefit ca_wave_bottom">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h2 className="ca_underlined">{theMeta(benefits, 'Juror > Benefits > Title').data.data}</h2>
							</div>
						</div>
						{
							benefitsCards.filter((el, num) => {
								return !((num+3) % 3);
							}).map((el, index) => {
								return (
								<div className="row" key={index}>
									<div className="col-12 col-md-1"></div>
									{
										benefitsCards.map((el, num) => {
											if(num >= (index * 3) && num <= (index * 3) + 2)
												if(!((num + 2) % 3)) {
													return (
														<div key={num} className="col-12 col-md-4">
															<div className="ca_img"><img src={el.image.file.url} alt={el.title.title} /></div>
															<div className="ca_txt">
																<h6>{el.title.title}</h6>
																<p>{el.text.text}</p>
															</div>
														</div>
													)
												}
												else {
													return (
														<div key={num} className="col-12 col-md-3">
															<div className="ca_img"><img src={el.image.file.url} alt={el.title.title} /></div>
															<div className="ca_txt">
																<h6>{el.title.title}</h6>
																<p>{el.text.text}</p>
															</div>
														</div>
													)
												}
										})
									}
									<div className="col-12 col-md-1"></div>
								</div>)
							})
						}
					</div>
				</section>
				<section className="ca_juror_how">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h2 className="ca_underlined">{theMeta(how, 'Juror > How > Title').data.data}</h2>
							</div>
						</div>
						{
							howCards.map((el, num) =>(
								<div key={num} className={"row " + ((num + 1) % 2 ? 'ca_left' : 'ca_right')}>
									<div className="col-12 col-md-2"></div>
									<div className="col-12 col-md-4 ca_img">
										<img src={el.image.file.url} alt={theMeta(how, 'Juror > How > Title').data.data} />
									</div>
									<div className="col-12 col-md-4 ca_txt">
										<p>{el.text.text}</p>
									</div>
									<div className="col-12 col-md-2"></div>
								</div>
							))
						}
					</div>
				</section>
				<section className="ca_juror_buy">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h2 className="ca_underlined">{theMeta(getStarted, 'Juror > Get Started > Title').data.data}</h2>
							</div>
						</div>
						<div className="row ca_right">
							<div className="col-12 col-md-2"></div>
							<div className="col-12 col-md-4 ca_txt">
								<h6>{theMeta(getStarted, 'Juror > Get Started > First > Title').data.data}</h6>
								<a href={theMeta(getStarted, 'Juror > Get Started > First > Button').referenceData[0].url} target={'_' + theMeta(getStarted, 'Juror > Get Started > First > Button').referenceData[0].target} className="ca_button ca_transparent_blue">{theMeta(getStarted, 'Juror > Get Started > First > Button').referenceData[0].text.text}</a>
							</div>
							<div className="col-12 col-md-4 ca_img">
								<img src={theMeta(getStarted, 'Juror > Get Started > First > Image').mediaData[0].file.url} alt={theMeta(getStarted, 'Juror > Get Started > First > Title').data.data} />
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
						<div className="row ca_left">
							<div className="col-12 col-md-2"></div>
							<div className="col-12 col-md-4 ca_txt">
								<h6>{theMeta(getStarted, 'Juror > Get Started > Second > Title').data.data}</h6>
								<a href={theMeta(getStarted, 'Juror > Get Started > Second > Button').referenceData[0].url} target={'_' + theMeta(getStarted, 'Juror > Get Started > Second > Button').referenceData[0].target} className="ca_button ca_transparent_blue">{theMeta(getStarted, 'Juror > Get Started > Second > Button').referenceData[0].text.text}</a>
							</div>
							<div className="col-12 col-md-4 ca_img">
								<img src={theMeta(getStarted, 'Juror > Get Started > Second > Image').mediaData[0].file.url} alt={theMeta(getStarted, 'Juror > Get Started > Second > Title').data.data} />
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
						<div className="row ca_right">
							<div className="col-12 col-md-2"></div>
							<div className="col-12 col-md-4 ca_txt">
								<h6>{theMeta(getStarted, 'Juror > Get Started > Third > Title').data.data}</h6>
								<a href={theMeta(getStarted, 'Juror > Get Started > Third > Button').referenceData[0].url} target={'_' + theMeta(getStarted, 'Juror > Get Started > Third > Button').referenceData[0].target} className="ca_button ca_transparent_blue">{theMeta(getStarted, 'Juror > Get Started > Third > Button').referenceData[0].text.text}</a>
							</div>
							<div className="col-12 col-md-4 ca_img">
								<img src={theMeta(getStarted, 'Juror > Get Started > Third > Image').mediaData[0].file.url} alt={theMeta(getStarted, 'Juror > Get Started > Third > Title').data.data} />
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
					</div>
				</section>
				{/*<section className="ca_juror_testimonials">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h2 className="ca_underlined">{theMeta(testimonials, 'Juror > Testimonials > Title').data.data}</h2>
							</div>
						</div>
						{
							testimonialsList.filter((el, num) => (!((num + 2) % 2))).map((el, num) => {
								return (
									<div key={num} className={"row " + ((num + 2) % 2 ? 'ca_right' : 'ca_left')}>
										<div className="col-12 col-md-1"></div>
										{testimonialsList.map((el, index) => {
												if(index >= num && index <= num + 1)
													return (
														<div key={index} className="col-12 col-md-4">
															<div className="ca_img">
																<img src={el.photo.file.url} alt={el.person.person} />
															</div>
															<div className="ca_txt">
																<p>{el.quote.quote}</p>
																<p><strong>{el.person.person}</strong></p>
															</div>
														</div>
													)
											}
										)}
										<div className="col-12 col-md-3"></div>
									</div>
								)
							})
						}
					</div>
				</section>*/}
				{/*<section className="ca_juror_now ca_wave_top">*/}
				<section className="ca_juror_now ca_wave_bottom ca_no_padding_top">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-10">
								<h2 className="ca_underlined">{theMeta(beJuror, 'Juror > Be Juror > Title').data.data}</h2>
								<div dangerouslySetInnerHTML={{
									__html: theMeta(beJuror, 'Juror > Be Juror > Text').data.childMarkdownRemark.html,
								}}></div>
								<a target={'_' + theMeta(beJuror, 'Juror > Be Juror > Button').referenceData[0].target} href={theMeta(beJuror, 'Juror > Be Juror > Button').referenceData[0].url} className="ca_button ca_solid_blue">{theMeta(beJuror, 'Juror > Be Juror > Button').referenceData[0].text.text}</a>
							</div>
							<div className="col-12 col-md-1"></div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default RootIndex

export const pageQuery = graphql`
query jurorQuery {
		allContentfulJurorPage(sort: {fields: [id], order: DESC}) {
			edges {
				node {
					topBlock {
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
					benefitsBlock {
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
					benefitsBlockCards {
						title {title}
						text {text childMarkdownRemark {html}}
						image {file{url}}
					}
					howBlock {
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
					howBlockCards {
						title {title}
						text {text childMarkdownRemark {html}}
						image {file{url}}
					}
					getStartedBlock {
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
					testimonialsBlock {
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
					testimonialsBlockList {
						person {person}
						quote {quote childMarkdownRemark {html}}
						photo {file{url}}
					}
					beJurorBlock {
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
