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

        <section
          id="more"
          className="ca_escrow_description ca_wave_top_inverted"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-1" />
              <div className="col-12 col-md-4">
                <h2>{theMeta(escrow, 'Token Title').data.data}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: theMeta(escrow, 'Token Text').data
                      .childMarkdownRemark.html
                  }}
                />
              </div>
              <div className="col-12 col-md-1" />
              <div className="col-12 col-md-5">
                <img
                  src={theMeta(escrow, 'Token Image').mediaData[0].file.url}
                  alt="Kleros"
                />
              </div>
              <div className="col-12 col-md-1" />
            </div>
          </div>
        </section>
        <section className="ca_escrow_why">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-1" />
              <div className="col-12 col-md-5">
                <img
                  src={theMeta(why, 'Token Why Image').mediaData[0].file.url}
                  alt="Kleros"
                />
              </div>
              <div className="col-12 col-md-5">
                <h2>{theMeta(why, 'Token Why Title').data.data}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: theMeta(why, 'Token Why Text').data
                      .childMarkdownRemark.html
                  }}
                />
                <a
                  href="https://escrow.kleros.io"
                  target="_blank"
                  className="ca_button ca_transparent_blue"
                >
                  Kleros Escrow
                </a>
              </div>
              <div className="col-12 col-md-1" />
            </div>
          </div>
        </section>
        <section className="ca_escrow_content ca_wave_bottom">
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
            <div className="row ca_escrow_path">
              <div className="col-12 col-md-1" />
              <div className="col-12 col-md-3">
                {[contentPath[0]].map((el, num) => {
                  return (
                    <div key={num}>
                      <div className="ca_img ca_underlined ca_stroke ca_stroke_1">
                        <img src={el.image.file.url} alt="Illustration" />
                      </div>
                      <div className="ca_txt">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: el.text.childMarkdownRemark.html
                          }}
                        />
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
                        <div
                          dangerouslySetInnerHTML={{
                            __html: el.text.childMarkdownRemark.html
                          }}
                        />
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
                        <div
                          dangerouslySetInnerHTML={{
                            __html: el.text.childMarkdownRemark.html
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="col-12 col-md-1" />
              <div className="col-12 col-md-2" />
              <div className="col-12 col-md-4">
                {[contentPath[3]].map((el, num) => {
                  return (
                    <div key={num}>
                      <div className="ca_img ca_underlined ca_stroke ca_stroke_4">
                        <img src={el.image.file.url} alt="Illustration" />
                      </div>
                      <div className="ca_txt">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: el.text.childMarkdownRemark.html
                          }}
                        />
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
                        <div
                          dangerouslySetInnerHTML={{
                            __html: el.text.childMarkdownRemark.html
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="col-12 col-md-2" />
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
          why {
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
