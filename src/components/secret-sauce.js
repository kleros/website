import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import text from "../text";
import JusticeImg from "../assets/images/justice.png";
import pPlusEpsilon from "../assets/images/pPlusEpsilon.png";
import KlerosHex from "../assets/images/klerosHex.png";

const StyledSecretSauce = styled.div`
  background: #fff;
  padding: 60px 93px;
  position: relative;
  z-index: 2;
`;
const StyledImg = styled.img`
  width: 185px;
`;
const SecretSauceCol = styled(Col)`
  text-align: center;
`;
const SecretSauceTextContainer = styled.div`
  color: #4d00b4;
  margin-top: 25px;
`;
const SecretSauceHeading = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  padding: 0px 60px;
`;
const SecretSauceSubtext = styled.div`
  font-size: 16px;
  padding: 0px 20px;
  margin-top: 25px;
  margin-bottom: 15px;

  a {
    color: #4d00b4;
    text-decoration: underline;
  }
`;

export default ({ language }) => {
  const pt1Heading = text[language].home.secretSauce.pt1Heading;
  const pt1Subtext = text[language].home.secretSauce.pt1Subtext;
  const pt2Heading = text[language].home.secretSauce.pt2Heading;
  const pt2Subtext = text[language].home.secretSauce.pt2Subtext;
  const pt3Heading = text[language].home.secretSauce.pt3Heading;
  const pt3Subtext = text[language].home.secretSauce.pt3Subtext;

  return (
    <StyledSecretSauce>
      <Row>
        <SecretSauceCol lg={8}>
          <StyledImg src={JusticeImg} />
          <SecretSauceTextContainer>
            <SecretSauceHeading>{pt1Heading}</SecretSauceHeading>
            <SecretSauceSubtext>{pt1Subtext}</SecretSauceSubtext>
          </SecretSauceTextContainer>
        </SecretSauceCol>
        <SecretSauceCol lg={8}>
          <StyledImg src={pPlusEpsilon} />
          <SecretSauceTextContainer>
            <SecretSauceHeading>{pt2Heading}</SecretSauceHeading>
            <SecretSauceSubtext>{pt2Subtext}</SecretSauceSubtext>
          </SecretSauceTextContainer>
        </SecretSauceCol>
        <SecretSauceCol lg={8}>
          <StyledImg src={KlerosHex} />
          <SecretSauceTextContainer>
            <SecretSauceHeading>{pt3Heading}</SecretSauceHeading>
            <SecretSauceSubtext>{pt3Subtext}</SecretSauceSubtext>
          </SecretSauceTextContainer>
        </SecretSauceCol>
      </Row>
    </StyledSecretSauce>
  );
};
