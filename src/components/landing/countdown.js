import Button from "../button";
import { Col, Row } from "antd";
import CountdownBox from "../countdown-box";
import React, { useState, useEffect, useRef } from "react";
import TopBackground from "../../../static/assets/images/top_background.png";
import styled from "styled-components";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import SaleProgressBar from "./sale-progress-bar";

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
  font-size: 60px;
  letter-spacing: 4px;
  text-shadow: 0px 0px 8px #7a6ad9, 0px 0px 8px #7a6ad9;
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

  const timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

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
          <Col lg={24} style={{ padding: "20px 10%" }}>
            <SaleProgressBar />
          </Col>
        </Row>
        <Row type="flex" justify="space-between" style={{ marginTop: "40px" }}>
          <Col />
          <Col xs={0} sm={0} md={5} lg={6}>
            <Button
              text={<FormattedMessage id="home.buttons.goToSale-2" />}
              action={() => {
                window.location = "https://idex.market/eth/pnk";
              }}
              color={"blue"}
            />
          </Col>
          <Col xs={24} sm={24} md={5} lg={6}>
            <Button
              text={<FormattedMessage id="home.buttons.goToSale" />}
              action={() => {
                window.location = "https://www.bitfinex.com/t/PNKETH";
              }}
              color={"purple"}
            />
          </Col>
          <Col xs={0} sm={0} md={5} lg={6}>
            <Button
              text={<FormattedMessage id="home.buttons.goToSale-3" />}
              action={() => {
                window.location = "https://uniswap.ninja/swap";
              }}
              color={"blue"}
            />
          </Col>
          <Col />
        </Row>
      </StyledContent>
    </StyledTopSection>
  );
};
