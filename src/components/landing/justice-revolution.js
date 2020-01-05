import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import JoinBox from "../join-box";
import JoinJuror from "../../../static/assets/images/join-juror.png";
import JoinPartner from "../../../static/assets/images/join-partner.png";
import Button from "../button";

const StyledContainer = styled.div`
  padding: 20px 10%;
`;
const StyledHeading = styled.div`
  color: #ffffff;
  font-weight: 600;
  font-size: 54px;
  line-height: 74px;
  text-align: center;
`;
const StyledSubtext = styled.div`
  color: #d8b6ff;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  margin-top: 50px;
  text-align: center;
`;

export default ({ language }) => {
  return (
    <StyledContainer>
      <StyledHeading>
        <FormattedMessage id="home.justiceRevolution.heading" />
      </StyledHeading>
      <StyledSubtext>
        <FormattedMessage id="home.justiceRevolution.subtext" />
        <br />
        <FormattedMessage id="home.justiceRevolution.subtext-2" />
      </StyledSubtext>
      <Row>
        <Col lg={12}>
          <JoinBox
            image={JoinJuror}
            title={
              <FormattedMessage id="home.justiceRevolution.joinJurorHeading" />
            }
            subtext={
              <FormattedMessage id="home.justiceRevolution.joinJurorSubtext" />
            }
            button={
              <Button
                text={
                  <FormattedMessage id="home.justiceRevolution.joinJurorButtonText" />
                }
                color={"blue"}
                action={() => {
                  window.location =
                    "https://blog.kleros.io/become-a-juror-blockchain-dispute-resolution-on-ethereum/";
                }}
              />
            }
          />
        </Col>
        <Col lg={12}>
          <JoinBox
            image={JoinPartner}
            title={
              <FormattedMessage id="home.justiceRevolution.joinPartnerHeading" />
            }
            subtext={
              <FormattedMessage id="home.justiceRevolution.joinPartnerSubtext" />
            }
            button={
              <Button
                text={
                  <FormattedMessage id="home.justiceRevolution.joinPartnerButtonText" />
                }
                color={"purple"}
                action={() => {
                  window.location = `/${language}/partner`;
                }}
              />
            }
          />
        </Col>
      </Row>
    </StyledContainer>
  );
};
