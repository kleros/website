import Button from "../button";
import { Col, Row } from "antd";
import CountdownBox from "../countdown-box";
import React, { useState, useEffect, useRef } from "react";
import TopBackground from "../../../static/assets/images/top_background.png";
import styled from "styled-components";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

const StyledTopSection = styled.div`
  background: linear-gradient(158.61deg, #4d00b4 15.9%, #1e075f 59.16%);
  color: white;
  text-align: center;
`;
const StyledContent = styled.div`
  position: relative;
  z-index: 1;
`;
const StyledTopBackground = styled.img`
  position: absolute;
  top: 60px;
  right: 0px;
  z-index: 0;
`;
const KlerosTextSmall = styled.div`
  font-size: 36px;
  letter-spacing: 8px;
  position: relative;
`;
const StyledHeadingText = styled.div`
  font-size: 100px;
  letter-spacing: 4px;
`;
const StyledSpacer = styled.div`
  height: 60px;
`;
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
`;
const StyledSubtext = styled.div`
  color: #d8b6ff;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
`;
const StyledCountdownContainer = styled.div`
  width: 80%;
  display: inline-block;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

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

export default ({}) => {
  // Time keeping
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  useInterval(() => setTimeLeft(getTimeLeft()), 1000);
  // Headings
  // const subHeading = intl.formatMessage({
  //   id: "home.countdown.subheading"
  // });
  // const heading = intl.formatMessage({ id: "home.countdown.heading" });
  // // Timer
  // const days = intl.formatMessage({ id: "home.countdown.days" });
  // const hours = intl.formatMessage({ id: "home.countdown.hours" });
  // const minutes = intl.formatMessage({ id: "home.countdown.minutes" });
  // const seconds = intl.formatMessage({ id: "home.countdown.seconds" });
  // // Text
  // const subtext = intl.formatMessage({ id: "home.countdown.subtext" });
  // const buttonText = intl.formatMessage({ id: "buttons.learnMore" });
  return (
    <StyledTopSection>
      <StyledSpacer />
      <StyledTopBackground src={TopBackground} />
      <StyledContent>
        <KlerosTextSmall>
          <FormattedMessage id="home.countdown.subheading" />
        </KlerosTextSmall>
        <StyledHeadingText>
          <FormattedMessage id="home.countdown.heading" />
        </StyledHeadingText>
        <Row style={{ marginTop: "28px" }}>
          <Col lg={4} md={4} />
          <Col lg={4} md={4}>
            <StyledCountdownContainer>
              <span style={{ textTransform: "capitalize" }}>
                <CountdownBox
                  number={timeLeft.days}
                  title={<FormattedMessage id="home.countdown.days" />}
                />
              </span>
            </StyledCountdownContainer>
            <BoxBreak>:</BoxBreak>
          </Col>
          <Col lg={4} md={4}>
            <StyledCountdownContainer>
              <span style={{ textTransform: "capitalize" }}>
                <CountdownBox
                  number={timeLeft.hours}
                  title={<FormattedMessage id="home.countdown.hours" />}
                />
              </span>
            </StyledCountdownContainer>
            <BoxBreak>:</BoxBreak>
          </Col>
          <Col lg={4} md={4}>
            <StyledCountdownContainer>
              <span style={{ textTransform: "capitalize" }}>
                <CountdownBox
                  number={timeLeft.minutes}
                  title={<FormattedMessage id="home.countdown.minutes" />}
                />
              </span>
            </StyledCountdownContainer>
            <BoxBreak>:</BoxBreak>
          </Col>
          <Col lg={4} md={4}>
            <StyledCountdownContainer>
              <span style={{ textTransform: "capitalize" }}>
                <CountdownBox
                  number={timeLeft.seconds}
                  title={<FormattedMessage id="home.countdown.seconds" />}
                />
              </span>
            </StyledCountdownContainer>
          </Col>
        </Row>
        <Row style={{ marginTop: "25px" }}>
          <StyledSubtext>
            <FormattedMessage id="home.countdown.subtext" />
            <br />
            <FormattedMessage id="home.countdown.subtext-2" />
          </StyledSubtext>
        </Row>
        <Row style={{ marginTop: "40px" }}>
          <Button
            text={<FormattedMessage id="home.buttons.learnMore" />}
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
