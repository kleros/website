import React from "react";
import styled from "styled-components";
import ThomsonReuters from "../assets/images/thomson-reuters.png";

const HostedByBar = styled.div`
  background: #1e075f;
  width: 100%;
  height: 175px;
  text-align: center;
`;
const StyledThomsonReuters = styled.img`
  margin-top: 55px;
  width: 50%;
  position: relative;
`;

export default () => {
  return (
    <HostedByBar>
      <StyledThomsonReuters src={ThomsonReuters} />
    </HostedByBar>
  );
};
