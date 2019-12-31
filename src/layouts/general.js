import React from "react"

export default ({ children, title }) => (
	<div>
		<div className="ca_paralax_background_illustration"><span></span><span></span><span></span><span></span></div>
		<section className="ca_juror_top ca_article_top">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1>{title}</h1>
					</div>
				</div>
			</div>
		</section>
		<section className="ca_article_content">
			<div className="container">
				<div className="row">
					<div className="col-12" dangerouslySetInnerHTML={{
						__html: children,
					}}>
					</div>
				</div>
			</div>
		</section>
	</div>
)
