import Button from "./button";
import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import text from "../text";
import CourtImg from "../assets/images/court.png";

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
  const heading = text[language].home.decentralizedCourts.heading;
  const subheading = text[language].home.decentralizedCourts.subheading;
  const courtButton = text[language].buttons.tryKlerosCourt;
  const learnMoreButton = text[language].buttons.learnMore;

  return (
    <StyledDecentralizedCourts>
      <StyledHeading>{heading}</StyledHeading>
      <StyledSubHeading>{subheading}</StyledSubHeading>
      <Row style={{ margin: "60px 0px" }}>
        <Col lg={6} md={4} />
        <StyledButtonCol lg={4} md={4}>
          <Button
            text={courtButton}
            action={() => {
              window.location = "https://court.kleros.io";
            }}
            color={"blue"}
          />
        </StyledButtonCol>
        <Col lg={3} md={4} />
        <StyledButtonCol lg={4} md={4}>
          <Button
            text={learnMoreButton}
            action={() => {
              window.location =
                "https://blog.kleros.io/kleros-court-revitalised/";
            }}
            color={"purple"}
          />
        </StyledButtonCol>
      </Row>
      <StyledImg src={CourtImg} />
    </StyledDecentralizedCourts>
  );
};
