import React from "react";
import styled from "styled-components";
import Amphitheater from "../../../static/assets/images/amphitheater.png";
import text from "./translations";

const StyledInternetEconomy = styled.div`
  background: #f2e3ff;
  height: 400px;
  position: relative;
  z-index: 0;
`;
const ClippedInternetEconomy = styled.div`
  background: #1e075f;
  clip-path: polygon(100% 0%, 0 0%, 50% 30%);
  height: 400px;
  width: 100%;
  position: absolute;
  z-index: 0;
  top: 299px;
`;
const ClippedInternetEconomyTop = styled.div`
  background: #1e075f;
  height: 300px;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  text-align: center;
`;
const StyledImg = styled.img`
  width: 33%;
  opacity: 0.6;
  margin-top: 20px;
`;
const StyledHeader = styled.div`
  color: #fff;
  font-size: 54px;
  text-align: center;
  width: 100%;
  position: absolute;
  z-index: 2
  top: 100px;

  @media (max-width: 510px) {
    font-size: 33px;
  }
`;
const StyledSubtext = styled.div`
  color: #D8B6FF;
  font-size: 24px;
  text-align: center;
  width: 50%;
  left: 25%;
  position: absolute;
  z-index: 2
  top: 200px;

  @media (max-width: 510px) {
    font-size: 20px;
  }
`;

export default ({ language }) => {
  const heading = text[language].home.internetEconomy.heading;
  const subtext = text[language].home.internetEconomy.subtext;

  return (
    <StyledInternetEconomy>
      <ClippedInternetEconomyTop>
        <StyledImg src={Amphitheater} />
        <StyledHeader>{heading}</StyledHeader>
        <StyledSubtext>{subtext}</StyledSubtext>
      </ClippedInternetEconomyTop>
      <ClippedInternetEconomy />
    </StyledInternetEconomy>
  );
};
