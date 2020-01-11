import React from "react";
import styled from "styled-components";

const StyledCountdownBox = styled.div`
  background: linear-gradient(207.59deg, #4d00b4 13.99%, #9013fe 84.14%);
  border: 3px solid #d09cff;
  box-sizing: border-box;
  box-shadow: 0px 12px 90px #9013fe;
  border-radius: 12px;
  padding-bottom: 2.5rem;
`;
const StyledNumber = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 96px;
  line-height: 131px;
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 75px;
  }

  @media (max-width: 767px) {
    font-size: 96px;
  }
`;
const StyledFinishedNumber = styled(StyledNumber)`
  color: #D50cf6;
`;
const StyledTitle = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;
const StyledFinishedTitle = styled(StyledTitle)`
`;

export default ({ number, title, finished }) => {
  return (
    <StyledCountdownBox>
      { finished ? (
        <>
          <StyledFinishedNumber>{number}</StyledFinishedNumber>
          <StyledFinishedTitle>{title}</StyledFinishedTitle>
        </>
      ) : (
        <>
          <StyledNumber>{number}</StyledNumber>
          <StyledTitle>{title}</StyledTitle>
        </>
      )}
    </StyledCountdownBox>
  );
};
