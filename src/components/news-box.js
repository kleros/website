import { Col, Row, Icon } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledNewsBox = styled.div`
  background: rgba(144, 19, 254, 0.21);
  border-radius: 37.3588px;
  padding: 37px;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 50px;
  height: 280px;
`
const StyledIcon = styled.img`
  width: 42px;
`
const StyledDate = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
  color: #D8B6FF;
`
const StyledPreview = styled.div`
  color: #FFFFFF;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  margin: 10px 0px;
`
const StyledLink = styled.a`
  color: #009AFF;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  text-align: right;
  width: 100%;
`

export default ({ icon, date, preview, linkText, link }) => (
  <StyledNewsBox>
    <Row>
      <Col lg={4}>
        <StyledIcon src={icon} />
      </Col>
      <Col lg={20}>
        <StyledDate>{date}</StyledDate>
      </Col>
    </Row>
    <Row>
      <StyledPreview>{preview}</StyledPreview>
    </Row>
    <Row>
      <StyledLink href={link}>{linkText}<Icon type="arrow-right" /></StyledLink>
    </Row>
  </StyledNewsBox>
)
