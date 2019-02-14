import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import theMeta from '../js/helpers.js'

class RootIndex extends React.Component {
	render() {
		const siteTitle = "Kleros"
		const apiTwitter = (get(this, 'props.data.allTweet.edges'))[0].node;
		const apiBlog = (get(this, 'props.data.allKlerosBlogPosts.edges'))[0].node;
		const apiGit = (get(this, 'props.data.allKlerosGitCommits.edges'))[0].node;
		const apiForum = (get(this, 'props.data.allKlerosForumTopic.edges'))[0].node;

		const data = (get(this, 'props.data.allContentfulHomepage.edges'))[0].node;
		const top = data.topBlock;
		const why = data.whyBlock;
		const problem = data.problemBlock;
		const solution = data.solutionBlock;
		const how = data.howBlock;
		const join = data.joinBlock;
		const partners = data.partnersBlock;
		const contact = data.contactBlock;

		var theSubtitle = function(subTitle) {
			return subTitle.split("\n").map((el, num) => {
				return <h6 key={num}>{el}</h6>
			});
		}
		var theBrs = function(text) {
			return text.split("\n").map(function(el, num){
				return <span key={num}>{el}<br/></span>
			});
		}

		return (
			<div>
				<Helmet><html lang="en" /><title>{siteTitle}</title></Helmet>
				<section className="ca_home_top">
					<div className="container">
						<div className="row ca_txt">
							<div className="col-12 col-md-6">
								<h1>{theMeta(top, 'Homepage > Top > Title').data.data}</h1>
								<h6>{theMeta(top, 'Homepage > Top > Sub Title').data.data}</h6>
								<a href={theMeta(top, 'Homepage > Top > Button > Left').referenceData[0].url} className="ca_button ca_solid_blue" target={"_"+theMeta(top, 'Homepage > Top > Button > Left').referenceData[0].target}>{theMeta(top, 'Homepage > Top > Button > Left').referenceData[0].text.text}</a>
								<a href={theMeta(top, 'Homepage > Top > Button > Right').referenceData[0].url} className="ca_button ca_transparent_blue" target={"_"+theMeta(top, 'Homepage > Top > Button > Right').referenceData[0].target}>{theMeta(top, 'Homepage > Top > Button > Right').referenceData[0].text.text}</a>
							</div>
							<div className="col-12 col-md-6 illustration_holder">
								<img src='img/homepage/logo.svg' className="illustration_holder_img" />
							</div>
						</div>
					</div>
				</section>
				<section className="ca_home_social">
					<div className="container">
						<div className="row ca_social">
							<div className="col-12 col-md-3">
								<div className="ca_social_holder">
									<div className="ca_date">{(new Date(apiTwitter.created_at)).toLocaleDateString("en-US", {year: 'numeric', month: 'short', day: 'numeric'})}</div>
									<h3><span className="ca_icon"><img src="img/homepage/twt.png" alt="Icon" /></span><span>Twitter</span></h3>
									<p>{apiTwitter.full_text.replace(/<(?:.|\n)*?>/gm, '').trim().split(' ').slice(0, 7).join(' ') + '...'}</p>
									<a target="_blank" href={"https://twitter.com/Kleros_io/status/"+apiTwitter.id_str}>Go to Twitter</a>
									<a target="_blank" href={"https://twitter.com/Kleros_io/status/"+apiTwitter.id_str}></a>
								</div>
							</div>
							<div className="col-12 col-md-3">
								<div className="ca_social_holder">
									<div className="ca_date">{(new Date(apiBlog.post_date)).toLocaleDateString("en-US", {year: 'numeric', month: 'short', day: 'numeric'})}</div>
									<h3><span className="ca_icon"><img src="img/homepage/blg.png" alt="Icon" /></span><span>Blog</span></h3>
									<p>{apiBlog.post_title.replace(/<(?:.|\n)*?>/gm, '').trim().split(' ').slice(0, 7).join(' ') + '...'}</p>
									<a target="_blank" href={"https://blog.kleros.io/"+apiBlog.post_url}>Go to Blog</a>
									<a target="_blank" href={"https://blog.kleros.io/"+apiBlog.post_url}></a>
								</div>
							</div>
							<div className="col-12 col-md-3">
								<div className="ca_social_holder">
									<div className="ca_date">{(new Date(apiGit.commit_date)).toLocaleDateString("en-US", {year: 'numeric', month: 'short', day: 'numeric'})}</div>
									<h3><span className="ca_icon"><img src="img/homepage/gth.png" alt="Icon" /></span><span>Github</span></h3>
									<p>{apiGit.commit_text.replace(/<(?:.|\n)*?>/gm, '').trim().split(' ').slice(0, 7).join(' ') + '...'}</p>
									<a target="_blank" href={apiGit.commit_url}>Go to Github</a>
									<a target="_blank" href={apiGit.commit_url}></a>
								</div>
							</div>
							<div className="col-12 col-md-3">
								<div className="ca_social_holder">
									<div className="ca_date">{(new Date(apiForum.created_at)).toLocaleDateString("en-US", {year: 'numeric', month: 'short', day: 'numeric'})}</div>
									<h3><span className="ca_icon"><img src="img/homepage/frm.png" alt="Icon" /></span><span>Forum</span></h3>
									<p>{apiForum.topic_title.replace(/<(?:.|\n)*?>/gm, '').trim().split(' ').slice(0, 7).join(' ') + '...'}</p>
									<a target="_blank" href={'https://forum.kleros.io/t/' + apiForum.topic_slug + '/' + apiForum.topic_id}>Go to Forum</a>
									<a target="_blank" href={'https://forum.kleros.io/t/' + apiForum.topic_slug + '/' + apiForum.topic_id}></a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="ca_home_why">
					<div className="container">
						<div className="row ca_text">
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-10">
								<h2>{theMeta(why, 'Homepage > Why > Title').data.data}</h2>
								{theSubtitle(theMeta(why, 'Homepage > Why > Sub Title').data.data)}
							</div>
							<div className="col-12 col-md-1"></div>
						</div>
						<div className="row ca_img">
							<div className="col-12 col-md-2"></div>
							<div className="col-12 col-md-8">
								<div className="ca_why_block">
									<img src={theMeta(why, 'Homepage > Why > First Image').mediaData[0].file.url} alt={theMeta(why, 'Homepage > Why > Title').data.data} />
									<div className="ca_txt">
										<p>{theMeta(why, 'Homepage > Why > Steps > 1').data.data}</p>
									</div>
									<div className="ca_txt">
										<p>{theMeta(why, 'Homepage > Why > Steps > 2').data.data}</p>
									</div>
									<div className="ca_txt">
										<p>{theMeta(why, 'Homepage > Why > Steps > 3').data.data}</p>
									</div>
								</div>
								<div className="ca_why_block">
									<img src={theMeta(why, 'Homepage > Why > Second Image').mediaData[0].file.url} alt={theMeta(why, 'Homepage > Why > Title').data.data} />
									<div className="ca_txt">
										<p>{theMeta(why, 'Homepage > Why > Steps > 4').data.data}</p>
									</div>
									<div className="ca_txt">
										<p>{theMeta(why, 'Homepage > Why > Steps > 5').data.data}</p>
									</div>
									<div className="ca_txt">
										<p>{theMeta(why, 'Homepage > Why > Steps > 6').data.data}</p>
									</div>
								</div>
								<div className="ca_why_block">
									<a href={theMeta(why, 'Homepage > Why > Button').referenceData[0].url} className={"ca_button ca_solid_blue " + theMeta(why, 'Homepage > Why > Button').referenceData[0].extraClass} data-video-url={theMeta(why, 'Homepage > Why > Button').referenceData[0].url}>{theMeta(why, 'Homepage > Why > Button').referenceData[0].text.text}</a>
								</div>
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
					</div>
				</section>
				<section className="ca_home_problem ca_wave_bottom">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-2"></div>
							<div className="col-12 col-md-8">
								<h2 className="ca_underlined">{theMeta(problem, 'Homepage > Problem > Title').data.data}</h2>
								{theSubtitle(theMeta(problem, 'Homepage > Problem > Sub Title').data.data)}
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
					</div>
				</section>
				<section className="ca_home_solution">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h2 className="ca_underlined">{theMeta(solution, 'Homepage > Solution > Title').data.data}</h2>
							</div>
						</div>
						<div className="row ca_left">
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-6">
								<div className="ca_solution_slider">
									{theMeta(solution, 'Homepage > Solution > First > Images').mediaData.map(function(el, num){
										return <div key={num} className="ca_slide"><img src={el.file.url} alt={theMeta(solution, 'Homepage > Solution > Title').data.data} /></div>
									})}
								</div>
								<div className="ca_solution_slider_dots"></div>
							</div>
							<div className="col-12 col-md-4">
								<h6>{theMeta(solution, 'Homepage > Solution > First > Title').data.data}</h6>
								<p>{theMeta(solution, 'Homepage > Solution > First > Text').data.data}</p>
							</div>
							<div className="col-12 col-md-1"></div>
						</div>
						<div className="row ca_right">
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-6">
								<img src={theMeta(solution, 'Homepage > Solution > Second > Image').mediaData[0].file.url} alt={theMeta(solution, 'Homepage > Solution > Title').data.data} />
							</div>
							<div className="col-12 col-md-4">
								<h6>{theMeta(solution, 'Homepage > Solution > Second > Title').data.data}</h6>
								<p>{theMeta(solution, 'Homepage > Solution > Second > Text').data.data}</p>
								<a target={"_" + theMeta(solution, 'Homepage > Solution > Second > Buttons > Left').referenceData[0].target} href={theMeta(solution, 'Homepage > Solution > Second > Buttons > Left').referenceData[0].url} className="ca_button ca_solid_blue">{theMeta(solution, 'Homepage > Solution > Second > Buttons > Left').referenceData[0].text.text}</a>
								<a target={"_" + theMeta(solution, 'Homepage > Solution > Second > Buttons > Right').referenceData[0].target} href={theMeta(solution, 'Homepage > Solution > Second > Buttons > Right').referenceData[0].url} className="ca_button ca_transparent_blue">{theMeta(solution, 'Homepage > Solution > Second > Buttons > Right').referenceData[0].text.text}</a>
							</div>
							<div className="col-12 col-md-1"></div>
						</div>
						<div className="row ca_left">
							<div className="col-12 col-md-1"></div>
							<div className="col-12 col-md-6">
								<img src={theMeta(solution, 'Homepage > Solution > Third > Image').mediaData[0].file.url} alt={theMeta(solution, 'Homepage > Solution > Third > Title').data.data} />
							</div>
							<div className="col-12 col-md-4">
								<h6>{theMeta(solution, 'Homepage > Solution > Third > Title').data.data}</h6>
								<p>{theMeta(solution, 'Homepage > Solution > Third > Text').data.data}</p>
							</div>
							<div className="col-12 col-md-1"></div>
						</div>
					</div>
				</section>
				<section className="ca_home_solve ca_wave_top">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-2"></div>
							<div className="col-12 col-md-8">
								<h2 className="ca_underlined">{theMeta(how, 'Homepage > How > Title').data.data}</h2>
								<h6>{theMeta(how, 'Homepage > How > Sub Title').data.data}</h6>
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
						{theMeta(how, 'Homepage > How > Steps').referenceData.map(function(step, num){
							return (
								<div key={num} className={"row " + (num%2 ? 'ca_right':'ca_left')}>
									<div className="col-12 col-md-2"></div>
									<div className="col-12 col-md-4 ca_img">
										<img src={step.image.file.url} alt={step.title.title} />
									</div>
									<div className="col-12 col-md-4">
										<h6>{step.title.title}</h6>
										<p>{step.text.text}</p>
									</div>
									<div className="col-12 col-md-2"></div>
								</div>
							)
						})}
						<div className="row ca_for_button">
							<div className="col-12">
								<a href={theMeta(how, 'Homepage > How > Button').referenceData[0].url} className={"ca_button ca_solid_blue " + theMeta(how, 'Homepage > How > Button').referenceData[0].extraClass} data-video-url={theMeta(how, 'Homepage > How > Button').referenceData[0].url}>{theMeta(how, 'Homepage > How > Button').referenceData[0].text.text}</a>
							</div>
						</div>
					</div>
				</section>
				<section className="ca_home_join">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h2 className="ca_underlined">{theMeta(join, 'Homepage > Join > Title').data.data}</h2>
							</div>
							<div className="col-12 col-md-2"></div>
							<div className="col-12 col-md-4">
								<div className="ca_img">
									<img src={theMeta(join, 'Homepage > Join > Left > Image').mediaData[0].file.url} alt={theMeta(join, 'Homepage > Join > Left > Title').data.data} />
								</div>
								<div className="ca_txt">
									<h6>{theMeta(join, 'Homepage > Join > Left > Title').data.data}</h6>
									<p>{theMeta(join, 'Homepage > Join > Left > Text').data.data}</p>
									<a href={theMeta(join, 'Homepage > Join > Left > Button').referenceData[0].url} className="ca_button ca_transparent_blue">{theMeta(join, 'Homepage > Join > Left > Button').referenceData[0].text.text}</a>
								</div>
							</div>
							<div className="col-12 col-md-4">
								<div className="ca_img">
									<img src={theMeta(join, 'Homepage > Join > Left > Image').mediaData[0].file.url} alt={theMeta(join, 'Homepage > Join > Left > Title').data.data} />
								</div>
								<div className="ca_txt">
									<h6>{theMeta(join, 'Homepage > Join > Left > Title').data.data}</h6>
									<p>{theMeta(join, 'Homepage > Join > Left > Text').data.data}</p>
									<a href={theMeta(join, 'Homepage > Join > Left > Button').referenceData[0].url} className="ca_button ca_transparent_blue">{theMeta(join, 'Homepage > Join > Left > Button').referenceData[0].text.text}</a>
								</div>
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
					</div>
				</section>
				<section className="ca_home_partners">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-2"></div>
							<div className="col-12 col-md-8">
								<h2 className="ca_underlined">{theMeta(partners, 'Homepage > Partners > Title').data.data}</h2>
								<h6>{theMeta(partners, 'Homepage > Partners > Sub Title').data.data}</h6>
								<div className="ca_logos">
									{theMeta(partners, 'Homepage > Partners > Logos').mediaData.map(function(logo, num){
										return (<img key={num} src={logo.file.url} alt={theMeta(partners, 'Homepage > Partners > Title').data.data} />)
									})}
								</div>
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
					</div>
				</section>
				<section className="ca_home_contancts">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-2"></div>
							<div className="col-12 col-md-8">
								<h2 className="ca_underlined">{theMeta(contact, 'Homepage > Contact > Title').data.data}</h2>
								<h6>
									<span className="links" dangerouslySetInnerHTML={{
										__html: theMeta(contact, 'Homepage > Contact > Sub Title').data.childMarkdownRemark.html
									}}></span>
								</h6>
							</div>
							<div className="col-12 col-md-2"></div>
						</div>
					</div>
				</section>
				<section className="ca_video_popup">
					<div className="ca_popup_holder">
						<a href="#" className="ca_close"><span></span><span></span></a>
						<div className="ca_video_holder">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/" frameBorder="0"></iframe>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default RootIndex

export const pageQuery = graphql`
	query homeQuery {
		allTweet {
			edges {
				node {
					full_text
					created_at
					id_str
				}
			}
		}
		allKlerosGitCommits(sort: { fields: [commit_date], order: DESC }) {
			edges {
				node {
					commit_text
					commit_date
					commit_url
				}
			}
		}
		allKlerosBlogPosts(sort: { fields: [post_date], order: DESC }) {
			edges {
				node {
					post_title
					post_date
					post_url
				}
			}
		}
		allKlerosForumTopic(sort: { fields: [created_at], order: DESC }) {
			edges {
				node {
					created_at
					topic_data
					topic_id
					topic_title
					topic_slug
				}
			}
		}
		allContentfulHomepage(sort: { fields: [title], order: DESC }) {
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
					whyBlock {
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
					problemBlock {
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
					solutionBlock {
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
					joinBlock {
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
					partnersBlock {
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
					contactBlock {
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
