import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class RootIndex extends React.Component {
	constructor() {
		super();
		var cat = get(this, 'props.data.allContentfulFaqCategory.edges');
		console.log(cat)
		this.state = {
			faqFilter: {
				value: '',
				key: Math.random()
			},
			faqSearch: {
				value: ''
			},
			openedQuestion: {
				value: 0
			}
		}
		//this.someName = this.someName.bind(this);
	}
	doSearch = (e = null) => {
		if(e) e.preventDefault();
		var txt = e.target.value;
		this.setState({
			faqSearch: {
				value: txt,
			}
		});
	}
	questionChange = (num, e = null) => {
		if(e) e.preventDefault();
		num = num === this.state.openedQuestion.value ? num = -1 : num = num;
		this.setState({
			openedQuestion: {
				value: num,
			}
		});
	}
	categoryChange = (cat, e = null) => {
		if(e) e.preventDefault();
		this.setState({
			faqFilter: {
				value: cat,
				key: Math.random()
			},
			openedQuestion: {
				value: 0
			}
		});
	}
	render() {
		var siteTitle = "Kleros";
		var questions = get(this, 'props.data.allContentfulFaqEntry.edges');
		var cats = get(this, 'props.data.allContentfulFaqCategory.edges');
		if(this.state.faqFilter.value == '') this.categoryChange(cats[0].node.title.title);
		else {
			questions = questions.filter(({node}) => ((node.category.title.title === this.state.faqFilter.value) && (node.question.question.toLowerCase().indexOf(this.state.faqSearch.value.toLowerCase()) >= 0)));
		}
		return (
			<div>
				<Helmet><html lang="en" /><title>{siteTitle}</title></Helmet>
				<section className="ca_juror_top ca_faq_top">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-7">
								<h1>Frequently Asked Questions</h1>
								<form className="ca_search">
									<input type="text" onChange={(e) => this.doSearch(e)}placeholder="Search your question" />
								</form>
							</div>
							<div className="col-12 col-md-5"></div>
						</div>
					</div>
				</section>
				<section className="ca_faq_content">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-2">
								<ul>
									{cats.map((el, num) => {
										return <li key={num}><a href="#" className={el.node.title.title === this.state.faqFilter.value ? "ca_selected" : ""} onClick={(e) => this.categoryChange(el.node.title.title, e)}>{el.node.title.title}</a></li>
									})}
								</ul>
							</div>
							<div className="col-12 col-md-10">
								<h2>{this.state.faqFilter.value}</h2>
								{(questions.length == 0) ? (
										<div className='ca_question'>
												<h6>Sorry, nothing found!</h6>
										</div>
									) : questions.map((el, num) => {
										return (
											<div key={num} className={'ca_question' + (num == this.state.openedQuestion.value ? ' ca_opened' : '')}>
												<div className="ca_toggle">
													<h6>{el.node.question.question}</h6>
													<a href="#" onClick={(e) => this.questionChange(num, e)}></a>
												</div>
												<div className="ca_content" dangerouslySetInnerHTML={{__html: el.node.answer.childMarkdownRemark.html}}></div>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default RootIndex

export const faqQuery = graphql`
	query FAQQuery {
		allContentfulFaqEntry(sort: {fields: [question___NODE, updatedAt], order: DESC}) {
			edges {
				node {
					question {question}
					answer {
						answer
						childMarkdownRemark {html}
					}
					category {
						title {title}
					}
				}
			}
		}
		allContentfulFaqCategory(sort: {fields: [createdAt], order: ASC}) {
			edges {
				node {
					title {title}
				}
			}
		}
	}
`
