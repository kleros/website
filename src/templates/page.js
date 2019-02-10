import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import General from '../layouts/general'

class RootIndex extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const data = get(this, 'props.data.contentfulPage')

		return (
			<div>
				<Helmet title={siteTitle} />
					<General title={data.title.title}>
						{data.content.childMarkdownRemark.html}
					</General>
			</div>
		)
	}
}

export default RootIndex

export const pageQuery = graphql`
	query pageQuery($slug: String!) {
		contentfulPage(slug: { eq: $slug }) {
			title {title}
			slug
			content {content childMarkdownRemark{html}}
			date
		}
	}
`
