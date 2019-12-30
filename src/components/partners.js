import React from "react";
import styled from "styled-components";
import BlueFrontiers from "../assets/images/bluefrontiers.png";
import Ink from "../assets/images/ink.png";
import Deversifi from "../assets/images/deversifi.png";
import MarketProtocol from "../assets/images/marketprotocol.png";

const StyledPartners = styled.div`
  color: #d8b6ff;
  padding: 36px 0px;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
`;
const IconContainer = styled.div`
  padding: 36px 20%;
`;
const PartnerIcon = styled.img`
  height: 100%;
  margin: 30px 15px;

  @media (max-width: 510px) {
    margin: 30px 5px;
    width: 60%;
  }
`;
const StyledDivider = styled.div`
  border: 1px solid #9013fe;
  margin: 75px 7.575vw;
`;

export default ({ language }) => {
  return (
    <StyledPartners>
      Partners
      <IconContainer>
        <PartnerIcon src={BlueFrontiers} />
        <PartnerIcon src={Ink} />
        <PartnerIcon src={Deversifi} />
        <PartnerIcon src={MarketProtocol} />
      </IconContainer>
      <StyledDivider />
    </StyledPartners>
  );
};
