import { Col, Row } from 'antd'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import text from '../../text'
import NewsBox from '../../components/news-box'
import Twitter from '../../assets/images/twitter.png'
import Github from '../../assets/images/github.png'
import Forum from '../../assets/images/forum.png'

const StyledLatest = styled.div`
  margin: 0px 10%;
`
const StyledHeading = styled.div`
  color: #FFFFFF;
  font-weight: 600;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  margin: 45px 0px;
`

const Latest = ({language}) => {
  const [ blogPost, setBlogPost ] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://forum.kleros.io/posts.json',
        {
          method: 'GET'
        }
      ).catch(err => console.log(err))
      const responseJSON = await response.json()
      setBlogPost(responseJSON.latest_posts[0])
    }
    fetchData()
  }, [])
  const heading = text[language].home.latest.heading

  return (
    <StyledLatest>
      <StyledHeading>{heading}</StyledHeading>
      <Row>
        <Col lg={12}>
          <NewsBox icon={Twitter} date={'Dec 12, 2019'} preview={'balh blah blah'} linkText={'Go to Twitter'} link={'https://twitter.com/Kleros_io'}/>
        </Col>
        <Col lg={12}>
          <NewsBox date={'Dec 12, 2019'} preview={'balh blah blah'} linkText={'Go to Blog'} link={'https://blog.kleros.io'}/>
        </Col>
        <Col lg={12}>
          <NewsBox icon={Github} date={'Dec 12, 2019'} preview={'balh blah blah'} linkText={'Go to Github'} link={'https://github.com/kleros'}/>
        </Col>
        <Col lg={12}>
          <NewsBox icon={Forum} date={'Dec 12, 2019'} preview={'balh blah blah'} linkText={'Go to Forum'} link={'https://forum.kleros.io'}/>
        </Col>
      </Row>
    </StyledLatest>
  )
}

export default Latest
