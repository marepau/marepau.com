import React from 'react'
import styled, { keyframes } from 'styled-components'
import sheep from './assets/bvdgp_1.mp4'
import microchip from './assets/p87fc.mp4'


const MainBackground = styled.div`
  background color: rgba(0, 0, 0, 0);
  height: 85vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  `;

const PlayerContainer = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
`;
const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


const BottomCenter = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  padding-bottom: 60px;
  font-family: 'Open Sans', sans-serif;
`;




function MainMobile(){

  return (
    <MainBackground>
      <PlayerContainer>
      <PlayerWrapper>
        <video width="85%" autoPlay={true} muted loop>
            <source type="video/mp4" src= { sheep }/>
            Your browser does not support the video tag.
        </video>
      </PlayerWrapper>
      <PlayerWrapper>
        <video width="85%" autoPlay={true} muted loop>
          <source type="video/mp4" src= {microchip}/>
        </video>
      </PlayerWrapper>
      </PlayerContainer>
        <BottomCenter>Fiber Artist & Software Engineer</BottomCenter>
    </MainBackground>
  )
}

export default MainMobile
