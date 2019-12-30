import Button from '../../components/button'
import { Col, Row, Icon } from 'antd'
import React from 'react'
import styled from 'styled-components'
import KlerosWhite from '../../assets/images/logo-white.png'
import { ReactComponent as Ghost } from '../../assets/images/ghost.svg'
import { ReactComponent as Github } from '../../assets/images/github.svg'
import { ReactComponent as LinkedIn } from '../../assets/images/linkedin.svg'
import { ReactComponent as Telegram } from '../../assets/images/telegram.svg'
import { ReactComponent as Twitter } from '../../assets/images/twitter.svg'
import { ReactComponent as Reddit } from '../../assets/images/reddit.svg'
import { ReactComponent as Slack } from '../../assets/images/slack.svg'

const StyledFooter = styled.div`
  background: #4D00B4;
  padding: 60px 10% 20px 10%;
  width: 100%;
  position: relative;
`
const StyledCircle = styled.div`
  height: 80px;
  width: 80px;
  background: #4D00B2;
  border-radius: 50%;
  position: absolute;
  top: -40px;
  right: 10%
  text-align: center;
  font-size: 28px;
  cursor: pointer;
`
const StyledContent = styled.div`
  margin: 80px 0px;
`
const StyledLink = styled.a`
  color: #D8B6FF;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  display: block;
`
const Divider = styled.div`
  border: 1px solid #9013FE;
  margin: 80px 0px;
`
const StyledLogo = styled.img`
  height: 50px;
  display: inline-block;
`
const LogoText = styled.div`
  color: white;
  font-size: 16px;
  letter-spacing: 6px;
  display: inline-block;
  margin: 0px 0px 10px 8px;
`
const StyledLogoCol = styled(Col)`
  @media (max-width: 990px) {
    text-align: center;
  }
`
const StyledLinkCol = styled(Col)`
  @media (max-width: 990px) {
    margin-top: 50px;
    text-align: center;
  }
`
const StyledIconCol = styled(Col)`
  text-align: center;
  font-size: 20px;
  a {
    margin: 0px 10px 10px 10px;

    svg {
      height: 35px;
      width: 35px;
    }
  }
`
const StyledButtonCol = styled(Col)`
  text-align: center;
  margin: 10px 0px;
`
const CopyrightCol = styled(Col)`
  color: #D8B6FF;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
`

export default ({language}) => {
  return (
    <StyledFooter>
      <StyledCircle onClick={()=>{window.scrollTo(0, 0)}}>
        <Icon type="arrow-up" />

      </StyledCircle>
      <StyledContent>
        <Row>
          <StyledLogoCol lg={7}>
            <StyledLogo src={KlerosWhite} />
            <LogoText> KLEROS </LogoText>
          </StyledLogoCol>
          <StyledLinkCol lg={14}>
            <Col lg={8} md={8}>
              <StyledLink href={"https://kleros.io/en/about"}>About</StyledLink>
              <StyledLink href={"https://governance.kleros.io"}>Governance</StyledLink>
              <StyledLink href={"https://kleros.io/en/about#join"}>Join Us</StyledLink>
              <StyledLink href={"https://kleros.io/en/faq"}>FAQ</StyledLink>
              <StyledLink href={"https://kleros.io/en/media"}>Media</StyledLink>
              <StyledLink href="https://kleros.io/en/token">Token</StyledLink>
            </Col>
            <Col lg={8} md={8}>
              <StyledLink href="https://blog.kleros.io">Blog</StyledLink>
              <StyledLink href="https://kleros.io/en/assets">Brand Assets</StyledLink>
              <StyledLink href="https://kleros.io/whitepaper_en.pdf">White Paper</StyledLink>
              <StyledLink href="https://escrow.kleros.io">Escrow</StyledLink>
              <StyledLink href="https://kleros.io/en/curated-list">Curated List</StyledLink>
              <StyledLink href="https://kleros.io/en/oracle">Oracle</StyledLink>
            </Col>
            <Col lg={8} md={8}>
              <StyledLink href="https://kleros.io/en/cooperative">Cooperative</StyledLink>
              <StyledLink href="https://kleros.io/en/court-tour">Court Tour</StyledLink>
              <StyledLink href="https://ipfs.kleros.io/ipfs/QmZeV32S2VoyUnqJsRRCh75F1fP2AeomVq2Ury2fTt9V4z/Dispute-Resolution-Kleros.pdf">Book</StyledLink>
              <StyledLink href="https://developer.kleros.io/en/latest/">Developer</StyledLink>
            </Col>
          </StyledLinkCol>
        </Row>
        <Divider />
        <Row>
          <StyledIconCol lg={24}>
            <a
              href="https://twitter.com/kleros_io?"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Twitter />
            </a>
            <a
              href="https://github.com/kleros"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github />
            </a>
            <a
              href="https://blog.kleros.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Ghost />
            </a>
            <a
              href="https://slack.kleros.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Slack />
            </a>
            <a
              href="https://reddit.com/r/kleros"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Reddit />
            </a>
            <a
              href="https://www.linkedin.com/company/kleros/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedIn />
            </a>
            <a
              href="https://t.me/kleros"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Telegram />
            </a>
          </StyledIconCol>
        </Row>
        <Row style={{margin: '50px 0px'}}>
          <Col lg={6} md={4}/>
          <StyledButtonCol lg={4} md={4}>
            <Button text={'Join as a Juror'} action={() => {window.location = "https://blog.kleros.io/become-a-juror-blockchain-dispute-resolution-on-ethereum/"}} color={'blue'} />
          </StyledButtonCol>
          <Col lg={3} md={5} />
          <StyledButtonCol lg={4} md={4}>
            <Button text={'Become a Partner'} action={() => {window.location = "https://kleros.io/en/partner"}} color={'purple'} />
          </StyledButtonCol>
        </Row>
        <Row>
          <CopyrightCol>Copyright 2019 © Kleros.io</CopyrightCol>
        </Row>
      </StyledContent>
    </StyledFooter>
  )
}
