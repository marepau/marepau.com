import React from 'react'
import styled, { keyframes } from 'styled-components'


const FooterContainer = styled.div`
  postion: relative;
  // min-height: 100vh;
`;

const MenuLink = styled.a`
  text-decoration: underlined;
  color: black;
  &:hover {
    color: #B2DFB2;
  }
`;

const TextWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  bottom: 0;
  // position: -webkit-sticky;
  // position: sticky;
  width: 100%;
  clear: both;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const BottomSides = styled.div`
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
`;

function Footer(){

  return(
    <FooterContainer>
      <TextWrapper>
        <BottomSides>
          <MenuLink href="https://www.instagram.com/mare.pau">Instagram</MenuLink>
        </BottomSides>
        <BottomSides>
          <MenuLink href="/linkedin">LinkedIn</MenuLink>
        </BottomSides>
      </TextWrapper>
    </FooterContainer>
  )
}

export default Footer
