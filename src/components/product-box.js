import React from 'react'
import styled from 'styled-components'

const BoxContainer = styled.div`
  width: 90%;
  margin-left: 5%;
`
const Box = styled.div`
  background: #FFFFFF;
  border: 2.66848px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 13.3424px 13.3424px 53.3697px rgba(77, 0, 180, 0.25), -13.3424px -13.3424px 53.3697px #FFFFFF;
  border-radius: 37.3588px;
  text-align: center;
  padding: 40px;
  position: relative;

  img {
    position: relative;

    height: 130px;

    @media (max-width: 510px) {
      height: 60px;
    }
  }
`
const StyledTitle = styled.div`
  color: #6700B4;
  margin-top: 35px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
`

export default ({ image, title, link }) => {
  return (
    <BoxContainer>
      <a href={link}>
        <Box>
          <img src={image} alt={'N/A'}/>
        </Box>
      </a>
      <StyledTitle>{title}</StyledTitle>
    </BoxContainer>
  )
}
