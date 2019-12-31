import Button from "../../components/button";
import { Col, Row } from "antd";
import CountdownBox from "../../components/countdown-box";
import React, { useState, useEffect, useRef } from "react";
import TopBackground from "../../../static/assets/images/top_background.png";
import styled from "styled-components";
import text from "./translations";

const StyledTopSection = styled.div`
  background: linear-gradient(158.61deg, #4D00B4 15.9%, #1E075F 59.16%);
  color: white;
  text-align: center;
`
const StyledContent = styled.div`
  position: relative;
  z-index: 1;
`
const StyledTopBackground = styled.img`
  position: absolute;
  top: 60px;
  right: 0px;
  z-index: 0;
`
const KlerosTextSmall = styled.div`
  font-size: 36px;
  letter-spacing: 8px;
  position: relative;
`
const StyledHeadingText = styled.div`
  font-size: 100px;
  letter-spacing: 4px;
`
const StyledSpacer = styled.div`
  height: 60px;
`
const BoxBreak = styled.div`
  display: inline-block;
  font-weight: 600;
  font-size: 96px;
  line-height: 131px;
  text-align: center;
  margin: 2%;
  position: absolute;
  top: -10px;

  @media (max-width: 768px) {
    display: none;
  }
`
const StyledSubtext = styled.div`
  color: #D8B6FF;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
`
const StyledCountdownContainer = styled.div`
  width: 80%;
  display: inline-block;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

// Start of Sale
const endTime = new Date(Date.UTC(2020, 0, 11, 16, 0, 0)).getTime();

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const getTimeLeft = () => {
  let timeLeft = parseInt(endTime / 1000 - new Date().getTime() / 1000);
  if (timeLeft < 0) timeLeft = 0;

  const days = Math.floor(timeLeft / 24 / 60 / 60);
  const hoursLeft = Math.floor(timeLeft - days * 86400);
  const hours = Math.floor(hoursLeft / 3600);
  const minutesLeft = Math.floor(hoursLeft - hours * 3600);
  const minutes = Math.floor(minutesLeft / 60);
  const seconds = timeLeft % 60;

  return {
    days,
    hoursLeft,
    hours,
    minutesLeft,
    minutes,
    seconds
  };
};

export default ({ language }) => {
  // Time keeping
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  useInterval(() => setTimeLeft(getTimeLeft()), 1000);

  // Headings
  const subHeading = text[language].home.countdown.subheading;
  const heading = text[language].home.countdown.heading;
  // Timer
  const days = text[language].home.countdown.days;
  const hours = text[language].home.countdown.hours;
  const minutes = text[language].home.countdown.minutes;
  const seconds = text[language].home.countdown.seconds;
  // Text
  const subtext = text[language].home.countdown.subtext;
  const buttonText = text[language].buttons.learnMore;

  return (
    <StyledTopSection>
      <StyledSpacer />
      <StyledTopBackground src={TopBackground} />
      <StyledContent>
        <KlerosTextSmall>{subHeading}</KlerosTextSmall>
        <StyledHeadingText>{heading}</StyledHeadingText>
        <Row style={{ marginTop: "28px" }}>
          <Col lg={4} md={4} />
          <Col lg={4} md={4}>
            <StyledCountdownContainer>
              <CountdownBox number={timeLeft.days} title={days.toUpperCase()} />
            </StyledCountdownContainer>
            <BoxBreak>:</BoxBreak>
          </Col>
          <Col lg={4} md={4}>
            <StyledCountdownContainer>
              <CountdownBox
                number={timeLeft.hours}
                title={hours.toUpperCase()}
              />
            </StyledCountdownContainer>
            <BoxBreak>:</BoxBreak>
          </Col>
          <Col lg={4} md={4}>
            <StyledCountdownContainer>
              <CountdownBox
                number={timeLeft.minutes}
                title={minutes.toUpperCase()}
              />
            </StyledCountdownContainer>
            <BoxBreak>:</BoxBreak>
          </Col>
          <Col lg={4} md={4}>
            <StyledCountdownContainer>
              <CountdownBox
                number={timeLeft.seconds}
                title={seconds.toUpperCase()}
              />
            </StyledCountdownContainer>
          </Col>
        </Row>
        <Row style={{ marginTop: "25px" }}>
          <StyledSubtext>{subtext}</StyledSubtext>
        </Row>
        <Row style={{ marginTop: "40px" }}>
          <Button
            text={buttonText}
            action={() => {
              window.location =
                "https://blog.kleros.io/kleros-token-sale-announcement-january-11-2020/";
            }}
            color={"blue"}
          />
        </Row>
      </StyledContent>
    </StyledTopSection>
  );
};
