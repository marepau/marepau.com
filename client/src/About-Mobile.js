import React, {Link} from 'react'
import styled from 'styled-components'
import selfie from './assets/selfie.png'
import cv from './assets/MP_2020ptr.pdf'
// import albers from './assets/albers.jpg'
// import cv from './assets/MP_2020ptr.pdf'


const ProjectsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  flex-flow: column-wrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: -1;
  top: 0;
`;

const SelfPortrait = styled.div`
  width: 76%;
  height: 50%;
  display: flex;
  overflow: hidden;
`;

const RightLayout = styled.div`
  width: 85%;
  height: 50vh;
  display: flex;
  margin: 15px;
  flex-direction: column;
  padding: 15px;
  justify-content: space-around;
`;
const Bio = styled.div`
  display: flex;
  text-align: justify;
  justify-content: space-between;
  font-family: 'Open Sans',sans-serif;
  align-text: center;
`;

function AboutMobile(){
  return(
    <ProjectsContainer>
      <SelfPortrait>
        <img src={selfie}></img>
      </SelfPortrait>
      <RightLayout>
      <Bio>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Before Grace Hopper I was lost. I was weaving on the coast-- the edge.
      </Bio>
      <a href="/MP_2020ptr.pdf" download={cv}>
        > Download my cv!
      </a>
      </RightLayout>

    </ProjectsContainer>
  )
}

export default AboutMobile
