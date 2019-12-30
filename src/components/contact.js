import React from "react";
import styled from "styled-components";
import text from "../text";

const ContactBox = styled.div`
  background: rgba(144, 19, 254, 0.21);
  border-radius: 37.3588px;
  margin: 300px 8% 100px 8%;
  padding: 60px 18%;
`;
const StyledHeading = styled.div`
  font-weight: 600;
  font-size: 54px;
  line-height: 74px;
  text-align: center;
  color: #ffffff;
`;
const StyledSubtext = styled.div`
  color: #d8b6ff;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`;

export default ({ language }) => {
  const heading = text[language].home.contact.heading;
  const subtext = text[language].home.contact.subtext;

  return (
    <ContactBox>
      <StyledHeading>{heading}</StyledHeading>
      <StyledSubtext>{subtext}</StyledSubtext>
    </ContactBox>
  );
};
