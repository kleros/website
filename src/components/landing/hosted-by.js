import React from "react";
import styled from "styled-components";
import ThomsonReuters from "../../../static/assets/images/thomson-reuters.png";

const HostedByBar = styled.div`
  background: #1e075f;
  width: 100%;
  text-align: center;
`;
const StyledThomsonReuters = styled.img`
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 50%;
  position: relative;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default () => {
  return (
    <HostedByBar>
      <StyledThomsonReuters src={ThomsonReuters} />
    </HostedByBar>
  );
};
