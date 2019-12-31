import 'antd/lib/grid/style/index.css';
import 'antd/lib/icon/style/index.css';
import { Col, Layout, Row } from "antd";
import { Helmet } from "react-helmet";
import Home from "./home";
import React, { Component } from "react";
import { ReactComponent as Logo } from "../../../static/assets/images/logo.svg";
import ReactDOM from "react-dom";
import styled from "styled-components";
import media from "styled-media-query";
import text from "./translations";
import Dropdown from '../../components/dropdown'

const StyledLayoutContent = styled(Layout.Content)`
  background: #1E075F;
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
  return language;
};

const LanguageSelector = ({ setLanguage, currentLanguage }) => {};

class Landing extends Component {
  constructor(props) {
    super(props)
    // Hack to get language in path
    const selectedLanguage = window.location.pathname.split('/')[1]
    this.state = {
      language: text[selectedLanguage] ? selectedLanguage : 'en'
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Kleros</title>
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
              <StyledColRight lg={10} offset={6}>
              </StyledColRight>
            </Row>
          </StyledLayoutHeader>
          <StyledLayoutContent>
            <Home language={this.state.language} />
          </StyledLayoutContent>
        </StyledLayout>
      </>
    );
  }

}

export default Landing
