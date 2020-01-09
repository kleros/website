import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: 90%;
  margin-left: 5%;
`;
const Box = styled.div`
  background: rgba(144, 19, 254, 0.21);
  border-radius: 37.3588px;
  text-align: center;
  padding: 6rem;
  margin: 6rem 0px;

  img {
    position: relative;
  }

  @media (max-width: 510px) {
  }
`;
const StyledTitle = styled.div`
  color: #ffffff;
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  text-align: center;
`;
const StyledSubtext = styled.div`
  color: #d8b6ff;
  font-size: 16px;
  margin: 1.5rem 0px 6rem 0px;
  text-align: center;
`;

export default ({ image, title, subtext, button }) => {
  return (
    <BoxContainer>
      <Box>
        <img src={image} alt={"N/A"} />
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtext>{subtext}</StyledSubtext>
        {button}
      </Box>
    </BoxContainer>
  );
};
