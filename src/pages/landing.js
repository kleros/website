import styles from "./theme.css";
import { Col, Layout, Row, Dropdown } from "antd";
import { Helmet } from "react-helmet";
import Home from "../components/index";
import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import ReactDOM from "react-dom";
import styled from "styled-components";
import media from "styled-media-query";
import text from "../text";

const StyledLayoutContent = styled(Layout.Content)`
  background-color: transparent;
`;
const StyledLayout = styled(Layout)`
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  background: #1e075f;
  font-family: Roboto;
  font-style: normal;
`;
const StyledLayoutHeader = styled(Layout.Header)`
  height: 60px;
`;
const StyledLogoCol = styled(Col)`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-evenly;
  svg {
    margin-top: 5px;
  }
`;
const StyledColRight = styled(Col)`
  align-items: right;
  color: white;
  display: flex;
  height: 60px;
  justify-content: space-evenly;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.lessThan("992px")`
    /* screen width is less than 768px (medium) */
    display: none;
  `}
`;

const getDefaultLanguage = () => {
  let language = (
    window.navigator.userLanguage ||
    window.navigator.language ||
    "en"
  ).split("-")[0];
  if (!text[language]) language = "en";
  return "en";
};

const LanguageSelector = ({ setLanguage, currentLanguage }) => {};

export default () => {
  //const [language, setLanguage] = useState(getDefaultLanguage());
  // If we don't have translation for language use English
  const language = "en";
  return (
    <>
      <Helmet>
        <title>Kleros Token Sale</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i"
          rel="stylesheet"
        />
      </Helmet>
      <StyledLayout>
        <StyledLayoutHeader>
          <Row>
            <StyledLogoCol lg={3} md={6}>
              <img src="/assets/images/logo.svg" />
            </StyledLogoCol>
            <StyledColRight lg={10} offset={6}></StyledColRight>
          </Row>
        </StyledLayoutHeader>
        <StyledLayoutContent>
          <Home language={language} />
        </StyledLayoutContent>
      </StyledLayout>
    </>
  );
};
