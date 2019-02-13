import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class RootIndex extends React.Component {
	render() {
		const siteTitle = "Kleros"
		const data = get(this, 'props.data.allContentfulCuratedListPage.edges')[0].node;
		const contentMain = data.contentMain;

		return (
			<div>
				<Helmet><html lang="en" /><title>{siteTitle}</title></Helmet>
				<section className="ca_home_top ca_escrow_top">
					<div className="container">
						<div className="row ca_txt">
							<div className="col-12 col-md-6">
								<h1>{contentMain[0].title}</h1>
								<div style={{color: '#fff', fontSize: '2em', padding: '2em', minHeight: '100vh'}} dangerouslySetInnerHTML={{
									__html: contentMain[0].data.childMarkdownRemark.html
								}}></div>
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
      }
    }
	}
}
`