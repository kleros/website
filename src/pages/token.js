import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { navigateTo } from 'gatsby-link'
import Modal from 'react-responsive-modal'
import theMeta from '../js/helpers.js'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class RootIndex extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    companyEmail: '',
    companyName: '',
    message: '',
    open: false
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() =>
        this.setState({
          firstname: '',
          lastname: '',
          companyEmail: '',
          companyName: '',
          message: '',
          open: true
        })
      )
      .catch(error => alert(error))
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const {
      firstname,
      lastname,
      companyEmail,
      companyName,
      message,
      open
    } = this.state

    const siteTitle = 'Kleros - Token Page'
    const data = get(this, 'props.data.allContentfulTokenPage.edges')[0].node
    console.log(data)
    const top = data.top
    console.log(theMeta(top, 'Token Page Top Button'))

    const escrow = data.escrow
    const why = data.why
    const contentCards = data.contentCards
    const contentPath = data.contentPath
    const contact = data.contact

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{siteTitle}</title>
        </Helmet>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            modal: 'customModal'
          }}
        >
          <h2>Message sent!</h2>
          <p>We will answer you as soon as possible.</p>
          <p>
            While waiting for an answer you can join our{' '}
            <a href="https://t.me/kleros" target="_blank">
              Telegram
            </a>
            .
          </p>
        </Modal>
        <section className="ca_home_top ca_escrow_top">
          <div className="container">
            <div className="row ca_txt">
              <div className="col-12 col-md-6 text-center">
                <h1 style={{ marginTop: '10%' }}>
                  {theMeta(top, 'Token Page Top Title').data.data}
                </h1>
              </div>
              <div className="col-12 col-md-6">
                <img
                  src={theMeta(top, 'Token Page Image').mediaData[0].file.url}
                  className="illustration_escrow"
                  alt="Kleros"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="ca_escrow_content ca_wave_top_inverted">
          <div className="container">
            {contentCards.map((el, num) => {
              return (
                <div
                  key={num}
                  className={'row ' + (num % 2 == 0 ? 'ca_left' : 'ca_right')}
                >
                  <div className="col-12 col-md-1 one" />
                  <div className="col-12 col-md-5 two">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: el.text.childMarkdownRemark.html
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-5 three">
                    <img src={el.image.file.url} alt="Kleros" />
                  </div>
                  <div className="col-12 col-md-1 four" />
                </div>
              )
            })}
          </div>
        </section>

        <section className="ca_escrow_contact">
          <div className="container" style={{ height: '200px' }}>
            <div className="row d-flex justify-content-center">
              <div
                className="card w-100 "
                style={{
                  borderRadius: '12px',
                  background:
                    'linear-gradient(111.31deg, #4d00b4 19.55%, #6500b4 40.51%)',
                  marginTop: '4%'
                }}
              >
                <div className="card-body" style={{ color: 'white' }}>
                  <div className="row">
                    <div className="col-12 col-md-1">
                      <img src="/img/stake_icon.svg" />
                    </div>
                    <div className="col-12 col-md-8">
                      <h3 className="card-title">
                        If you are interested in acquiring PNK token OTC, get in
                        touch
                      </h3>

                      <p className="card-text ca-text">
                        Note that in order to ensure fairness in token
                        distribution, tokens are sold to buyers at prices
                        reflected by the market.
                      </p>
                    </div>
                    <div className="col-12 col-md-3 mt-4 text-center">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfQwhyI_IqerENalCO9GODaGQHeILproSkWkPcbv0hsSgXg4Q/viewform"
                        className="btn btn-lg btn-primary btn-lg"
                      >
                        Get in touch here
                      </a>
                    </div>
                  </div>
                </div>
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
  query tokenQuery {
    allContentfulTokenPage(sort: { fields: [id], order: DESC }) {
      edges {
        node {
          top {
            title
            data {
              data
              childMarkdownRemark {
                html
              }
            }
            mediaData {
              file {
                url
              }
            }
            referenceData {
              __typename
              ... on Node {
                ... on ContentfulLink {
                  text {
                    text
                  }
                  url
                  extraClass
                  target
                }
                ... on ContentfulHomepageHowSteps {
                  title {
                    title
                  }
                  text {
                    text
                  }
                  image {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
          escrow {
            title
            data {
              data
              childMarkdownRemark {
                html
              }
            }
            mediaData {
              file {
                url
              }
            }
            referenceData {
              __typename
              ... on Node {
                ... on ContentfulLink {
                  text {
                    text
                  }
                  url
                  extraClass
                  target
                }
                ... on ContentfulHomepageHowSteps {
                  title {
                    title
                  }
                  text {
                    text
                  }
                  image {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }

          contentCards {
            title {
              title
            }
            text {
              text
              childMarkdownRemark {
                html
              }
            }
            image {
              file {
                url
              }
            }
            link {
              text {
                text
              }
              url
              target
              extraClass
            }
          }
          contentPath {
            title {
              title
            }
            text {
              text
              childMarkdownRemark {
                html
              }
            }
            image {
              file {
                url
              }
            }
            link {
              text {
                text
              }
              url
              target
              extraClass
            }
          }
          contact {
            title
            data {
              data
              childMarkdownRemark {
                html
              }
            }
            mediaData {
              file {
                url
              }
            }
            referenceData {
              __typename
              ... on Node {
                ... on ContentfulLink {
                  text {
                    text
                  }
                  url
                  extraClass
                  target
                }
                ... on ContentfulHomepageHowSteps {
                  title {
                    title
                  }
                  text {
                    text
                  }
                  image {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
