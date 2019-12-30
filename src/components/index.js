import React from 'react'
import Countdown from './countdown'
import DecentralizedCourts from './decentralized-courts'
import SecretSauce from './secret-sauce'
import InternetEconomy from './internet-economy'
import HostedBy from './hosted-by'
import Products from './products'
import Partners from './partners'
import JusticeRevolution from './justice-revolution'
import JoinCourt from './join-court'
import Contact from './contact'
import Footer from './footer'
import styled from 'styled-components'

const StyledHome = styled.div`
  color: #fff;
  overflow: hidden;
`
const StyledDivider = styled.div`
  border: 1px solid #9013FE;
  margin: 75px 7.575vw;
`
const StyledGradientSection = styled.div`
  background: linear-gradient(139.87deg, #4D00B4 1.44%, #1E075F 54.29%);
`

export default ({ language }) => {
  return (
    <StyledHome>
      <Countdown language={language} />
      <StyledDivider/>
      <DecentralizedCourts language={language}/>
      <SecretSauce language={language}/>
      <InternetEconomy language={language}/>
      <Products language={language} />
      <HostedBy />
      <StyledGradientSection>
        <Partners language={language} />
        <JusticeRevolution language={language} />
        <StyledDivider />
      </StyledGradientSection>
      <JoinCourt language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </StyledHome>
  )
}
