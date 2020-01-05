import React from "react";
import styled from "styled-components";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import DrawnCases from "../../../static/assets/images/drawn-cases.png";
import Courts from "../../../static/assets/images/courts.png";

const StyledJoinCourt = styled.div`
  @media (max-width: 850px) {
    margin: 0px 20px;
  }
`;
const StyledHeading = styled.div`
  font-weight: 600;
  font-size: 54px;
  line-height: 74px;
  text-align: center;
`;
const StyledSubtext = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  margin-top: 40px;
  color: #d8b6ff;
`;
const ImagesContainer = styled.div`
  margin: 100px 0px 50px 0px;
  position: relative;
`;
const UnderImage = styled.img`
  box-shadow: 0px 12px 90px #9013fe;
  position: absolute;
  width: 80%;
  left: 0px;
  top: 100px;
  z-index: 0;
`;
const OverImage = styled.img`
  box-shadow: 0px 12px 90px #9013fe;
  position: relative;
  width: 80%;
  left: 40%;
  z-index: 1;
`;

export default ({ language }) => {
  return (
    <StyledJoinCourt>
      <StyledHeading>
        <FormattedMessage id="home.joinCourt.heading" />
      </StyledHeading>
      <StyledSubtext>
        <FormattedMessage id="home.joinCourt.subtext" />
      </StyledSubtext>
      <ImagesContainer>
        <OverImage src={DrawnCases} />
        <UnderImage src={Courts} />
      </ImagesContainer>
    </StyledJoinCourt>
  );
};
