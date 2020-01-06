import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import JusticeImg from "../../../static/assets/images/justice.png";
import pPlusEpsilon from "../../../static/assets/images/pPlusEpsilon.png";
import KlerosHex from "../../../static/assets/images/klerosHex.png";

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

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 34px;
  }

  @media (max-width: 386px) {
    font-size: 20px;
    line-height: 22px;
    padding: 0px 10px;
  }
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

  @media (max-width: 386px) {
    padding: 0px 0px;
  }
`;

export default ({ language }) => {
  return (
    <StyledSecretSauce>
      <Row>
        <SecretSauceCol lg={8}>
          <StyledImg src={JusticeImg} />
          <SecretSauceTextContainer>
            <SecretSauceHeading>
              {<FormattedMessage id="home.secretSauce.pt1Heading" />}
            </SecretSauceHeading>
            <SecretSauceSubtext>
              {<FormattedMessage id="home.secretSauce.pt1Subtext" />}
            </SecretSauceSubtext>
          </SecretSauceTextContainer>
        </SecretSauceCol>
        <SecretSauceCol lg={8}>
          <StyledImg src={pPlusEpsilon} />
          <SecretSauceTextContainer>
            <SecretSauceHeading>
              {<FormattedMessage id="home.secretSauce.pt2Heading" />}
            </SecretSauceHeading>
            <SecretSauceSubtext>
              {
                <FormattedMessage
                  id="home.secretSauce.pt2Subtext"
                  values={{
                    anchor: children => (
                      <a
                        href="/whitepaper_en.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    )
                  }}
                />
              }
            </SecretSauceSubtext>
          </SecretSauceTextContainer>
        </SecretSauceCol>
        <SecretSauceCol lg={8}>
          <StyledImg src={KlerosHex} />
          <SecretSauceTextContainer>
            <SecretSauceHeading>
              {<FormattedMessage id="home.secretSauce.pt3Heading" />}
            </SecretSauceHeading>
            <SecretSauceSubtext>
              {
                <FormattedMessage
                  id="home.secretSauce.pt3Subtext"
                  values={{
                    anchor: children => (
                      <a
                        href="/whitepaper_en.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    )
                  }}
                />
              }
            </SecretSauceSubtext>
          </SecretSauceTextContainer>
        </SecretSauceCol>
      </Row>
    </StyledSecretSauce>
  );
};
