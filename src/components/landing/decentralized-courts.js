import Button from "../button";
import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import CourtImg from "../../../static/assets/images/court.png";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

const StyledDecentralizedCourts = styled.div`
  padding: 0px 7.575vw 0px 7.575vw;
`;
const StyledHeading = styled.div`
  font-weight: 600;
  font-size: 54px;
  line-height: 74px;
  margin-bottom: 20px;
  text-align: center;
`;
const StyledSubHeading = styled.div`
  color: #d8b6ff;
  font-size: 24px;
  text-align: center;
`;
const StyledImg = styled.img`
  width: 100%;
  box-shadow: 0px 12px 90px #9013fe;
`;
const StyledButtonCol = styled(Col)`
  text-align: center;
  margin: 10px 0px;
`;

export default ({ language }) => {
  return (
    <StyledDecentralizedCourts>
      <StyledHeading>
        <FormattedMessage id="home.decentralizedCourts.heading" />
      </StyledHeading>
      <StyledSubHeading>
        <FormattedMessage id="home.decentralizedCourts.subheading" />
      </StyledSubHeading>
      <Row style={{ margin: "60px 0px" }}>
        <Col lg={6} md={4} />
        <StyledButtonCol lg={4} md={4}>
          <Button
            text={<FormattedMessage id="home.buttons.tryKlerosCourt" />}
            action={() => {
              window.location = "https://court.kleros.io";
            }}
            color={"blue"}
          />
        </StyledButtonCol>
        <Col lg={3} md={4} />
        <StyledButtonCol lg={4} md={4}>
          <Link to="/court-tour">
            <Button
              text={<FormattedMessage id="home.buttons.learnMore" />}
              color={"purple"}
            />
          </Link>
        </StyledButtonCol>
      </Row>
      <StyledImg src={CourtImg} />
    </StyledDecentralizedCourts>
  );
};
